// ═══════════════════════════════════════════════════════════
//  WARD MASTERY — CASE PRESENTATION ENGINE
//  Template-based HOPI generator (ABM Abdullah style)
//  Systems: Respiratory, CVS, GIT, Hepatobiliary, Renal
// ═══════════════════════════════════════════════════════════

// ── SYSTEM DEFINITIONS ──────────────────────────────────────
const CP_SYSTEMS = {
  respiratory: {
    label: 'Respiratory',
    icon: '🫁',
    symptoms: [
      { id: 'breathlessness', label: 'Breathlessness / Dyspnoea' },
      { id: 'cough',          label: 'Cough' },
      { id: 'sputum',         label: 'Sputum Production' },
      { id: 'haemoptysis',    label: 'Haemoptysis' },
      { id: 'wheeze',         label: 'Wheeze / Chest Tightness' },
      { id: 'chest_pain',     label: 'Chest Pain' },
      { id: 'fever',          label: 'Fever / Rigors / Night Sweats' },
      { id: 'weight_loss',    label: 'Weight Loss / Anorexia' },
    ],
    negatives: [
      'orthopnoea or paroxysmal nocturnal dyspnoea',
      'haemoptysis',
      'chest pain',
      'fever or rigors',
      'weight loss or loss of appetite',
      'any history suggestive of cardiac illness',
    ],
  },
  cvs: {
    label: 'Cardiovascular',
    icon: '❤️',
    symptoms: [
      { id: 'breathlessness', label: 'Breathlessness / Dyspnoea' },
      { id: 'chest_pain',     label: 'Chest Pain' },
      { id: 'palpitation',    label: 'Palpitation' },
      { id: 'oedema',         label: 'Leg / Ankle Swelling (Oedema)' },
      { id: 'syncope',        label: 'Syncope / Dizziness' },
      { id: 'fatigue',        label: 'Weakness / Fatigue' },
      { id: 'haemoptysis',    label: 'Haemoptysis' },
      { id: 'cough',          label: 'Cough' },
    ],
    negatives: [
      'orthopnoea or paroxysmal nocturnal dyspnoea',
      'syncope or loss of consciousness',
      'chest pain',
      'swelling of the legs',
      'haemoptysis',
      'hoarseness of voice or difficulty in swallowing',
    ],
  },
  git: {
    label: 'Gastrointestinal',
    icon: '🔴',
    symptoms: [
      { id: 'abd_pain',       label: 'Abdominal Pain' },
      { id: 'nausea_vomit',   label: 'Nausea / Vomiting' },
      { id: 'haematemesis',   label: 'Haematemesis' },
      { id: 'melena',         label: 'Melaena / Blood in Stool' },
      { id: 'dysphagia',      label: 'Dysphagia / Odynophagia' },
      { id: 'heartburn',      label: 'Heartburn / Acid Reflux' },
      { id: 'bowel_change',   label: 'Change in Bowel Habit' },
      { id: 'weight_loss',    label: 'Weight Loss / Anorexia' },
    ],
    negatives: [
      'haematemesis or melaena',
      'dysphagia',
      'significant weight loss or loss of appetite',
      'any change in bowel habit',
      'jaundice',
      'any history of taking NSAIDs or steroids',
    ],
  },
  hepato: {
    label: 'Hepatobiliary',
    icon: '🟡',
    symptoms: [
      { id: 'jaundice',       label: 'Jaundice' },
      { id: 'abd_swelling',   label: 'Abdominal Swelling (Ascites)' },
      { id: 'abd_pain',       label: 'Abdominal Pain / Discomfort' },
      { id: 'haematemesis',   label: 'Haematemesis / Melaena' },
      { id: 'weight_loss',    label: 'Weight Loss / Anorexia' },
      { id: 'pruritus',       label: 'Itching (Pruritus)' },
      { id: 'scanty_urine',   label: 'Scanty Micturition' },
      { id: 'fever',          label: 'Fever' },
    ],
    negatives: [
      'haematemesis or melaena',
      'loss of consciousness',
      'fever, cough or breathlessness',
      'puffiness of the face or joint pain',
      'skin rash or pigmentation',
      'any history of injection, infusion, blood transfusion or IV drug abuse',
    ],
  },
  renal: {
    label: 'Renal / Nephrology',
    icon: '💧',
    symptoms: [
      { id: 'oedema',         label: 'Generalised Swelling / Oedema' },
      { id: 'scanty_urine',   label: 'Scanty Micturition / Oliguria' },
      { id: 'dysuria',        label: 'Dysuria / Burning Micturition' },
      { id: 'haematuria',     label: 'Haematuria (Blood in Urine)' },
      { id: 'loin_pain',      label: 'Loin Pain / Flank Pain' },
      { id: 'nocturia',       label: 'Nocturia / Frequency' },
      { id: 'breathlessness', label: 'Breathlessness' },
      { id: 'weakness',       label: 'Weakness / Loss of Appetite' },
    ],
    negatives: [
      'haemoptysis or haematemesis',
      'sore throat or skin infection recently',
      'skin rash, joint pain or oral ulcers',
      'breathlessness or cough',
      'history of taking herbal medicines or nephrotoxic drugs',
      'cold intolerance or jaundice',
    ],
  },
};

