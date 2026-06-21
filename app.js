// Ward Mastery — Main Application Logic
// State, UI functions, DDx engine, Library, Questions

// ── STATE ──────────────────────────────────────────────────
// selected: Map of { label → category }
const selected = new Map();

// ── CASE VAULT STATE ───────────────────────────────────────
// Stores the last generated DDx results for auto-capture when saving
let lastDDxResults = [];
// Stores the currently viewed case ID in detail view
let currentDetailCaseId = null;

// Weight per category
const WEIGHTS = {
  cc:        3,    // Chief Complaints
  hpi:       2,    // History of Present Illness
  past:      1.5,  // Past Medical History
  drug:      1.5,  // Drug History
  social:    1.5,  // Social / Personal / Family History
  // General Examination (all sub-groups)
  appear:    3, built:  3, nutr:  3, decu:  3, coop:  3,
  anemia:    3, jaun:   3, cyan:  3, club:  3,
  koil:      3, leuk:   3, edema: 3, jvp:   3,
  thy:       3, pig:    3, vitals:3, 'other-gen': 3,
  // Systemic Examinations
  resp:      2, cvs:    2, abd:   2,
  renal:     2, rheum:  2, neuro: 2,
};

function tog(btn, cat) {
  btn.classList.toggle('on');
  const label = btn.textContent.trim();
  if (btn.classList.contains('on')) {
    selected.set(label, cat);
  } else {
    selected.delete(label);
  }
  updateBadge();
  updateSummary();
  updateTabDots();
}

function updateBadge() {
  const badge = document.getElementById('totalBadge');
  const count = selected.size;
  badge.textContent = count;
  count > 0 ? badge.classList.add('show') : badge.classList.remove('show');
}

function updateSummary() {
  const bar = document.getElementById('summary-hx');
  if (!bar) return;
  if (selected.size === 0) {
    bar.innerHTML = '<span style="color:var(--muted);font-size:11px;">No items selected yet…</span>';
    return;
  }
  const pills = [...selected.keys()].map(s => `<span class="summary-pill">${s}</span>`).join('');
  bar.innerHTML = pills;
}

function updateTabDots() {
  const tabSections = ['hx','gpe','resp','cvs','abd','renal','rheum','neuro'];
  tabSections.forEach(sec => {
    const dot = document.getElementById('dot-'+sec);
    if (!dot) return;
    const section = document.getElementById(sec);
    if (!section) return;
    const btns = section.querySelectorAll('.btn.on');
    btns.length > 0 ? dot.classList.add('show') : dot.classList.remove('show');
  });
}

function showTab(id, tabEl) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  tabEl.classList.add('active');
  if (id === 'lib') initLib();
}

function resetAll() {
  selected.clear();
  document.querySelectorAll('.btn.on').forEach(b => b.classList.remove('on'));
  document.getElementById('results-section').style.display = 'none';
  document.getElementById('btn-save-case').style.display = 'none';
  lastDDxResults = [];
  updateBadge();
  updateSummary();
  updateTabDots();
}

// ── DDX ENGINE v2 — WEIGHTED (Strong/Moderate/Weak/Negative/Danger) ────────
// strong   → +4 pts  (highly specific, points clearly to this disease)
// moderate → +2 pts  (suggestive but not definitive)
// weak     → +1 pt   (non-specific, supportive only)
// negative → −3 pts  (absence of this finding reduces likelihood)
// danger   → 🚨 triggers Emergency Alert regardless of score

// DDX_DB loaded from data/ddx.js


// ── DIAGNOSIS FUNCTION v2 — WEIGHTED ENGINE ───────────────
// strong match   → +4 pts  (highly specific finding)
// moderate match → +2 pts  (suggestive but not definitive)
// weak match     → +1 pt   (non-specific / supportive)
// negative match → −3 pts  (absence of expected finding lowers probability)
// danger match   → 🚨 Emergency alert regardless of score

