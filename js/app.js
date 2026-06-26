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
  if (id === 'casepres') cpInit();
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

  // ── FEEDBACK: show rating bar once per session ────────────
  if (!sessionStorage.getItem('wm_ddx_rated')) {
    setTimeout(() => {
      const bar = document.getElementById('ddx-feedback-bar');
      if (bar) bar.style.display = 'flex';
    }, 800);
  }
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
                ],
                clinicalExamNotes: [
                    {
                        title: "All Arterial Pulses — Step-by-Step Procedures (Macleod's)",
                        points: [
                            "ALWAYS assess 4 things: Rate · Rhythm · Volume · Character. Rate & rhythm at radial. Volume & character at brachial or carotid",
                            "── RADIAL PULSE (Rate & Rhythm) ──",
                            "PROCEDURE: Place pads of index + middle fingers over the right wrist, just LATERAL to the flexor carpi radialis tendon (the prominent tendon at the wrist crease on the thumb side)",
                            "Press gently — do not press too hard or you will obliterate the pulse",
                            "Count beats for 15 seconds then multiply by 4 = rate in bpm. Normal resting rate: 50–95 bpm",
                            "Assess rhythm: regular / regularly irregular / irregularly irregular",
                            "Also palpate BOTH radial pulses simultaneously — assess for any delay between the two (radio-radial delay → subclavian artery stenosis or aortic dissection)",
                            "Collapsing pulse test: First ask — any shoulder or arm pain? If no, feel pulse with base (heel) of fingers at wrist, then raise patient's arm VERTICALLY above head rapidly — a slapping water-hammer sensation = collapsing pulse → Aortic Regurgitation",
                            "── BRACHIAL PULSE (Volume & Character) ──",
                            "PROCEDURE: Cup your hand under the patient's elbow to support it. Use your THUMB to palpate in the antecubital fossa, just MEDIAL to the biceps tendon",
                            "Use RIGHT thumb for patient's right arm, LEFT thumb for patient's left arm",
                            "Best artery to assess volume and character of the pulse waveform",
                            "── CAROTID PULSE (Best for Character) ──",
                            "PROCEDURE: Explain what you are about to do. Position patient semi-recumbent",
                            "Place tips of fingers between the LARYNX and the ANTERIOR BORDER of sternocleidomastoid muscle — feel the pulsation deep in the groove",
                            "Palpate GENTLY — too much pressure causes vagal reflex (bradycardia/syncope)",
                            "NEVER palpate both carotids simultaneously — risk of cutting off cerebral blood flow",
                            "Listen for bruits over both carotids using DIAPHRAGM, patient holds breath in inspiration",
                            "Coincidence trick: S1 occurs just BEFORE carotid upstroke — use simultaneous carotid palpation to time heart sounds during auscultation",
                            "── FEMORAL PULSE ──",
                            "PROCEDURE: Ask patient to lie down. Place pads of index + middle fingers at the MID-INGUINAL POINT — halfway between the anterior superior iliac spine (ASIS) and the pubic symphysis",
                            "Press firmly — this is a deep artery especially in obese patients",
                            "Palpate femoral and radial pulses SIMULTANEOUSLY → radio-femoral delay = Coarctation of Aorta",
                            "Listen for femoral bruit using diaphragm (though presence/absence of bruit has limited value in assessing aortoiliac disease severity)",
                            "── POPLITEAL PULSE ──",
                            "PROCEDURE: Ask patient to lie down. Flex their knee to approximately 30 degrees",
                            "Place both THUMBS on the tibial tuberosity anteriorly and curl all fingers into the POPLITEAL FOSSA posteriorly (2–3 cm below the skin crease, in the midline)",
                            "Try to compress the artery against the BACK OF THE TIBIA using fingertips",
                            "This pulse is normally HARD TO FEEL — if it is easily palpable, suspect a POPLITEAL ARTERY ANEURYSM",
                            "── POSTERIOR TIBIAL PULSE ──",
                            "PROCEDURE: Place pads of MIDDLE THREE FINGERS along the groove between the MEDIAL MALLEOLUS and the TIP OF THE HEEL (posteromedial aspect of ankle)",
                            "Press gently in this groove — the artery runs here behind the medial malleolus",
                            "── ANTERIOR TIBIAL / DORSALIS PEDIS PULSE ──",
                            "Anterior tibial artery continues as the dorsalis pedis on the dorsum of the foot",
                            "PROCEDURE: Using pads of MIDDLE THREE FINGERS, feel on the DORSUM OF THE FOOT at the origin of the FIRST WEB SPACE, just LATERAL to the tendon of extensor hallucis longus (the tendon that pops up when you cock the big toe upward)",
                            "Note: Dorsalis pedis is congenitally absent in ~10% of normal individuals — always check posterior tibial as well",
                            "── THEORY: Rate & Rhythm ──",
                            "Bradycardia <60 bpm | Tachycardia >100 bpm",
                            "Regular = sinus rhythm | Regularly irregular = ectopics or 2nd degree block | Irregularly irregular = AF (no pattern at all)",
                            "Pulse deficit in AF: apical rate > radial rate — some beats too weak to reach the wrist. Calculate: apical rate (auscultation) minus radial rate = deficit"
                        ]
                    },
                    {
                        title: "Pulse Character — Types & Clinical Meaning (Macleod's)",
                        points: [
                            "Slow-rising pulse: Gradual upstroke, reduced peak late in systole → Severe Aortic Stenosis",
                            "Collapsing / Waterhammer pulse: Sharp rapid rise then rapid fall; wide pulse pressure (systolic − diastolic >80 mmHg) → Aortic Regurgitation",
                            "Pulsus paradoxus: Pulse falls or disappears on inspiration (>10 mmHg drop in SBP on inspiration) → Cardiac Tamponade; also severe asthma, pericardial constriction",
                            "Pulsus alternans: Alternating strong and weak beats with regular rhythm → Severe LV failure",
                            "Pulsus bisferiens (Jerky/Bifid): Double systolic peak with mid-systolic dip → Combined AS + AR, or HOCM",
                            "Low volume pulse: Severe heart failure, hypovolaemia, cardiac tamponade, Mitral Stenosis",
                            "Large volume pulse: Exercise, pregnancy, anaemia, thyrotoxicosis, Aortic Regurgitation",
                            "Radio-femoral delay: Coarctation of Aorta (narrowing just distal to left subclavian artery)",
                            "Asymmetric pulses (one side weaker): Occlusive peripheral arterial disease, subclavian stenosis, aortic dissection"
                        ]
                    },
                    {
                        title: "Blood Pressure — Measurement Technique (Macleod's)",
                        points: [
                            "Rest patient for 5 minutes before measurement",
                            "Measure in BOTH arms — use the higher reading. >10 mmHg difference between arms suggests aortic or subclavian artery disease",
                            "Arm supported at heart level, no tight clothing on upper arm. Use correct cuff size (bladder ~80% arm length, 40% arm width)",
                            "Inflate until brachial pulse impalpable, then 30 mmHg more. Place diaphragm over brachial artery. Deflate at 2–3 mmHg/second",
                            "Phase 1 Korotkoff (first tapping sound) = Systolic BP",
                            "Phase 5 Korotkoff (sounds completely disappear) = Diastolic BP. If sounds persist, use phase 4 (muffling)",
                            "Postural hypotension: Drop >20 mmHg systolic on standing after 2 minutes → hypovolaemia, autonomic neuropathy, antihypertensives, elderly",
                            "ESC/ESH Classification: Optimal <120/<80 | Normal 120–129/80–84 | High Normal 130–139/85–89 | Grade 1 HTN 140–159/90–99 | Grade 2 HTN 160–179/100–109 | Grade 3 HTN ≥180/≥110"
                        ]
                    },
                    {
                        title: "JVP — Jugular Venous Pressure (Macleod's)",
                        points: [
                            "JVP reflects right atrial pressure. Normal JVP: <3 cm above sternal angle at 45°",
                            "Position: Patient reclined at 45°, head on pillow, turned slightly left, neck muscles relaxed",
                            "Look across neck from the right side — identify pulsation behind sternocleidomastoid (internal jugular vein)",
                            "Measure: vertical height in cm from sternal angle to upper limit of venous pulsation",
                            "JVP vs carotid: JVP is non-palpable | 2 peaks per beat (a + v waves) | obliterated by gentle neck pressure | falls on inspiration | varies with position — carotid has none of these",
                            "Abdominojugular test: Press firmly over abdomen — JVP normally rises briefly. Sustained rise >10 sec = heart failure",
                            "Kussmaul's sign: Paradoxical RISE of JVP on inspiration → Pericardial constriction, severe RV failure",
                            "Raised JVP: Heart failure, PE, cardiac tamponade, pericardial constriction, SVC obstruction",
                            "Waveform: Giant 'a' waves → pulmonary HTN, tricuspid stenosis | Giant 'v' waves → tricuspid regurgitation | Absent 'a' waves → AF | Cannon waves → complete heart block"
                        ]
                    },
                    {
                        title: "Precordium — Inspection & Palpation — All 4 Areas (Macleod's)",
                        points: [
                            "Patient seated at 45°, shoulders horizontal, chest exposed. Look for: scars, visible pulsations, chest deformity",
                            "Scars: Midline sternotomy = valve replacement / CABG | Left submammary = mitral valvotomy | Infraclavicular bulge = pacemaker / defibrillator",
                            "── PALPATION TECHNIQUE (sequence) ──",
                            "Step 1: Place right hand FLAT over precordium — get general impression of cardiac impulse across all areas",
                            "Step 2: Lay fingers PARALLEL to rib spaces → locate most inferior and lateral point of impulse = Apex Beat",
                            "If apex not palpable: roll patient onto LEFT SIDE (left lateral position) — brings apex closer to chest wall",
                            "Step 3: Apply HEEL of right hand firmly to left parasternal area, patient holds breath in expiration — feel for RV heave",
                            "Step 4: Palpate for THRILLS at apex and on both sides of sternum using flat of fingers",
                            "── AREA 1: MITRAL AREA (Apex) — 5th ICS, mid-clavicular line ──",
                            "Location: 5th left intercostal space at or just medial to the mid-clavicular line",
                            "Count down from 2nd ICS (just below sternal angle) to locate correctly",
                            "Normal: Brief, localised lift of fingers. May be impalpable in obese, COPD (hyperinflated lungs), or pericardial effusion",
                            "Displaced laterally (anterior/mid-axillary line, 6th–7th ICS) → LV dilatation: heart failure, severe AR",
                            "Heaving / sustained apex (forceful, not displaced) → LV hypertrophy: hypertension, severe AS",
                            "Tapping apex (not displaced — palpable loud S1) → Mitral Stenosis",
                            "Diffuse, less forceful apex → LV dilatation",
                            "Double apical impulse → HOCM",
                            "── AREA 2: TRICUSPID AREA (Left parasternal) — 4th ICS, left sternal border ──",
                            "Location: 4th left intercostal space, left sternal border",
                            "Palpate with heel of right hand pressed firmly here, breath held in expiration",
                            "RV heave (lifts heel of hand) → RV hypertrophy / dilatation: pulmonary hypertension, ASD, tricuspid regurgitation",
                            "Thrill here → VSD (ventricular septal defect) — also felt at right sternal border simultaneously",
                            "── AREA 3: PULMONARY AREA — 2nd ICS, left sternal border ──",
                            "Location: 2nd left intercostal space, left sternal border",
                            "Palpate with flat of fingers for thrills",
                            "Thrill here → Pulmonary Stenosis",
                            "Palpable P2 (loud pulmonary component of S2) → Pulmonary Hypertension",
                            "── AREA 4: AORTIC AREA — 2nd ICS, right sternal border ──",
                            "Location: 2nd right intercostal space, right sternal border",
                            "Palpate with flat of fingers for thrills",
                            "Thrill here → Aortic Stenosis (most common thrill; also felt over suprasternal notch)",
                            "Thrill from VSD → felt at BOTH left and right sternal borders",
                            "── DEXTROCARDIA ──",
                            "Apex palpable on RIGHT side — prevalence 1:10,000. Always check right side if apex not found on left"
                        ]
                    },
                    {
                        title: "Auscultation — All 4 Areas, Heart Sounds & Added Sounds (Macleod's)",
                        points: [
                            "Diaphragm = high-frequency sounds: S1, S2, AR murmur, ejection systolic murmur",
                            "Bell (light pressure only) = low-frequency sounds: S3, S4, Mitral Stenosis mid-diastolic murmur",
                            "Identify S1 and S2: Palpate carotid simultaneously — S1 just BEFORE carotid upstroke | S2 just AFTER. Systole = S1→S2 | Diastole = S2→next S1",
                            "── SEQUENCE: Diaphragm first at all 4 areas → then bell at areas 1 & 2 → then special positions ──",
                            "── AREA 1: MITRAL AREA (Apex) — 5th ICS, mid-clavicular line ──",
                            "Location: 5th left ICS at mid-clavicular line",
                            "S1 loudest here (mitral valve closure). Listen for: pansystolic murmur of MR (radiates to axilla) | mid-diastolic rumble of MS (bell, left lateral position) | S3, S4 (bell)",
                            "Special position: Roll patient LEFT LATERAL + bell at apex with LIGHT pressure → brings out Mitral Stenosis mid-diastolic murmur. Can ask patient to exercise briefly (clenching fist) to accentuate it",
                            "── AREA 2: TRICUSPID AREA — 4th ICS, left sternal border ──",
                            "Location: 4th left intercostal space, lower left sternal border",
                            "Listen for: pansystolic murmur of Tricuspid Regurgitation (increases with INSPIRATION — Carvallo's sign) | early diastolic murmur of AR (diaphragm, patient leaning forward) | VSD pansystolic murmur",
                            "Early diastolic AR murmur: BEST heard here with diaphragm, patient sitting forward, breath held in FULL EXPIRATION",
                            "── AREA 3: PULMONARY AREA — 2nd ICS, left sternal border ──",
                            "Location: 2nd left intercostal space, left sternal border",
                            "S2 splitting best heard here on inspiration (physiological). Listen for: ejection systolic murmur of PS | loud P2 (pulmonary HTN) | fixed split S2 (ASD)",
                            "Physiological split: A2 then P2 on inspiration — widens. Closes on expiration. Fixed split (no change with breathing) → ASD",
                            "── AREA 4: AORTIC AREA — 2nd ICS, right sternal border ──",
                            "Location: 2nd right intercostal space, right sternal border",
                            "Listen for: ejection systolic murmur of Aortic Stenosis (harsh, radiates to carotids) | ejection click of bicuspid aortic valve just after S1",
                            "Always listen over BOTH CAROTIDS with diaphragm for radiation of AS murmur and for carotid bruits (held inspiration)",
                            "Also listen in LEFT AXILLA for radiation of Mitral Regurgitation murmur",
                            "── SPECIAL POSITIONS ──",
                            "Mitral Stenosis: Left lateral position + bell at apex, light pressure (accentuated by exercise / fist clenching)",
                            "Aortic Regurgitation: Sitting forward, breath held in full expiration, diaphragm at lower left sternal edge",
                            "── HEART SOUNDS ──",
                            "S1 (lub): Closure of mitral + tricuspid. Best at apex. Loud S1 → Mitral Stenosis. Soft S1 → poor LV function, severe MR",
                            "S2 (dub): Closure of aortic (A2) + pulmonary (P2). Best at left sternal edge. Physiological split on inspiration. Fixed split → ASD. Loud P2 → Pulmonary HTN. Absent A2 → severe calcific AS",
                            "S3 (early diastolic gallop, after S2): Low-pitched, bell at apex — rapid ventricular filling phase. Pathological after age 40 → LV failure, MR. Normal in children/young adults/pregnancy",
                            "S4 (pre-systolic gallop, before S1): Low-pitched, bell at apex — atrial contraction against stiff LV. Causes: LVH (HTN, AS), HOCM, ischaemia. Always absent in AF",
                            "Opening Snap: High-pitched sound, early diastole just after S2, diaphragm at apex → Mitral Stenosis. Shorter S2–OS interval = more severe MS",
                            "Ejection Click: Early systole just after S1 → Congenital AS or PS (bicuspid valve). Pulmonary ejection click softens on inspiration. Absent in calcific AS",
                            "Pericardial Rub: Coarse scratching sound, may be biphasic or triphasic, diaphragm, breath held in expiration, patient leaning forward → Pericarditis"
                        ]
                    },
                    {
                        title: "Murmurs — Quick Clinical Reference (Macleod's)",
                        points: [
                            "Grading 1–6: Grade 1 = only expert | Grade 2 = non-expert quiet room | Grade 3 = easily heard, no thrill | Grade 4 = loud + thrill | Grade 5 = very loud, wide area | Grade 6 = without stethoscope",
                            "Aortic Stenosis: Ejection systolic | Aortic area (2nd ICS right) | Radiates to carotids | Harsh | Associated: slow-rising pulse, narrow pulse pressure, heaving apex, reduced A2",
                            "Mitral Regurgitation: Pansystolic | Apex (only below 3rd ICS) | Radiates to left axilla | Blowing | Associated: displaced apex, S3",
                            "Aortic Regurgitation: Early diastolic | Left sternal edge (patient forward, expiration) | Blowing | Associated: collapsing pulse, wide pulse pressure, displaced apex, Corrigan's sign (prominent carotids)",
                            "Mitral Stenosis: Mid-diastolic rumble (low-pitched) | Bell at apex, left lateral position | May follow opening snap | Loud S1 | Associated: tapping apex, AF, pulmonary HTN signs",
                            "Tricuspid Regurgitation: Pansystolic | Lower left sternal edge (4th ICS) | Increases with inspiration | Associated: elevated JVP with giant 'v' waves, pulsatile hepatomegaly",
                            "Innocent murmur: Grade ≤2, short ejection systolic, left sternal edge, no radiation, no thrill — high cardiac output states (pregnancy, anaemia, fever, athletes)",
                            "Continuous machinery murmur below left clavicle → Patent Ductus Arteriosus (PDA)"
                        ]
                    }
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
    "elaboration_symptoms": SYMP_ELABORATION_DATA["elaboration_symptoms"],
    "systemic_inquiry": SYSTEMIC_INQUIRY_DATA["systemic_inquiry"],
    "gen_exam_causes":  GENERAL_EXAM_DATA["gen_exam_causes"]
}

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
                li.style.color = "#166534";
                // Support both plain strings and {text, media} objects
                const itemText = (typeof s === "string") ? s : s.text;
                li.textContent = itemText;
                sUl.appendChild(li);
                // Render images/videos after their site item
                if (s && s.media && s.media.length > 0) {
                    s.media.forEach(m => {
                        if (m.type === "image") {
                            const imgWrap = document.createElement("div");
                            imgWrap.style.cssText = "margin:8px 0 12px 0;";
                            const img = document.createElement("img");
                            img.src = m.url;
                            img.alt = m.caption || itemText;
                            img.style.cssText = "width:100%;max-width:340px;border-radius:10px;border:2px solid #bbf7d0;display:block;box-shadow:0 2px 8px rgba(0,0,0,0.10);";
                            img.onerror = function(){ this.style.display="none"; };
                            imgWrap.appendChild(img);
                            if (m.caption) {
                                const cap = document.createElement("div");
                                cap.textContent = m.caption;
                                cap.style.cssText = "font-size:11px;color:#15803d;margin-top:4px;font-style:italic;";
                                imgWrap.appendChild(cap);
                            }
                            sUl.appendChild(imgWrap);
                        } else if (m.type === "video") {
                            const vidWrap = document.createElement("div");
                            vidWrap.style.cssText = "margin:8px 0 12px 0;";
                            const vid = document.createElement("video");
                            vid.src = m.url;
                            vid.controls = true;
                            vid.style.cssText = "width:100%;max-width:340px;border-radius:10px;border:2px solid #bbf7d0;display:block;";
                            vidWrap.appendChild(vid);
                            if (m.caption) {
                                const cap = document.createElement("div");
                                cap.textContent = m.caption;
                                cap.style.cssText = "font-size:11px;color:#15803d;margin-top:4px;font-style:italic;";
                                vidWrap.appendChild(cap);
                            }
                            sUl.appendChild(vidWrap);
                        }
                    });
                }
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