// ── SYMPTOM DETAIL FIELD DEFINITIONS ───────────────────────
const CP_FIELDS = {
  // Respiratory
  breathlessness: {
    label: 'Breathlessness',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 6 months, 2 years' },
      { id: 'onset',       label: 'Onset', type: 'select', options: ['gradual', 'sudden', 'insidious'] },
      { id: 'progression', label: 'Progression', type: 'select', options: ['progressive', 'static', 'episodic / intermittent', 'worsening recently'] },
      { id: 'exertion',    label: 'Exertion Level', type: 'select', options: ['on mild exertion', 'on moderate to severe exertion', 'even at rest', 'only on heavy exertion'] },
      { id: 'ortho',       label: 'Orthopnoea?', type: 'select', options: ['no', 'yes — sleeps with extra pillows'] },
      { id: 'pnd',         label: 'PND?', type: 'select', options: ['no', 'yes — wakes from sleep breathless'] },
      { id: 'timing',      label: 'When worse?', type: 'select', options: ['no particular pattern', 'worse at night', 'worse in morning', 'worse in winter / cold weather', 'worse on exertion'] },
    ],
  },
  cough: {
    label: 'Cough',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 3 months' },
      { id: 'character',   label: 'Character', type: 'select', options: ['dry', 'productive', 'dry but occasionally productive', 'bovine cough'] },
      { id: 'timing',      label: 'Timing', type: 'select', options: ['throughout the day and night', 'mainly at night', 'mainly in the morning', 'on exposure to cold or dust'] },
      { id: 'trigger',     label: 'Trigger', type: 'select', options: ['no specific trigger', 'cold and dust', 'on exertion', 'postural change', 'eating'] },
    ],
  },
  sputum: {
    label: 'Sputum',
    fields: [
      { id: 'character',   label: 'Character', type: 'select', options: ['mucoid (clear)', 'mucopurulent (yellow)', 'purulent (green)', 'blood-stained / rusty', 'foul-smelling', 'scanty'] },
      { id: 'volume',      label: 'Volume', type: 'select', options: ['scanty', 'moderate', 'copious / large amounts (cupfuls)'] },
    ],
  },
  haemoptysis: {
    label: 'Haemoptysis',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 2 weeks' },
      { id: 'amount',      label: 'Amount', type: 'select', options: ['streaks of blood only', 'small amounts', 'frank blood', 'massive haemoptysis'] },
      { id: 'frequency',   label: 'Frequency', type: 'select', options: ['occasional', 'frequent / most days', 'once only'] },
    ],
  },
  wheeze: {
    label: 'Wheeze / Chest Tightness',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 6 months' },
      { id: 'timing',      label: 'When occurs?', type: 'select', options: ['mainly at night', 'on exertion', 'on exposure to dust or cold', 'throughout the day', 'episodic'] },
      { id: 'character',   label: 'Type', type: 'select', options: ['wheeze with chest tightness', 'wheeze only', 'chest tightness only'] },
    ],
  },
  chest_pain: {
    label: 'Chest Pain',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 2 weeks' },
      { id: 'site',        label: 'Site', type: 'select', options: ['retrosternal', 'left-sided', 'right-sided', 'diffuse across chest', 'interscapular (back)'] },
      { id: 'character',   label: 'Character', type: 'select', options: ['dull aching', 'tight / constricting', 'sharp / stabbing (pleuritic)', 'burning', 'tearing / ripping', 'pressing / crushing'] },
      { id: 'radiation',   label: 'Radiation', type: 'select', options: ['no radiation', 'to left arm', 'to both arms', 'to jaw and neck', 'to the back', 'to left shoulder'] },
      { id: 'trigger',     label: 'Aggravated by', type: 'select', options: ['exertion', 'inspiration / deep breathing / cough', 'lying flat', 'emotion or stress', 'spontaneous / no trigger'] },
      { id: 'relief',      label: 'Relieved by', type: 'select', options: ['rest', 'sitting forward', 'antacids', 'GTN spray', 'nothing relieves it', 'analgesics (NSAIDs)'] },
    ],
  },
  fever: {
    label: 'Fever / Rigors / Night Sweats',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 3 weeks' },
      { id: 'pattern',     label: 'Pattern', type: 'select', options: ['continuous high grade', 'intermittent', 'low grade evening rise', 'with rigors', 'with night sweats'] },
    ],
  },
  weight_loss: {
    label: 'Weight Loss / Anorexia',
    fields: [
      { id: 'duration',    label: 'Over how long?', type: 'text', placeholder: 'e.g. 3 months' },
      { id: 'amount',      label: 'Amount lost', type: 'text', placeholder: 'e.g. 5 kg, "about a stone"' },
      { id: 'appetite',    label: 'Appetite', type: 'select', options: ['reduced', 'absent / anorexia', 'normal but still losing weight'] },
    ],
  },
  // CVS
  palpitation: {
    label: 'Palpitation',
    fields: [
      { id: 'duration',    label: 'Duration (how long occurring)', type: 'text', placeholder: 'e.g. 4 months' },
      { id: 'character',   label: 'Character', type: 'select', options: ['rapid and regular', 'rapid and irregular', 'occasional missed beats / "thump"', 'forceful / pounding'] },
      { id: 'onset',       label: 'Onset of episodes', type: 'select', options: ['sudden', 'gradual'] },
      { id: 'trigger',     label: 'Trigger', type: 'select', options: ['on mild exertion', 'on moderate exertion', 'even at rest', 'spontaneous', 'with anxiety or stress'] },
      { id: 'assoc',       label: 'Associated with', type: 'select', options: ['nothing', 'dizziness / presyncope', 'chest pain', 'breathlessness', 'syncope'] },
    ],
  },
  oedema: {
    label: 'Oedema / Swelling',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 2 months' },
      { id: 'site',        label: 'Site', type: 'select', options: ['bilateral leg / ankle', 'generalised (whole body)', 'face / periorbital first, then generalised', 'abdomen (ascites)', 'sacral'] },
      { id: 'progression', label: 'Progression', type: 'select', options: ['gradually increasing', 'sudden onset', 'fluctuating'] },
      { id: 'pitting',     label: 'Pitting?', type: 'select', options: ['yes, pitting', 'non-pitting'] },
    ],
  },
  syncope: {
    label: 'Syncope / Dizziness',
    fields: [
      { id: 'duration',    label: 'Duration (how long occurring)', type: 'text', placeholder: 'e.g. 3 episodes over 1 month' },
      { id: 'character',   label: 'Type', type: 'select', options: ['transient loss of consciousness', 'dizziness / near-fainting (presyncope)', 'giddiness / vertigo'] },
      { id: 'trigger',     label: 'Trigger', type: 'select', options: ['on standing (postural)', 'on exertion', 'spontaneous', 'with prolonged standing', 'emotional trigger'] },
      { id: 'recovery',    label: 'Recovery', type: 'select', options: ['prompt and complete', 'slow recovery', 'confused after episode'] },
    ],
  },
  fatigue: {
    label: 'Weakness / Fatigue',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 3 months' },
      { id: 'severity',    label: 'Severity', type: 'select', options: ['mild', 'moderate — limiting daily activities', 'severe — mostly bed-bound'] },
    ],
  },
  // GIT
  abd_pain: {
    label: 'Abdominal Pain',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 4 months' },
      { id: 'site',        label: 'Site', type: 'select', options: ['epigastric', 'right hypochondrium', 'left hypochondrium', 'periumbilical', 'right iliac fossa', 'left iliac fossa', 'hypogastric', 'generalised'] },
      { id: 'character',   label: 'Character', type: 'select', options: ['burning / dull aching (hunger pain)', 'colicky', 'constant dull ache', 'sharp / severe', 'cramp-like'] },
      { id: 'trigger',     label: 'Aggravated by', type: 'select', options: ['empty stomach / hunger', 'eating', 'fatty / spicy foods', 'movement', 'nothing specific'] },
      { id: 'relief',      label: 'Relieved by', type: 'select', options: ['eating food', 'antacids', 'vomiting', 'nothing relieves', 'rest'] },
      { id: 'night_pain',  label: 'Night pain?', type: 'select', options: ['no', 'yes — wakes from sleep, relieved by food/antacid'] },
    ],
  },
  nausea_vomit: {
    label: 'Nausea / Vomiting',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 2 months' },
      { id: 'vomit_char',  label: 'Vomit contents', type: 'select', options: ['food particles', 'bile-stained', 'blood-stained', 'coffee-ground material', 'large volume', 'projectile'] },
      { id: 'timing',      label: 'When occurs', type: 'select', options: ['after eating', 'in the morning', 'throughout the day', 'not specific'] },
    ],
  },
  haematemesis: {
    label: 'Haematemesis',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 2 episodes' },
      { id: 'amount',      label: 'Amount', type: 'select', options: ['small amounts (streaks)', 'moderate amount', 'large / massive amount'] },
      { id: 'colour',      label: 'Colour', type: 'select', options: ['bright red', 'coffee-ground / dark'] },
    ],
  },
  melena: {
    label: 'Melaena / Blood in Stool',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 3 weeks' },
      { id: 'character',   label: 'Character', type: 'select', options: ['tarry black stool (melaena)', 'dark stool', 'fresh red blood per rectum', 'blood mixed with stool', 'blood on surface of stool'] },
    ],
  },
  dysphagia: {
    label: 'Dysphagia',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 3 months' },
      { id: 'type',        label: 'Type', type: 'select', options: ['difficulty swallowing solids only', 'difficulty swallowing both solids and liquids', 'pain on swallowing (odynophagia)', 'progressive — started with solids, now liquids too'] },
    ],
  },
  heartburn: {
    label: 'Heartburn / Reflux',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 6 months' },
      { id: 'trigger',     label: 'Aggravated by', type: 'select', options: ['lying flat or bending forward', 'fatty or spicy food', 'large meals', 'no particular trigger'] },
      { id: 'assoc',       label: 'Associated with', type: 'select', options: ['acid taste in mouth (regurgitation)', 'waterbrash', 'no associated features'] },
    ],
  },
  bowel_change: {
    label: 'Change in Bowel Habit',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 2 months' },
      { id: 'type',        label: 'Type of change', type: 'select', options: ['diarrhoea', 'constipation', 'alternating diarrhoea and constipation', 'looser stools than usual', 'increased frequency'] },
      { id: 'stool_char',  label: 'Stool character', type: 'select', options: ['normal colour', 'pale / clay-coloured', 'dark / tarry', 'blood or mucus in stool', 'watery'] },
    ],
  },
  // Hepatobiliary
  jaundice: {
    label: 'Jaundice',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 3 weeks' },
      { id: 'onset',       label: 'Onset', type: 'select', options: ['gradual', 'sudden'] },
      { id: 'progression', label: 'Progression', type: 'select', options: ['progressively deepening', 'fluctuating', 'static', 'now improving'] },
      { id: 'urine',       label: 'Urine colour', type: 'select', options: ['normal', 'dark / tea-coloured', 'bile-stained'] },
      { id: 'stool',       label: 'Stool colour', type: 'select', options: ['normal', 'pale / clay-coloured', 'dark'] },
      { id: 'pruritus',    label: 'Itching?', type: 'select', options: ['no', 'yes — generalised itching'] },
    ],
  },
  abd_swelling: {
    label: 'Abdominal Swelling',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 3 months' },
      { id: 'onset',       label: 'Onset', type: 'select', options: ['gradual', 'sudden'] },
      { id: 'progression', label: 'Progression', type: 'select', options: ['gradually increasing', 'rapidly increasing recently', 'fluctuating'] },
      { id: 'pain',        label: 'Pain with swelling?', type: 'select', options: ['no pain, only discomfort / heaviness', 'mild discomfort', 'moderate pain'] },
    ],
  },
  pruritus: {
    label: 'Pruritus (Itching)',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 4 weeks' },
      { id: 'distribution', label: 'Distribution', type: 'select', options: ['generalised', 'mainly over limbs', 'mainly over trunk'] },
    ],
  },
  scanty_urine: {
    label: 'Scanty Micturition',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 2 months' },
      { id: 'character',   label: 'Character', type: 'select', options: ['scanty volume only', 'scanty with no burning', 'scanty with dark urine', 'oliguria / very little output'] },
    ],
  },
  // Renal
  dysuria: {
    label: 'Dysuria',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 1 week' },
      { id: 'assoc',       label: 'Associated with', type: 'select', options: ['frequency and urgency only', 'suprapubic pain', 'loin pain and fever', 'discharge'] },
    ],
  },
  haematuria: {
    label: 'Haematuria',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 2 weeks' },
      { id: 'timing',      label: 'Timing', type: 'select', options: ['initial (beginning of stream)', 'terminal (end of stream)', 'total (throughout stream)'] },
      { id: 'pain',        label: 'Painful?', type: 'select', options: ['painless haematuria', 'with loin pain', 'with dysuria / burning'] },
      { id: 'colour',      label: 'Colour', type: 'select', options: ['frank red blood', 'smoky / cola-coloured urine', 'tea-coloured'] },
    ],
  },
  loin_pain: {
    label: 'Loin Pain',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 3 days' },
      { id: 'side',        label: 'Side', type: 'select', options: ['right loin', 'left loin', 'bilateral'] },
      { id: 'character',   label: 'Character', type: 'select', options: ['colicky — coming in waves', 'constant dull ache', 'severe / unbearable', 'dull aching'] },
      { id: 'radiation',   label: 'Radiation', type: 'select', options: ['no radiation', 'radiates to groin / testicle / labia', 'radiates to anterior abdomen'] },
    ],
  },
  nocturia: {
    label: 'Nocturia / Frequency',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 3 months' },
      { id: 'frequency',   label: 'How often at night?', type: 'select', options: ['once per night', '2–3 times per night', 'more than 3 times per night'] },
      { id: 'day_freq',    label: 'Daytime frequency?', type: 'select', options: ['normal', 'increased — going frequently during day too'] },
    ],
  },
  weakness: {
    label: 'Weakness / Loss of Appetite',
    fields: [
      { id: 'duration',    label: 'Duration', type: 'text', placeholder: 'e.g. 2 months' },
      { id: 'severity',    label: 'Severity', type: 'select', options: ['mild generalised weakness', 'moderate — limiting activities', 'severe'] },
      { id: 'appetite',    label: 'Appetite', type: 'select', options: ['reduced', 'completely absent', 'normal'] },
    ],
  },
};