function diagnose() {
  if (selected.size === 0) {
    alert("Please select at least some findings before generating a diagnosis.");
    return;
  }

  const selKeys = new Set(selected.keys());

  const scored = DDX_DB.map(d => {
    let score = 0;
    const strongMatched   = [];
    const moderateMatched = [];
    const weakMatched     = [];
    const negativeMatched = [];
    const dangerMatched   = [];

    (d.strong   || []).forEach(k => { if (selKeys.has(k)) { score += 4; strongMatched.push(k);   }});
    (d.moderate || []).forEach(k => { if (selKeys.has(k)) { score += 2; moderateMatched.push(k); }});
    (d.weak     || []).forEach(k => { if (selKeys.has(k)) { score += 1; weakMatched.push(k);     }});
    (d.negative || []).forEach(k => { if (selKeys.has(k)) { score -= 3; negativeMatched.push(k); }});
    (d.danger   || []).forEach(k => { if (selKeys.has(k)) { dangerMatched.push(k); }});

    const totalMatched = strongMatched.length + moderateMatched.length + weakMatched.length;
    return { ...d, score, strongMatched, moderateMatched, weakMatched, negativeMatched, dangerMatched, totalMatched };
  })
  .filter(d => d.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 5);

  const resultsEl     = document.getElementById('results-body');
  const subtitleEl    = document.getElementById('results-subtitle');
  const resultsSection = document.getElementById('results-section');

  subtitleEl.textContent = `${selected.size} finding(s) selected`;

  if (scored.length === 0) {
    resultsEl.innerHTML = `<div class="no-result">⚠️ No matching diagnoses found. Try selecting more findings.</div>`;
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const rankColors = ['rank-1','rank-2','rank-3','rank-4','rank-5'];

  resultsEl.innerHTML = scored.map((d, i) => {
    const sysTags = d.tags.map(t => `<span class="ddx-tag">${t}</span>`).join('');

    // Danger banner
    const dangerBanner = d.dangerMatched.length > 0
      ? `<div style="background:#7f1d1d;border:1px solid #ef4444;border-radius:8px;padding:8px 12px;margin-bottom:10px;font-size:12px;font-weight:700;color:#fca5a5;">
           🚨 DANGER SIGNS PRESENT — Consider Emergency Management<br>
           <span style="font-weight:400;font-size:11px;color:#fecaca;">${d.dangerMatched.join(' · ')}</span>
         </div>`
      : '';

    // Matched findings display
    const strongTags   = d.strongMatched.map(k =>
      `<span class="ddx-tag match" style="background:#7c2d12;border-color:#ea580c;color:#fed7aa;">🔴 ${k} <span style="opacity:0.8;font-size:9px;">(+4)</span></span>`).join('');
    const moderateTags = d.moderateMatched.map(k =>
      `<span class="ddx-tag match" style="background:#1e3a5f;border-color:#3b82f6;color:#bfdbfe;">🔵 ${k} <span style="opacity:0.8;font-size:9px;">(+2)</span></span>`).join('');
    const weakTags     = d.weakMatched.map(k =>
      `<span class="ddx-tag match" style="background:#1e293b;border-color:#475569;color:#94a3b8;">⚪ ${k} <span style="opacity:0.8;font-size:9px;">(+1)</span></span>`).join('');
    const negativeTags = d.negativeMatched.map(k =>
      `<span class="ddx-tag match" style="background:#14532d;border-color:#16a34a;color:#bbf7d0;">➖ ${k} <span style="opacity:0.8;font-size:9px;">(−3)</span></span>`).join('');

    // Legend row (only if there are matches to show)
    const legendRow = (d.strongMatched.length || d.moderateMatched.length || d.weakMatched.length || d.negativeMatched.length)
      ? `<div style="font-size:10px;color:var(--muted);margin-bottom:5px;">
           🔴 Strong (+4) &nbsp; 🔵 Moderate (+2) &nbsp; ⚪ Weak (+1) &nbsp; ➖ Negative (−3)
         </div>` : '';

    return `
    <div class="ddx-card ${rankColors[i]}">
      ${dangerBanner}
      <div class="ddx-head">
        <div class="ddx-rank">DDx ${i+1}</div>
        <div class="ddx-name">${d.name}</div>
        <div class="ddx-score" style="background:${i===0?'#7c2d12':i===1?'#1e3a5f':i===2?'#2d1b69':i===3?'#14532d':'#1e293b'};color:${i===0?'#fca5a5':i===1?'#bfdbfe':i===2?'#ddd6fe':i===3?'#bbf7d0':'#94a3b8'};border:1px solid ${i===0?'#ef4444':i===1?'#3b82f6':i===2?'#8b5cf6':i===3?'#22c55e':'#475569'};font-size:12px;font-weight:800;padding:4px 12px;border-radius:8px;white-space:nowrap;">
          DDx ${i+1} · ${d.score}pts
        </div>
      </div>
      <div style="margin-bottom:6px;font-size:10px;color:var(--muted);">${d.totalMatched} finding(s) matched</div>
      <div class="ddx-tags">${sysTags}</div>
      ${legendRow}
      <div class="ddx-tags">${strongTags}${moderateTags}${weakTags}${negativeTags}</div>
      <div class="ddx-hint">💡 ${d.hint}</div>
      <button onclick="openDiseaseFromDDx(this)" data-disease="${d.name}" 
        style="margin-top:8px;width:100%;background:linear-gradient(135deg,#1a6ebd,#2a7fd4);color:#fff;border:none;border-radius:8px;padding:8px 12px;font-size:11px;font-weight:700;cursor:pointer;letter-spacing:0.3px;">
        📚 View Full Disease Card →
      </button>
    </div>`;
  }).join('');

  resultsSection.style.display = 'block';
  resultsSection.scrollIntoView({ behavior: 'smooth' });

  // ── CASE VAULT: store results + show Save button ──────────
  lastDDxResults = scored;
  document.getElementById('btn-save-case').style.display = 'block';
}


// ── DDX → LIBRARY LINK ─────────────────────────────────────
function openDiseaseFromDDx(btn) {
  const ddxName = btn.getAttribute('data-disease');

  // Switch to lib tab WITHOUT touching the search box
  const libTab = document.querySelector('.tab[onclick*="lib"]');
  if (libTab) { showTab('lib', libTab); libTab.classList.add('active'); }

  // Clear search so ALL diseases are shown
  const searchEl = document.getElementById('libSearch');
  if (searchEl) searchEl.value = '';

  // Reset sys filter to ALL
  currentSysFilter = 'ALL';
  document.querySelectorAll('.lib-filter').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('.lib-filter');
  if (allBtn) allBtn.classList.add('active');

  // Render full list, then find best match
  setTimeout(() => {
    renderLib();
    setTimeout(() => {
      const dn = normName(ddxName);
      // Extract key words (3+ chars) from DDx name for fuzzy matching
      const dnWords = ddxName.toLowerCase().replace(/[()\/]/g,' ').split(/\s+/).filter(w=>w.length>=3);

      const cards = document.querySelectorAll('#lib-cards .disease-card');
      let bestCard = null;
      let bestScore = -1;

      cards.forEach(card => {
        const nameEl = card.querySelector('.disease-name');
        if (!nameEl) return;
        const libName = nameEl.textContent.trim();
        const ln = normName(libName);
        const lnWords = libName.toLowerCase().replace(/[()\/]/g,' ').split(/\s+/).filter(w=>w.length>=3);

        let sc = 0;
        // Exact normalised match
        if (ln === dn) { sc = 1000; }
        // One contains the other fully
        else if (ln.includes(dn) || dn.includes(ln)) { sc = 500; }
        else {
          // Word overlap scoring
          dnWords.forEach(w => {
            if (lnWords.some(lw => lw.includes(w) || w.includes(lw))) sc += 10;
          });
          // Shared 5-char prefix
          if (dn.length>=5 && ln.length>=5 && dn.slice(0,5)===ln.slice(0,5)) sc += 20;
        }
        if (sc > bestScore) { bestScore = sc; bestCard = card; }
      });

      if (bestCard) {
        if (!bestCard.classList.contains('open')) bestCard.classList.add('open');
        setTimeout(() => bestCard.scrollIntoView({ behavior:'smooth', block:'center' }), 80);
      }
    }, 120);
  }, 80);
}


// ── DISEASE CARD INTERNAL TABS ──────────────────────────────
function switchDcTab(e, cardId, panel) {
  e.stopPropagation();
  const card = document.getElementById(cardId);
  if (!card) return;
  card.querySelectorAll('.dc-tab').forEach(t => t.classList.remove('active'));
  card.querySelectorAll('.dc-panel').forEach(p => p.classList.remove('active'));
  e.target.classList.add('active');
  const panelEl = document.getElementById(cardId + '-' + panel);
  if (panelEl) panelEl.classList.add('active');
}


// ── HX SYMPTOM NAV + SEARCH ─────────────────────────────────
function hxJump(id) {
  const el = document.getElementById(id);
  if (!el) return;
  // Make sure hx tab is active
  const hxTab = document.querySelector('.tab[onclick*="hx"]');
  if (hxTab) showTab('hx', hxTab);
  setTimeout(() => {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

function hxSearchFn(query) {
  const q = query.trim().toLowerCase();
  const hxPanel = document.getElementById('hx');
  if (!hxPanel) return;
  const btns = hxPanel.querySelectorAll('.btn');
  if (!q) {
    btns.forEach(b => { b.classList.remove('search-match','search-hidden'); });
    return;
  }
  btns.forEach(b => {
    const txt = b.textContent.trim().toLowerCase();
    if (txt.includes(q)) {
      b.classList.add('search-match');
      b.classList.remove('search-hidden');
    } else {
      b.classList.add('search-hidden');
      b.classList.remove('search-match');
    }
  });
}

function hxClearSearch() {
  const el = document.getElementById('hxSearch');
  if (el) el.value = '';
  hxSearchFn('');
}

// ══════════════════════════════════════════════════════
// ── DISEASE LIBRARY DATA ──────────────────────────────
// ══════════════════════════════════════════════════════
// DISEASE_LIB loaded from data/diseases.js

// ── LIBRARY FUNCTIONS ──────────────────────────────────
let currentSysFilter = 'ALL';
let libInitialized = false;

function initLib() {
  if (libInitialized) return;
  libInitialized = true;
  renderLib();
}

function renderLib() {
  const search = document.getElementById('libSearch').value.toLowerCase();
  const container = document.getElementById('lib-cards');
  const countEl = document.getElementById('libCount');

  const filtered = DISEASE_LIB.filter(d => {
    const sysMatch = currentSysFilter === 'ALL' || d.sys === currentSysFilter;
    const searchMatch = !search || d.name.toLowerCase().includes(search);
    return sysMatch && searchMatch;
  });

  countEl.textContent = `Showing ${filtered.length} of ${DISEASE_LIB.length} diseases`;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="lib-no-results">No diseases found. Try a different search or filter.</div>`;
    return;
  }

  container.innerHTML = filtered.map((d, i) => {
    const mgmt = findMgmt(d.name);
    const sysEx = SYSEXAM_MAP[d.name] || null;

    const ccHTML = `<ul class="lib-list">${d.cc.map(c=>`<li>${c}</li>`).join('')}</ul>`;

    const genGrid = d.gen.map(g=>`<div class="lib-gen-item pos">${g}</div>`).join('');
    const noteBox = `<div style="font-size:11px;color:var(--muted);line-height:1.6;margin-top:8px;padding:8px 10px;background:#fffbe6;border-left:3px solid var(--warn);border-radius:0 6px 6px 0;">💡 ${d.note}</div>`;
    const genHTML = `<div class="lib-section-title" style="margin-bottom:6px;">General Examination</div><div class="lib-gen-grid">${genGrid}</div>${noteBox}`;

    const sysExHTML = sysEx
      ? `<div class="lib-section-title" style="margin-bottom:6px;">Systemic Examination</div><ul class="lib-list sysex-list">${sysEx.map(f=>`<li>${f}</li>`).join('')}</ul>`
      : `<div class="lib-no-mgmt">Systemic examination findings not yet available.</div>`;

    const mgmtHTML = mgmt ? renderMgmt(mgmt) : `<div class="lib-no-mgmt">📋 Management data not yet available for this disease.</div>`;

    return `
    <div class="disease-card" id="lc-${i}">
      <div class="disease-card-header" onclick="toggleCard('lc-${i}')">
        <span class="disease-sys-badge ${d.sysClass}">${d.sys}</span>
        <span class="disease-name">${d.name}</span>
        ${mgmt ? `<span style="font-size:9px;background:#d4f0dc;color:#0a4020;border-radius:10px;padding:1px 6px;margin-left:2px;flex-shrink:0;">✓ Mgmt</span>` : ''}
        <span class="disease-chevron">▼</span>
      </div>
      <div class="disease-body">
        <div class="dc-tabs">
          <button class="dc-tab active" onclick="switchDcTab(event,'lc-${i}','cc')">📋 Symptoms</button>
          <button class="dc-tab" onclick="switchDcTab(event,'lc-${i}','gen')">🩺 Gen. Exam</button>
          <button class="dc-tab" onclick="switchDcTab(event,'lc-${i}','sysex')">🔬 Sys. Exam</button>
          <button class="dc-tab ${mgmt ? '' : 'dc-tab-dim'}" onclick="switchDcTab(event,'lc-${i}','mgmt')">💊 Mgmt</button>
        </div>
        <div class="dc-panel active" id="lc-${i}-cc">${ccHTML}</div>
        <div class="dc-panel" id="lc-${i}-gen">${genHTML}</div>
        <div class="dc-panel" id="lc-${i}-sysex">${sysExHTML}</div>
        <div class="dc-panel" id="lc-${i}-mgmt">${mgmtHTML}</div>
      </div>
    </div>
  `}).join('');
}

function toggleCard(id) {
  const card = document.getElementById(id);
  card.classList.toggle('open');
}

function filterLib() { renderLib(); }

function filterSys(sys, btn) {
  currentSysFilter = sys;
  document.querySelectorAll('.lib-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderLib();
}

// ==================== QUESTIONS DATA FROM ABM ABDULLAH ====================
const questionsData = {
    "proceed_long_case": {
        label: "📋 Proceed to Long Case",
        subtypes: {
            "Particulars of Patient": {
                icon: "🪪",
                questions: [
                    "Name — full name of the patient",
                    "Age — in completed years",
                    "Sex — male / female",
                    "Religion",
                    "Occupation — exact nature of work",
                    "Income — monthly family income",
                    "Marital status — married / unmarried / widowed / divorced",
                    "Address — present and permanent",
                    "Contact no. — patient's or attendant's",
                    "Date and time of admission",
                    "Mode of admission — self / referred / emergency",
                    "Date and time of examination"
                ]
            },
            "Chief Complaints": {
                icon: "🗣️",
                questions: [
                    "Ask: 'Would you please tell me what's wrong with you?' Or 'Why are you admitted in the hospital?' Or 'What are your presenting problems?'",
                    "Try to elicit the main complaints with their time frame.",
                    "Precise chronology and sequence of events are very important.",
                    "Note the symptom of longest duration first, then others in decreasing order — ending with shortest duration (e.g., fever 6 months, headache 3 months, weakness 1 month)."
                ]
            },
            "History of Present Illness (HPI)": {
                icon: "📝",
                questions: [
                    "Onset — How did it start? When did it start?",
                    "Duration — How long have you been suffering?",
                    "Progression — Is it progressive or static?",
                    "Aggravating factors — What makes it worse?",
                    "Relieving factors — What makes you feel better?",
                    "Anything else — Do you have anything else to mention?",
                    "Ask about important negative history if relevant.",
                    "Are you suffering from diabetes mellitus, hypertension, bronchial asthma or other chronic illness?"
                ]
            },
            "History of Past Illness": {
                icon: "📜",
                questions: [
                    "Any previous diseases — duration, treatment taken, hospitalization?",
                    "History of any operation, injury, trauma or procedures (catheterization, endoscopy, colonoscopy, biopsy)?",
                    "History of any investigations done?",
                    "History of diabetes mellitus, hypertension or other chronic illness?",
                    "Childhood illnesses, birth complications, immunization history, developmental milestones?"
                ]
            },
            "Family History": {
                icon: "👨‍👩‍👧",
                questions: [
                    "Number of family members (parents, spouse, children)?",
                    "Their state of health — 'Are they in good health?' 'Do they have any illness?' (TB, hypertension, DM, dyslipidemia, IHD, thyroid disorder, bronchial asthma, etc.)",
                    "If any death among family members — enquire the cause of death.",
                    "Any hereditary conditions (e.g. thalassemia)? Any consanguinity (marriage among relatives)?",
                    "If X-linked disease suspected — ask specifically about health of maternal uncles."
                ]
            },
            "Personal History": {
                icon: "👤",
                questions: [
                    "Occupation — exact nature of work?",
                    "Marital status?",
                    "Dietary habit?",
                    "Hobby, pet keeping (cows, dog, rabbit, pigeon), any games or entertainment?",
                    "Tea or coffee? Betel nut consumption?",
                    "Smoking — number of sticks daily with duration? Ex-smoker — when stopped, how many sticks? Passive smoking?",
                    "Alcohol — how much and how long? Daily, weekly or occasional? Home or outside?",
                    "Drug abuse including IV drug use, sharing needles? Any dependency?",
                    "Sexual exposure or sexual practice including homosexuality, polygamy?"
                ]
            },
            "Socioeconomic History": {
                icon: "🏠",
                questions: [
                    "Nature of home — apartment, slum area, wooden house? Living status, overcrowding?",
                    "Water supply and sanitation?",
                    "Office environment?",
                    "Income and employment?",
                    "Social and family relationship?",
                    "Any dependents at home? Who else lives there?",
                    "Who visits the house? (relatives, neighbors, friends)"
                ]
            },
            "Drug & Treatment History": {
                icon: "💊",
                questions: [
                    "Details of drugs — previous and present?",
                    "History of drug allergy, drug intolerance or any reaction?",
                    "Treatment already received for the present illness?",
                    "History of any transfusion — blood, plasma, blood product, normal saline or other fluid?"
                ]
            },
            "Immunization, Travel & Other History": {
                icon: "✈️",
                questions: [
                    "History of immunization — hepatitis B, tuberculosis, tetanus?",
                    "Travel or job outside the country? (useful for malaria, amebiasis, hepatitis B, HIV)",
                    "Any symptoms related to anxiety, depression, dementia, hallucination, delusion, phobia, sleep pattern? (Psychiatric history)",
                    "In female — Period (menstrual history: amenorrhea, polymenorrhea, menorrhagia)?",
                    "In female — Pill (oral contraceptive pill or other contraceptive method)?",
                    "In female — Pregnancy (obstetric history: number of children, age of last child, PPH, abortion)?"
                ]
            }
        }
    },
    "systemic_inquiry": {
        label: "🔍 Systemic Inquiry",
        subtypes: {
            "General Symptoms": {
                icon: "🌡️",
                questions: [
                    "Do you suffer from fever? If yes, ask details.",
                    "Do you have night sweats?",
                    "Have you gained or lost weight? If yes, ask details.",
                    "Have you noticed any swelling on your body?",
                    "Do you feel unusually weak, lethargic, malaise or fatigue?",
                    "Do you feel excessive sweating or cold?",
                    "Have you noticed any change in your complexion (pale, darkening, yellowish)?",
                    "How is your sleep? Any change in sleep pattern, difficulty falling asleep, early awakening or daytime sleepiness?",
                    "Do you have any skin rash or itching?"
                ]
            },
            "Cardiovascular System": {
                icon: "❤️",
                questions: [
                    "Do you have chest pain, discomfort or tightness in chest?",
                    "Do you have difficulty in breathing?",
                    "Do you feel breathless on lying flat? How many pillows do you use? (orthopnea)",
                    "Do you ever wake up suddenly at night gasping for breath? (paroxysmal nocturnal dyspnea)",
                    "Do you have cough?",
                    "Did you notice any swelling of your feet or ankle? (edema)",
                    "Do you feel palpitation or irregular heartbeats? Do you sometimes miss a beat? Feel dizzy? Had blackout?",
                    "Have you ever suddenly lost consciousness, even briefly? (syncope)",
                    "Do you feel pain in legs or arms during exercise or work? (intermittent claudication)",
                    "Do your hands or feet become blue or cold?"
                ]
            },
            "Respiratory System": {
                icon: "🫁",
                questions: [
                    "Do you suffer or ever suffered from difficulty in breathing?",
                    "Do you have cough?",
                    "Did you notice blood with your sputum?",
                    "Do you feel any chest pain?",
                    "Have you noticed any wheezing?",
                    "Do you snore? Or did anyone complain that you snore during sleep?"
                ]
            },
            "Alimentary System": {
                icon: "🍽️",
                questions: [
                    "Do you have heartburn or acid regurgitation?",
                    "Do you have pain or discomfort in your abdomen? (site, character, aggravating/relieving factors)",
                    "Do you feel abdominal bloating, distension or early fullness after eating?",
                    "How is your appetite? Do you still enjoy your food? Any loss or increase in appetite?",
                    "Have you lost weight recently? How much, over what time?",
                    "Do you feel nausea or vomiting? Any blood in vomit?",
                    "Do you feel difficulty in swallowing? Is it for solids, liquids or both? Sudden or gradually progressive?",
                    "Do you feel pain while swallowing, especially with hot liquids? (odynophagia)",
                    "Do you have diarrhea or constipation? Duration, frequency, amount, aggravating factors?",
                    "Is there any recent change in bowel habit (frequency or consistency)?",
                    "Have you seen blood or mucus in stool? Is the blood mixed with stool, on the surface, or on toilet paper?",
                    "Did you notice black tarry stool? (melena)",
                    "Do you have any mouth ulcer, bad breath or dental problem?",
                    "Do you have any difficulty or pain related to passing stool, or lump around the anus?"
                ]
            },
            "Hepatobiliary System": {
                icon: "🫀",
                questions: [
                    "Have you noticed yellowish discoloration of your eyes or skin? (jaundice)",
                    "Do you have pale (clay-colored) stool or dark (cola-colored) urine?",
                    "Do you have generalized itching of the body? (pruritus)",
                    "Do you have pain in the right upper part of your abdomen?",
                    "Did you ever have fever with chills/rigor along with abdominal pain or jaundice?",
                    "Have you noticed swelling of your abdomen? (ascites)",
                    "Do you bruise easily or bleed for longer than usual from small cuts?",
                    "Have you ever received a blood transfusion?",
                    "Have you ever had a tattoo, body piercing, or injection with a shared needle (IV drug use)?",
                    "Have you had unprotected sex with multiple partners?",
                    "Have you travelled to any area with poor sanitation recently, or eaten outside food/contaminated water?",
                    "Do you drink alcohol? If so, how much and for how long?",
                    "Are you taking any long-term medication, herbal preparation or over-the-counter drug?",
                    "Has anyone in your family had jaundice, liver disease or liver cancer?"
                ],
                clinicalExamNotes: [
                    {
                        title: "Jaundice — Classification (Macleod's)",
                        points: [
                            "Jaundice = yellow discoloration of skin, sclerae & mucous membranes due to raised bilirubin (hyperbilirubinaemia); usually visible clinically when bilirubin >50 micromol/L",
                            "Prehepatic (Haemolytic) — increased bilirubin production from haemolysis; urine and stool color are NORMAL (unconjugated bilirubin is not water-soluble, not filtered by kidney) — also called 'acholuric jaundice'",
                            "Hepatic (Hepatocellular) — liver cell damage causes BOTH unconjugated and conjugated hyperbilirubinaemia; urine is dark (conjugated bilirubin is water-soluble), stool color stays NORMAL",
                            "Posthepatic (Obstructive/Cholestatic) — bile cannot reach intestine due to obstruction; urine is dark, stool is PALE (clay-colored); often with pruritus from bile salt deposition in skin",
                            "Quick clinical rule: Normal stool + normal urine → Prehepatic | Normal stool + dark urine → Hepatic | Pale stool + dark urine → Posthepatic"
                        ]
                    },
                    {
                        title: "Important Clinical Signs (Macleod's)",
                        points: [
                            "Charcot's triad — abdominal pain + fever/rigor + jaundice → suggests ascending cholangitis (usually from an obstructing gallstone)",
                            "Painless obstructive jaundice → suggests malignant biliary obstruction (e.g., carcinoma head of pancreas, cholangiocarcinoma) rather than gallstones",
                            "Courvoisier's sign — palpable, non-tender gallbladder with jaundice → suggests malignant obstruction (e.g., pancreatic head cancer); gallstone disease rarely produces a palpable gallbladder because the gallbladder is usually fibrotic and shrunken"
                        ]
                    },
                    {
                        title: "Common Causes of Jaundice by Level (Macleod's)",
                        points: [
                            "Increased bilirubin production — Haemolysis (unconjugated)",
                            "Congenital — Gilbert's syndrome (mild, unconjugated, worsens with fasting/illness, normal liver enzymes)",
                            "Hepatocellular — Viral hepatitis, cirrhosis, drug-induced, autoimmune hepatitis",
                            "Intrahepatic cholestasis — Drugs, Primary biliary cirrhosis",
                            "Extrahepatic cholestasis (obstructive) — Gallstones, Carcinoma of pancreas, Cholangiocarcinoma"
                        ]
                    },
                    {
                        title: "Viral Hepatitis A–E — Quick Comparison (general reference)",
                        points: [
                            "Hepatitis A (HAV) — RNA virus; fecal-oral route (contaminated food/water); usually self-limiting ACUTE illness only; does NOT cause chronic hepatitis; common in poor sanitation areas",
                            "Hepatitis B (HBV) — DNA virus; transmitted via blood, sexual contact, mother-to-child; can cause ACUTE or CHRONIC hepatitis; chronic infection can progress to cirrhosis and hepatocellular carcinoma",
                            "Hepatitis C (HCV) — RNA virus; mainly via blood (IV drug use, transfusion, needles); high tendency to become CHRONIC (most infections persist); important cause of cirrhosis and liver cancer",
                            "Hepatitis D (HDV) — RNA virus; defective virus that needs Hepatitis B to replicate (can only infect those already HBV-positive); co-infection makes liver disease more severe",
                            "Hepatitis E (HEV) — RNA virus; fecal-oral route (contaminated water), similar to Hepatitis A; usually self-limiting ACUTE illness; can be severe/fatal in pregnant women",
                            "Memory tip: A and E spread through contaminated food/water and stay ACUTE; B, C and D spread through blood/body fluids and can become CHRONIC"
                        ]
                    }
                ]
            },
            "Genitourinary System": {
                icon: "🩺",
                questions: [
                    "Do you have frequency of micturition?",
                    "Are you passing larger amount of urine? (polyuria)",
                    "Do you get up at night to pass urine? (nocturia)",
                    "Do you feel pain during passing urine? (dysuria)",
                    "If your bladder is full, do you have to void immediately? (urgency)",
                    "Do you notice narrow stream while passing urine? (poor stream)",
                    "Does the flow stop on straining for micturition?",
                    "Do you notice difficulty in starting micturition? (hesitancy)",
                    "Is there any dribbling at the end of micturition? (terminal dribbling)",
                    "Do you have incontinence of urine?",
                    "What is the color of your urine? Is it mixed with blood? (hematuria)",
                    "Do you have any loin pain? Does it go from loin to groin?",
                    "Have you any problem with your sex life?",
                    "Did you notice any ulcer, rash or lumps on your genitals?",
                    "In female: Do you have any discharge from vagina or urethra?"
                ]
            },
            "Nervous System": {
                icon: "🧠",
                questions: [
                    "Do you suffer from headache?",
                    "Did you suffer from convulsion, fainting episodes, fits, blackout, vertigo or dizziness?",
                    "Do you have problems with memory or concentration?",
                    "Do you have trouble with your vision, hearing, taste or smell? Do you feel tinnitus?",
                    "Do you have weakness (hemiplegia, paraplegia or monoplegia), tingling, numbness (pins and needles) or clumsiness in arms or legs?",
                    "Do you have tremor or any involuntary movement in any part of your body?",
                    "Did you notice any problem with your balance?",
                    "Did you ever have any head injury?"
                ],
                clinicalExamNotes: [
                    {
                        title: "Higher Psychic Function",
                        points: [
                            "Consciousness — alert, drowsy, comatose",
                            "Orientation — time, place, person",
                            "Memory — immediate, recent, remote",
                            "Speech — fluency, comprehension (dysphasia), articulation (dysarthria)",
                            "Mood and behaviour",
                            "General intelligence — simple calculation, general knowledge"
                        ]
                    },
                    {
                        title: "Motor System",
                        points: [
                            "Bulk — inspection of muscle size, look for wasting/atrophy, measure limb circumference if asymmetry suspected",
                            "Tone — resistance felt on passive movement of limb; hypotonia (floppy) or hypertonia (spasticity — clasp-knife, or rigidity — lead-pipe/cogwheel)",
                            "Power — tested against resistance, graded as follows:",
                            "  Grade 0 — No response / no muscle contraction at all",
                            "  Grade 1 — Just a little movement felt or seen (flicker), but limb doesn't actually move",
                            "  Grade 2 — Limb can move side to side, but only when gravity is removed (can't lift it up against gravity)",
                            "  Grade 3 — Patient can lift the limb up by self against gravity, but cannot hold against resistance",
                            "  Grade 4 — Movement possible against some resistance from examiner",
                            "  Grade 5 — Normal full power against full resistance",
                            "Involuntary movements — tremor, chorea, fasciculation, myoclonus (if present)"
                        ]
                    },
                    {
                        title: "Reflex (technique only)",
                        points: [
                            "Biceps — tap on examiner's thumb placed over biceps tendon, elbow flexed",
                            "Triceps — tap directly over triceps tendon, elbow flexed",
                            "Supinator (brachioradialis) — tap over the radius a few cm above the wrist",
                            "Knee — tap over patellar tendon, knee flexed and supported",
                            "Ankle — tap over Achilles tendon with foot dorsiflexed",
                            "Plantar — stroke lateral border of sole from heel to base of toes with blunt object"
                        ]
                    },
                    {
                        title: "Sensory System",
                        points: [
                            "Pain — sharp object (pin)",
                            "Touch — cotton wool",
                            "Temperature — warm and cold objects",
                            "Vibration — tuning fork over bony prominence",
                            "Proprioception (joint position sense) — moving toe/finger up/down, eyes closed",
                            "Cortical sensation — two-point discrimination, stereognosis (recognizing object by touch)"
                        ]
                    },
                    {
                        title: "Cranial Nerves",
                        points: [
                            "CN I (Olfactory) — sense of smell",
                            "CN II (Optic) — visual acuity, visual fields, fundoscopy",
                            "CN III, IV, VI (Oculomotor, Trochlear, Abducens) — eye movements, pupils, ptosis",
                            "CN V (Trigeminal) — facial sensation, jaw movement, corneal reflex",
                            "CN VII (Facial) — facial muscle movement, taste (anterior 2/3 tongue)",
                            "CN VIII (Vestibulocochlear) — hearing, balance",
                            "CN IX, X (Glossopharyngeal, Vagus) — gag reflex, palate movement, swallowing, voice",
                            "CN XI (Accessory) — shoulder shrug, head turning (sternocleidomastoid, trapezius)",
                            "CN XII (Hypoglossal) — tongue movement"
                        ]
                    }
                ]
            },
            "Locomotor System": {
                icon: "🦴",
                questions: [
                    "Do you have painful or stiff joints or swelling of joints?",
                    "Do you have backache or pain in the neck or muscular pain?",
                    "Do you feel weak or have difficulty in standing up from sitting position or difficulty in raising hands above your head?",
                    "Have you had any difficulty with walking or moving around? Any recent falls?",
                    "Have you noticed any skin rash? (dermatomyositis)",
                    "Have you ever had a dry mouth or mouth ulcer?",
                    "Have your eyes been dry or red?"
                ]
            },
            "Endocrine System": {
                icon: "⚗️",
                questions: [
                    "Are you suffering from diabetes mellitus or do you have any thyroid problem?",
                    "Have you noticed any neck swelling?",
                    "Do you prefer hot or cold weather? Do you have excessive sweating? (cold intolerance → hypothyroidism; heat intolerance + sweating → hyperthyroidism)",
                    "Do you have tremor in your hands?",
                    "Do you feel weak or fatigue?",
                    "How is your appetite? (excessive → DM/thyrotoxicosis; loss → malignancy/CKD/CLD/TB/hypothyroidism)",
                    "Have you lost or gained weight?",
                    "Is there any change in your appearance, hair, skin or voice?",
                    "Do you feel unusually thirsty? (DM, diabetes insipidus, hypercalcemia)"
                ]
            },
            "Hematological System": {
                icon: "🩸",
                questions: [
                    "Do you have bleeding from anywhere or bruise easily?",
                    "Have you noticed prolonged bleeding after a small cut?",
                    "Have you noticed any lump under your armpit, in your neck or groin? (lymph nodes)",
                    "Have you ever had blood clots in your legs or other parts of the body? (DVT)",
                    "Do you feel extreme weakness, dizziness, lassitude, dyspnea, palpitation? (anemia)",
                    "Are you taking any drugs? Have you been exposed to chemicals or radiation? (aplastic anemia)"
                ]
            },
            "Reproductive System (Female)": {
                icon: "👩",
                questions: [
                    "Did you have any miscarriage or abortion?",
                    "During past pregnancy, did you suffer from high blood pressure or diabetes mellitus?",
                    "In previous delivery, did you suffer from prolonged bleeding?",
                    "Do you feel any lump in your breast? How long? Getting larger? Painful or painless? Any discharge, itching or skin change?"
                ]
            }
        }
    },
    "elaboration_symptoms": {
        label: "🔬 Elaboration of Symptoms",
        subtypes: {
            "Fever": {
                icon: "🌡️",
                questions: [
                    "How long have you been suffering from fever?",
                    "When does it start (morning, evening, night)? How long does it persist (few hours or throughout the day)?",
                    "Is there any evening rise of temperature associated with night sweats?",
                    "What was the highest recorded temperature?",
                    "Is it associated with chills and rigors? Does it subside with sweating?",
                    "Does it subside spontaneously or with antipyretic?",
                    "Is the fever punctuated by apyrexial period? (Undulant / Pel-Ebstein)",
                    "Is the fever associated with skin rash or purpura?",
                    "Any associated symptoms? (urinary complaint, cough, chest pain, abdominal pain, headache, loss of consciousness, weight loss, polyarthritis)",
                    "Any history of sexual exposure, homosexuality, travel abroad?",
                    "Are you taking any drugs? (drug fever)"
                ],
                causes: [
                    "Low grade fever with evening rise → Tuberculosis",
                    "Fever with chill and rigor → Acute pyelonephritis, acute cholangitis, SBE, subphrenic abscess, pyogenic lung abscess, septicemia, lobar pneumonia, pyrogenic reaction",
                    "Fever with chill and rigor subsiding with sweating → Malaria",
                    "Fever with unconsciousness → Cerebral malaria, meningitis, encephalitis, pontine hemorrhage",
                    "Fever with neck rigidity → Meningitis, encephalitis",
                    "Fever with drenching night sweat → Lymphoma, tuberculosis",
                    "Feeling feverish with excessive sweating → Thyrotoxicosis",
                    "Pel-Ebstein (undulant) fever → Hodgkin's lymphoma",
                    "Fever with double/triple rise → Kala-azar",
                    "Step ladder pattern → Enteric fever",
                    "Relapsing fever → Malaria, borreliosis, occasionally lymphoma",
                    "Fever with myalgia → Viral infection (influenza, dengue)",
                    "Rash day 1 → Varicella; day 2 → Scarlet fever; day 3 → Pox; day 4 → Measles/Rubella; day 5 → Typhus; day 6 → Dengue; day 7 → Enteric fever (rose spot)",
                    "Hectic fever (sudden high temp with chill/rigor, falls with sweating) → Lung abscess, pyogenic liver abscess, empyema, subphrenic abscess, septicemia",
                    "Fever with relative bradycardia → Viral fever, 1st week enteric fever, brucellosis, psittacosis, Weil's disease",
                    "Fever with relative tachycardia → Acute rheumatic carditis, diphtheric myocarditis, severe TB, polyarteritis nodosa",
                    "Hyperpyrexia + rigidity on antipsychotics → Neuroleptic malignant syndrome",
                    "Aseptic fever (no infection) → SLE, lymphoma, leukemia, drug fever, AMI, heat stroke, thyrotoxic crisis, acute gout"
                ]
            },
            "Abdominal Pain": {
                icon: "🫃",
                questions: [
                    "Site: What is the site of pain?",
                    "Onset: Is it sudden or chronic? Does it disturb sleep at late night?",
                    "Character: What is the character of pain? (dull ache, colicky, stabbing, burning)",
                    "Radiation: Does it radiate to any site? (back → pancreatitis; loin to groin → renal colic; right shoulder → cholecystitis)",
                    "Association: Is it associated with diarrhea, vomiting, dyspepsia, altered bowel habit, urinary complaints, distension?",
                    "Timing and duration: How long? When does it start and go? Has it changed since beginning?",
                    "Exacerbating factors: What brings it on? What makes it worse? Is it related to meal?",
                    "Relieving factors: What makes it better?",
                    "Severity: How severe is it?"
                ],
                causes: [
                    "Epigastric pain → Peptic ulcer, acute pancreatitis, GERD, cholecystitis (also referred AMI, basal pneumonia)",
                    "Right iliac fossa pain → Acute appendicitis, Crohn's disease, salpingitis",
                    "Pain shifts from mid-abdomen to RIF → Acute appendicitis",
                    "Left iliac fossa pain → Diverticulitis, volvulus, salpingitis, IBS",
                    "Right hypochondriac pain → Acute cholecystitis, liver abscess, acute viral hepatitis, CCF, subphrenic abscess",
                    "Right hypochondriac colicky pain + jaundice → Gallstone in common bile duct",
                    "Loin pain → Renal colic, acute pyelonephritis, perinephric abscess",
                    "Generalized pain → Peritonitis, IBD, gastroenteritis",
                    "Acute pain → Acute cholecystitis, appendicitis, pancreatitis, intestinal obstruction, perforation",
                    "Chronic pain → Peptic ulcer disease, IBS (PUD may cause late night pain)",
                    "Burning pain → Peptic ulcer disease",
                    "Colicky pain → Intestinal obstruction, ureteric stone, stone in CBD, ascariasis",
                    "Pain aggravated by smoking, alcohol, NSAIDs, relieved by antacids → PUD (duodenal: worse on empty stomach, relieved by food; gastric: worse after food)",
                    "Pain aggravated by heavy meal and alcohol, partially improved by bending forward → Acute pancreatitis",
                    "Pain aggravated by fatty food → Cholelithiasis",
                    "Pain aggravated by eating → Ischemic gut",
                    "Pain aggravated by movement → Peritonitis",
                    "Pain relieved by vomiting → Gastric outlet obstruction",
                    "Pain radiating to back → Acute pancreatitis, penetrating peptic ulcer",
                    "Pain radiating loin to groin → Renal colic",
                    "Pain referred to right shoulder → Acute cholecystitis, diaphragmatic pleurisy",
                    "Pain referred to left shoulder → Splenic infarction, perisplenitis"
                ]
            },
            "Chest Pain": {
                icon: "💔",
                questions: [
                    "Site: Where is your pain? (central or peripheral part of the chest)",
                    "Onset: How did the pain start? (sudden or gradual)",
                    "Character: What is the nature of pain? (compressive, sharp, tearing, stabbing, crushing)",
                    "Radiation: Does the pain radiate to any site? (left arm, neck, jaw → IHD; between shoulder blades → dissecting aneurysm)",
                    "Timing (duration): How long does it persist? (<30 min → angina; >30 min → MI)",
                    "Exacerbating factors: What causes the pain? What makes it worse? (exertion, emotion, eating, lying flat, breathing)",
                    "Relieving factor: How is the pain relieved? (rest/GTN → angina; leaning forward → pericarditis/pancreatitis)"
                ],
                causes: [
                    "Central/retrosternal pain → AMI, angina, pericarditis, myocarditis, dissecting aorta, spontaneous pneumothorax, PE, reflux esophagitis, Mallory-Weiss, mediastinitis, tracheitis",
                    "Peripheral chest pain → Pleurisy, pneumonia, pneumothorax, pulmonary infarction, rib/chest wall (fracture, secondaries), costochondritis, herpes zoster, Bornholm disease",
                    "Pain radiating to inner left arm, neck, jaw → IHD",
                    "Compressing/crushing/squeezing/stabbing → Acute myocardial infarction",
                    "Sharp stabbing pain → Pleurisy or pericarditis",
                    "Burning pain → GERD",
                    "Very severe tearing pain (sudden onset, radiates to back) → Dissecting aortic aneurysm",
                    "Sudden onset → AMI, spontaneous pneumothorax, pulmonary embolism",
                    "Nocturnal chest pain → Heart failure, coronary artery spasm",
                    "Pain <30 minutes → Angina pectoris",
                    "Pain >30 minutes → Acute myocardial infarction",
                    "Long duration (weeks/months) → Musculoskeletal, GIT disorder, cancer",
                    "Pain on exertion/eating/emotion (3E), relieved by rest/GTN → Angina pectoris",
                    "Pain after eating, lying flat, hot drinks, alcohol → Esophageal spasm or GERD",
                    "Unilateral sharp pain aggravated by deep breathing/cough/posture → Pleuritic chest pain",
                    "Pain relieved by food → Duodenal ulcer",
                    "Pain relieved by sitting up and leaning forward → Pericarditis",
                    "Pain with breathlessness → IHD, PE, pleurisy, anxiety",
                    "Pain with nausea/vomiting/sweating → Acute MI",
                    "Pain with difficulty swallowing → Esophagitis, esophageal carcinoma",
                    "Sudden sharp chest pain + severe dyspnea → Spontaneous pneumothorax",
                    "Retrosternal pain + repeated coughing → Tracheobronchitis"
                ]
            },
            "Cough": {
                icon: "😮‍💨",
                questions: [
                    "How long have you been suffering from cough?",
                    "Is it paroxysmal or persistent?",
                    "Is it dry or productive?",
                    "If productive: amount, color, odor, time of production (morning), presence of blood, relation to posture change?",
                    "Is it associated with hemoptysis? Fresh or altered blood?",
                    "Is it associated with chest pain or dyspnea?",
                    "Is the cough aggravated by dust, cold air, smoke or pollen?",
                    "Does it occur after eating or drinking?",
                    "When does the cough get worse? (day or night)",
                    "What is the character of cough? (croupy, barking, brassy, bovine, whooping)",
                    "Are you taking any drugs? (such as ACE inhibitor)"
                ],
                causes: [
                    "Recent/acute onset → Respiratory infection, pneumonia, acute bronchitis",
                    "Chronic cough → COPD, bronchial asthma, bronchiectasis, ILD, tuberculosis",
                    "Occasional/paroxysmal → Bronchial asthma",
                    "Dry cough → ACE inhibitor (captopril/lisinopril), cough variant asthma, ILD, acute tracheobronchitis, tropical eosinophilia",
                    "Nocturnal cough → Bronchial asthma, LVF, tropical eosinophilia, post-nasal drip, aspiration",
                    "Cough with postural variation → Bronchiectasis, lung abscess, GERD",
                    "Painful cough / retrosternal pain → Tracheitis",
                    "Cough after eating/drinking → Esophageal reflux, TE fistula",
                    "Croupy cough → Laryngitis (in children exclude diphtheria)",
                    "Harsh, barking, painful + stridor → Laryngeal disorder (laryngitis, tumor)",
                    "Barking cough → Acute epiglottitis",
                    "Loud, brassy cough → Pressure on trachea by tumor",
                    "Hollow, bovine cough → Recurrent laryngeal nerve palsy (bronchial carcinoma)",
                    "Associated with whoop → Whooping cough",
                    "Cough with wheeze → Bronchial asthma, COPD",
                    "Profuse expectoration → Bronchiectasis, lung abscess, resolution stage of pneumonia",
                    "Yellowish/greenish/purulent sputum → Bronchiectasis, resolution of pneumonia",
                    "Foul smelling dark sputum → Lung abscess (anaerobic infection)",
                    "Rusty sputum → Pneumococcal pneumonia",
                    "Frothy sputum → Pulmonary edema",
                    "Hemoptysis: Respiratory → Bronchial carcinoma, TB, pulmonary infarction, bronchiectasis; Cardiac → Mitral stenosis; Blood dyscrasias → Hemophilia, DIC, anticoagulants"
                ]
            },
            "Dyspnea (Breathlessness)": {
                icon: "💨",
                questions: [
                    "Is the onset sudden (acute) or gradual (chronic)?",
                    "Does it occur with exertion or at rest?",
                    "If exertional: how much activity causes breathlessness? (mild/moderate/severe — ask about walking distance, stair climbing, undressing)",
                    "Do you have diseases such as rhinitis, asthma, heart disease, renal disorder?",
                    "Do you get breathless at night waking you from sleep? (PND) How do you feel better?",
                    "Do you feel breathless on lying flat? (orthopnea) How many pillows do you use?",
                    "Is it paroxysmal or progressive?",
                    "Is there any seasonal variation?",
                    "Any history of recent travel abroad by air?",
                    "Do you smoke? If yes, number of sticks per day.",
                    "Any aggravating factor or occupational exposure to coal dust, silica, asbestos, animal dander?",
                    "Any relieving factor? (drugs, rest, change of posture, after expectoration)",
                    "Is it associated with other symptoms? (cough, chest pain, wheeze, hemoptysis)"
                ],
                causes: [
                    "Acute/sudden dyspnea → Acute severe asthma, acute LVF, acute COPD exacerbation, spontaneous pneumothorax, PE, ARDS, cardiac tamponade, acute laryngeal obstruction, DKA, conversion disorder",
                    "Chronic dyspnea → Chronic bronchial asthma, COPD, DPLD",
                    "Dyspnea on mild exertion → COPD, LVF",
                    "Orthopnea or PND → Pulmonary edema (LVF, mitral stenosis)",
                    "Dyspnea at rest → Acute severe asthma, massive pneumothorax, ARDS, acute laryngeal edema, ILD (advanced), massive PE, acute LVF, metabolic acidosis (DKA, lactic acidosis, salicylate poisoning, acute renal failure)",
                    "Progressively increasing dyspnea → DPLD",
                    "Dyspnea with seasonal variation → Bronchial asthma, chronic bronchitis",
                    "Dyspnea after air travel/immobilization → PE from DVT",
                    "Dyspnea aggravated by coal dust/silica/asbestos/animal dander → Occupational asthma",
                    "Dyspnea with wheezing → Acute severe asthma, COPD, sometimes acute LVF, anaphylaxis",
                    "Dyspnea with stridor (upper airway obstruction) → Foreign body/tumor, acute epiglottitis, anaphylaxis, laryngeal trauma",
                    "Dyspnea with crepitations → Acute LVF (pulmonary edema), bilateral extensive bronchiectasis",
                    "Dyspnea but chest is clear → PE, metabolic acidosis (DKA, renal failure), severe anemia, shock, PCP, psychogenic",
                    "Dyspnea with unilateral chest pain → Spontaneous pneumothorax",
                    "Dyspnea with shock → Acute myocardial infarction",
                    "Dyspnea with high fever → Pneumonia",
                    "Psychogenic dyspnea → 'Inability to take a breath big enough to fill lungs'; breathing deep and punctuated with sighs"
                ]
            },
            "Vomiting": {
                icon: "🤢",
                questions: [
                    "How long have you been suffering from vomiting?",
                    "How many times do you vomit a day?",
                    "What are the contents of the vomitus?",
                    "Does it contain blood (hematemesis)?",
                    "What is the color of vomitus? (coffee ground → gastric bleeding; bile-stained green → distal pylorus obstruction)",
                    "Is it associated with nausea?",
                    "Does it occur in the morning only?",
                    "Do you induce vomiting?",
                    "Is the vomiting projectile in nature? (→ gastric outlet obstruction, raised ICP)",
                    "Does vomiting relieve abdominal pain or discomfort?",
                    "Is there any relation to food?",
                    "Any history of head injury?",
                    "Are you taking any drugs? Did you take radiation therapy?",
                    "In female: ask about amenorrhea.",
                    "Is it associated with chest pain, headache, tinnitus, vertigo, fever, jaundice, diarrhea, weight loss?"
                ],
                causes: [
                    "Food of previous day (not bile-stained) → Pyloric stenosis",
                    "Bile-stained contents → Obstruction distal to pylorus",
                    "Fecal vomiting → Distal small bowel obstruction, colonic obstruction, gastrocolic fistula",
                    "Blood in vomitus → Bleeding gastric ulcer, gastric erosion, carcinoma stomach, ruptured esophageal varices",
                    "Coffee ground vomitus → Gastric bleeding (hemoglobin → acid hematin)",
                    "Early morning vomiting (before eating) → Raised ICP, pregnancy, alcoholism",
                    "Vomiting 1 hour after food → Gastric outlet obstruction",
                    "Vomiting immediately after eating → Psychogenic, peptic ulcer with pyloric spasm",
                    "Vomiting without nausea → Raised ICP",
                    "Projectile vomiting → Gastric outlet obstruction",
                    "Induced vomiting → Gastric outlet obstruction, bulimia nervosa",
                    "Pain abdomen relieved by vomiting → Gastric outlet obstruction, gastric ulcer",
                    "Vomiting + severe abdominal pain + absolute constipation → Intestinal obstruction",
                    "Acute vomiting + diarrhea + fever → Infective gastroenteritis",
                    "Vomiting with severe abdominal pain → Renal or biliary colic",
                    "Vomiting with jaundice → Acute viral hepatitis",
                    "Vomiting with chest pain → Acute MI",
                    "Vomiting with unilateral headache → Migraine, cluster headache",
                    "Vomiting with tinnitus/vertigo → Vestibular involvement",
                    "Prolonged vomiting with little/no weight loss → Psychogenic",
                    "Non-GI causes (mnemonic ABCDEFGHIP): Acute renal failure/Addison's, Brain disease (raised ICP)/Brainstem, Cardiac (AMI), DKA, Ear disease, Foreign substance (alcohol/drugs), Gravidity, Hypercalcemia, Infection (meningitis/encephalitis), Psychogenic"
                ]
            },
            "Palpitation": {
                icon: "💓",
                questions: [
                    "What do you really feel? (unexpected awareness of heartbeat)",
                    "Did you check your pulse by yourself?",
                    "How does it start? (spontaneous or with activity, anxiety, emotion)",
                    "Is it paroxysmal or persistent?",
                    "How long does it persist?",
                    "How is it relieved?",
                    "Have you ever missed a heartbeat?",
                    "Do you get breathlessness, chest pain, dizziness or blackout with palpitation?"
                ],
                causes: [
                    "Sudden onset and termination of rapid regular palpitation → Paroxysmal SVT, atrial flutter with 2:1 block",
                    "Persistent palpitation → Anxiety neurosis, thyrotoxicosis, pregnancy",
                    "Missed beat followed by a heavy beat → Premature atrial or ventricular contractions",
                    "Rapid palpitation followed by syncope → Ventricular tachycardia",
                    "Rapid irregular palpitation → Atrial fibrillation or flutter with variable block",
                    "Rapid regular palpitation → Paroxysmal SVT",
                    "Slow palpitation → Beta blocker, pulsus bigeminus",
                    "Other causes → Heart failure, ventricular tachycardia, AF, atrial flutter"
                ]
            },
            "Jaundice": {
                icon: "🟡",
                questions: [
                    "Did it start with anorexia, nausea and vomiting? (→ acute viral hepatitis)",
                    "Any history of contact with jaundiced patient or sexual exposure?",
                    "What is the color of the stool? (yellowish, pale, dark)",
                    "Do you have itching? (→ obstructive jaundice)",
                    "Did you ever take any injection, infusion or blood transfusion? (HBV/HCV)",
                    "Any history of IV drug abuse, tattooing or surgery?",
                    "Do you take alcohol or any drugs? (hepatotoxic drugs)",
                    "Any family history of jaundice? Any consanguinity?",
                    "Did you suffer from recurrent jaundice?",
                    "Any associated history of high fever or urinary complaints?",
                    "Previous history of jaundice associated with neurological abnormality? (Wilson's disease)",
                    "Have you traveled abroad?"
                ],
                causes: [
                    "Anorexia, nausea, vomiting → Acute viral hepatitis (also drug-induced hepatitis)",
                    "Itching + pale/dark stool → Obstructive jaundice",
                    "Long-standing jaundice + itching + skin pigmentation → Primary biliary cirrhosis",
                    "History of injection/transfusion/IV drug abuse/tattooing/homosexuality → HBV or HCV",
                    "Family history of jaundice + consanguinity + pallor → Hereditary hemolytic anemia",
                    "Persistent mild jaundice → Gilbert's syndrome",
                    "Jaundice + high fever + urinary complaint → Leptospirosis",
                    "Recurrent jaundice + neurological abnormality → Wilson's disease",
                    "Jaundice with pregnancy → Cholestatic jaundice of pregnancy",
                    "Painless progressive jaundice + palpable gallbladder → Carcinoma head of pancreas",
                    "Abdominal pain + fluctuating jaundice → Bile duct stone or stricture, pancreatitis"
                ]
            },
            "Headache": {
                icon: "🤕",
                questions: [
                    "What is the site of headache? (unilateral or diffuse, frontal, occipital or facial)",
                    "What is the time of onset?",
                    "How severe is it?",
                    "What is the nature of headache? (throbbing, tight band-like, thunderclap, lancinating)",
                    "How does it start?",
                    "How long does it persist?",
                    "Is it recurrent?",
                    "Any aggravating factor such as coughing, straining or change of posture?",
                    "Any relieving factor?",
                    "Is it preceded by any aura? (zigzag lines, flashing lights → migraine)",
                    "Is it associated with fever, vomiting, weakness, blurring of vision, vertigo, nasal stuffiness, lacrimation?",
                    "Are you taking any drugs?",
                    "Where have you been? (malaria endemic area)",
                    "In female: ask about pregnancy (pre-eclampsia if proteinuria and high BP)"
                ],
                causes: [
                    "Unilateral headache preceded by flushing lights / zigzag lines → Migraine",
                    "Headache over occiput + neck stiffness → Cervical spondylosis",
                    "Generalized, worse in morning + drowsiness + vomiting → Raised ICP",
                    "Generalized + fever + photophobia + neck stiffness → Meningitis",
                    "Persistent unilateral temporal area + temporal tenderness + blurring → Temporal arteritis",
                    "Pain on forehead, cheeks or behind the eyes → Acute sinusitis",
                    "Bilateral extending to top of head / unilateral radiating to neck → Tension headache",
                    "Unilateral radiating to throat/ear/eye/nose/cheeks/face → Neuralgia",
                    "Morning headache + vomiting → Raised ICP",
                    "Sudden dramatic onset + neck stiffness → Subarachnoid hemorrhage",
                    "Persistent for days or weeks → Tension headache",
                    "Throbbing → Migraine, cluster headache",
                    "Tight band-like / pressure → Tension headache",
                    "Thunderclap (like struck by hammer) → Subarachnoid hemorrhage",
                    "Lancinating, paroxysmal → Trigeminal neuralgia",
                    "Severe pain waking from sleep in early morning → Cluster headache, raised ICP",
                    "Pain precipitated by facial movement (eating, shaving, brushing teeth) → Trigeminal/glossopharyngeal neuralgia",
                    "Pain in jaw during chewing → Temporal arteritis",
                    "Headache at onset of menarche/premenstrually → Migraine",
                    "Headache + temporary visual loss / scintillating spots → Migraine",
                    "Headache + nasal stuffiness / lacrimation → Cluster headache",
                    "Headache + fever + incoherent talk → Cerebral malaria",
                    "Chronic daily headache → Cervical spondylosis, migraine, tension headache, nitrates",
                    "Red flags: First and worst headache → SAH; Thunderclap → SAH; With fever/neck stiffness → Meningitis; Cough-induced → Raised ICP"
                ]
            },
            "Joint Pain": {
                icon: "🦵",
                questions: [
                    "Onset: Is it acute, gradual or chronic? New or recurrent?",
                    "Any history of trauma?",
                    "How long are you suffering from joint pain?",
                    "Is it associated with joint swelling?",
                    "Which joints have been involved? Number (mono/oligo/poly), symmetrical or asymmetrical, distribution (small/large)?",
                    "Does the pain move from one joint to other? (migratory or additive)",
                    "Does the pain worsen on activity or rest?",
                    "Is there any morning stiffness? How long does it persist? (>1 hr → inflammatory)",
                    "Is it associated with redness, warmth and swelling? (suggest inflammation)",
                    "Is there any deformity?",
                    "Any extra-articular manifestations? (skin, eye, mouth)",
                    "Is this associated with dry mouth? (Sjogren syndrome)",
                    "Any skin or nail problem or family history of such problem? (psoriatic arthritis)",
                    "Is the arthritis preceded by urethritis, sexual contact, acute diarrhea? (Reiter's syndrome)",
                    "Any history of frequent diarrhea? (IBD)",
                    "Any history of tick bite in endemic area? (Lyme disease)"
                ],
                causes: [
                    "Monoarticular (GRASP TH) → Gout/gonococcal, Reactive arthritis, Septic arthritis, Pseudogout/psoriatic, Tubercular, Traumatic, Hemophilic",
                    "Polyarthritis → Rheumatic fever, RA, Seronegative arthritis, OA (nodal), SLE, Gout/pseudogout, Polymyalgia rheumatica",
                    "DIP joint involved → OA, psoriatic arthritis, gout",
                    "PIP + MCP joint involved → Rheumatoid arthritis",
                    "1st MTP joint → Gout",
                    "Sacroiliac joint → Ankylosing spondylitis",
                    "Bilateral symmetrical joint → RA",
                    "Asymmetrical (larger joints) → Seronegative arthritis",
                    "Pain increased with activity, relieved by rest → Mechanical arthritis (OA)",
                    "Pain worse with rest, improved by activity → Inflammatory arthritis",
                    "Morning stiffness >1 hour, relieved by activity → RA",
                    "Fleeting arthritis → Rheumatic fever, gonococcal, SLE, Lyme, drug reaction",
                    "Deforming polyarthritis → RA, seronegative spondyloarthropathy, chronic tophaceous gout, primary generalized OA, Lyme disease",
                    "Skin rash + oral ulcer → SLE",
                    "Heliotrope rash + muscle weakness → Dermatomyositis",
                    "Triad of urethritis + iritis + arthritis → Reiter's syndrome",
                    "Psoriasis + arthritis → Psoriatic arthritis",
                    "Bowel symptoms → Enteropathic arthritis (Crohn's, UC)",
                    "Dryness of mouth and eyes → Sjogren's syndrome",
                    "Oral + genital ulcers + uveitis + skin lesion → Behcet's syndrome",
                    "History of tick bite → Lyme disease",
                    "Note: In rheumatic fever — 'it licks the joint, kills the heart' (no deformity)"
                ]
            },
            "Dysphagia": {
                icon: "🍽️",
                questions: [
                    "Can you show me with your finger at which level the food gets stuck?",
                    "Is it due to solid, liquid or both? (solid → mechanical; liquid → neurogenic; both → motility disorder)",
                    "Is it painful or painless? (painful → esophagitis/carcinoma; painless → carcinoma/achalasia)",
                    "Is it transient, intermittent or progressive? (progressive → carcinoma/achalasia/stricture)",
                    "Do you have nasal regurgitation or cough during swallowing?",
                    "Is it associated with heartburn or chest discomfort?",
                    "Did you notice bulging of the neck while eating or drinking? (→ pharyngeal pouch)"
                ],
                causes: [
                    "Difficulty with solid more than liquid → Mechanical cause (esophageal stricture, tumor, pharyngeal web, esophagitis, dysmotility, extrinsic compression by goiter/LA in MS/aortic aneurysm/posterior mediastinal mass)",
                    "Difficulty with liquid more than solid → Neurogenic cause (bulbar/pseudobulbar palsy); associated with nasal regurgitation, choking, spluttering",
                    "Difficulty with both solid and liquid → Motility disorder (achalasia, diffuse esophageal spasm, pharyngeal causes, carcinoma esophagus, stricture)",
                    "Painful dysphagia (odynophagia) → Esophagitis (herpes/candida), drug-induced, ulceration, esophageal carcinoma, achalasia",
                    "Painless dysphagia → Carcinoma esophagus, achalasia, stricture",
                    "Lower retrosternal obstruction → Carcinoma esophagus, achalasia, stricture",
                    "Obstruction at cricoid level → Tumor, stricture, pharyngeal pouch",
                    "Transient dysphagia → Esophageal infection",
                    "Progressive dysphagia → Carcinoma, achalasia, stricture",
                    "Intermittent (first few swallows only) → Esophageal spasm or esophageal ring",
                    "Dysphagia + nasal regurgitation / dysphonia / choking → Bulbar/pseudobulbar palsy, left RLN palsy (Ortner syndrome in MS)",
                    "Dysphagia + chest discomfort + heartburn → Hiatus hernia, GERD, diffuse esophageal spasm",
                    "Dysphagia + nocturnal cough / dyspnea → GERD, achalasia",
                    "Neck bulge or gurgle during drinking → Pharyngeal pouch",
                    "Dysphagia + anemia + koilonychia → Plummer-Vinson syndrome (iron deficiency anemia)",
                    "Dysphagia + palmar hyperkeratosis → Tylosis"
                ]
            },
            "Muscular Weakness": {
                icon: "💪",
                questions: [
                    "Is it generalized or localized?",
                    "Distribution: is it proximal or distal? (proximal → myopathy; distal → neuropathy)",
                    "Onset: is it sudden or gradual?",
                    "Progression: Is it ascending or descending?",
                    "Does it worsen or improve with activity? (worsens → myasthenia gravis; improves → Eaton-Lambert)",
                    "Is there other features such as muscle pain, skin rash, sensory loss, loss of bowel/bladder control?",
                    "Do you take any drug or alcohol?"
                ],
                causes: [
                    "Generalized weakness → Hypokalemia, hyperkalemia, malnutrition, chronic illness",
                    "Localized weakness → Usually neurological (hemiplegia, paraplegia, monoplegia)",
                    "Proximal weakness → All myopathies (dermatomyositis/polymyositis, myasthenia gravis, Eaton-Lambert, Cushing's, diabetic amyotrophy, thyrotoxicosis/hypothyroidism, polymyalgia rheumatica, osteomalacia, hyperparathyroidism, periodic paralysis, alcohol, McArdle's syndrome)",
                    "Distal weakness → Peripheral neuropathy, myotonia dystrophica, Charcot-Marie-Tooth disease",
                    "Sudden generalized weakness → Hypokalemic periodic paralysis, thyrotoxic periodic paralysis",
                    "Sudden localized weakness → Stroke (hemiparesis), spinal cord compression (paraparesis)",
                    "Weakness progressing hours to days → GBS, spinal cord lesion",
                    "Gradual slowly progressive → Peripheral neuropathy, spinal cord lesion, MND, myasthenia gravis, myopathy",
                    "Weakness worsens with activity → Myasthenia gravis",
                    "Weakness improves with activity → Eaton-Lambert syndrome",
                    "Weakness worsens in heat (hot bath) → Multiple sclerosis",
                    "Sudden ascending paralysis → GBS",
                    "Weakness + skin rash → Dermatomyositis",
                    "Weakness + muscle pain → Polymyalgia rheumatica, polymyositis/dermatomyositis, hypothyroidism, diabetic myopathy, hypoparathyroidism",
                    "Fasciculation present → Anterior horn cell or root lesion (motor neuron disease)",
                    "Drugs causing weakness → Statins, steroids, chloroquine, zidovudine, vincristine, alcohol, cocaine",
                    "Weakness with preserved reflex → Myotonia dystrophica, myasthenia",
                    "Weakness with loss of reflex → Neuropathy, myopathy, LMN lesion",
                    "Weakness with exaggerated reflex → UMN lesion (MND, amyotrophic lateral sclerosis)"
                ]
            },
            "Weight Loss": {
                icon: "⚖️",
                questions: [
                    "How much weight did you lose? Over what period?",
                    "How is your appetite? (good appetite + weight loss → thyrotoxicosis/DM; poor appetite → malignancy/CKD/TB)",
                    "How is your bowel habit? (frequent diarrhea/loose motion — color, amount, blood?)",
                    "Do you feel excessively thirsty and micturate frequently? (→ DM)",
                    "Do you have other symptoms such as cough, fever, night sweats? (→ TB)",
                    "Do you have palpitation? (→ thyrotoxicosis)",
                    "Do you prefer hot or cold environment?",
                    "Do you feel that you are getting darker than before? (→ Addison's disease)",
                    "Do you have vomiting? Spontaneous or induced?",
                    "Do you take alcohol or any other substance?"
                ],
                causes: [
                    "Weight loss + low grade evening fever + cough + night sweats → Tuberculosis",
                    "Weight loss despite good appetite / high food intake → Thyrotoxicosis, diabetes mellitus (also malabsorption, bulimia)",
                    "Weight loss + heat intolerance + diarrhea + palpitation → Thyrotoxicosis",
                    "Weight loss + polyphagia + polyuria + polydipsia (3P) → Diabetes mellitus",
                    "Weight loss + diarrhea/steatorrhea → Malabsorption syndrome",
                    "Weight loss + pigmentation + hypotension → Addison's disease",
                    "Extreme cachexia + young female + diet control + heavy exercise + induced vomiting + amenorrhea → Anorexia nervosa",
                    "Any malignancy, chronic illness (cardiac/pulmonary/renal failure), malnutrition → Weight loss",
                    "HIV infection should always be ruled out",
                    "Significant weight loss = reduction of 5% body weight or 5 kg within 6 months"
                ]
            },
            "Weight Gain": {
                icon: "📈",
                questions: [
                    "How much weight did you gain? Over what period?",
                    "How is your appetite? (loss of appetite + gain → hypothyroidism; increased → Cushing's/hypothalamic)",
                    "Do you feel weak or fatigue?",
                    "How is your bowel habit? (constipation → hypothyroidism)",
                    "Do you prefer hot or cold environment?",
                    "Do you take any drugs or alcohol? (steroids, TCA, sulfonylurea, beta-blockers, OCP)",
                    "How is your menstrual cycle? Any growth of excessive hair? (for females — PCOS)",
                    "Do you have headache? (→ pituitary cause)"
                ],
                causes: [
                    "Weight gain + loss of appetite → Hypothyroidism (also cold intolerance, fatigue, constipation)",
                    "Weight gain + increased appetite → Cushing's syndrome, hypoglycemia (insulinoma), hypothalamic disease",
                    "Weight gain + central obesity + moon face + plethora + hypertension + easy bruising → Cushing's syndrome (most common cause: prolonged steroid use)",
                    "Young obese female + irregular cycle/amenorrhea + hirsutism → PCOS",
                    "Headache + weight gain → Pituitary cause",
                    "Weight gain + more food intake, no other complaint → Simple obesity (may be familial)",
                    "Drugs causing weight gain → Corticosteroids, TCA, sulfonylurea, beta blockers, estrogen-containing OCP",
                    "Congenital: Prader-Willi, Laurence-Moon-Biedl, Klinefelter, Kallman, Noonan syndrome"
                ]
            },
            "Vertigo / Dizziness": {
                icon: "🌀",
                questions: [
                    "What exactly do you feel? Spinning, light-headedness, fainting or unsteadiness?",
                    "Is it constant or episodic?",
                    "How long does each episode last?",
                    "Is it associated with nausea or vomiting?",
                    "Is it associated with ear symptoms? (tinnitus, hearing loss → Meniere's disease or labyrinthitis)",
                    "Is it positional? Does it occur on turning your head?",
                    "Is it associated with double vision, weakness or numbness? (→ central cause)",
                    "Did you have any recent head injury?",
                    "Are you taking any drugs? (aminoglycosides, loop diuretics, aspirin)"
                ],
                causes: [
                    "Acute or sudden vertigo → Vestibular neuronitis, labyrinthitis, multiple sclerosis, skull fracture, Meniere's disease, CVD involving brainstem/cerebellum",
                    "Recurrent vertigo <1 minute → Benign positional vertigo, post-traumatic vertigo, psychogenic",
                    "Recurrent vertigo minutes to hours → Migraine, vertebrobasilar insufficiency, Meniere's disease",
                    "Spontaneous prolonged vertigo (a day or more) → Labyrinthitis, multiple sclerosis, brainstem infarction",
                    "Vertigo + hearing loss + tinnitus → Peripheral disorder (Meniere's disease, labyrinthitis; also ototoxic drugs like aminoglycosides)",
                    "Vertigo + neurological disorders / chronic without cochlear symptoms → Central lesion (brainstem, cerebellum, CP angle)",
                    "Vertigo precipitated by head movement in specific direction → Benign positional vertigo",
                    "Vertigo + slowly progressive unilateral hearing loss + tinnitus + disequilibrium → Acoustic neuroma",
                    "Intermittent brief vertigo + drop attack + ataxia + visual loss + double vision + confusion → Vertebrobasilar insufficiency",
                    "Episodic recurrent vertigo + auditory symptoms + headache + photophobia + aura → Migraine",
                    "Vertigo + facial weakness + loss of taste sensation → Ramsay Hunt syndrome",
                    "Triad of episodic vertigo + tinnitus + progressive deafness → Meniere's disease",
                    "Psychogenic vertigo → Associated with agoraphobia; no nystagmus; patient still attempts to work despite discomfort",
                    "Central vertigo → Chronic, mild, bidirectional; vertical nystagmus (up/down beat) is pathognomonic",
                    "Peripheral vertigo → Sudden, severe, unilateral, brief; unidirectional nystagmus; often with unilateral deafness/tinnitus"
                ]
            },
            "Body Swelling / Edema": {
                icon: "🦶",
                questions: [
                    "Where did the swelling start? (face/periorbital → renal; feet ascending upwards → cardiac)",
                    "Is it pitting or non-pitting?",
                    "Is it unilateral or bilateral?",
                    "How long have you had the swelling?",
                    "Is it associated with breathlessness, oliguria or abdominal swelling?",
                    "Do you have any history of renal, cardiac or liver disease?",
                    "Is there any itching or change in skin color with the swelling?",
                    "Are you taking any drugs? (nifedipine, amlodipine → pedal edema)"
                ],
                causes: [
                    "Periorbital puffiness in morning + oliguria → Renal cause (GN or nephrotic syndrome); if preceded by skin/throat infection + smoky urine → Post-streptococcal GN",
                    "Generalized swelling + anemia + hypertension → CRF",
                    "Swelling starts at legs, ascends upwards + exertional dyspnea → Cardiac cause (CCF)",
                    "Gradual whole body swelling + non-pitting + cold intolerance + lethargy → Hypothyroidism",
                    "Generalized swelling → Also wet beriberi, cyclical edema",
                    "Swelling + steatorrhea → Hypoalbuminemia due to malabsorption",
                    "Abdominal swelling (ascites) starts first → CLD (cirrhosis of liver)",
                    "Abdominal swelling + abdominal pain + anorexia + weight loss → Abdominal malignancy with peritoneal metastasis",
                    "Abdominal swelling first, then leg swelling in advanced stage → Constrictive pericarditis",
                    "Unilateral leg swelling + non-pitting edema → Lymphedema (filariasis)",
                    "Unilateral painful leg swelling sudden onset → DVT",
                    "Pitting unilateral lower limb edema → DVT, compression by tumor or lymph nodes",
                    "Non-pitting lower limb edema → Hypothyroidism, lymphedema (filariasis, malignancy, congenital, allergic, Milroy's disease)",
                    "Localized swelling → Angioedema",
                    "Unilateral painful red swelling + fever in toxic patient → Cellulitis",
                    "Gradual truncal swelling on steroid → Cushing's syndrome",
                    "Drugs: nifedipine, amlodipine → Pedal edema",
                    "Unilateral arm edema → Post surgery/removal of axillary lymph nodes (breast carcinoma)"
                ]
            },
            "Cold / Heat Intolerance": {
                icon: "🌡️",
                questions: [
                    "If cold intolerance: Do you have weight gain, lethargy, increased sleepiness, constipation? (→ hypothyroidism)",
                    "If heat intolerance or excessive sweating: Do you have increased appetite, weight loss, palpitation, diarrhea, irritability? (→ thyrotoxicosis)",
                    "Any neck swelling?",
                    "Any tremor of hands?"
                ],
                causes: [
                    "Cold intolerance → Hypothyroidism, old age, excessive environmental cold",
                    "Heat intolerance → Thyrotoxicosis, menopausal syndrome",
                    "Excess sweating (hyperhidrosis) → Anxiety neurosis, thyrotoxicosis, pheochromocytoma, acromegaly, autonomic neuropathy, excess antipyretics, fever, severe pain, menopausal syndrome, malignancy, amyloidosis, neuroleptic malignant syndrome, drugs (thyroxin, somatostatin analog, vasopressin, epinephrine)",
                    "Less/no sweating (anhidrosis) → Hypothyroidism, hypothermia, autonomic neuropathy, Sjogren's syndrome, anticholinergic drugs, vitamin A deficiency, hypoadrenalism"
                ]
            },
            "Polyuria": {
                icon: "💧",
                questions: [
                    "What is the amount of water you take and void every day? (>3L/day = polyuria)",
                    "Are you suffering from diabetes mellitus?",
                    "Is it associated with excessive thirst? (→ DM, diabetes insipidus)",
                    "Do you have excessive thirst with polyphagia? (→ DM)",
                    "Are you taking any drugs? (diuretic, lithium, analgesic)",
                    "Do you take alcohol or excessive coffee?",
                    "Do you have excess thirst, abdominal pain, constipation? (→ hypercalcemia)",
                    "Do you have history of head trauma, pituitary surgery or stroke? (→ cranial diabetes insipidus)",
                    "Any history of psychiatric illness? (→ psychogenic polydipsia)"
                ],
                causes: [
                    "Polyuria + polyphagia + polydipsia (3P) → Diabetes mellitus (also thyrotoxicosis, obesity, bulimia)",
                    "Polyuria + excessive thirst → Diabetes insipidus, anxiety, DM",
                    "History of head injury or surgery → Cranial diabetes insipidus",
                    "Polyuria + constipation + abdominal pain + excess thirst → Hypercalcemia",
                    "History of psychiatric disease → Psychogenic polydipsia",
                    "Drugs causing polyuria → Diuretics, lithium, analgesics, cidofovir, foscarnet",
                    "Other causes → DM, diabetes insipidus (cranial/nephrogenic), psychogenic polydipsia, hypercalcemia, CRF, excess water intake, alcohol, renal tubular disease, adrenal insufficiency"
                ]
            },
            "Hematuria": {
                icon: "🔴",
                questions: [
                    "Is it at the beginning of micturition, at the end or throughout? (initial → urethra; terminal → bladder/prostate; total → bladder and above)",
                    "Do you feel pain or burning during micturition? (dysuria)",
                    "Is this associated with frequency, urgency or hesitancy?",
                    "Do you have loin pain? Does it radiate to the groin?",
                    "Have you noticed bleeding from any other part of the body?",
                    "Do you have fever?",
                    "Is it associated with nausea or vomiting?",
                    "Have you noticed any rash? Is it associated with joint pain and swelling?",
                    "Do you take any drugs? (anticoagulant, antiplatelet, analgesic, cyclophosphamide)",
                    "Did you ever pass stones previously?",
                    "Did you suffer from any kind of trauma?",
                    "Did you suffer from skin infection or sore throat recently? (→ post-streptococcal GN)",
                    "Do you have hypertension, exertional breathlessness and swelling of the body?",
                    "Any family history of renal disease?",
                    "In female: enquire whether she is menstruating.",
                    "Occupational history — exposure to radiation or industrial chemicals like benzene?",
                    "Have you recently traveled to any Middle Eastern country? (bilharziasis/schistosomiasis)"
                ],
                causes: [
                    "Hematuria + dysuria → Cystitis or urethritis (UTI)",
                    "Hematuria + >trace of protein in urine → Blood of renal origin",
                    "Hematuria + loin pain + high grade fever with chill/rigor + nausea/vomiting → Acute pyelonephritis",
                    "Hematuria + fever → Also infective endocarditis with renal involvement, SLE",
                    "Hematuria + loin-to-groin pain → Renal stone (bladder stone: lower abdominal pain)",
                    "Painful hematuria → Loin pain hematuria syndrome, UTI",
                    "Painless hematuria → Tumor of kidney/ureter/bladder/prostate, renal TB, GN, schistosomiasis, bleeding disorders, BPH, IgA nephropathy, infective endocarditis, hypertensive nephrosclerosis, interstitial nephritis, drugs (heparin, anticoagulants)",
                    "Hematuria + obstructive features in elderly male → BPH or carcinoma prostate",
                    "Hematuria + previous skin/throat infection + hypertension + generalized body swelling → Acute glomerulonephritis",
                    "Drugs: analgesics (papillary necrosis), cyclophosphamide (haemorrhagic cystitis), antibiotic (interstitial nephritis), anticoagulants/antiplatelets",
                    "Hematuria + hypertension → Renovascular disease",
                    "Family history of renal disease → Polycystic kidney disease",
                    "Bleeding from multiple sources → Bleeding disorder or drug-induced",
                    "Hematuria + bruise/purpura → Coagulation disorder, HSP, vasculitis",
                    "Hematuria + abdominal pain + vasculitic rash over lower limbs → Henoch-Schonlein purpura",
                    "Young fit athlete + hematuria → Exercise-induced hematuria",
                    "Hematuria + DM or sickle cell disease → Papillary necrosis",
                    "Recent travel to Middle East → Bilharziasis (schistosomiasis) strongly suspected"
                ]
            }
        }
    },

    "gen_exam_causes": {
        label: "🔬 General Exam Causes",
        subtypes: {
            "Anaemia": {
                icon: "💉",
                description: "Reduction in haemoglobin concentration below normal — Hb <13 g/dL in men, <12 g/dL in women. Clinically detected as pallor.",
                site: [
                    "Lower palpebral conjunctiva (most reliable — retract with thumbs, patient looks up)",
                    "Dorsal surface of tongue (yellowish pallor)",
                    "Nail beds (both hands)",
                    "Palms and soles",
                    "Oral mucosa and soft palate"
                ],
                types: [
                    "Mild anaemia (+): Hb 9–11 g/dL",
                    "Moderate anaemia (++): Hb 7–9 g/dL",
                    "Severe anaemia (+++): Hb <7 g/dL"
                ],
                causes: [
                    "Iron deficiency → Commonest cause worldwide; koilonychia, angular cheilosis, glossitis",
                    "Megaloblastic (Vit B12/Folate deficiency) → Macrocytic anaemia; glossitis; neurological features",
                    "Haemolytic anaemia → Jaundice + splenomegaly + anaemia; hereditary spherocytosis, thalassaemia, sickle cell",
                    "Aplastic anaemia → Pancytopenia; no hepatosplenomegaly; bone marrow failure",
                    "Anaemia of chronic disease → TB, malignancy, CKD, connective tissue disease",
                    "Acute haemorrhage → Sudden blood loss; normocytic normochromic",
                    "Leukaemia → Bony tenderness + hepatosplenomegaly + lymphadenopathy",
                    "Chronic kidney disease → Erythropoietin deficiency; normochromic normocytic"
                ]
            },
            "Jaundice": {
                icon: "🟡",
                description: "Yellowish discoloration of sclera, skin and mucous membranes due to raised bilirubin (>3 mg/dL clinically detectable). Latent jaundice: 1–3 mg/dL.",
                site: [
                    "Upper sclera FIRST (most sensitive — elastic tissue has high bilirubin affinity; examine in daylight)",
                    "Soft palate and underside of tongue",
                    "Skin — general body (deep jaundice only)",
                    "Palms and soles (very deep jaundice)",
                    "Urine: dark (bilirubinuria) — frothy, tea-coloured",
                    "Stool: pale/clay-coloured (obstructive)"
                ],
                types: [
                    "Pre-hepatic (Haemolytic): Unconjugated — lemon yellow, no dark urine, urobilinogen ↑",
                    "Hepatocellular: Mixed conjugated + unconjugated — moderate jaundice, liver tender",
                    "Post-hepatic (Obstructive/Cholestatic): Conjugated — deep green-yellow, pale stools, dark urine, pruritus"
                ],
                causes: [
                    "Haemolytic → Thalassaemia, sickle cell, hereditary spherocytosis, G6PD deficiency, malaria",
                    "Viral hepatitis (A/B/E) → Tender hepatomegaly; prodrome of fever + anorexia before jaundice",
                    "Alcoholic liver disease → CLD stigmata; history of alcohol; tender hepatomegaly",
                    "Cirrhosis of liver → Chronic jaundice + CLD signs + portal hypertension",
                    "Carcinoma head of pancreas → Progressive painless jaundice + Courvoisier's sign",
                    "Choledocholithiasis → Intermittent jaundice + RUQ pain + fever (Charcot's triad)",
                    "Primary biliary cirrhosis → Pruritus + xanthelasma + AMA positive",
                    "Gilbert's syndrome → Mild unconjugated; fasting/stress precipitates; benign",
                    "Drugs → Paracetamol poisoning, rifampicin, isoniazid, chlorpromazine"
                ]
            },
            "Cyanosis": {
                icon: "🔵",
                description: "Bluish discoloration of skin and mucous membranes due to >5 g/dL (50 g/L) of reduced (deoxygenated) haemoglobin in circulation.",
                site: [
                    "Central cyanosis: Tip of tongue (most reliable), oral mucosa, inner aspect of lips",
                    "Peripheral cyanosis: Ear lobules, nail beds, fingertips, tip of nose, ala nasi, palms, soles",
                    "Tongue involvement ALWAYS = central cyanosis (never peripheral)"
                ],
                types: [
                    "Central cyanosis: Imperfect oxygenation in lungs OR R-to-L cardiac shunt; tongue always involved; O₂ improves it (except cyanotic CHD)",
                    "Peripheral cyanosis: Normal arterial O₂ saturation but excess O₂ extraction at capillaries; tongue NOT involved; O₂ + warmth relieves it"
                ],
                causes: [
                    "Central — Cardiac: TOF, ASD, VSD, PDA (R-to-L shunt), LVF, pulmonary oedema",
                    "Central — Respiratory: Severe asthma, COPD, massive pneumonia, tension pneumothorax, massive PE, ARDS, DPLD",
                    "Central — Others: High altitude, polycythaemia, respiratory centre depression (narcotic poisoning)",
                    "Peripheral — Exposure to cold (most common), Raynaud's phenomenon",
                    "Peripheral — Reduced cardiac output: heart failure, shock, aortic stenosis",
                    "Peripheral — Venous occlusion, sluggish circulation"
                ]
            },
            "Clubbing": {
                icon: "🫸",
                description: "Bulbous enlargement of the terminal phalanges with loss of the normal angle between nail and nail bed (Lovibond angle >180°). Nail-bed fluctuation is the earliest sign.",
                site: [
                    "Fingers (all digits, start with index finger)",
                    "Schamroth's window test: patient appositions nails of both thumbs — gap absent = clubbing",
                    "Toes (check if clubbing is present in fingers)",
                    "Assess: Profile angle, nail-bed fluctuation (palpate nail base with two index fingers)",
                    "Grades: Grade 1 = fluctuation; Grade 2 = obliterated angle; Grade 3 = drumstick; Grade 4 = hypertrophic osteoarthropathy"
                ],
                types: [
                    "Simple clubbing: Fingers only",
                    "Hypertrophic pulmonary osteoarthropathy (HPOA): Clubbing + periostitis + arthralgia (lung cancer)",
                    "Thyroid acropachy: Clubbing specific to Graves' disease"
                ],
                causes: [
                    "Respiratory (most common): Bronchial carcinoma (commonest), bronchiectasis, empyema, lung abscess, cystic fibrosis, DPLD/IPF, mesothelioma",
                    "Cardiac: Cyanotic congenital heart disease (TOF), infective endocarditis, atrial myxoma",
                    "GI/Hepatic: Cirrhosis of liver, Crohn's disease, UC, coeliac disease, GI lymphoma",
                    "Familial/Idiopathic: Pachydermoperiostosis (rare genetic)",
                    "NOT caused by: COPD, asthma, pleural effusion, pneumothorax"
                ]
            },
            "JVP / Neck Vein": {
                icon: "🩸",
                description: "Jugular Venous Pressure reflects right atrial pressure. Normal JVP is ≤3–4 cm above the sternal angle (i.e., ≤8–9 cm from the right atrium) with patient reclined at 45°.",
                site: [
                    "Right internal jugular vein (preferred — direct line to right atrium)",
                    "Patient reclined at 45°, neck muscles relaxed, head turned slightly left",
                    "Measure vertical height from sternal angle to top of visible pulsation",
                    "Hepatojugular reflux: press over liver for 10–15 sec, watch for sustained rise in JVP",
                    "Distinguish from carotid pulse: JVP is non-palpable, has double waveform, varies with respiration and position, obliterated by pressure"
                ],
                types: [
                    "Raised JVP",
                    "Normal JVP",
                    "Low JVP"
                ],
                causes: [
                    "Raised JVP — Congestive cardiac failure (right heart failure)",
                    "Raised JVP — Constrictive pericarditis / cardiac tamponade",
                    "Raised JVP — Tricuspid regurgitation / stenosis",
                    "Raised JVP — Superior vena cava obstruction (non-pulsatile, no waveform)",
                    "Raised JVP — Fluid overload (renal failure, excess IV fluids)",
                    "Raised JVP — Cor pulmonale",
                    "Low JVP — Hypovolemia / dehydration",
                    "Low JVP — Shock (hypovolemic / haemorrhagic)"
                ]
            },
            "Koilonychia": {
                icon: "🩴",
                description: "Spoon-shaped nails — nails become thin, flat, brittle and eventually concave (concavity replaces normal convexity). A water drop placed on nail stays without falling off.",
                site: [
                    "Fingernails (most prominent on index and middle fingers)",
                    "Observe nail profile: flat → concave → spoon-shaped",
                    "Stages: Thinning → Flattening → Brittle → Concavity → Spoon-shaped"
                ],
                types: [],
                causes: [
                    "Iron deficiency anaemia → MOST COMMON cause; cardinal sign of IDA",
                    "Fungal nail infection (tinea unguium, lichen planus)",
                    "Repeated chemical exposure → Detergents, petroleum products",
                    "Haemochromatosis (rare)",
                    "Raynaud's disease (peripheral vascular cause)"
                ]
            },
            "Leuconychia": {
                icon: "🤍",
                description: "White discoloration of the nails due to hypoalbuminaemia. Nails appear completely or partially white (opaque). Reflects chronic protein loss or deficiency.",
                site: [
                    "All fingernails (bilateral, symmetrical)",
                    "Terry's nails: proximal 2/3 white, distal 1/3 normal (liver cirrhosis)",
                    "Half-and-half nails (Lindsay's): proximal white, distal red-brown (CKD)"
                ],
                types: [
                    "True leuconychia: Abnormality of nail plate itself",
                    "Apparent leuconychia: Nail bed abnormality — blanches on pressure"
                ],
                causes: [
                    "Hypoalbuminaemia — the KEY mechanism for all causes below:",
                    "Cirrhosis of liver (CLD) → Most common; albumin synthesis reduced",
                    "Nephrotic syndrome → Protein lost in urine; massive proteinuria",
                    "Protein-losing enteropathy → Malabsorption, IBD, Crohn's disease",
                    "Protein energy malnutrition (Kwashiorkor) → Dietary protein deficiency",
                    "Congestive cardiac failure → Gut congestion → protein loss"
                ]
            },
            "Oedema": {
                icon: "💧",
                description: "Accumulation of excess fluid in the interstitial tissue spaces. Clinically detected as pitting oedema (press for 30 seconds over medial malleolus — pit remains).",
                site: [
                    "Bilateral pitting pedal oedema — press over medial malleolus for 30 seconds",
                    "Sacral oedema — over sacral dimple of Venus (bedridden patients)",
                    "Periorbital oedema — puffy face on waking (nephrotic syndrome)",
                    "Generalised (anasarca) — face, trunk, genitalia, ascites, pleural effusion",
                    "Grading: +1 (just detectable) to +4 (very deep pitting, >8mm)"
                ],
                types: [
                    "Pitting oedema: Leaves pit on pressure — cardiac, hepatic, renal, nutritional",
                    "Non-pitting oedema: No pit — lymphoedema, myxoedema (hypothyroidism)",
                    "Localised oedema: One limb — DVT, cellulitis, lymphatic obstruction",
                    "Generalised oedema (Anasarca): Systemic cause — cardiac, hepatic, renal"
                ],
                causes: [
                    "Cardiac oedema → CCF; bilateral pitting; starts at ankles; JVP raised; orthopnoea",
                    "Nephrotic syndrome → Heavy proteinuria; periorbital oedema (morning); hypoalbuminaemia",
                    "Hepatic (Cirrhosis/CLD) → Hypoalbuminaemia + portal hypertension; ascites prominent",
                    "Nutritional (Kwashiorkor) → Protein deficiency; low albumin; common in children",
                    "Hypothyroidism (Myxoedema) → Non-pitting; pretibial; bradycardia; cold intolerance",
                    "Lymphoedema → Non-pitting; post-mastectomy, filariasis, malignant obstruction",
                    "DVT → Unilateral hot tender swollen leg; calf tenderness; Homan's sign",
                    "Hypoproteinaemia → CLD, nephrotic, protein-losing enteropathy, malnutrition"
                ]
            },
            "Pulse Abnormalities": {
                icon: "💓",
                description: "The rhythmic expansion of an artery due to ventricular systole. Examine: rate, rhythm, volume, character, vessel wall condition, radio-femoral delay.",
                site: [
                    "Rate and rhythm: Radial artery (lateral to flexor carpi radialis at wrist)",
                    "Volume and character: Carotid artery (angle of jaw, anterior to SCM)",
                    "Radio-radial delay: Simultaneous both wrists",
                    "Radio-femoral delay: Right radial + right femoral simultaneously"
                ],
                types: [
                    "Tachycardia: >100/min — fever, anaemia, thyrotoxicosis, heart failure, shock",
                    "Bradycardia: <60/min — hypothyroidism, heart block, raised ICP, cholestatic jaundice",
                    "Relative bradycardia: Pulse slower than expected for temperature → Enteric fever (Typhoid)",
                    "Irregularly irregular: Atrial fibrillation (AF)",
                    "Regularly irregular: 2nd degree heart block, sinus arrhythmia"
                ],
                causes: [
                    "Collapsing/Water-hammer pulse → Aortic regurgitation, PDA, hyperdynamic circulation, large AV fistula",
                    "Slow-rising/Anacrotic pulse → Severe aortic stenosis (low volume, late peak)",
                    "Jerky pulse → Hypertrophic cardiomyopathy (HOCM)",
                    "Pulsus alternans → Left ventricular failure (alternating strong-weak beats, regular rhythm)",
                    "Pulsus paradoxus → Severe asthma, cardiac tamponade, constrictive pericarditis (fall >15mmHg on inspiration)",
                    "Pulsus bisferiens → Mixed AS + AR; double systolic peak",
                    "Radio-femoral delay → Coarctation of aorta",
                    "Absent radial pulse → Takayasu's arteritis (pulseless disease)"
                ]
            },
            "Fever Patterns": {
                icon: "🌡️",
                description: "Elevation of core body temperature >38°C (>100.4°F). Type and pattern of fever guides diagnosis. Always assess: duration, pattern, diurnal variation, associated symptoms.",
                site: [
                    "Oral (under tongue): Standard — 37°C normal",
                    "Axilla: 0.5°C lower than oral — least reliable",
                    "Rectal: 0.5°C higher than oral — most accurate for core temperature",
                    "Tympanic (ear): Quick, reliable for screening"
                ],
                types: [
                    "Continuous fever: Persists all day, fluctuation <1°C, never touches baseline → Typhoid, lobar pneumonia, miliary TB, dengue",
                    "Remittent fever: Persists all day, fluctuation >2°C, never touches baseline → Amoebic abscess, lung abscess, infective endocarditis",
                    "Intermittent fever: Present few hours, touches baseline → Malaria (tertian 48h P.vivax, quartan 72h P.malariae), septicaemia",
                    "Pel-Ebstein fever: Fever for days then afebrile for days → Hodgkin's lymphoma",
                    "Hectic/Septic fever: Wide swings with rigors → Pyaemia, abscesses"
                ],
                causes: [
                    "Enteric fever (Typhoid) → Stepwise rising continuous fever + relative bradycardia + rose spots + constipation",
                    "Malaria → Paroxysmal intermittent fever with rigors + splenomegaly + anaemia + travel history",
                    "Dengue → Saddle-back biphasic fever + myalgia + retro-orbital headache + tourniquet test positive",
                    "Tuberculosis → Low-grade continuous fever + night sweats + weight loss + cough >2 weeks",
                    "Infective endocarditis → Persistent remittent fever + new murmur + embolic signs + Osler's nodes",
                    "Lymphoma (Hodgkin's) → Pel-Ebstein fever + night sweats + pruritus + painless lymphadenopathy",
                    "Kala-azar → Prolonged fever + massive splenomegaly + pancytopenia + skin hyperpigmentation",
                    "PUO → Fever >38.3°C for >3 weeks with no diagnosis after 3 days of investigation"
                ]
            },
            "Lymphadenopathy": {
                icon: "🔵",
                description: "Palpable enlargement of lymph nodes (normally <1 cm). Assess: site, size, consistency, tenderness, surface, matting, skin over node, transillumination.",
                site: [
                    "Cervical: Anterior and posterior triangles of the neck; sub-mandibular, sub-mental",
                    "Axillary: Central, anterior, posterior, medial, lateral groups (examine with arm abducted)",
                    "Inguinal: Horizontal (inguinal ligament) and vertical (great saphenous) groups",
                    "Epitrochlear: Above medial epicondyle (syphilis, NHL, sarcoidosis)",
                    "Abdominal/Para-aortic: Percussion and palpation (large nodes only)",
                    "Virchow's node: Left supraclavicular → GI malignancy (Troisier's sign)"
                ],
                types: [
                    "Localised: One group — local infection, TB, lymphoma, metastasis",
                    "Generalised: Multiple groups — systemic infection (HIV, EBV, CMV), leukaemia, lymphoma, SLE",
                    "Tender: Acute infection, abscess",
                    "Non-tender, rubbery: Lymphoma (Hodgkin's/NHL)",
                    "Non-tender, hard, fixed, irregular: Metastatic malignancy",
                    "Matted: TB lymphadenitis (nodes stuck together, may have collar-stud abscess)"
                ],
                causes: [
                    "Infective (most common): Viral — EBV (glandular fever), CMV, HIV; Bacterial — TB (commonest in BD), pyogenic",
                    "Tuberculosis → Cervical, matted, cold abscess; collar-stud; caseating granuloma on biopsy",
                    "HIV/AIDS → Generalised persistent lymphadenopathy (PGL) >1cm in ≥2 extrainguinal sites",
                    "Hodgkin's lymphoma → Rubbery, non-tender cervical nodes; Pel-Ebstein fever; alcohol-induced pain",
                    "Non-Hodgkin's lymphoma → Generalised; more extranodal involvement than Hodgkin's",
                    "CLL → Generalised symmetrical rubbery nodes + splenomegaly + smudge cells",
                    "Metastatic carcinoma → Hard, fixed, irregular; find primary (breast, thyroid, GI, lung)",
                    "SLE/Sarcoidosis/Reactive → Generalised; soft to firm; associated systemic features"
                ]
            },
            "Dehydration": {
                icon: "🏜️",
                description: "Deficit of total body water due to inadequate intake or excess loss. Assessed clinically by skin turgor, mucous membranes, eyes, urine output and vital signs.",
                site: [
                    "Skin turgor: Pinch lateral abdominal skin — tenting (>2 seconds) = significant dehydration",
                    "Mucous membranes: Dry tongue, dry mouth",
                    "Eyes: Sunken eyeballs (severe dehydration)",
                    "Fontanelle: Sunken in infants",
                    "Urine output: Oliguria (<0.5 mL/kg/hr) or anuria"
                ],
                types: [
                    "Mild (<5%): Thirst, slightly dry mucous membranes",
                    "Moderate (5–10%): Reduced skin turgor, sunken eyes, tachycardia, oliguria",
                    "Severe (>10%): Shock — hypotension, cold extremities, altered consciousness, anuria"
                ],
                causes: [
                    "Diarrhoea and vomiting → Most common worldwide; gastroenteritis, cholera",
                    "Cholera → Profuse rice-water stools; rapid severe dehydration; no fever",
                    "Diabetic ketoacidosis (DKA) → Osmotic diuresis; Kussmaul breathing; fruity breath",
                    "Excessive sweating → Fever, heat stroke, vigorous exercise",
                    "Burns → Large fluid loss through damaged skin",
                    "Inadequate intake → Elderly, unconscious patients, dysphagia",
                    "Diabetes insipidus → Massive urine output (>3L/day); high serum Na+"
                ]
            },
            "Built / Nutrition": {
                icon: "📏",
                description: "Overall assessment of body habitus, weight and nutritional status — done by inspection along with weight, height and BMI measurement.",
                site: [
                    "General inspection — observe body frame, muscle bulk, subcutaneous fat",
                    "Weight — accurate weighing scale",
                    "Height — calibrated stadiometer (standing straight, heels together)",
                    "BMI = Weight (kg) / Height (m)²",
                    "Mid-arm circumference — quick nutritional screening tool"
                ],
                types: [
                    "Built: Thin / Average (Moderate) / Obese",
                    "Nutrition: Well-nourished / Moderately nourished / Poorly nourished (cachexic)",
                    "BMI: Underweight <18.5 / Normal 18.5–24.9 / Overweight 25–29.9 / Obese ≥30"
                ],
                causes: [
                    "Poorly nourished / Cachexic → Malignancy, chronic TB, CKD, CLD, malabsorption, prolonged starvation, anorexia nervosa",
                    "Obese → Simple obesity, Cushing's syndrome, hypothyroidism, PCOS, drug-induced (steroids)",
                    "Thin, tall stature → Marfan's syndrome",
                    "Short stature → Hypothyroidism (childhood), Turner's syndrome, achondroplasia, chronic illness in childhood",
                    "Generalized wasting + loose skin → Recent rapid weight loss (malignancy, uncontrolled DM, thyrotoxicosis)"
                ]
            },
            "Skin (General Findings)": {
                icon: "🧴",
                description: "General inspection of the skin for colour, pigmentation, scars, striae, bruising and lesions — part of routine general examination, done in good daylight.",
                site: [
                    "Entire exposed skin surface — face, trunk, limbs",
                    "Pressure areas — sacrum, heels (for bedridden patients)",
                    "Skin folds and creases — palmar creases, axilla",
                    "Look for scars, striae, bruising, petechiae, pigmentation changes"
                ],
                types: [
                    "Pigmentation: Hyperpigmentation / Hypopigmentation / Normal",
                    "Bruising: Petechiae (pinpoint) / Purpura / Ecchymoses (large)",
                    "Striae: Pink/purple (recent) or White/silvery (old)",
                    "Texture: Dry and coarse / Smooth and thin / Normal"
                ],
                causes: [
                    "Generalized hyperpigmentation → Addison's disease, hemochromatosis, chronic renal failure",
                    "Palmar crease + buccal pigmentation → Addison's disease",
                    "Purple/pink abdominal striae → Cushing's syndrome (also simple weight gain, pregnancy — silvery striae)",
                    "Easy bruising / purpura → Thrombocytopenia, coagulopathy, steroid use, senile purpura, vasculitis",
                    "Dry, coarse skin → Hypothyroidism",
                    "Thin, papery skin → Cushing's syndrome, old age, long-term steroid use",
                    "Spider naevi + palmar erythema → Chronic liver disease",
                    "Bronze pigmentation + diabetes → Hemochromatosis ('bronze diabetes')"
                ]
            },
            "Cyanosis vs Clubbing": {
                icon: "🆚",
                description: "Quick differentiator card — Cyanosis is bluish discolouration (acute sign); Clubbing is chronic structural nail change. Both seen in cardiorespiratory disease.",
                site: [],
                types: [],
                causes: [
                    "Both present together → Cyanotic congenital heart disease (TOF, Eisenmenger's)",
                    "Clubbing without cyanosis → Lung cancer, bronchiectasis, cirrhosis, IBD, infective endocarditis",
                    "Cyanosis without clubbing → Acute LVF, acute severe asthma, massive PE, pneumothorax",
                    "COPD: May have central cyanosis — does NOT cause clubbing (important exam point)",
                    "Lung abscess, empyema: Clubbing YES; cyanosis only if severe"
                ]
            }
        }
    }
};

let activeQType = null;
let activeQSubtype = null;

function renderQuestionsTypes() {
    const typeContainer = document.getElementById("questions-type-buttons");
    if (!typeContainer) return;
    typeContainer.innerHTML = "";
    Object.keys(questionsData).forEach(key => {
        const btn = document.createElement("button");
        btn.className = "q-type-btn" + (activeQType === key ? " active" : "");
        btn.textContent = questionsData[key].label;
        btn.onclick = () => {
            activeQType = key;
            activeQSubtype = null;
            renderQuestionsTypes();
            renderQSubtypes();
            document.getElementById("questions-content-area").innerHTML = "";
        };
        typeContainer.appendChild(btn);
    });
    renderQSubtypes();
}

function renderQSubtypes() {
    const area = document.getElementById("questions-subtype-area");
    if (!area) return;
    if (!activeQType) { area.innerHTML = ""; return; }
    const subtypes = questionsData[activeQType].subtypes;
    area.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "q-subtype-grid";
    Object.keys(subtypes).forEach(sub => {
        const btn = document.createElement("button");
        btn.className = "q-subtype-btn" + (activeQSubtype === sub ? " active" : "");
        btn.textContent = (subtypes[sub].icon || "") + " " + sub;
        btn.onclick = () => {
            activeQSubtype = sub;
            renderQSubtypes();
            renderQContent();
        };
        grid.appendChild(btn);
    });
    area.appendChild(grid);
    if (activeQSubtype) renderQContent();
}

function renderQContent() {
    const area = document.getElementById("questions-content-area");
    if (!area || !activeQType || !activeQSubtype) return;
    const data = questionsData[activeQType].subtypes[activeQSubtype];
    if (!data) return;
    area.innerHTML = "";

    // ── Gen Exam Causes format ──────────────────────────────
    if (data.description !== undefined) {
        // Description card
        const descCard = document.createElement("div");
        descCard.className = "q-card";
        descCard.style.borderLeftColor = "#2563eb";
        const descTitle = document.createElement("div");
        descTitle.className = "q-card-title";
        descTitle.style.color = "#1e3a8a";
        descTitle.textContent = (data.icon || "") + " " + activeQSubtype;
        const descP = document.createElement("p");
        descP.style.cssText = "font-size:12px;color:var(--text);line-height:1.6;margin:6px 0 0;";
        descP.textContent = data.description;
        descCard.appendChild(descTitle);
        descCard.appendChild(descP);
        area.appendChild(descCard);

        // Site card
        if (data.site && data.site.length > 0) {
            const sCard = document.createElement("div");
            sCard.className = "q-card";
            sCard.style.borderLeftColor = "#16a34a";
            const sTitle = document.createElement("div");
            sTitle.className = "q-card-title";
            sTitle.style.color = "#14532d";
            sTitle.textContent = "📍 Site to Look";
            const sUl = document.createElement("ul");
            data.site.forEach(s => {
                const li = document.createElement("li");
                li.textContent = s;
                li.style.color = "#166534";
                sUl.appendChild(li);
            });
            sCard.appendChild(sTitle);
            sCard.appendChild(sUl);
            area.appendChild(sCard);
        }

        // Types card
        if (data.types && data.types.length > 0) {
            const tCard = document.createElement("div");
            tCard.className = "q-card";
            tCard.style.borderLeftColor = "#7c3aed";
            const tTitle = document.createElement("div");
            tTitle.className = "q-card-title";
            tTitle.style.color = "#4c1d95";
            tTitle.textContent = "📊 Types / Grading";
            const tUl = document.createElement("ul");
            data.types.forEach(t => {
                const li = document.createElement("li");
                li.textContent = t;
                li.style.color = "#5b21b6";
                tUl.appendChild(li);
            });
            tCard.appendChild(tTitle);
            tCard.appendChild(tUl);
            area.appendChild(tCard);
        }

        // Causes card
        if (data.causes && data.causes.length > 0) {
            const cCard = document.createElement("div");
            cCard.className = "q-card";
            cCard.style.borderLeftColor = "#e76f51";
            const cTitle = document.createElement("div");
            cTitle.className = "q-card-title";
            cTitle.style.color = "#7c2d12";
            cTitle.style.borderBottomColor = "#fde8df";
            cTitle.textContent = "🔎 Key Causes";
            const cUl = document.createElement("ul");
            data.causes.forEach(c => {
                const li = document.createElement("li");
                const parts = c.split("→");
                if (parts.length >= 2) {
                    const bold = document.createElement("strong");
                    bold.textContent = parts[0].trim();
                    bold.style.color = "#c2410c";
                    li.appendChild(bold);
                    li.appendChild(document.createTextNode(" → " + parts.slice(1).join("→").trim()));
                } else {
                    li.textContent = c;
                }
                li.style.cssText = "color:#7c2d12;font-size:12px;line-height:1.6;";
                cUl.appendChild(li);
            });
            cCard.appendChild(cTitle);
            cCard.appendChild(cUl);
            area.appendChild(cCard);
        }
        return;
    }

    // ── Original Questions format ───────────────────────────
    const qCard = document.createElement("div");
    qCard.className = "q-card";
    const qTitle = document.createElement("div");
    qTitle.className = "q-card-title";
    qTitle.textContent = (data.icon || "") + " " + activeQSubtype + " — Questions to Ask";
    const qUl = document.createElement("ul");
    data.questions.forEach(q => {
        const li = document.createElement("li");
        li.textContent = q;
        qUl.appendChild(li);
    });
    qCard.appendChild(qTitle);
    qCard.appendChild(qUl);
    area.appendChild(qCard);

    // ── Clinical Examination Notes (study reference only, e.g. Nervous System) ──
    if (data.clinicalExamNotes && data.clinicalExamNotes.length > 0) {
        data.clinicalExamNotes.forEach(section => {
            const eCard = document.createElement("div");
            eCard.className = "q-card";
            eCard.style.borderLeftColor = "#2563eb";
            const eTitle = document.createElement("div");
            eTitle.className = "q-card-title";
            eTitle.style.color = "#1e3a8a";
            eTitle.style.borderBottomColor = "#dbeafe";
            eTitle.textContent = "🩺 " + section.title;
            const eUl = document.createElement("ul");
            section.points.forEach(p => {
                const li = document.createElement("li");
                li.textContent = p;
                li.style.cssText = "color:#1e3a8a;font-size:12px;line-height:1.6;";
                eUl.appendChild(li);
            });
            eCard.appendChild(eTitle);
            eCard.appendChild(eUl);
            area.appendChild(eCard);
        });
    }

    if (data.causes && data.causes.length > 0) {
        const cCard = document.createElement("div");
        cCard.className = "q-card";
        cCard.style.borderLeftColor = "#e76f51";
        const cTitle = document.createElement("div");
        cTitle.className = "q-card-title";
        cTitle.style.color = "#7c2d12";
        cTitle.style.borderBottomColor = "#fde8df";
        cTitle.textContent = "🔎 Causes — What This Symptom Indicates";
        const cUl = document.createElement("ul");
        data.causes.forEach(c => {
            const li = document.createElement("li");
            const parts = c.split("→");
            if (parts.length === 2) {
                li.innerHTML = "";
                const left = document.createTextNode(parts[0] + "→ ");
                const right = document.createElement("strong");
                right.textContent = parts[1].trim();
                right.style.color = "#c2410c";
                li.appendChild(left);
                li.appendChild(right);
            } else {
                li.textContent = c;
            }
            li.style.color = "#7c2d12";
            cUl.appendChild(li);
        });
        cCard.appendChild(cTitle);
        cCard.appendChild(cUl);
        area.appendChild(cCard);
    }
}

// Initialize Questions on tab show
const _origShowTab = showTab;
// Patch showTab to init questions
(function() {
    const origShowTab = window.showTab;
    window.showTab = function(id, tabEl) {
        origShowTab(id, tabEl);
        if (id === 'questions') renderQuestionsTypes();
    };
})();




// ── MANAGEMENT DATA ──────────────────────────────────
// SYSEXAM_MAP loaded from data/sysexam.js

// MGMT_MAP loaded from data/mgmt.js


function normName(n) { return n.toLowerCase().replace(/[^a-z0-9]/g, ''); }

function findMgmt(diseaseName) {
  const dn = normName(diseaseName);
  for (const [key, val] of Object.entries(MGMT_MAP)) {
    const kn = normName(key);
    if (kn === dn) return val;
  }
  // partial/substring match
  for (const [key, val] of Object.entries(MGMT_MAP)) {
    const kn = normName(key);
    if (dn.length >= 6 && kn.length >= 6 && (dn.includes(kn.slice(0,8)) || kn.includes(dn.slice(0,8)))) return val;
  }
  return null;
}

function renderMgmt(mgmt) {
  if (!mgmt) return '';
  
  const gmHTML = mgmt.gm.map(g => `<li>${g}</li>`).join('');
  const pmHTML = mgmt.pm.map(p => `<li><span class="mgmt-drug-name">${p.name}</span>${p.dose ? `<span class="mgmt-drug-dose"> — ${p.dose}</span>` : ''}</li>`).join('');
  const testsHTML = mgmt.tests.map(t => `<li><span class="mgmt-test-name">${t.name}</span>${t.note ? `<br><span class="mgmt-test-note">${t.note}</span>` : ''}</li>`).join('');
  
  return `
    <div class="mgmt-sections">
      <div class="mgmt-block mgmt-gm">
        <div class="mgmt-block-title">🛡️ General Management</div>
        <ul class="mgmt-list">${gmHTML}</ul>
      </div>
      <div class="mgmt-block mgmt-pm">
        <div class="mgmt-block-title">💊 Pharmacological Management</div>
        <ul class="mgmt-list">${pmHTML}</ul>
      </div>
      <div class="mgmt-block mgmt-tests">
        <div class="mgmt-block-title">🔬 Tests &amp; Investigations</div>
        <ul class="mgmt-list">${testsHTML}</ul>
      </div>
    </div>`;
}