// ============================================================================
// PEDIATRICS (IMCI) — Rendering Function (Study/Reference Only)
// Reads from PEDIATRICS_DATA (data/pediatrics.js). No DDx/scoring logic.
// ============================================================================
function renderPediatrics(group) {
    const area = document.getElementById("peds-content");
    if (!area) return;

    if (typeof PEDIATRICS_DATA === "undefined") {
        area.innerHTML = '<div class="q-card" style="border-left-color:#dc2626;"><div class="q-card-title" style="color:#dc2626;">⚠️ pediatrics.js not loaded</div><ul><li style="color:#7f1d1d;">PEDIATRICS_DATA is undefined. Check that data/pediatrics.js exists on the server and is linked correctly in app.html before js/app.js.</li></ul></div>';
        console.error("PEDIATRICS_DATA is undefined — data/pediatrics.js did not load.");
        return;
    }

    const data = PEDIATRICS_DATA[group];
    if (!data) {
        area.innerHTML = '<div class="q-card" style="border-left-color:#dc2626;"><div class="q-card-title" style="color:#dc2626;">⚠️ Section not found</div><ul><li style="color:#7f1d1d;">No data for group: ' + group + '</li></ul></div>';
        return;
    }

    // Toggle active state on the three top buttons
    const btnYoung = document.getElementById("peds-tab-young");
    const btnChild = document.getElementById("peds-tab-child");
    const btnTheory = document.getElementById("peds-tab-theory");
    if (btnYoung) btnYoung.classList.toggle("active", group === "youngInfant");
    if (btnChild) btnChild.classList.toggle("active", group === "child");
    if (btnTheory) btnTheory.classList.toggle("active", group === "generalTheory");

    area.innerHTML = "";

    // History-taking questions card (if this group has one) — shown first, distinct styling
    if (data.historyQuestions && data.historyQuestions.length > 0) {
        const hCard = document.createElement("div");
        hCard.className = "q-card";
        hCard.style.borderLeftColor = "#7c3aed";

        const hTitle = document.createElement("div");
        hTitle.className = "q-card-title";
        hTitle.style.color = "#5b21b6";
        hTitle.style.borderBottomColor = "#ede9fe";
        hTitle.textContent = "📝 History Taking — IMCI Assessment Questions";

        const hUl = document.createElement("ul");
        data.historyQuestions.forEach(q => {
            const li = document.createElement("li");
            li.textContent = q;
            li.style.cssText = "color:#4c1d95;font-size:12px;line-height:1.6;";
            hUl.appendChild(li);
        });

        hCard.appendChild(hTitle);
        hCard.appendChild(hUl);
        area.appendChild(hCard);
    }

    data.sections.forEach(section => {
        const card = document.createElement("div");
        card.className = "q-card";
        card.style.borderLeftColor = "#0d9488";

        const title = document.createElement("div");
        title.className = "q-card-title";
        title.style.color = "#0f766e";
        title.style.borderBottomColor = "#ccfbf1";
        title.textContent = (section.icon ? section.icon + " " : "") + section.title;

        const ul = document.createElement("ul");
        section.points.forEach(p => {
            const li = document.createElement("li");
            li.textContent = p;
            li.style.cssText = "color:#134e4a;font-size:12px;line-height:1.6;";
            ul.appendChild(li);
        });

        card.appendChild(title);
        card.appendChild(ul);
        area.appendChild(card);
    });
}