// ── SENTENCE TEMPLATE ENGINE ─────────────────────────────────
function buildSymptomSentence(symptomId, values, gender) {
  const he = gender === 'female' ? 'she' : 'he';
  const his = gender === 'female' ? 'her' : 'his';
  const him = gender === 'female' ? 'her' : 'him';

  const dur = values.duration || '… months';

  switch (symptomId) {
    case 'breathlessness': {
      const onset = values.onset || 'gradual';
      const prog = values.progression || 'progressive';
      const exert = values.exertion || 'on moderate to severe exertion';
      const ortho = values.ortho === 'yes — sleeps with extra pillows'
        ? `${he.charAt(0).toUpperCase() + he.slice(1)} has orthopnoea and sleeps with extra pillows. `
        : '';
      const pnd = values.pnd === 'yes — wakes from sleep breathless'
        ? `${he.charAt(0).toUpperCase() + he.slice(1)} also experiences paroxysmal nocturnal dyspnoea, occasionally waking from sleep with severe breathlessness. `
        : '';
      const timing = values.timing && values.timing !== 'no particular pattern'
        ? ` The breathlessness is ${values.timing}.` : '';
      return `According to the patient's statement, ${he} has been suffering from difficulty in breathing for the last ${dur}. Initially, the breathlessness was ${onset} in onset, occurring ${exert}, but has been ${prog} over this period.${timing} ${ortho}${pnd}`.trim();
    }

    case 'cough': {
      const char = values.character || 'dry';
      const timing = values.timing || 'throughout the day and night';
      const trigger = values.trigger && values.trigger !== 'no specific trigger'
        ? `, more marked on ${values.trigger}` : '';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also complains of cough for the last ${dur}, which is ${char} in character. The cough is present ${timing}${trigger}.`;
    }

    case 'sputum': {
      const char = values.character || 'mucoid';
      const vol = values.volume || 'scanty';
      return `The cough is associated with sputum expectoration, which is ${char} in character and ${vol} in amount.`;
    }

    case 'haemoptysis': {
      const amt = values.amount || 'streaks of blood only';
      const freq = values.frequency || 'occasional';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} has noticed haemoptysis for the last ${dur}, consisting of ${amt}, occurring ${freq}.`;
    }

    case 'wheeze': {
      const timing = values.timing || 'episodic';
      const char = values.character || 'wheeze with chest tightness';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also experiences ${char} for the last ${dur}, occurring ${timing}.`;
    }

    case 'chest_pain': {
      const site = values.site || 'retrosternal';
      const char = values.character || 'dull aching';
      const rad = values.radiation && values.radiation !== 'no radiation'
        ? `, radiating to ${values.radiation}` : '';
      const trigger = values.trigger ? `, aggravated by ${values.trigger}` : '';
      const relief = values.relief ? `, and relieved by ${values.relief}` : '';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also complains of chest pain for the last ${dur}. The pain is ${char} in character, located in the ${site} region${rad}${trigger}${relief}.`;
    }

    case 'palpitation': {
      const char = values.character || 'rapid and regular';
      const trigger = values.trigger || 'on mild exertion';
      const onset = values.onset || 'sudden';
      const assoc = values.assoc && values.assoc !== 'nothing'
        ? ` It is associated with ${values.assoc}.` : '';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also complains of palpitation for the last ${dur}. The palpitation is ${char}, with ${onset} onset of episodes, occurring ${trigger}.${assoc}`;
    }

    case 'oedema': {
      const site = values.site || 'bilateral leg / ankle';
      const prog = values.progression || 'gradually increasing';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also has swelling of the ${site} for the last ${dur}, which has been ${prog}.`;
    }

    case 'syncope': {
      const char = values.character || 'dizziness / near-fainting (presyncope)';
      const trigger = values.trigger || 'spontaneous';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} gives a history of ${char} for the last ${dur}, occurring ${trigger}.`;
    }

    case 'fatigue': {
      const sev = values.severity || 'mild';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also experiences ${sev} generalised weakness and fatigue for the last ${dur}.`;
    }

    case 'haematemesis': {
      const amt = values.amount || 'moderate amount';
      const col = values.colour || 'bright red';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} gives a history of haematemesis for the last ${dur}, vomiting ${amt} of ${col} blood.`;
    }

    case 'melena': {
      const char = values.character || 'tarry black stool (melaena)';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also reports ${char} for the last ${dur}.`;
    }

    case 'abd_pain': {
      const site = values.site || 'epigastric';
      const char = values.character || 'burning / dull aching';
      const trigger = values.trigger && values.trigger !== 'nothing specific'
        ? `, more marked in the ${values.trigger}` : '';
      const relief = values.relief ? `, relieved by ${values.relief}` : '';
      const night = values.night_pain === 'yes — wakes from sleep, relieved by food/antacid'
        ? ` The pain sometimes appears at the late hours of the night, awakening ${him} from sleep, relieved by taking food or antacid.` : '';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} has been suffering from frequent pain in the ${site} region for the last ${dur}. The pain is ${char} in character${trigger}${relief}.${night}`;
    }

    case 'nausea_vomit': {
      const char = values.vomit_char || 'food particles';
      const timing = values.timing || 'after eating';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also complains of nausea and vomiting for the last ${dur}, vomiting ${char}, occurring ${timing}.`;
    }

    case 'dysphagia': {
      const type = values.type || 'difficulty swallowing solids only';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} complains of ${type} for the last ${dur}.`;
    }

    case 'heartburn': {
      const trigger = values.trigger || 'lying flat or bending forward';
      const assoc = values.assoc && values.assoc !== 'no associated features'
        ? ` It is associated with ${values.assoc}.` : '';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} has been suffering from heartburn for the last ${dur}, aggravated by ${trigger}.${assoc}`;
    }

    case 'bowel_change': {
      const type = values.type || 'diarrhoea';
      const char = values.stool_char && values.stool_char !== 'normal colour'
        ? ` The stool is ${values.stool_char}.` : '';
      return `For the last ${dur}, ${he} has noticed a change in bowel habit in the form of ${type}.${char}`;
    }

    case 'jaundice': {
      const onset = values.onset || 'gradual';
      const prog = values.progression || 'progressively deepening';
      const urine = values.urine && values.urine !== 'normal'
        ? ` The urine has been ${values.urine}.` : '';
      const stool = values.stool && values.stool !== 'normal'
        ? ` The stool has been ${values.stool}.` : '';
      const pruritus = values.pruritus === 'yes — generalised itching'
        ? ` ${he.charAt(0).toUpperCase() + he.slice(1)} also complains of generalised itching.` : '';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} has been suffering from jaundice for the last ${dur}, which was ${onset} in onset and has been ${prog}.${urine}${stool}${pruritus}`;
    }

    case 'abd_swelling': {
      const onset = values.onset || 'gradual';
      const prog = values.progression || 'gradually increasing';
      const pain = values.pain || 'no pain, only discomfort / heaviness';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} has been suffering from ${onset} swelling of the abdomen for the last ${dur}, which has been ${prog}. It is not associated with abdominal pain, but there is ${pain}.`;
    }

    case 'pruritus': {
      const dist = values.distribution || 'generalised';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also experiences ${dist} pruritus for the last ${dur}.`;
    }

    case 'scanty_urine': {
      const char = values.character || 'scanty volume only';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also complains of ${char} micturition for the last ${dur}.`;
    }

    case 'dysuria': {
      const assoc = values.assoc || 'frequency and urgency only';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} has been suffering from pain and burning during micturition for the last ${dur}, associated with ${assoc}.`;
    }

    case 'haematuria': {
      const timing = values.timing || 'total (throughout stream)';
      const pain = values.pain || 'painless haematuria';
      const colour = values.colour || 'frank red blood';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} has noticed ${colour} in the urine (${timing}) for the last ${dur}. The haematuria is ${pain}.`;
    }

    case 'loin_pain': {
      const side = values.side || 'right loin';
      const char = values.character || 'colicky — coming in waves';
      const rad = values.radiation && values.radiation !== 'no radiation'
        ? `, radiating to the ${values.radiation}` : '';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} has been suffering from ${char} pain in the ${side} for the last ${dur}${rad}.`;
    }

    case 'nocturia': {
      const freq = values.frequency || 'once per night';
      const day = values.day_freq === 'increased — going frequently during day too'
        ? ' Daytime frequency is also increased.' : '';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also wakes ${freq} to pass urine (nocturia) for the last ${dur}.${day}`;
    }

    case 'weakness': {
      const sev = values.severity || 'mild generalised weakness';
      const appetite = values.appetite !== 'normal'
        ? ` ${his.charAt(0).toUpperCase() + his.slice(1)} appetite is ${values.appetite}.` : '';
      return `For the last ${dur}, ${he} has been experiencing ${sev} and generalised malaise.${appetite}`;
    }

    case 'fever': {
      const pattern = values.pattern || 'continuous high grade';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} also complains of ${pattern} fever for the last ${dur}.`;
    }

    case 'weight_loss': {
      const amount = values.amount ? ` of approximately ${values.amount}` : '';
      const appetite = values.appetite || 'reduced';
      return `${he.charAt(0).toUpperCase() + he.slice(1)} has lost significant weight${amount} over the last ${dur}, with ${appetite} appetite.`;
    }

    default:
      return '';
  }
}

// ── HOPI BUILDER ─────────────────────────────────────────────
function buildHOPI(formData) {
  const { patient, system, symptoms, negatives, pastHx, drugHx, familyHx, personalHx } = formData;

  const name = patient.name || '…';
  const age  = patient.age  || '…';
  const sex  = patient.sex  || 'male';
  const occ  = patient.occupation || '…';
  const addr = patient.address || '…';
  const he   = sex === 'female' ? 'she' : 'he';
  const his  = sex === 'female' ? 'her' : 'his';
  const him  = sex === 'female' ? 'her' : 'him';
  const heShe = he.charAt(0).toUpperCase() + he.slice(1);

  // ── Build chief complaints list
  const chiefComplaints = symptoms
    .filter(s => s.active)
    .map(s => {
      const fieldDef = CP_FIELDS[s.id];
      const label = fieldDef ? fieldDef.label : s.id;
      const dur = s.values?.duration ? `for ${s.values.duration}` : 'for … months';
      return `${label} ${dur}`;
    });

  // ── Build HOPI paragraph
  const sentences = [];
  symptoms.filter(s => s.active).forEach(s => {
    const sentence = buildSymptomSentence(s.id, s.values || {}, sex);
    if (sentence) sentences.push(sentence);
  });

  // ── Relevant negatives
  const negSentences = negatives.filter(n => n.checked)
    .map(n => `no history of ${n.label}`);
  let negPara = '';
  if (negSentences.length > 0) {
    const last = negSentences.pop();
    negPara = negSentences.length > 0
      ? `There is ${negSentences.join(', ')} and ${last}. `
      : `There is ${last}. `;
    negPara += `${heShe === 'He' ? 'His' : 'Her'} bowel and bladder habits are normal.`;
  }

  // ── Past history
  const pastPara = pastHx
    ? `History of past illness: ${pastHx}`
    : `History of past illness: Nothing significant.`;

  // ── Drug history
  const drugPara = drugHx
    ? `Drug history: ${drugHx}`
    : `Drug history: Not significant. There is no history of taking any NSAIDs, steroids or nephrotoxic drugs.`;

  // ── Family history
  const famPara = familyHx
    ? `Family history: ${familyHx}`
    : `Family history: Both parents are alive and in good health. There is no such illness in ${his} family.`;

  // ── Personal / Social history
  const persPara = personalHx
    ? `Personal history: ${personalHx}`
    : '';

  // ── Salient features paragraph (full case presentation)
  const htnText = patient.htn || 'normotensive';
  const dmText = patient.dm || 'nondiabetic';
  const smokeText = patient.smoke && patient.smoke !== 'nonsmoker' ? `, ${patient.smoke}` : ', nonsmoker';
  const alcoholText = patient.alcohol === 'alcoholic' ? ', alcoholic' : '';
  const salientIntro = `${name}, a ${age}-year-old, ${occ}, ${htnText}, ${dmText}${smokeText}${alcoholText}, hailing from ${addr}, presented with`;
  const ccText = chiefComplaints.length > 0
    ? chiefComplaints.join('; ').toLowerCase()
    : '… chief complaints …';

  const hopiBody = sentences.join(' ');
  const fullSalient = `${salientIntro} ${ccText}. ${hopiBody} ${negPara}`;

  return {
    chiefComplaints,
    hopiParagraph:    `History of present illness: According to the patient's statement, ${hopiBody} ${negPara}`,
    pastHistory:      pastPara,
    drugHistory:      drugPara,
    familyHistory:    famPara,
    personalHistory:  persPara,
    salientFeatures:  fullSalient.replace(/\s+/g, ' ').trim(),
  };
}

