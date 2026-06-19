// Ward Mastery — Case Vault Module
// Save, load, view, edit, delete clinical cases via localStorage

// ════════════════════════════════════════════════════════════
// CASE VAULT — JavaScript Module
// localStorage key: 'wm_cases'
// Each case follows the structure defined in the feature spec
// ════════════════════════════════════════════════════════════

const CV_STORAGE_KEY = 'wm_cases';

// ── System tag map: DDx disease name → system label ──────────
// Auto-derived from DDX_DB at runtime
function getSystemForDisease(diseaseName) {
  const entry = DDX_DB.find(d => d.name === diseaseName);
  if (!entry) return 'Other';
  const sysMap = {
    'Resp': 'Respiratory', 'CVS': 'Cardiac', 'GIT': 'GIT',
    'Hepato': 'Hepatology', 'Renal': 'Renal', 'Rheum': 'Rheumatology',
    'Neuro': 'Neurology', 'Endocrine': 'Endocrine', 'Haem': 'Haematology',
    'Derm': 'Dermatology', 'Infect': 'Infectious', 'Obs': 'Obstetric'
  };
  return sysMap[entry.system] || entry.system || 'Other';
}

// History categories (from WEIGHTS map)
const HISTORY_CATS = new Set(['cc','hpi','past','drug','social']);
// Examination categories
const EXAM_CATS = new Set([
  'appear','built','nutr','decu','coop','anemia','jaun','cyan','club',
  'koil','leuk','edema','jvp','thy','pig','vitals','other-gen',
  'resp','cvs','abd','renal','rheum','neuro'
]);