// ── RENDER SYSTEM SYMPTOM FORM ───────────────────────────────
function cpRenderSymptomForm(systemKey) {
  const sys = CP_SYSTEMS[systemKey];
  if (!sys) return '';

  return sys.symptoms.map(sym => {
    const fieldDef = CP_FIELDS[sym.id];
    if (!fieldDef) return '';

    const fields = fieldDef.fields.map(f => {
      if (f.type === 'select') {
        const opts = f.options.map(o => `<option value="${o}">${o.charAt(0).toUpperCase() + o.slice(1)}</option>`).join('');
        return `<div class="cp-field"><label>${f.label}</label><select data-symptom="${sym.id}" data-field="${f.id}" class="cp-select"><option value="">— select —</option>${opts}</select></div>`;
      }
      return `<div class="cp-field"><label>${f.label}</label><input type="text" data-symptom="${sym.id}" data-field="${f.id}" class="cp-input" placeholder="${f.placeholder || ''}"></div>`;
    }).join('');

    return `
      <div class="cp-symptom-card" id="cp-card-${sym.id}">
        <div class="cp-symptom-header">
          <label class="cp-checkbox-label">
            <input type="checkbox" class="cp-symptom-check" data-symptom="${sym.id}" onchange="cpToggleSymptom('${sym.id}', this.checked)">
            <span class="cp-sym-name">${sym.label}</span>
          </label>
        </div>
        <div class="cp-symptom-fields" id="cp-fields-${sym.id}" style="display:none;">
          ${fields}
        </div>
      </div>`;
  }).join('');
}

function cpRenderNegatives(systemKey) {
  const sys = CP_SYSTEMS[systemKey];
  if (!sys || !sys.negatives) return '';
  return sys.negatives.map((neg, i) =>
    `<label class="cp-neg-label"><input type="checkbox" class="cp-neg-check" data-index="${i}" checked> No history of ${neg}</label>`
  ).join('');
}

// ═══════════════════════════════════════════════════════════
//  CASE PRESENTATION — UI CONTROLLER
//  Integrated into Ward Mastery main app (no separate page).
//  All functions/IDs prefixed with "cp" to avoid collision
//  with the main app.js (e.g. resetAll() already exists there).
// ═══════════════════════════════════════════════════════════

let cpCurrentStep = 1;
let cpSelectedSystem = null;
let cpInitialized = false;

// ── INIT (called once when Case Builder tab is first opened) ──
function cpInit() {
    if (cpInitialized) return;
    cpInitialized = true;
    cpRenderSystems();
}

function cpToggleSymptom(id, checked) {
    const fields = document.getElementById('cp-fields-' + id);
    const card = document.getElementById('cp-card-' + id);
    if (fields) fields.style.display = checked ? 'block' : 'none';
    if (card) card.style.borderColor = checked ? '#2563eb' : '#d0d0d0';
}