// ── loadCases: read from localStorage safely ─────────────────
function loadCases() {
  try {
    const raw = localStorage.getItem(CV_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    // Corrupted data — return empty rather than crashing
    console.warn('Case Vault: localStorage data corrupted, returning empty.', e);
    return [];
  }
}

// ── saveCasesToStorage: write array back to localStorage ──────
function saveCasesToStorage(cases) {
  try {
    localStorage.setItem(CV_STORAGE_KEY, JSON.stringify(cases));
  } catch (e) {
    alert('Could not save case — storage may be full.');
    console.error('Case Vault: localStorage write failed', e);
  }
}

// ── openSaveModal: show modal, prefill Final Diagnosis ────────
function openSaveModal() {
  // Prefill final diagnosis with DDx#1 name if available
  const prefill = lastDDxResults.length > 0 ? lastDDxResults[0].name : '';
  document.getElementById('cv-final-dx').value = prefill;
  document.getElementById('cv-title').value = '';
  document.getElementById('cv-notes').value = '';
  document.getElementById('cv-overlay').classList.add('open');
  document.getElementById('cv-title').focus();
}

// ── closeSaveModal: hide modal ────────────────────────────────
function closeSaveModal() {
  document.getElementById('cv-overlay').classList.remove('open');
}

// ── confirmSaveCase: validate, capture state, save ────────────
function confirmSaveCase() {
  const title = document.getElementById('cv-title').value.trim();
  if (!title) {
    alert('Please enter a Case Title.');
    document.getElementById('cv-title').focus();
    return;
  }

  // Auto-capture: split selected Map into history vs examination findings
  const selectedHistory = [];
  const selectedExamination = [];

  selected.forEach((cat, label) => {
    if (HISTORY_CATS.has(cat)) {
      selectedHistory.push(label);
    } else if (EXAM_CATS.has(cat)) {
      selectedExamination.push(label);
    }
  });

  // Chief complaint = cc-category findings joined
  const chiefComplaint = [...selected.entries()]
    .filter(([, cat]) => cat === 'cc')
    .map(([label]) => label)
    .join(', ');

  // Capture generated DDx (name + score + matched findings)
  const generatedDDX = lastDDxResults.map((d, i) => ({
    rank: i + 1,
    name: d.name,
    score: d.score,
    strongMatched: d.strongMatched || [],
    moderateMatched: d.moderateMatched || [],
    weakMatched: d.weakMatched || []
  }));

  // Auto-detect system tag from DDx#1
  const systemTag = generatedDDX.length > 0
    ? getSystemForDisease(generatedDDX[0].name)
    : 'Other';

  // Build case object
  const newCase = {
    id: Date.now().toString(),
    title: title,
    date: new Date().toISOString(),
    systemTag: systemTag,
    chiefComplaint: chiefComplaint,
    selectedHistory: selectedHistory,
    selectedExamination: selectedExamination,
    generatedDDX: generatedDDX,
    finalDiagnosis: document.getElementById('cv-final-dx').value.trim(),
    personalNotes: document.getElementById('cv-notes').value.trim()
  };

  // Prepend to cases array (newest first)
  const cases = loadCases();
  cases.unshift(newCase);
  saveCasesToStorage(cases);

  closeSaveModal();
  alert(`✅ Case "${title}" saved successfully!`);
}

// ── deleteCase: remove by id ──────────────────────────────────
function deleteCase(id) {
  if (!confirm('Delete this case permanently? This cannot be undone.')) return false;
  const cases = loadCases().filter(c => c.id !== id);
  saveCasesToStorage(cases);
  return true;
}

// ── deleteCaseFromDetail: delete current detail case ─────────
function deleteCaseFromDetail() {
  if (!currentDetailCaseId) return;
  if (deleteCase(currentDetailCaseId)) {
    showCasesList();
    renderCases();
  }
}

// ── exportCases: download all cases as JSON ───────────────────
function exportCases() {
  const cases = loadCases();
  if (cases.length === 0) {
    alert('No saved cases to export.');
    return;
  }
  const blob = new Blob([JSON.stringify(cases, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'wardmastery_cases.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ── renderCases: show list with stats, search, filters ───────
// activeSystemFilter: currently selected system pill ('All' or a system name)
let activeSystemFilter = 'All';

function renderCases() {
  const allCases = loadCases();
  const listEl   = document.getElementById('cases-list');
  if (!listEl) return;

  // ── 1. STATS STRIP ────────────────────────────────────────
  const statsEl = document.getElementById('cv-stats-strip');
  if (statsEl) {
    if (allCases.length === 0) {
      statsEl.innerHTML = '';
    } else {
      // Most common final diagnosis
      const dxCount = {};
      allCases.forEach(c => {
        if (c.finalDiagnosis) {
          dxCount[c.finalDiagnosis] = (dxCount[c.finalDiagnosis] || 0) + 1;
        }
      });
      const topDx = Object.entries(dxCount).sort((a,b) => b[1]-a[1])[0];

      // Count by system
      const sysCounts = {};
      allCases.forEach(c => {
        const s = c.systemTag || 'Other';
        sysCounts[s] = (sysCounts[s] || 0) + 1;
      });
      const topSys = Object.entries(sysCounts).sort((a,b) => b[1]-a[1])[0];

      statsEl.innerHTML = `
        <div class="cv-stat-box">
          <div class="cv-stat-num">${allCases.length}</div>
          <div class="cv-stat-label">Total Cases</div>
        </div>
        <div class="cv-stat-box">
          <div class="cv-stat-num">${Object.keys(sysCounts).length}</div>
          <div class="cv-stat-label">Systems</div>
        </div>
        <div class="cv-stat-box" style="flex:2;min-width:120px;">
          <div class="cv-stat-num" style="font-size:13px;">${topDx ? topDx[0] : '—'}</div>
          <div class="cv-stat-label">Most Common Dx</div>
        </div>
        <div class="cv-stat-box" style="flex:2;min-width:120px;">
          <div class="cv-stat-num" style="font-size:13px;">${topSys ? topSys[0] : '—'}</div>
          <div class="cv-stat-label">Top System</div>
        </div>`;
    }
  }

  // ── 2. SYSTEM FILTER PILLS ────────────────────────────────
  const filtersEl = document.getElementById('cv-filters');
  if (filtersEl) {
    if (allCases.length === 0) {
      filtersEl.innerHTML = '';
    } else {
      // Collect unique system tags
      const systems = ['All', ...new Set(allCases.map(c => c.systemTag || 'Other').sort())];
      filtersEl.innerHTML = systems.map(s => {
        const count = s === 'All' ? allCases.length
          : allCases.filter(c => (c.systemTag || 'Other') === s).length;
        const isActive = activeSystemFilter === s;
        return `<button class="cv-filter-btn ${isActive ? 'active' : ''}"
          onclick="setSystemFilter('${s}')">${s} (${count})</button>`;
      }).join('');
    }
  }

  // ── 3. APPLY SEARCH + FILTER ─────────────────────────────
  const query = (document.getElementById('cv-search')?.value || '').toLowerCase().trim();

  let filtered = allCases;

  // Apply system filter
  if (activeSystemFilter !== 'All') {
    filtered = filtered.filter(c => (c.systemTag || 'Other') === activeSystemFilter);
  }

  // Apply search query (title + final diagnosis + chief complaint)
  if (query) {
    filtered = filtered.filter(c =>
      (c.title || '').toLowerCase().includes(query) ||
      (c.finalDiagnosis || '').toLowerCase().includes(query) ||
      (c.chiefComplaint || '').toLowerCase().includes(query)
    );
  }

  // ── 4. RESULTS COUNT ─────────────────────────────────────
  const countEl = document.getElementById('cv-results-count');
  if (countEl) {
    if (allCases.length === 0) {
      countEl.textContent = '';
    } else if (query || activeSystemFilter !== 'All') {
      countEl.textContent = `Showing ${filtered.length} of ${allCases.length} cases`;
    } else {
      countEl.textContent = `${allCases.length} saved case${allCases.length !== 1 ? 's' : ''}`;
    }
  }

  // ── 5. RENDER CASE CARDS ─────────────────────────────────
  if (allCases.length === 0) {
    listEl.innerHTML = `<div class="cv-empty">
      📂 No saved cases yet.<br>
      <span style="font-size:11px;">Generate a DDx and tap 💾 Save Case to begin.</span>
    </div>`;
    return;
  }

  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="cv-empty">
      🔍 No cases match your search.<br>
      <span style="font-size:11px;">Try a different keyword or clear the filter.</span>
    </div>`;
    return;
  }

  listEl.innerHTML = filtered.map(c => {
    const dateStr = new Date(c.date).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
    const dxBadge = c.finalDiagnosis
      ? `<span class="case-card-dx">Dx: ${c.finalDiagnosis}</span>` : '';
    const sysTag = c.systemTag
      ? `<span class="case-card-dx" style="background:rgba(26,138,58,0.1);border-color:rgba(26,138,58,0.25);color:var(--accent2);margin-left:4px;">${c.systemTag}</span>` : '';
    return `
    <div class="case-card" onclick="viewCase('${c.id}')">
      <div class="case-card-title">${c.title}</div>
      <div class="case-card-meta">📅 ${dateStr} · ${c.generatedDDX.length} DDx generated</div>
      <div style="margin-top:6px;">${dxBadge}${sysTag}</div>
    </div>`;
  }).join('');
}

// ── setSystemFilter: update active filter and re-render ───────
function setSystemFilter(sys) {
  activeSystemFilter = sys;
  renderCases();
}

// ── viewCase: show full detail of one case ────────────────────
function viewCase(id) {
  const cases = loadCases();
  const c = cases.find(x => x.id === id);
  if (!c) return;

  currentDetailCaseId = id;

  // Populate detail fields
  const dateStr = new Date(c.date).toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
  document.getElementById('cv-detail-title').textContent = c.title;
  document.getElementById('cv-detail-date').textContent = '📅 ' + dateStr;
  document.getElementById('cv-detail-dx').textContent = c.finalDiagnosis || '—';
  document.getElementById('cv-detail-cc').textContent = c.chiefComplaint || '—';

  // History findings as pills
  const histEl = document.getElementById('cv-detail-history');
  histEl.innerHTML = c.selectedHistory.length > 0
    ? c.selectedHistory.map(f => `<span class="case-finding-pill">${f}</span>`).join('')
    : '<span style="color:var(--muted);font-size:12px;">None recorded</span>';

  // Examination findings as pills
  const examEl = document.getElementById('cv-detail-exam');
  examEl.innerHTML = c.selectedExamination.length > 0
    ? c.selectedExamination.map(f => `<span class="case-finding-pill">${f}</span>`).join('')
    : '<span style="color:var(--muted);font-size:12px;">None recorded</span>';

  // DDx list with "View Full Card" button
  const ddxEl = document.getElementById('cv-detail-ddx');
  ddxEl.innerHTML = c.generatedDDX.length > 0
    ? c.generatedDDX.map(d => `
      <div class="case-ddx-item">
        <span class="case-ddx-rank">DDx ${d.rank}</span>
        ${d.name}
        <span style="color:var(--muted);font-size:10px;margin-left:4px;">${d.score}pts</span>
        <button onclick="openDiseaseFromDDx(this)" data-disease="${d.name}"
          style="display:block;margin-top:6px;width:100%;padding:6px;background:linear-gradient(135deg,#1a6ebd,#2a7fd4);color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;">
          📚 View Full Disease Card →
        </button>
      </div>`).join('')
    : '<span style="color:var(--muted);font-size:12px;">None recorded</span>';

  // Notes
  document.getElementById('cv-detail-notes').textContent = c.personalNotes || 'No notes added.';

  // Switch views
  document.getElementById('cases-list-view').style.display = 'none';
  const detailEl = document.getElementById('cases-detail-view');
  detailEl.classList.add('open');
}

// ── showCasesList: go back to list ────────────────────────────
function showCasesList() {
  document.getElementById('cases-list-view').style.display = 'block';
  document.getElementById('cases-detail-view').classList.remove('open');
  currentDetailCaseId = null;
  renderCases();
}

// ── migrateCases: back-fill systemTag for cases saved before
// this feature existed — runs once on page load ───────────────
function migrateCases() {
  const cases = loadCases();
  let changed = false;
  cases.forEach(c => {
    if (!c.systemTag && c.generatedDDX && c.generatedDDX.length > 0) {
      c.systemTag = getSystemForDisease(c.generatedDDX[0].name);
      changed = true;
    }
  });
  if (changed) saveCasesToStorage(cases);
}

// Run migration immediately on script load
migrateCases();

// ── openEditModal: pre-fill and show edit modal ───────────────
function openEditModal() {
  if (!currentDetailCaseId) return;
  const cases = loadCases();
  const c = cases.find(x => x.id === currentDetailCaseId);
  if (!c) return;

  document.getElementById('cv-edit-title').value   = c.title || '';
  document.getElementById('cv-edit-final-dx').value = c.finalDiagnosis || '';
  document.getElementById('cv-edit-notes').value    = c.personalNotes || '';
  document.getElementById('cv-edit-overlay').classList.add('open');
  document.getElementById('cv-edit-title').focus();
}

// ── closeEditModal: hide edit modal ──────────────────────────
function closeEditModal() {
  document.getElementById('cv-edit-overlay').classList.remove('open');
}

// ── confirmEditCase: validate and update case in localStorage ─
function confirmEditCase() {
  const title = document.getElementById('cv-edit-title').value.trim();
  if (!title) {
    alert('Case Title cannot be empty.');
    document.getElementById('cv-edit-title').focus();
    return;
  }

  const cases = loadCases();
  const idx = cases.findIndex(x => x.id === currentDetailCaseId);
  if (idx === -1) { closeEditModal(); return; }

  // Update only the editable fields
  cases[idx].title          = title;
  cases[idx].finalDiagnosis = document.getElementById('cv-edit-final-dx').value.trim();
  cases[idx].personalNotes  = document.getElementById('cv-edit-notes').value.trim();

  saveCasesToStorage(cases);
  closeEditModal();

  // Refresh the detail view to show updated values
  viewCase(currentDetailCaseId);
}

// ── Close edit modal on overlay background tap ────────────────
document.getElementById('cv-edit-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeEditModal();
});

// ── Close save modal on overlay background tap ────────────────
document.getElementById('cv-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeSaveModal();
});