// ── STEP NAVIGATION ─────────────────────────────────────────
function cpGoStep(n) {
    if (n >= 3 && !cpSelectedSystem) {
        cpShowToast('Please select a system first.');
        cpGoStep(2);
        return;
    }
    document.querySelectorAll('.cp-step-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('#cpStepTabs .step-tab').forEach(t => {
        t.classList.remove('active');
        t.style.background = '';
        t.style.color = '';
        t.style.borderColor = '#d0d0d0';
    });

    const stepEl = document.getElementById('cpstep' + n);
    const tabEl = document.getElementById('cptab' + n);
    if (stepEl) stepEl.classList.add('active');
    if (tabEl) {
        tabEl.classList.add('active');
        tabEl.style.background = '#2563eb';
        tabEl.style.color = 'white';
        tabEl.style.borderColor = '#2563eb';
    }

    // Mark done tabs
    for (let i = 1; i < n; i++) {
        const t = document.getElementById('cptab' + i);
        if (t) { t.style.borderColor = '#16a34a'; }
    }
    cpCurrentStep = n;
}

// ── SYSTEM RENDER ────────────────────────────────────────────
function cpRenderSystems() {
    const grid = document.getElementById('cpSystemGrid');
    if (!grid) return;
    grid.innerHTML = Object.entries(CP_SYSTEMS).map(([key, sys]) => `
    <div class="cp-sys-card" data-key="${key}" onclick="cpSelectSystem('${key}')"
         style="border:2px solid ${cpSelectedSystem === key ? '#2563eb' : '#d0d0d0'};border-radius:10px;padding:14px 8px;text-align:center;cursor:pointer;background:${cpSelectedSystem === key ? '#eff6ff' : 'white'};">
      <div style="font-size:24px;">${sys.icon}</div>
      <div style="font-size:12px;font-weight:600;margin-top:4px;">${sys.label}</div>
    </div>
  `).join('');
}

function cpSelectSystem(key) {
    cpSelectedSystem = key;
    cpRenderSystems();
    cpRenderSymptoms(key);
}

// ── SYMPTOM RENDER ───────────────────────────────────────────
function cpRenderSymptoms(key) {
    const container = document.getElementById('cpSymptomContainer');
    const negBox = document.getElementById('cpNegativesBox');
    const negContainer = document.getElementById('cpNegativesContainer');
    if (!container) return;
    container.innerHTML = cpRenderSymptomForm(key);
    if (negContainer) negContainer.innerHTML = cpRenderNegatives(key);
    if (negBox) negBox.style.display = 'block';
}

// ── COLLECT FORM DATA ────────────────────────────────────────
function cpCollectFormData() {
    const patient = {
        name:       document.getElementById('cp-pt-name').value.trim()   || '…',
        age:        document.getElementById('cp-pt-age').value.trim()    || '…',
        sex:        document.getElementById('cp-pt-sex').value,
        occupation: document.getElementById('cp-pt-occ').value.trim()    || '…',
        address:    document.getElementById('cp-pt-addr').value.trim()   || '…',
        htn:        document.getElementById('cp-pt-htn').value,
        dm:         document.getElementById('cp-pt-dm').value,
        smoke:      document.getElementById('cp-pt-smoke').value,
        alcohol:    document.getElementById('cp-pt-alcohol').value,
    };

    const sys = CP_SYSTEMS[cpSelectedSystem];
    const symptoms = (sys?.symptoms || []).map(sym => {
        const checkbox = document.querySelector(`.cp-symptom-check[data-symptom="${sym.id}"]`);
        const active = checkbox?.checked || false;
        const values = {};
        document.querySelectorAll(`[data-symptom="${sym.id}"]`).forEach(el => {
            if (el.dataset.field) values[el.dataset.field] = el.value;
        });
        return { id: sym.id, active, values };
    });

    const negChecks = document.querySelectorAll('.cp-neg-check');
    const sysNegs = sys?.negatives || [];
    const negatives = Array.from(negChecks).map((el, i) => ({
        label: sysNegs[i] || '',
        checked: el.checked,
    }));

    return {
        patient,
        system:      cpSelectedSystem,
        symptoms,
        negatives,
        pastHx:      document.getElementById('cp-hist-past').value.trim(),
        drugHx:      document.getElementById('cp-hist-drug').value.trim(),
        familyHx:    document.getElementById('cp-hist-family').value.trim(),
        personalHx:  document.getElementById('cp-hist-personal').value.trim(),
    };
}

// ── GENERATE OUTPUT ──────────────────────────────────────────
function cpGenerateOutput() {
    const data = cpCollectFormData();
    const result = buildHOPI(data);

    const p = data.patient;
    const introLine = `${p.name}, a ${p.age}-year-old, ${p.occupation}, ${p.htn}, ${p.dm}, ${p.smoke}, ${p.alcohol}, hailing from ${p.address}.`;

    const ccHTML = result.chiefComplaints.length > 0
        ? `<ul style="padding-left:18px;font-size:12px;line-height:1.7;">${result.chiefComplaints.map(c => `<li>${c}</li>`).join('')}</ul>`
        : '<div style="padding:14px;color:#888;font-size:12px;">No symptoms selected.</div>';

    const out = document.getElementById('cpOutputSection');
    out.innerHTML = `
    <div class="q-card" style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;font-size:12px;">👤 Patient</span>
        <button class="btn" style="padding:4px 10px;font-size:11px;" onclick="cpCopyText('${cpEscStr(introLine)}')">Copy</button>
      </div>
      <div style="font-size:12px;line-height:1.6;">${introLine}</div>
    </div>

    <div class="q-card" style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;font-size:12px;">📋 Chief Complaints</span>
        <button class="btn" style="padding:4px 10px;font-size:11px;" onclick="cpCopyText(cpGetCCText())">Copy</button>
      </div>
      ${ccHTML}
    </div>

    <div class="q-card" style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;font-size:12px;">📝 History of Present Illness</span>
        <button class="btn" style="padding:4px 10px;font-size:11px;" onclick="cpCopyText(document.getElementById('cpHopiBody').innerText)">Copy</button>
      </div>
      <div style="font-size:12px;line-height:1.6;" id="cpHopiBody">${result.hopiParagraph}</div>
    </div>

    <div class="q-card" style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;font-size:12px;">🏥 Past Medical History</span>
        <button class="btn" style="padding:4px 10px;font-size:11px;" onclick="cpCopyText(document.getElementById('cpPastBody').innerText)">Copy</button>
      </div>
      <div style="font-size:12px;line-height:1.6;" id="cpPastBody">${result.pastHistory}</div>
    </div>

    <div class="q-card" style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;font-size:12px;">💊 Drug History</span>
        <button class="btn" style="padding:4px 10px;font-size:11px;" onclick="cpCopyText(document.getElementById('cpDrugBody').innerText)">Copy</button>
      </div>
      <div style="font-size:12px;line-height:1.6;" id="cpDrugBody">${result.drugHistory}</div>
    </div>

    <div class="q-card" style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;font-size:12px;">👨‍👩‍👧 Family History</span>
        <button class="btn" style="padding:4px 10px;font-size:11px;" onclick="cpCopyText(document.getElementById('cpFamBody').innerText)">Copy</button>
      </div>
      <div style="font-size:12px;line-height:1.6;" id="cpFamBody">${result.familyHistory}</div>
    </div>

    ${result.personalHistory ? `
    <div class="q-card" style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;font-size:12px;">🏠 Personal / Social History</span>
        <button class="btn" style="padding:4px 10px;font-size:11px;" onclick="cpCopyText(document.getElementById('cpPersBody').innerText)">Copy</button>
      </div>
      <div style="font-size:12px;line-height:1.6;" id="cpPersBody">${result.personalHistory}</div>
    </div>` : ''}

    <div class="q-card" style="border-left-color:#f59e0b;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;font-size:12px;">⭐ Salient Features (Full Presentation)</span>
        <button class="btn" style="padding:4px 10px;font-size:11px;" onclick="cpCopyText(document.getElementById('cpSalientBody').innerText)">Copy</button>
      </div>
      <div style="font-size:12px;line-height:1.6;" id="cpSalientBody">${result.salientFeatures}</div>
    </div>

    <button class="btn" style="width:100%;background:#16a34a;color:white;font-weight:700;" onclick="cpCopyAll()">📋 Copy Full Case Presentation</button>
  `;

    cpGoStep(5);
}

function cpGetCCText() {
    const items = document.querySelectorAll('#cpOutputSection .q-card ul li');
    return Array.from(items).map(li => '• ' + li.textContent).join('\n');
}

function cpEscStr(s) {
    return s.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function cpCopyAll() {
    const intro = document.querySelector('#cpOutputSection .q-card div[style*="font-size:12px;line-height:1.6"]')?.innerText || '';
    const cc = cpGetCCText();
    const hopi = document.getElementById('cpHopiBody')?.innerText || '';
    const past = document.getElementById('cpPastBody')?.innerText || '';
    const drug = document.getElementById('cpDrugBody')?.innerText || '';
    const fam  = document.getElementById('cpFamBody')?.innerText || '';
    const pers = document.getElementById('cpPersBody')?.innerText || '';
    const salient = document.getElementById('cpSalientBody')?.innerText || '';

    const full = [
        '=== PATIENT ===',
        intro, '',
        '=== CHIEF COMPLAINTS ===',
        cc, '',
        '=== HISTORY OF PRESENT ILLNESS ===',
        hopi, '',
        '=== PAST MEDICAL HISTORY ===',
        past, '',
        '=== DRUG HISTORY ===',
        drug, '',
        '=== FAMILY HISTORY ===',
        fam,
        pers ? '\n=== PERSONAL / SOCIAL HISTORY ===\n' + pers : '',
        '',
        '=== SALIENT FEATURES ===',
        salient,
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(full).then(() => cpShowToast('✅ Full case copied!')).catch(() => {
        cpShowToast('Copy not supported — please select and copy manually.');
    });
}

function cpCopyText(text) {
    navigator.clipboard.writeText(text).then(() => cpShowToast('✅ Copied!')).catch(() => {
        cpShowToast('Unable to copy — please copy manually.');
    });
}

// ── RESET ────────────────────────────────────────────────────
function cpResetAll() {
    if (!confirm('Start a new case? All current input will be cleared.')) return;
    document.getElementById('cp-pt-name').value     = '';
    document.getElementById('cp-pt-age').value      = '';
    document.getElementById('cp-pt-occ').value      = '';
    document.getElementById('cp-pt-addr').value     = '';
    document.getElementById('cp-pt-sex').value      = 'male';
    document.getElementById('cp-pt-htn').value      = 'normotensive';
    document.getElementById('cp-pt-dm').value       = 'nondiabetic';
    document.getElementById('cp-pt-smoke').value    = 'nonsmoker';
    document.getElementById('cp-pt-alcohol').value  = 'nonalcoholic';
    document.getElementById('cp-hist-past').value   = '';
    document.getElementById('cp-hist-drug').value   = '';
    document.getElementById('cp-hist-family').value = '';
    document.getElementById('cp-hist-personal').value = '';
    document.getElementById('cpOutputSection').innerHTML = `
    <div style="text-align:center;padding:30px 10px;color:#555;">
      <div style="font-size:32px;margin-bottom:10px;">📋</div>
      Fill in the previous steps and click "Generate HOPI" to build your case.
    </div>`;
    cpSelectedSystem = null;
    document.getElementById('cpSymptomContainer').innerHTML = '';
    document.getElementById('cpNegativesBox').style.display = 'none';
    cpRenderSystems();
    cpGoStep(1);
}

// ── TOAST ────────────────────────────────────────────────────
function cpShowToast(msg) {
    const t = document.getElementById('cpToast');
    if (!t) return;
    t.textContent = msg;
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
    setTimeout(() => {
        t.style.opacity = '0';
        t.style.transform = 'translateX(-50%) translateY(20px)';
    }, 2200);
}
