// DDx Engine — Weighted Differential Diagnosis Database
// Each entry: name, system, tags, hint, strong/moderate/weak/negative/danger
// Keys MUST match button texts exactly

const DDX_DB = [

  // ─── RESPIRATORY ────────────────────────────────────────────

  { name: "Bronchial Asthma", system: "Resp", tags: ["Obstructive Airway", "Reversible"],
    hint: "Episodic dyspnea + wheeze + seasonal variation. Bilateral expiratory rhonchi. Responds to bronchodilators. History of atopy.",
    strong:   ["Wheeze","Wheezing","Seasonal Variation of Cough","Seasonal Variation of Symptoms","Wheeze / Rhonchi (bilateral)","Cough (Dry, Nocturnal)","Chest Tightness"],
    moderate: ["Shortness of Breath","Shortness of Breath on Exertion","Exertional Dyspnea","Seasonal Variation (asthma)","ACE Inhibitor (dry cough)","Barrel-Shaped Chest"],
    weak:     ["Tachycardia (>100/min)","Tachypnea (RR >20/min)","Onset: Sudden / Acute","Family Hx — Similar Illness"],
    negative: ["Fine Crepitations (basal)","Fever (High Grade, Continuous)","Night Sweats","Weight Loss"],
    danger:   ["Severe Dyspnea on Exertion","Cyanosis since Birth / Infancy","Unconscious / Comatose"]
  },

  { name: "COPD", system: "Resp", tags: ["Obstructive Airway", "Smoker"],
    hint: "Chronic cough + mucoid sputum + dyspnea. Smoker >20 pack years. Barrel chest. Cor pulmonale in severe disease.",
    strong:   ["Cough with Mucoid Sputum (>3 months/yr)","Chronic Smoker","Barrel-Shaped Chest","Hyperresonant (emphysema/PTX)","Prominent Accessory Muscles"],
    moderate: ["Cough (Chronic >3 Weeks)","Progressive / Increasing Breathlessness","Shortness of Breath","Shortness of Breath on Exertion","Exertional Dyspnea","Wheeze / Rhonchi (bilateral)"],
    weak:     ["Central Cyanosis","Pitting Edema — Bilateral Legs","Raised JVP","Occupational Dust Exposure","Tachypnea (RR >20/min)"],
    negative: ["Fine Crepitations (basal)","Fever (High Grade, Continuous)"],
    danger:   ["Severe Dyspnea on Exertion","Central Cyanosis","Unconscious / Comatose"]
  },

  { name: "Bronchiectasis", system: "Resp", tags: ["Suppurative Lung", "Chronic"],
    hint: "Copious foul-smelling purulent sputum (postural drainage), clubbing, persistent coarse crackles. History of childhood TB or whooping cough.",
    strong:   ["Cough (Foul-Smelling Purulent Sputum)","Cough with Dark Foul-Smelling Sputum","Cough with Purulent Sputum (since childhood)","Sputum — Foul Smelling (lung abscess)","Profuse Expectoration (bronchiectasis)","Post-Tussive Crepitations"],
    moderate: ["Cough (Chronic >3 Weeks)","Hemoptysis","Coarse Crepitations / Crackles","Drumstick Appearance (Grade 2–3)","Recurrent Chest Infections (childhood)"],
    weak:     ["Shortness of Breath","Dull Percussion Note","Febrile (>37.5°C)","Moderate Anemia"],
    negative: ["Hyperresonant (emphysema/PTX)","Stony Dullness (effusion)"],
    danger:   ["Hemoptysis — Altered / Massive","Severe Dyspnea on Exertion"]
  },

  { name: "Pulmonary Tuberculosis", system: "Resp", tags: ["Infectious", "Chronic", "TB"],
    hint: "Chronic cough >3 weeks + hemoptysis + evening fever + night sweats + weight loss. Apical dullness + bronchial breathing. Low SES, TB contact.",
    strong:   ["Fever (Low Grade, Evening Rise)","Fever — Evening Rise (TB pattern)","Night Sweats","Family Hx — TB Contact","Tuberculosis / ATT Taken","Hemoptysis"],
    moderate: ["Cough (Chronic >3 Weeks)","Weight Loss","Anorexia","Low Socioeconomic Status","Dull Percussion Note","Bronchial Breath Sounds"],
    weak:     ["Fever (Persistent / Prolonged)","Moderate Anemia","Malaise / Weight Loss","Prolonged Fever (Months) + Progressive Weight Loss"],
    negative: ["Wheeze / Rhonchi (bilateral)","Hyperresonant (emphysema/PTX)"],
    danger:   ["Hemoptysis — Altered / Massive","Severe Dyspnea on Exertion"]
  },

  { name: "Pleural Effusion (Tubercular)", system: "Resp", tags: ["Pleural Disease", "TB"],
    hint: "Stony dull percussion + absent breath sounds. Trachea shifted away. Fever + weight loss. Low SES, TB contact.",
    strong:   ["Stony Dullness (effusion)","Absent Breath Sounds","Trachea Shifted — Opposite Side","Intercostal Space — Fullness","Decreased Vocal Resonance"],
    moderate: ["Shortness of Breath","Progressive / Increasing Breathlessness","Chest Pain (Pleuritic)","Chest Pain — Pleuritic (sharp, breathing)","Family Hx — TB Contact","Low Socioeconomic Status"],
    weak:     ["Fever (Persistent / Prolonged)","Fever (Low Grade, Evening Rise)","Night Sweats","Weight Loss","Febrile (>37.5°C)"],
    negative: ["Wheeze / Rhonchi (bilateral)","Hyperresonant (emphysema/PTX)","Bronchial Breath Sounds"],
    danger:   ["Severe Dyspnea on Exertion","Trachea Shifted — Opposite Side"]
  },

  { name: "Pneumonia / Consolidation", system: "Resp", tags: ["Infective", "Acute"],
    hint: "Acute onset + high fever with chills + rusty sputum + bronchial breathing + increased vocal resonance over affected area.",
    strong:   ["Bronchial Breath Sounds","Increased Vocal Resonance","Cough with Rusty / Purulent Sputum","Sputum — Rusty / Blood-tinged (pneumonia)","Fever (High Grade + Chill and Rigor)","Dull Percussion Note"],
    moderate: ["Fever (High Grade, Continuous)","High Fever (>39°C)","Chest Pain (Pleuritic)","Chest Pain — Pleuritic (sharp, breathing)","Shortness of Breath","Tachypnea (RR >20/min)"],
    weak:     ["Febrile (>37.5°C)","Tachycardia (>100/min)","Onset: Sudden / Acute","Sputum — Purulent / Greenish"],
    negative: ["Wheeze / Rhonchi (bilateral)","Hyperresonant (emphysema/PTX)","Absent Breath Sounds"],
    danger:   ["Severe Dyspnea on Exertion","Central Cyanosis","Unconscious / Comatose"]
  },

  { name: "Pneumothorax", system: "Resp", tags: ["Acute", "Emergency"],
    hint: "Sudden onset dyspnea + chest pain. Absent breath sounds + hyperresonance. Trachea shifts AWAY in tension pneumothorax.",
    strong:   ["Hyperresonant (emphysema/PTX)","Absent Breath Sounds","Onset: Sudden / Acute","Trachea Shifted — Opposite Side","Chest Pain (Unilateral)"],
    moderate: ["Sudden Onset Severe Breathlessness","Shortness of Breath","Decreased Vocal Resonance","Tachycardia (>100/min)","Tachypnea (RR >20/min)"],
    weak:     ["Below Average / Thin","Chest Pain (Pleuritic)"],
    negative: ["Dull Percussion Note","Stony Dullness (effusion)","Bronchial Breath Sounds","Fine Crepitations (basal)"],
    danger:   ["Trachea Shifted — Opposite Side","Hypotension (BP <90/60)","Tachycardia (>100/min)"]
  },

  { name: "Lung Abscess", system: "Resp", tags: ["Suppurative Lung", "Acute"],
    hint: "Foul-smelling dark sputum + high fever with chills/rigor + weight loss. Anaerobic infection. Alcoholic or aspiration risk.",
    strong:   ["Cough with Dark Foul-Smelling Sputum","Cough (Foul-Smelling Purulent Sputum)","Sputum — Foul Smelling (lung abscess)","Fever (High Grade + Chill and Rigor)","Fever (Chill and Rigor)"],
    moderate: ["High Fever (>39°C)","Weight Loss","Dull Percussion Note","Bronchial Breath Sounds","Alcohol Use"],
    weak:     ["Moderate Anemia","Drumstick Appearance (Grade 2–3)","Chest Pain (Central / General)"],
    negative: ["Wheeze / Rhonchi (bilateral)"],
    danger:   ["Hemoptysis — Altered / Massive","Severe Dyspnea on Exertion"]
  },

  { name: "Bronchial Carcinoma (Lung Cancer)", system: "Resp", tags: ["Malignancy", "Smoker"],
    hint: "Elderly heavy smoker. Clubbing + supraclavicular nodes = malignancy. Bovine cough = recurrent laryngeal nerve. Weight loss + hemoptysis.",
    strong:   ["Chronic Smoker","Hemoptysis","Marked Weight Loss / Anorexia","Hoarseness of Voice","Change in Voice (Hoarseness)","Hoarseness / Bovine Cough (X)","Lymphadenopathy (palpable)"],
    moderate: ["Cough (Chronic >3 Weeks)","Weight Loss","Drumstick Appearance (Grade 2–3)","Dull Percussion Note","Absent Breath Sounds"],
    weak:     ["Swelling of Face, Neck, Arms","Visible Veins / Engorged","Trachea Shifted — Same Side","Parrot-Beak Appearance (Grade 4)"],
    negative: [],
    danger:   ["Swelling of Face, Neck, Arms","Raised JVP — Non-Pulsatile","Hemoptysis — Altered / Massive"]
  },

  { name: "Pulmonary Fibrosis (ILD)", system: "Resp", tags: ["Restrictive", "Chronic"],
    hint: "Progressive dyspnoea + dry cough + bilateral fine Velcro crackles at bases. Clubbing in IPF. HRCT diagnostic. Restrictive spirometry.",
    strong: ["Fine Crepitations (basal)","Bilateral Basal Crepitations (LVF)","Progressive / Increasing Breathlessness","Drumstick Appearance (Grade 2–3)","Bilateral Crepitations (Basal)"],
    moderate: ["Cough (Dry, Nocturnal)","Cough (Chronic >3 Weeks)","Occupational Dust Exposure","Central Cyanosis","Tachypnea (RR >20/min)"],
    weak:     ["Weight Loss","Exertional Dyspnea"],
    negative: ["Wheeze / Rhonchi (bilateral)","Fever (High Grade, Continuous)","Sputum — Purulent / Greenish"],
    danger:   ["Severe Dyspnea on Exertion","Central Cyanosis"]
  },

  // ─── CARDIOVASCULAR ─────────────────────────────────────────

  { name: "Mitral Stenosis", system: "CVS", tags: ["Valvular Heart Disease", "Rheumatic"],
    hint: "Tapping apex + MDM + loud S1 + opening snap. Malar flush. AF common. History of rheumatic fever.",
    strong:   ["Mid-Diastolic Murmur (apex)","Loud S1 (mitral stenosis)","Opening Snap","Tapping Apex Beat","Rheumatic Fever (childhood)"],
    moderate: ["Shortness of Breath","Shortness of Breath (PND / Orthopnea)","Paroxysmal Nocturnal Dyspnea","Exertional Dyspnea","Palpitation","Irregular Pulse"],
    weak:     ["Hemoptysis","Bilateral Basal Crepitations (LVF)","Raised JVP","Pitting Edema — Bilateral Legs","Sore Throat (2–4 Weeks Prior)"],
    negative: ["Heaving / Thrusting Apex","Collapsing / Waterhammer Pulse"],
    danger:   ["Irregular Pulse","Severe Dyspnea on Exertion","Hemoptysis — Altered / Massive"]
  },

  { name: "Mitral Regurgitation", system: "CVS", tags: ["Valvular Heart Disease", "Regurgitation"],
    hint: "Displaced thrusting apex + pansystolic murmur radiating to axilla + soft S1 + S3 gallop. Volume overload.",
    strong:   ["Pansystolic Murmur (apex→axilla)","Murmur — Radiation to Axilla","Heaving / Thrusting Apex","Displaced Laterally","Soft S1"],
    moderate: ["Shortness of Breath","Shortness of Breath (PND / Orthopnea)","Paroxysmal Nocturnal Dyspnea","Exertional Dyspnea","S3 Gallop (heart failure)","Rheumatic Fever (childhood)"],
    weak:     ["Palpitation","Bilateral Basal Crepitations (LVF)","Irregular Pulse"],
    negative: ["Tapping Apex Beat","Mid-Diastolic Murmur (apex)"],
    danger:   ["Severe Dyspnea on Exertion","Irregular Pulse"]
  },

  { name: "Aortic Stenosis", system: "CVS", tags: ["Valvular Heart Disease", "Obstruction"],
    hint: "Classic triad: dyspnea + syncope + angina. Slow rising pulse + narrow pulse pressure + ESM radiating to neck.",
    strong:   ["Ejection Systolic (aortic area)","Murmur — Radiation to Neck","Low Volume Pulse","Exertional Syncope","Syncope on exertion (AS)"],
    moderate: ["Exertional Chest Pain / Angina","Shortness of Breath","Shortness of Breath on Exertion","Severe Dyspnea on Exertion","Ejection Click","Heaving / Thrusting Apex"],
    weak:     ["Bilateral Basal Crepitations (LVF)","S3 Gallop (heart failure)"],
    negative: ["Collapsing / Waterhammer Pulse","Displaced Laterally"],
    danger:   ["Syncope on exertion (AS)","Severe Dyspnea on Exertion","Unconscious / Comatose"]
  },

  { name: "Aortic Regurgitation", system: "CVS", tags: ["Valvular Heart Disease", "Regurgitation"],
    hint: "Collapsing pulse + wide pulse pressure + dancing carotid. EDM at LSE. Displaced thrusting apex. BP may be 160/30.",
    strong:   ["Early Diastolic (aortic area)","Collapsing / Waterhammer Pulse","High Volume Pulse","Displaced Laterally","Heaving / Thrusting Apex"],
    moderate: ["Palpitation","Palpitation (Awareness of Heartbeat)","Shortness of Breath","Exertional Dyspnea","Hypertension (BP >140/90)"],
    weak:     ["Bilateral Basal Crepitations (LVF)","S3 Gallop (heart failure)"],
    negative: ["Tapping Apex Beat","Mid-Diastolic Murmur (apex)","Low Volume Pulse"],
    danger:   ["Severe Dyspnea on Exertion","Unconscious / Comatose"]
  },

  { name: "Congestive Cardiac Failure", system: "CVS", tags: ["Heart Failure", "Multi-system"],
    hint: "Raised JVP + bilateral pitting edema + basal crepitations + S3 gallop + displaced apex. Classic triad of CCF.",
    strong:   ["Bilateral Basal Crepitations (LVF)","Fine Crepitations (basal)","Raised JVP","Bilateral Pitting Pedal Edema","Pitting Edema — Bilateral Legs","S3 Gallop (heart failure)","Anasarca (Generalized)","Swelling of Whole Body (Anasarca)"],
    moderate: ["Shortness of Breath","Shortness of Breath (PND / Orthopnea)","Progressive / Increasing Breathlessness","Paroxysmal Nocturnal Dyspnea","Orthopnea (pillows used)","Leg / Ankle Swelling","Ankle / Leg swelling (cardiac edema)","Displaced Laterally","Heaving / Thrusting Apex"],
    weak:     ["General Weakness / Fatigue","Palpitation","Moderate Anemia","Swelling of Abdomen (Ascites)","Cardiac Disease (known)","Hypertension (BP >140/90)"],
    negative: [],
    danger:   ["Severe Dyspnea on Exertion","Tachycardia (>100/min)","Unconscious / Comatose"]
  },

  { name: "Hypertension (Essential)", system: "CVS", tags: ["Vascular", "Chronic"],
    hint: "BP >140/90 on 2+ readings. Heaving non-displaced apex = LVH. Often asymptomatic. Screen for end-organ damage.",
    strong:   ["Hypertension (BP >140/90)","Hypertension (renal)","Heaving / Thrusting Apex"],
    moderate: ["Headache","Headache (Throbbing, Frontal)","Severe Headache (Pre-eclampsia / HTN)","Dizziness / Giddiness","Palpitation"],
    weak:     ["General Weakness / Fatigue","Shortness of Breath on Exertion","Obese","Diabetes Mellitus","Family Hx — Similar Illness"],
    negative: ["Raised JVP","Pitting Edema — Bilateral Legs","Bilateral Basal Crepitations (LVF)"],
    danger:   ["Severe Headache (Pre-eclampsia / HTN)","Headache (Worse on Bending)","Unconscious / Comatose","Seizures"]
  },

  { name: "Hypertension in Pregnancy", system: "CVS", tags: ["Obstetric", "Pregnancy", "Emergency"],
    hint: "≥20 weeks gestation + severe headache / visual disturbance / epigastric pain + facial-hand oedema → think pre-eclampsia. Check BP and urine protein. Seizures = eclampsia.",
    strong:   ["Severe Headache (Pre-eclampsia / HTN)","Headache + Visual Disturbance (Pregnancy)","Currently Pregnant / Antenatal","Amenorrhea","Hypertension in Pregnancy (≥140/90)"],
    moderate: ["Oedema of Face and Hands (Pregnancy)","Epigastric Pain (RUQ) in Pregnancy","Shortness of Breath","Palpitation","Proteinuria (Dipstick ≥2+)"],
    weak:     ["Nausea / Vomiting","Headache"],
    negative: ["Raised JVP","Bilateral Basal Crepitations (LVF)"],
    danger:   ["Seizures","Severe Headache (Pre-eclampsia / HTN)","Unconscious / Comatose"]
  },

  { name: "Infective Endocarditis (SBE)", system: "CVS", tags: ["Infective", "Cardiac"],
    hint: "Fever + changing murmur + embolic phenomena. Osler's nodes + Janeway lesions + splinter hemorrhages. IV drug abuse, dental procedures.",
    strong:   ["Changing Murmur (SBE)","Fever (Persistent / Prolonged)","IV Drug Abuse / Tattooing"],
    moderate: ["Fever (>4 Days)","Fever (Low Grade, Evening Rise)","Hematuria","Drumstick Appearance (Grade 2–3)","Cardiac Disease (known)","Rheumatic Fever (childhood)"],
    weak:     ["Malaise / Weight Loss","Palpitation","Splenomegaly","Lymphadenopathy (palpable)"],
    negative: [],
    danger:   ["Severe Dyspnea on Exertion","Unconscious / Comatose"]
  },

  { name: "Rheumatic Fever", system: "CVS", tags: ["Infective", "Rheumatic"],
    hint: "Jones criteria. Migratory large joint arthritis + fever + preceding streptococcal sore throat 2–4 weeks. Carditis may develop.",
    strong:   ["Migrating Polyarthritis (Large Joints)","Migratory / Fleeting joint pain (RF)","Sore Throat (2–4 Weeks Prior)","Sore Throat (2–3 Weeks Prior)","Onset: Following sore throat (2–4 wks)"],
    moderate: ["Fever (>4 Days)","Fever (High Grade, Continuous)","Joint Pain / Arthralgia","Joint Warmth","Joint Tenderness","Joint Redness / Erythema","Tachycardia (>100/min)"],
    weak:     ["Chest Pain (Central / General)","Palpitation","Febrile (>37.5°C)","Subcutaneous Nodules"],
    negative: ["Drumstick Appearance (Grade 2–3)","Raised JVP"],
    danger:   ["Severe Dyspnea on Exertion","Tachycardia (>100/min)"]
  },

  { name: "Tetralogy of Fallot", system: "CVS", tags: ["Cyanotic CHD", "Congenital"],
    hint: "Classic cyanotic CHD. Squatting relieves dyspnea. RVOT obstruction + VSD + RVH + overriding aorta. Young patient.",
    strong:   ["Cyanosis since Birth / Infancy","Squatting Spells","Central Cyanosis","Drumstick Appearance (Grade 2–3)"],
    moderate: ["Shortness of Breath on Exertion","Severe Dyspnea on Exertion","Ejection Systolic (aortic area)","Right Parasternal Heave"],
    weak:     ["Failure to Thrive"],
    negative: ["Stony Dullness (effusion)","Bilateral Basal Crepitations (LVF)"],
    danger:   ["Central Cyanosis","Severe Dyspnea on Exertion","Unconscious / Comatose"]
  },

  { name: "Patent Ductus Arteriosus", system: "CVS", tags: ["Acyanotic CHD", "Congenital"],
    hint: "Continuous machinery murmur at left infraclavicular area. Collapsing pulse + wide pulse pressure.",
    strong:   ["Continuous Murmur","Collapsing / Waterhammer Pulse","High Volume Pulse"],
    moderate: ["Shortness of Breath on Exertion","Palpitation","Recurrent Chest Infections (childhood)"],
    weak:     ["Failure to Thrive"],
    negative: ["Central Cyanosis"],
    danger:   ["Central Cyanosis","Severe Dyspnea on Exertion"]
  },

  // ─── GASTROINTESTINAL ────────────────────────────────────────

  { name: "Peptic Ulcer Disease", system: "GIT", tags: ["GI", "Peptic Ulcer", "Chronic"],
    hint: "Epigastric hunger pain relieved by food/antacid, nocturnal pain (wakes patient). H. pylori main cause. NSAIDs/aspirin use. Alarm symptoms → urgent OGD.",
    strong:   ["Epigastric Pain (Hunger Pain, Relieved by Food)","Nocturnal Epigastric Pain","Aggravated by: Empty stomach / Hunger","Relieved by: Food / Antacid (DU pain)","Hematemesis / Vomiting blood","Epigastric Tenderness"],
    moderate: ["Heartburn / Belching","Vomiting / Nausea","Upper Abdominal Pain / Discomfort","Abdominal Pain (General)","Aggravated by: Smoking / NSAIDs / Steroids","Melena (black tarry stool)","Mild Anemia","Belching / Bloating"],
    weak:     ["Weight Loss","Anorexia / Loss of appetite","Onset: Gradual / Insidious"],
    negative: ["Marked Weight Loss / Anorexia","Jaundice (yellow eyes / urine)","Hepatosplenomegaly","Diarrhea — Watery"],
    danger:   ["Hematemesis / Vomiting blood","Melena (black tarry stool)","Guarding / Rigidity"]
  },

  { name: "Duodenal Ulcer with Pyloric Stenosis", system: "GIT", tags: ["Peptic Ulcer", "Obstruction"],
    hint: "Projectile vomiting of previous day's food (no bile) + succussion splash + relief after vomiting. Chronic DU history.",
    strong:   ["Projectile Vomiting (No Bile)","Vomiting — Previous day's food (no bile)","Projectile Vomiting (gastric outlet obstruction)","Succussion splash (heard on movement)","Visible Peristalsis"],
    moderate: ["Epigastric Pain (Hunger Pain, Relieved by Food)","Relieved by: Vomiting (gastric outlet obstruction)","Weight Loss","Constipation","Dehydration (dry tongue/turgor)"],
    weak:     ["Emaciated / Cachexic","Vomiting / Nausea"],
    negative: ["Diarrhea","Jaundice"],
    danger:   ["Dehydration (dry tongue/turgor)","Hypotension (BP <90/60)"]
  },

  { name: "Carcinoma of the Stomach", system: "GIT", tags: ["GIT", "Malignancy"],
    hint: "Elderly male. Upper abdominal mass + marked weight loss + anorexia + anemia. Virchow's node. Dysphagia if near cardia.",
    strong:   ["Marked Weight Loss / Anorexia","Palpable Mass","Lymphadenopathy (palpable)","Liver — Hard / Irregular (malignant)","Emaciated / Cachexic"],
    moderate: ["Upper Abdominal Pain / Discomfort","Upper Abdominal Mass / Discomfort","Weight Loss","Vomiting / Nausea","Anorexia / Loss of appetite","Dysphagia"],
    weak:     ["Moderate Anemia","Severe Anemia","Melena (black tarry stool)","Middle Aged / Elderly","Male"],
    negative: ["Jaundice (Progressive, Painless)"],
    danger:   ["Hematemesis / Vomiting blood","Severe Dyspnea on Exertion"]
  },

  { name: "Carcinoma Head of Pancreas", system: "GIT", tags: ["Malignancy", "Obstructive Jaundice"],
    hint: "Progressive painless jaundice + palpable gallbladder (Courvoisier's law) + weight loss. Elderly. CA 19-9 elevated.",
    strong:   ["Jaundice (Progressive, Painless)","Palpable Gallbladder","Generalized Itching (Obstructive)","Pale / Clay-colored Stool","Dark Urine (tea/cola colored)"],
    moderate: ["Jaundice","Epigastric Pain (Radiating to Back)","Weight Loss","Anorexia","Deep / Severe Jaundice","Scratch Marks (uremia/itch)"],
    weak:     ["Emaciated / Cachexic","Moderate Jaundice","Obese"],
    negative: ["Fever (High Grade, Continuous)","Raised JVP"],
    danger:   ["Deep / Severe Jaundice","Emaciated / Cachexic"]
  },

  { name: "Inflammatory Bowel Disease (Crohn's / UC)", system: "GIT", tags: ["GIT", "Autoimmune"],
    hint: "Bloody/mucus diarrhea + abdominal pain + weight loss + anemia. Extra-intestinal: arthritis, oral ulcers. Young adult.",
    strong:   ["Loose Stools with Mucus / Blood","Diarrhea — Bloody / Mucus","Recurrent Mouth Ulcers","Oral Ulcers","Oral ulcers (SLE / IBD)"],
    moderate: ["Diarrhea","Abdominal Pain (Colicky)","Weight Loss","Fever (Persistent / Prolonged)","Drumstick Appearance (Grade 2–3)","Anorexia"],
    weak:     ["Moderate Anemia","Joint Pain / Arthralgia","Emaciated / Cachexic"],
    negative: ["Jaundice","Raised JVP"],
    danger:   ["Severe Dyspnea on Exertion","Guarding / Rigidity","Bowel Sounds — Absent"]
  },

  { name: "Ileocecal Tuberculosis", system: "GIT", tags: ["GIT", "TB", "Infective"],
    hint: "RIF pain + palpable mass + low-grade fever + weight loss + night sweats. Common in Bangladesh. May mimic Crohn's.",
    strong:   ["Colicky Abdominal Pain (RIF / Umbilicus)","Family Hx — TB Contact","Low Socioeconomic Status","Fever — Evening Rise (TB pattern)","Fever (Low Grade, Evening Rise)"],
    moderate: ["Abdominal Pain (Colicky)","Diarrhea","Weight Loss","Night Sweats","Palpable Mass","Anorexia"],
    weak:     ["Moderate Anemia","Febrile (>37.5°C)"],
    negative: ["Bleeding per Rectum (Fresh Blood)","Deep / Severe Jaundice"],
    danger:   ["Guarding / Rigidity","Bowel Sounds — Absent"]
  },

  { name: "Carcinoma of Colon", system: "GIT", tags: ["GIT", "Malignancy"],
    hint: "Altered bowel habit + fresh blood PR (left-sided) OR mass (right-sided) + weight loss. Elderly. Iron deficiency anemia.",
    strong:   ["Change in Bowel Habit (Alternating)","Altered Bowel Habit (constipation ↔ diarrhea)","Bleeding per Rectum (Fresh Blood)","Fresh Blood Per Rectum","Palpable Mass"],
    moderate: ["Left Lower Abdominal Pain","Weight Loss","Moderate Anemia","Severe Anemia","Middle Aged / Elderly"],
    weak:     ["Anorexia","Constipation","Hepatomegaly (cm below costal)","Emaciated / Cachexic"],
    negative: ["Jaundice (Progressive, Painless)"],
    danger:   ["Guarding / Rigidity","Bowel Sounds — Absent","Hypotension (BP <90/60)"]
  },

  { name: "Acute Pancreatitis", system: "GIT", tags: ["GIT", "Emergency"],
    hint: "Severe constant epigastric pain to back. Alcohol / gallstones. Amylase >3x normal. Grey-Turner / Cullen's signs in severe.",
    strong:   ["Epigastric Pain (Radiating to Back)","Aggravated by: Heavy meal + alcohol (pancreatitis)","Partially relieved by: Bending forward (pancreatitis)","Relieved by: Mohammedans prayer position (pancreatitis)"],
    moderate: ["Vomiting / Nausea","Alcohol Use","Fever (>4 Days)","Abdominal Tenderness","Guarding / Rigidity"],
    weak:     ["High Fever (>39°C)","Febrile (>37.5°C)","Jaundice"],
    negative: ["Diarrhea — Bloody / Mucus","Bleeding per Rectum (Fresh Blood)"],
    danger:   ["Hypotension (BP <90/60)","Tachycardia (>100/min)","Unconscious / Comatose"]
  },

  // ─── HEPATOBILIARY ───────────────────────────────────────────

  { name: "Acute Viral Hepatitis", system: "Hepato", tags: ["Hepatic", "Infective", "Acute"],
    hint: "Jaundice preceded by anorexia + nausea + vomiting + low-grade fever (prodrome 1–2 weeks). Tender hepatomegaly. Dark urine often first sign. Contact/travel history. Young patient.",
    strong:   ["Jaundice","Yellow Discoloration of Eyes / Urine","Jaundice (yellow eyes / urine)","Liver — Tender","Anorexia / Loss of appetite","Dark Urine (tea/cola colored)"],
    moderate: ["Vomiting / Nausea","Upper Abdominal Pain / Discomfort","Right upper abdominal pain (liver / GB)","Abdominal Pain (General)","General Weakness / Fatigue","Profound Fatigue / Malaise","Fever (Persistent / Prolonged)","Fever (>4 Days)","Pale / Clay-colored Stool","Hepatomegaly (cm below costal)"],
    weak:     ["Weight Loss","Blood Transfusion / Surgery","IV Drug Abuse / Tattooing","Mild Jaundice","Moderate Jaundice","Febrile (>37.5°C)","OCP / Contraceptive","Onset: Gradual / Insidious"],
    negative: ["Jaundice (Progressive, Painless)","Palpable Gallbladder"],
    danger:   ["Deep / Severe Jaundice","Unconscious / Comatose","Confused / Disoriented"]
  },

  { name: "Liver Cirrhosis", system: "Hepato", tags: ["Hepatic", "Chronic"],
    hint: "Spider naevi + palmar erythema + ascites + leukonychia + caput medusae. Alcohol or HBV/HCV etiology.",
    strong:   ["Spider Angioma","Palmar Erythema","Caput Medusae","Engorged Abdominal Veins","Shifting Dullness (ascites)","Fluid Thrill (ascites)","Gynecomastia","Completely White Nails","Dupuytren's Contracture"],
    moderate: ["Swelling of Abdomen (Ascites)","Abdominal Distension","Jaundice","Hepatomegaly (cm below costal)","Splenomegaly","Hepatosplenomegaly","Loss of Pubic / Axillary Hair","Alcohol Use"],
    weak:     ["Hematemesis (Variceal)","Hematemesis / Vomiting blood","General Weakness / Fatigue","Weight Loss","Anorexia","Mild Jaundice","Moderate Jaundice","Mild Anemia","Liver Disease / Hepatitis"],
    negative: ["Fever (High Grade, Continuous)"],
    danger:   ["Hematemesis / Vomiting blood","Unconscious / Comatose","Confused / Disoriented"]
  },

  { name: "Obstructive Jaundice", system: "Hepato", tags: ["Hepatic", "Obstructive"],
    hint: "Painless progressive jaundice + pale stools + dark urine + generalized pruritus. Palpable gallbladder = pancreatic cause.",
    strong:   ["Jaundice (Progressive, Painless)","Pale / Clay-colored Stool","Dark Urine (tea/cola colored)","Generalized Itching (Obstructive)","Pruritus (Generalized)","Palpable Gallbladder","Scratch Marks (uremia/itch)"],
    moderate: ["Jaundice","Deep / Severe Jaundice","Weight Loss","Anorexia / Loss of appetite"],
    weak:     ["Emaciated / Cachexic","Moderate Jaundice"],
    negative: ["Fever (High Grade, Continuous)","Raised JVP"],
    danger:   ["Deep / Severe Jaundice","Unconscious / Comatose"]
  },

  { name: "Liver Abscess (Amoebic)", system: "Hepato", tags: ["Hepatic", "Infective"],
    hint: "Tender hepatomegaly + high fever with chills + RUQ pain. Endemic in Bangladesh. USG confirms. Metronidazole.",
    strong:   ["Right Upper Abdominal Pain (to Right Shoulder)","Fever (High Grade + Chill and Rigor)","Liver — Tender","Fever (Chill and Rigor)"],
    moderate: ["High Fever (>39°C)","Hepatomegaly (cm below costal)","Weight Loss","Anorexia","General Weakness / Fatigue","Febrile (>37.5°C)"],
    weak:     ["Moderate Anemia","Betel Nut Chewer"],
    negative: ["Jaundice (Progressive, Painless)","Shifting Dullness (ascites)"],
    danger:   ["High Fever (>39°C)","Hypotension (BP <90/60)"]
  },

  { name: "Hepatoma (Hepatocellular Carcinoma)", system: "Hepato", tags: ["Hepatic", "Malignancy"],
    hint: "Previous HBV/HCV or cirrhosis. Hard irregular liver + AFP raised. Rapid deterioration. Venous hum over liver.",
    strong:   ["Liver — Hard / Irregular (malignant)","Hepatic Bruit","Liver Disease / Hepatitis","Rapid deterioration (days)"],
    moderate: ["Upper Abdominal Mass / Discomfort","Mass in Abdomen","Marked Weight Loss / Anorexia","Abdominal Distension","Shifting Dullness (ascites)","Splenomegaly","Hepatomegaly (cm below costal)"],
    weak:     ["Jaundice","Moderate Jaundice","IV Drug Abuse / Tattooing","Alcohol Use"],
    negative: [],
    danger:   ["Hematemesis / Vomiting blood","Unconscious / Comatose"]
  },

  { name: "Budd-Chiari Syndrome", system: "Hepato", tags: ["Hepatic", "Vascular"],
    hint: "Hepatic vein obstruction. OCP in women. Tender hepatomegaly + massive ascites. Dilated abdominal veins. Doppler USG confirms.",
    strong:   ["Shifting Dullness (ascites)","Fluid Thrill (ascites)","Engorged Abdominal Veins","OCP / Contraceptive","Liver — Tender"],
    moderate: ["Swelling of Abdomen (Ascites)","Abdominal Distension","Jaundice","Hepatomegaly (cm below costal)","Splenomegaly"],
    weak:     ["Female","Abdominal Pain (General)"],
    negative: ["Fever (High Grade, Continuous)"],
    danger:   ["Hematemesis / Vomiting blood","Unconscious / Comatose"]
  },

  { name: "Primary Biliary Cirrhosis", system: "Hepato", tags: ["Hepatic", "Autoimmune"],
    hint: "Middle-aged woman. Severe itch + jaundice + skin darkening. Steatorrhea. AMA positive.",
    strong:   ["Generalized Itching (Day and Night)","Generalized Itching (Obstructive)","Pruritus (Generalized)","Generalized Pigmentation","Skin Darkening (Generalized)","Scratch Marks (uremia/itch)"],
    moderate: ["Jaundice","Jaundice (Progressive, Painless)","Deep / Severe Jaundice","Abdominal Distension","Female","Steatorrhea","Steatorrhea (foul-smelling, floating stool)"],
    weak:     ["Anorexia","Weight Loss","Hepatomegaly (cm below costal)","Splenomegaly"],
    negative: ["Fever (High Grade, Continuous)"],
    danger:   ["Deep / Severe Jaundice","Unconscious / Comatose"]
  },

  // ─── RENAL ───────────────────────────────────────────────────

  { name: "Nephrotic Syndrome", system: "Renal", tags: ["Renal", "Glomerular"],
    hint: "Massive proteinuria + hypoalbuminemia + anasarca + hyperlipidemia. Periorbital puffiness worse in morning. Frothy urine.",
    strong:   ["Anasarca (Generalized)","Swelling of Whole Body (Anasarca)","Frothy Urine","Frothy / Foamy Urine (proteinuria)","Heavy Proteinuria (nephrotic)","Periorbital Edema (morning)","Swelling / Puffiness of Face (Worse Morning)","Facial / Periorbital Puffiness","Puffy Face / Facial Puffiness","Facial puffiness (worse in morning)"],
    moderate: ["Pitting Edema — Bilateral Legs","Bilateral Pitting Pedal Edema","Swelling of Face and Legs","General Swelling","Leg / Ankle Swelling","Shifting Dullness (ascites)","Proteinuria (albuminuria)"],
    weak:     ["Oliguria / Scanty Micturition","Completely White Nails","Distended Abdomen"],
    negative: ["Smoky / High-Colored Urine","Hematuria","Hematuria (painless)"],
    danger:   ["Severe Dyspnea on Exertion","Anasarca (Generalized)"]
  },

  { name: "Nephritic Syndrome / Post-Streptococcal GN", system: "Renal", tags: ["Renal", "Glomerular", "Infective"],
    hint: "Hematuria (tea-colored) + hypertension + oliguria + periorbital puffiness. Preceded by strep sore throat 2–3 weeks prior.",
    strong:   ["Hematuria","Smoky / High-Colored Urine","Dark Urine (tea/cola colored)","Sore Throat (2–3 Weeks Prior)","Sore Throat (2–4 Weeks Prior)","RBC Casts (nephritic)","Hematuria (painless)","Hematuria — Painless"],
    moderate: ["Oliguria / Scanty Micturition","Hypertension (BP >140/90)","Hypertension (renal)","Swelling / Puffiness of Face (Worse Morning)","Periorbital Edema (morning)","Pitting Edema — Bilateral Legs"],
    weak:     ["General Swelling","Bilateral Pitting Pedal Edema"],
    negative: ["Frothy Urine","Frothy / Foamy Urine (proteinuria)","Anasarca (Generalized)"],
    danger:   ["Hypertension (renal)","Oliguria / Anuria","Unconscious / Comatose"]
  },

  { name: "Chronic Kidney Disease (CKD)", system: "Renal", tags: ["Renal", "Chronic"],
    hint: "Pallor + uremic fetor + scratch marks + hypertension + pericardial rub. Small shrunken kidneys on USG. Underlying: DM, HTN.",
    strong:   ["Uremic Fetor (ammoniacal breath)","Pallor (renal anemia)","Scratch Marks (uremic pruritus)","Scratch Marks (uremia/itch)","Pericardial Rub (uremia)","AV Fistula / Dialysis Access","Scar of Transplanted Kidney"],
    moderate: ["Oliguria / Scanty Micturition","Hypertension (renal)","Hypertension (BP >140/90)","Severe Anemia","Moderate Anemia","Swelling of Face and Legs","Leg / Ankle Swelling","Diabetes Mellitus","Renal Disease (known)"],
    weak:     ["Vomiting / Nausea","General Weakness / Fatigue","Weakness / Anorexia / Nausea / Vomiting","Nocturia","Nocturia + Scanty Micturition","Pruritus (Generalized)"],
    negative: [],
    danger:   ["Unconscious / Comatose","Pericardial Rub (uremia)","Severe Dyspnea on Exertion"]
  },

  { name: "Polycystic Kidney Disease", system: "Renal", tags: ["Renal", "Hereditary"],
    hint: "Autosomal dominant. Family history key. Bilateral huge ballotable kidneys. Recurrent UTI. Berry aneurysm risk.",
    strong:   ["Ballotable Kidneys","Ballotable Kidneys (bilateral)","Family Hx — Similar Illness","Family Hx — Consanguinity"],
    moderate: ["Loin Pain (Dull Ache, Bilateral)","Hematuria","Hypertension (BP >140/90)","Urinary Frequency"],
    weak:     ["Mass in Abdomen"],
    negative: ["Anasarca (Generalized)","Frothy Urine"],
    danger:   ["Unconscious / Comatose","Headache (Worse on Bending)"]
  },

  { name: "Urinary Tract Infection (Pyelonephritis)", system: "Renal", tags: ["Infective", "Renal"],
    hint: "Fever + loin pain + dysuria + frequency + renal angle tenderness. More common in females. Pyuria on urine analysis.",
    strong:   ["Renal Angle Tenderness","Dysuria","Dysuria / Burning Urination","Dysuria / Burning micturition","Fever (High Grade + Chill and Rigor)","Loin pain (renal angle)"],
    moderate: ["Fever (>4 Days)","Fever (High Grade, Continuous)","High Fever (>39°C)","Urinary Frequency","Urinary Frequency / Urgency","Female"],
    weak:     ["Febrile (>37.5°C)","Hematuria — Painful (with burning)"],
    negative: ["Anasarca (Generalized)","Frothy Urine"],
    danger:   ["Hypotension (BP <90/60)","Tachycardia (>100/min)","Unconscious / Comatose"]
  },

  // ─── RHEUMATOLOGY ────────────────────────────────────────────

  { name: "Rheumatoid Arthritis", system: "Rheum", tags: ["Autoimmune", "Joint Disease"],
    hint: "Symmetrical small joint polyarthritis (MCPs, PIPs, wrists) + morning stiffness >1hr. Swan neck, boutonniere, ulnar deviation. Subcutaneous nodules.",
    strong:   ["Morning Stiffness >1 Hour","Morning stiffness >1 hour (RA)","Pain and Swelling of Small Joints (Hands/Feet)","Swollen Small Joints (hands/feet)","Joint swelling — Small joints (hands/feet)","Swan Neck Deformity","Boutonnière Deformity","Ulnar Deviation (wrist)"],
    moderate: ["Joint Pain / Arthralgia","Pain in Multiple Joints","Joint Warmth","Joint Tenderness","Restricted Range of Motion","Muscle Wasting (periarticular)","Subcutaneous Nodules"],
    weak:     ["Moderate Anemia","Mild Anemia","Weight Loss","General Weakness / Fatigue"],
    negative: ["Tophi (gouty deposits)","Low Back Pain (Worse at Night / Morning)","Skin Darkening (Generalized)"],
    danger:   ["Restricted Range of Motion","Severe Dyspnea on Exertion"]
  },

  { name: "Systemic Lupus Erythematosus (SLE)", system: "Rheum", tags: ["Autoimmune", "Multi-system"],
    hint: "Young female. Butterfly malar rash + photosensitivity + arthritis + serositis + renal involvement + oral ulcers. Multi-organ disease.",
    strong:   ["Butterfly / Malar Rash","Butterfly Rash (lupus)","Skin Rash (Butterfly / Malar)","Oral Ulcers","Oral ulcers (SLE / IBD)","Hair Loss + Weight Loss"],
    moderate: ["Joint Pain / Arthralgia","Pain in Multiple Joints","Hematuria","Hematuria + Leg Swelling","Fever (Persistent / Prolonged)","Photophobia","Female","Menstrual Irregularities","Menstrual irregularity / Amenorrhea","Skin rash with joint pain (SLE / psoriasis)"],
    weak:     ["Shortness of Breath","General Swelling","Moderate Anemia","Mild Anemia"],
    negative: ["Tophi (gouty deposits)","Drumstick Appearance (Grade 2–3)"],
    danger:   ["Unconscious / Comatose","Severe Dyspnea on Exertion","Hypertension (renal)"]
  },

  { name: "Gout", system: "Rheum", tags: ["Crystal Arthropathy", "Metabolic"],
    hint: "Acute severe monoarthritis — usually 1st MTP joint. Red, hot, tender. Tophi. Hyperuricemia. Male, obesity, alcohol, diuretics.",
    strong:   ["Tophi (gouty deposits)","Joint Redness / Erythema","Joint Warmth","Joint Tenderness","Swollen Large Joints (knee/hip)","Joint swelling — Large joints (knee/ankle)"],
    moderate: ["Joint Pain / Arthralgia","Limb & Joint Swelling","Fever (>4 Days)","Male","Obese","Alcohol Use","Diuretic (furosemide)"],
    weak:     ["Joint Effusion / Fluctuation","Hematuria"],
    negative: ["Morning Stiffness >1 Hour","Butterfly / Malar Rash"],
    danger:   ["Renal Angle Tenderness","Oliguria / Anuria"]
  },

  { name: "Ankylosing Spondylitis", system: "Rheum", tags: ["Spondyloarthropathy", "Young Male"],
    hint: "Young male. Low back pain + morning stiffness IMPROVED by exercise. Sacroiliac tenderness + restricted spinal movement. HLA-B27.",
    strong:   ["Low Back Pain (Worse at Night / Morning)","Morning Stiffness of Spine","Morning stiffness of spine (AS)","Sacroiliac Joint Tenderness","Limitation of Spinal Movement","Restricted Spinal Movement","Back pain improved by exercise (AS)"],
    moderate: ["Joint Pain / Arthralgia","Kyphosis / Scoliosis / Lordosis","Kyphoscoliosis","Vertebral Tenderness","Male"],
    weak:     ["Below Average / Thin"],
    negative: ["Morning Stiffness >1 Hour","Swan Neck Deformity","Ulnar Deviation (wrist)"],
    danger:   ["Bladder / Bowel dysfunction (cord)","Paraplegia / Paraparesis"]
  },

  { name: "Systemic Sclerosis (Scleroderma)", system: "Rheum", tags: ["Autoimmune", "Multi-system"],
    hint: "Skin tightening + Raynaud's + dysphagia. CREST: Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyly, Telangiectasia.",
    strong:   ["Skin Thickening and Tightening (Hands / Face)","Raynaud's Phenomenon (Fingers)","Raynaud's Phenomenon","Raynaud's phenomenon (fingers pale→blue→red)","Sclerodactyly","Difficulty Opening Mouth"],
    moderate: ["Dysphagia","Dysphagia — Solids only (mechanical)","Joint Pain / Arthralgia","Shortness of Breath","Female"],
    weak:     ["Recurrent Mouth Ulcers","Renal Disease (known)"],
    negative: ["Tophi (gouty deposits)","Butterfly / Malar Rash"],
    danger:   ["Severe Dyspnea on Exertion","Renal Disease (known)"]
  },

  { name: "Septic Arthritis", system: "Rheum", tags: ["Infective", "Emergency"],
    hint: "Acute monoarthritis + fever. Hot, red, swollen joint + severely restricted movement. Systemically unwell. Diabetic or immunocompromised.",
    strong:   ["Joint Warmth","Joint Redness / Erythema","Joint Tenderness","Joint Effusion / Fluctuation","Fever (High Grade + Chill and Rigor)","High Fever (>39°C)","Ill / Toxic Looking"],
    moderate: ["Joint Pain / Arthralgia","Limb & Joint Swelling","Diabetes Mellitus","Febrile (>37.5°C)"],
    weak:     ["Fever (>4 Days)"],
    negative: ["Morning Stiffness >1 Hour","Tophi (gouty deposits)"],
    danger:   ["High Fever (>39°C)","Hypotension (BP <90/60)","Tachycardia (>100/min)"]
  },

  { name: "Hemophilic Arthritis", system: "Rheum", tags: ["Hematological", "Joint Disease"],
    hint: "X-linked recessive. Hemarthrosis = most common complication. Factor VIII (A) or IX (B) deficiency. Male patient.",
    strong:   ["Recurrent Hemarthrosis (Knee / Elbow)","Recurrent Joint Bleeding (Hemarthrosis)","Prolonged Bleeding after Minor Injury / Surgery","Muscle Hematomas","Male"],
    moderate: ["Joint Pain and Swelling (Multiple, Child)","Joint Pain / Arthralgia","Recurrent Joint Problems"],
    weak:     ["Moderate Anemia"],
    negative: ["Fever (High Grade + Chill and Rigor)","Tophi (gouty deposits)"],
    danger:   ["Hemoptysis — Altered / Massive","Hematemesis / Vomiting blood"]
  },

  // ─── ENDOCRINE ───────────────────────────────────────────────

  { name: "Hypothyroidism (Myxedema)", system: "Endocrine", tags: ["Endocrine", "Thyroid"],
    hint: "Cold intolerance + weight gain + constipation + bradycardia + dry coarse skin + periorbital puffiness + expressionless face. TSH elevated.",
    strong:   ["Cold Intolerance","Cold Intolerance (hypothyroid)","Expressionless Face (myxedema)","Bradycardia (<60/min)","Periorbital Edema (morning)","Facial / Periorbital Puffiness"],
    moderate: ["Weight Gain","Weight Gain (Progressive)","Weight Gain (hypothyroid / Cushing's)","Constipation","Lethargy / Increased Sleepiness","Diffuse Goiter (smooth)","Thyroid Disorder"],
    weak:     ["Poor Memory / Lack of Concentration","Muscle Weakness","General Weakness / Fatigue","Moderate Anemia","Menorrhagia","Obese"],
    negative: ["Weight Loss","Heat Intolerance / Sweating","Tachycardia (>100/min)","Exophthalmos / Proptosis"],
    danger:   ["Unconscious / Comatose","Bradycardia (<60/min)"]
  },

  { name: "Hyperthyroidism (Graves' Disease)", system: "Endocrine", tags: ["Endocrine", "Thyroid"],
    hint: "Heat intolerance + weight loss + tremor + palpitation + exophthalmos + diffuse goiter with bruit. Tachycardia. Graves' = ophthalmopathy unique.",
    strong:   ["Exophthalmos / Proptosis","Lid Lag / Lid Retraction","Diffuse Goiter (smooth)","Bruit Over Thyroid","Heat Intolerance / Sweating","Heat Intolerance (hyperthyroid)","Excessive sweating (thyrotoxicosis)"],
    moderate: ["Weight Loss (Despite Good Appetite)","Weight Loss","Palpitation","Palpitation — Rapid Regular","Tremor of Hands (Fine)","Tremor (hands / tongue)","Diarrhea","Anxiety / Irritability","Pretibial Myxedema"],
    weak:     ["Muscle Weakness","Tachycardia (>100/min)","Irregular Pulse","Below Average / Thin"],
    negative: ["Cold Intolerance","Weight Gain","Bradycardia (<60/min)","Constipation","Expressionless Face (myxedema)"],
    danger:   ["Tachycardia (>100/min)","High Fever (>39°C)","Unconscious / Comatose"]
  },

  { name: "Diabetes Mellitus", system: "Endocrine", tags: ["Metabolic", "Endocrine", "Chronic"],
    hint: "Classic triad: polyuria + polydipsia + weight loss. Peripheral neuropathy (glove-stocking). Screen for complications.",
    strong:   ["Polyuria (Frequent Urination)","Polyuria / Excessive urine","Polyuria / Nocturia","Polydipsia (Excessive Thirst)","Polydipsia (excessive thirst)","Glycosuria"],
    moderate: ["Weight Loss (Despite Good Appetite)","Weight Loss","Burning Sensation of Hands and Feet","Glove-Stocking Sensory Loss","Dimness of Vision","Diabetes Mellitus"],
    weak:     ["Obese","Hematuria","Leg / Ankle Swelling","Renal Disease (known)","Polyphagia (excessive hunger)"],
    negative: ["Fever (High Grade, Continuous)","Raised JVP"],
    danger:   ["Unconscious / Comatose","Confused / Disoriented","Tachycardia (>100/min)"]
  },

  { name: "Addison's Disease (Adrenal Insufficiency)", system: "Endocrine", tags: ["Endocrine", "Adrenal"],
    hint: "Generalized hyperpigmentation (palmar creases, mucosa, sun-exposed areas) + postural hypotension + weakness + weight loss.",
    strong:   ["Generalized Hyperpigmentation","Palmar Crease Pigmentation","Mucosal Pigmentation (mouth)","Generalized Pigmentation","Skin Darkening (Generalized)","Sun-Exposed Areas (face/neck)","Hypotension (BP <90/60)","Hypotension"],
    moderate: ["Weakness + Weight Loss + Pigmentation","Weight Loss","Muscle Weakness","General Weakness / Fatigue","Loss of Pubic / Axillary Hair","Vomiting / Nausea","Amenorrhea"],
    weak:     ["Weakness / Anorexia / Nausea / Vomiting","Weakness + Dizziness","Loss of Appetite + Nausea + Dizziness"],
    negative: ["Hypertension (BP >140/90)","Weight Gain","Exophthalmos / Proptosis"],
    danger:   ["Hypotension (BP <90/60)","Unconscious / Comatose","Tachycardia (>100/min)"]
  },

  { name: "Cushing's Syndrome", system: "Endocrine", tags: ["Endocrine", "Adrenal"],
    hint: "Moon face + buffalo hump + purple striae + hypertension + truncal obesity with thin limbs. 24hr UFC or dexamethasone suppression test.",
    strong:   ["Cushingoid Appearance","Excessive Weight Gain (Truncal)","Striae","Excessive skin pigmentation"],
    moderate: ["Weight Gain","Weight Gain (Progressive)","Weight Gain (hypothyroid / Cushing's)","Hypertension (BP >140/90)","General Weakness / Fatigue","Backache / Bone Pain","Menstrual Irregularities","Obese"],
    weak:     ["Steroid (oral / inhaled)","Petechiae / Purpura on Skin","Bleeding Spots on Skin / Bruising"],
    negative: ["Weight Loss","Hypotension","Generalized Itching (Day and Night)"],
    danger:   ["Hypertension (BP >140/90)","Unconscious / Comatose"]
  },

  { name: "Acromegaly", system: "Endocrine", tags: ["Endocrine", "Pituitary"],
    hint: "GH excess. Progressive enlargement of hands/feet/face + coarse features + hypertension. IGF-1 elevated. Glucose suppression test.",
    strong:   ["Progressive Enlargement of Hands / Feet / Face"],
    moderate: ["Headache","Change in Voice (Hoarseness)","Hoarseness of Voice","Excessive Sweating","Joint Pain / Arthralgia","Hypertension (BP >140/90)"],
    weak:     ["General Weakness / Fatigue","Diabetes Mellitus"],
    negative: [],
    danger:   ["Visual Disturbance (Optic Neuritis)","Unconscious / Comatose"]
  },

  { name: "Hypopituitarism (Sheehan's Syndrome)", system: "Endocrine", tags: ["Endocrine", "Pituitary"],
    hint: "Postpartum hemorrhage + failure to lactate + amenorrhea. Panhypopituitarism. All pituitary axes affected.",
    strong:   ["Failure to Breastfeed Postpartum","Amenorrhea","Loss of Pubic / Axillary Hair"],
    moderate: ["General Weakness / Fatigue","Cold Intolerance","Constipation","Weight Loss","Weakness + Dizziness","Female"],
    weak:     ["Menstrual Irregularities","Menstrual irregularity / Amenorrhea"],
    negative: ["Generalized Hyperpigmentation","Weight Gain (Progressive)"],
    danger:   ["Unconscious / Comatose","Hypotension (BP <90/60)"]
  },

  // ─── NEUROLOGY ───────────────────────────────────────────────

  { name: "Stroke (CVA — Ischemic / Hemorrhagic)", system: "Neuro", tags: ["Neurological", "Emergency"],
    hint: "Sudden onset UMN hemiplegia + facial deviation + aphasia. Hypertension + DM = major risk factors. CT brain urgently.",
    strong:   ["Sudden Weakness of One Side (Hemiplegia)","Hemiplegia / Hemiparesis","Babinski Extensor (UMN)","Brisk Deep Reflexes (UMN)","Facial Deviation","Onset: Sudden / Acute"],
    moderate: ["Difficulty in Speech (Aphasia)","Speech — Aphasia / Dysphasia","Hemisensory Loss","Facial Palsy (VII)","Hypertension (BP >140/90)","Diabetes Mellitus","Previous Stroke / TIA"],
    weak:     ["Urinary Incontinence","Irregular Pulse","Chronic Smoker","Confused / Disoriented"],
    negative: ["Absent Deep Reflexes (LMN)","Decreased Tone (flaccidity)","Fasciculations"],
    danger:   ["Unconscious / Comatose","Seizures","Tachycardia (>100/min)"]
  },

  { name: "Meningitis (Bacterial / Tubercular)", system: "Neuro", tags: ["Infectious", "Neurological", "Emergency"],
    hint: "Neck rigidity + Kernig's sign + Brudzinski's sign + fever + photophobia. Raised ICP. CT before LP if focal signs.",
    strong:   ["Neck Rigidity","Kernig's Sign Positive","Brudzinski's Sign Positive","Photophobia","Photophobia / Phonophobia (migraine/meningitis)"],
    moderate: ["Headache","Headache (Worse Morning, on Straining)","Fever (Persistent / Prolonged)","High Fever (>39°C)","Fever (High Grade, Continuous)","Vomiting / Nausea"],
    weak:     ["Confused / Disoriented","Family Hx — TB Contact","Febrile (>37.5°C)"],
    negative: ["Bilateral Basal Crepitations (LVF)","Raised JVP"],
    danger:   ["Unconscious / Comatose","Seizures","Papilledema (raised ICP)"]
  },

  { name: "Parkinson's Disease", system: "Neuro", tags: ["Neurological", "Degenerative"],
    hint: "Classic triad: resting pill-rolling tremor + rigidity (cogwheel/lead pipe) + bradykinesia. Shuffling gait + mask-like face. L-dopa responsive.",
    strong:   ["Tremor of Hands (Resting)","Tremor — Resting","Tremor — Resting (Parkinson's)","Expressionless Face (myxedema)","Difficulty Walking / Bradykinesia","Abnormal Gait"],
    moderate: ["Constipation","Difficulty Writing / Speaking","Involuntary Movements","Speech — Dysarthria","Middle Aged / Elderly"],
    weak:     ["Increased Tone (spasticity)","Memory Impairment"],
    negative: ["Babinski Extensor (UMN)","Absent Deep Reflexes (LMN)","Fasciculations"],
    danger:   ["Difficulty Swallowing / Speech","Dysphagia — Liquids + Solids (neuromuscular)"]
  },

  { name: "Motor Neuron Disease", system: "Neuro", tags: ["Neurological", "Degenerative"],
    hint: "Mixed UMN + LMN signs with NO sensory loss = MND. Fasciculations + muscle wasting. Progressive. EMG confirms.",
    strong:   ["Fasciculations","Tongue Wasting / Fasciculation (XII)","Progressive Weakness of Limbs","Progressive Weakness of Upper and Lower Limbs","Wasting of Muscles","Muscle Wasting"],
    moderate: ["Brisk Deep Reflexes (UMN)","Absent Deep Reflexes (LMN)","Babinski Extensor (UMN)","Difficulty Swallowing / Speech","Speech — Dysarthria","Weight Loss"],
    weak:     ["Difficulty Writing / Speaking"],
    negative: ["Tingling / Numbness (paresthesia)","Skin Patches (Hypopigmented) + Numbness"],
    danger:   ["Severe Dyspnea on Exertion","Dysphagia — Liquids + Solids (neuromuscular)","Unconscious / Comatose"]
  },

  { name: "Multiple Sclerosis", system: "Neuro", tags: ["Neurological", "Demyelinating"],
    hint: "Young female. Relapsing-remitting. Disseminated in time and space. Optic neuritis. Uhthoff's phenomenon (worse in heat).",
    strong:   ["Weakness (Relapsing-Remitting)","Relapsing-remitting (MS pattern)","Visual Disturbance (Optic Neuritis)","Aggravated by: Hot bath / heat (MS — Uhthoff's)","Nystagmus (VIII / cerebellum)"],
    moderate: ["Inability to Walk","Urinary Incontinence","Double Vision","Diplopia (III, IV, VI)","General Weakness / Fatigue","Brisk Deep Reflexes (UMN)","Babinski Extensor (UMN)","Increased Tone (spasticity)","Female"],
    weak:     ["Coordination Impaired (ataxia)"],
    negative: ["Fasciculations","Muscle Wasting"],
    danger:   ["Severe Dyspnea on Exertion","Paraplegia / Paraparesis","Unconscious / Comatose"]
  },

  { name: "Guillain-Barré Syndrome", system: "Neuro", tags: ["Neurological", "Post-infectious"],
    hint: "Ascending flaccid paralysis after respiratory/GI infection. Areflexia = pathognomonic. CSF: albuminocytological dissociation.",
    strong:   ["Absent Deep Reflexes (LMN)","Ascending Weakness of Both Lower Limbs","Weakness: Ascending (GBS pattern)","H/o Recent Respiratory Infection (1–2 Wks Prior)","Decreased Tone (flaccidity)"],
    moderate: ["Inability to Walk","Weakness of Both Lower Limbs","Tingling / Numbness of Feet","Tingling / Numbness (paresthesia)","Pins and Needles (Paresthesia)","Onset: Sudden / Acute"],
    weak:     ["Onset: After respiratory infection"],
    negative: ["Brisk Deep Reflexes (UMN)","Babinski Extensor (UMN)","Fever (High Grade + Chill and Rigor)"],
    danger:   ["Severe Dyspnea on Exertion","Paraplegia / Paraparesis","Unconscious / Comatose"]
  },

  { name: "Peripheral Neuropathy (Diabetic)", system: "Neuro", tags: ["Neurological", "Metabolic"],
    hint: "DM + glove-stocking sensory loss + absent ankle reflexes + postural hypotension (autonomic). Burning feet.",
    strong:   ["Glove-Stocking Sensory Loss","Burning Sensation of Hands and Feet","Weakness + Numbness of Hands and Feet (Glove-Stocking)","Pins and Needles — Glove-stocking","Absent Deep Reflexes (LMN)"],
    moderate: ["Tingling / Numbness of Feet","Diabetes Mellitus","Weakness + Wasting of Leg / Foot Muscles","Difficulty Walking / Bradykinesia"],
    weak:     ["Obese","Peripheral Pulses Absent"],
    negative: ["Brisk Deep Reflexes (UMN)","Babinski Extensor (UMN)"],
    danger:   ["Peripheral Pulses Absent"]
  },

  { name: "Myasthenia Gravis", system: "Neuro", tags: ["Neurological", "Neuromuscular"],
    hint: "Fatigable weakness = hallmark. Ptosis worse with sustained upward gaze. Bulbar palsy: dysarthria + dysphagia. AChR antibodies.",
    strong:   ["Fatigable Weakness after Activity","Drooping of Upper Eyelids (Ptosis)","Ptosis (III)","Aggravated by: Sustained gaze / activity (MG)","Weakness: Fatigable (worse with activity)"],
    moderate: ["Double Vision","Diplopia (III, IV, VI)","Difficulty Swallowing / Speech","Difficulty Writing / Speaking","Dysphagia","Drooping of eyelid / Ptosis"],
    weak:     ["Muscle Weakness"],
    negative: ["Fasciculations","Babinski Extensor (UMN)","Brisk Deep Reflexes (UMN)"],
    danger:   ["Severe Dyspnea on Exertion","Unconscious / Comatose","Dysphagia — Liquids + Solids (neuromuscular)"]
  },

  { name: "Spastic Paraplegia (Cord Compression)", system: "Neuro", tags: ["Neurological", "Spinal"],
    hint: "Sensory level + paraplegia + bladder dysfunction = cord compression. MRI spine urgent. TB spine common in Bangladesh.",
    strong:   ["Paraplegia / Paraparesis","Babinski Extensor (UMN)","Brisk Deep Reflexes (UMN)","Increased Tone (spasticity)","Bladder / Bowel dysfunction (cord)","Inability to Void Urine (Retention)","Gibbus (TB spine)"],
    moderate: ["Low Back Pain + Limb Tingling / Numbness","Backache / Bone Pain","Weakness of Both Lower Limbs","Vibration Sense Impaired","Vertebral Tenderness"],
    weak:     ["Family Hx — TB Contact"],
    negative: ["Fasciculations","Absent Deep Reflexes (LMN)","Decreased Tone (flaccidity)"],
    danger:   ["Paraplegia / Paraparesis","Bladder / Bowel dysfunction (cord)","Unconscious / Comatose"]
  },

  { name: "Wilson's Disease", system: "Neuro", tags: ["Neurological", "Metabolic"],
    hint: "Young patient + liver disease + neuropsychiatric features. Kayser-Fleischer ring pathognomonic. Serum ceruloplasmin low.",
    strong:   ["Tremor + Involuntary Movements (Choreoathetosis)","Tremor of Hands (Resting)","Involuntary Movements","Liver Disease / Hepatitis","Family Hx — Consanguinity"],
    moderate: ["Difficulty Writing / Speaking","Jaundice","H/o Recurrent Jaundice (Childhood)","Confused / Disoriented","Hepatomegaly (cm below costal)"],
    weak:     ["Tremor — Intention","Tremor — Intention (cerebellar)"],
    negative: ["Babinski Extensor (UMN)","Raised JVP"],
    danger:   ["Unconscious / Comatose"]
  },

  { name: "Intracranial Space Occupying Lesion (ICSOL)", system: "Neuro", tags: ["Neurological", "Emergency"],
    hint: "Raised ICP triad: headache (worse morning/straining) + projectile vomiting + papilledema. CT/MRI brain urgent.",
    strong:   ["Headache (Worse Morning, on Straining)","Papilledema (raised ICP)","Vomiting (Projectile, Without Nausea)","Headache — Worse in morning / bending"],
    moderate: ["Headache","Visual Disturbance (Optic Neuritis)","Focal Neurological Deficit","Seizures","Confused / Disoriented"],
    weak:     [],
    negative: ["Neck Rigidity","Kernig's Sign Positive"],
    danger:   ["Unconscious / Comatose","Papilledema (raised ICP)","Seizures"]
  },

  { name: "Friedreich's Ataxia", system: "Neuro", tags: ["Neurological", "Hereditary"],
    hint: "Pes cavus + kyphoscoliosis + absent reflexes + cerebellar ataxia + positive Romberg. Autosomal recessive. Cardiomyopathy association.",
    strong:   ["Coordination Impaired (ataxia)","Romberg Positive","Kyphosis / Scoliosis / Lordosis","Kyphoscoliosis","Absent Deep Reflexes (LMN)","Family Hx — Consanguinity"],
    moderate: ["Weakness + Wasting of Leg / Foot Muscles","Wasting of Muscles","Tingling / Numbness of Feet","Difficulty Walking / Bradykinesia"],
    weak:     ["Tremor — Intention","Tremor — Intention (cerebellar)"],
    negative: ["Babinski Extensor (UMN)","Brisk Deep Reflexes (UMN)"],
    danger:   ["Severe Dyspnea on Exertion","Cardiac Disease (known)"]
  },

  // ─── HEMATOLOGY ──────────────────────────────────────────────

  { name: "Iron Deficiency Anemia", system: "Hemato", tags: ["Hematological", "Nutritional"],
    hint: "Koilonychia + pallor + angular stomatitis + glossitis. Dysphagia = Plummer-Vinson syndrome. Microcytic hypochromic. Ferritin low.",
    strong:   ["Present (Spooning of Nails)","Nail — Dry / Brittle / Flat","Dysphagia (Plummer-Vinson)","Pica (Craving for Clay / Ice)","Pica (craving clay / ice — IDA)"],
    moderate: ["Pallor / Fatigue","General Weakness / Fatigue","Anemic Looking","Moderate Anemia","Severe Anemia","Mild Anemia","Dysphagia"],
    weak:     ["Weight Loss","Anorexia","Low Socioeconomic Status","Menorrhagia"],
    negative: ["Splenomegaly","Hepatomegaly (cm below costal)","Lymphadenopathy (palpable)"],
    danger:   ["Severe Dyspnea on Exertion","Tachycardia (>100/min)"]
  },

  { name: "Aplastic Anemia", system: "Hemato", tags: ["Hematological", "Bone Marrow"],
    hint: "Pancytopenia without organomegaly. Hypocellular bone marrow. No splenomegaly is key. Bleeding + pallor + recurrent infections.",
    strong:   ["Bleeding Manifestations (Purpura / Epistaxis / Gums)","Petechiae / Purpura on Skin","Epistaxis / Gum Bleeding","Recurrent Infections / Fever","Fever (Persistent / Prolonged)"],
    moderate: ["Pallor / Fatigue","General Weakness / Fatigue","Severe Anemia","Moderate Anemia","Bleeding Spots on Skin / Bruising"],
    weak:     [],
    negative: ["Splenomegaly","Hepatomegaly (cm below costal)","Lymphadenopathy (palpable)"],
    danger:   ["Hemoptysis — Altered / Massive","Hematemesis / Vomiting blood","Bleeding Manifestations (Purpura / Epistaxis / Gums)"]
  },

  { name: "Chronic Myeloid Leukemia (CML)", system: "Hemato", tags: ["Hematological", "Malignancy"],
    hint: "Massive splenomegaly + sternal tenderness. Philadelphia chromosome. Left upper dragging sensation. Anemia + leukocytosis.",
    strong:   ["Dragging Sensation / Mass (Left Upper Abdomen)","Splenomegaly","Bony Tenderness","Excessive Sweating + Bone Pain"],
    moderate: ["Weakness + Weight Loss + Night Sweats","Night Sweats","Weight Loss","General Weakness / Fatigue","Hepatosplenomegaly","Moderate Anemia"],
    weak:     ["Febrile (>37.5°C)"],
    negative: ["Lymphadenopathy (palpable)"],
    danger:   ["Severe Anemia","Tachycardia (>100/min)"]
  },

  { name: "Chronic Lymphatic Leukemia (CLL)", system: "Hemato", tags: ["Hematological", "Malignancy"],
    hint: "Elderly male. Generalized lymphadenopathy (soft, non-tender, mobile) + moderate splenomegaly. Smudge cells. No sternal tenderness.",
    strong:   ["Painless Lymph Node Enlargement","Generalized Lymph Node Swelling","Lymphadenopathy (Generalized)","Lymphadenopathy (palpable)"],
    moderate: ["General Weakness / Fatigue","Recurrent Infections / Fever","Splenomegaly","Hepatomegaly (cm below costal)","Mild Anemia","Moderate Anemia","Middle Aged / Elderly","Male"],
    weak:     ["Weight Loss"],
    negative: ["Bony Tenderness"],
    danger:   ["Severe Anemia","Recurrent Infections / Fever"]
  },

  { name: "Lymphoma (Hodgkin's / Non-Hodgkin's)", system: "Hemato", tags: ["Hematological", "Malignancy"],
    hint: "Painless lymphadenopathy + B symptoms (fever + night sweats + >10% weight loss). Rubbery nodes. Bimodal age in Hodgkin's.",
    strong:   ["Painless Lymph Node Enlargement","Lymphadenopathy (Generalized)","Generalized Lymph Node Swelling","Fever (Pel-Ebstein / B-symptoms)","Fever — Undulant / Pel-Ebstein (lymphoma)"],
    moderate: ["Night Sweats","Weight Loss","Pruritus (Generalized)","Generalized Itching (Day and Night)","Lymphadenopathy (palpable)","Splenomegaly","Hepatomegaly (cm below costal)"],
    weak:     ["Mild Anemia","Moderate Anemia"],
    negative: ["Bony Tenderness"],
    danger:   ["Severe Anemia","Severe Dyspnea on Exertion"]
  },

  { name: "Hereditary Hemolytic Anemia (Thalassemia / Sickle Cell)", system: "Hemato", tags: ["Hematological", "Hereditary"],
    hint: "Jaundice + anemia + splenomegaly + family history + recurrent episodes. Dark urine. Hb electrophoresis confirms.",
    strong:   ["Jaundice (Recurrent) + Splenomegaly","H/o Recurrent Jaundice (Childhood)","Dark Urine + Family History of Anemia","Family Hx — Similar Illness","Family Hx — Consanguinity","Splenomegaly"],
    moderate: ["Pallor / Fatigue","General Weakness / Fatigue","Moderate Anemia","Severe Anemia","Mild Jaundice","Jaundice"],
    weak:     [],
    negative: ["Lymphadenopathy (palpable)","Bony Tenderness"],
    danger:   ["Severe Anemia","Tachycardia (>100/min)"]
  },

  { name: "Idiopathic Thrombocytopenic Purpura (ITP)", system: "Hemato", tags: ["Hematological", "Platelet"],
    hint: "Thrombocytopenia without splenomegaly. Petechiae and purpura. Anti-platelet antibodies. Young adult. Well-looking otherwise.",
    strong:   ["Petechiae / Purpura on Skin","Bleeding Spots on Skin / Bruising","Bleeding Manifestations (Purpura / Epistaxis / Gums)","Epistaxis / Gum Bleeding"],
    moderate: ["Menorrhagia","Female"],
    weak:     [],
    negative: ["Splenomegaly","Lymphadenopathy (palpable)","Fever (Persistent / Prolonged)"],
    danger:   ["Bleeding Manifestations (Purpura / Epistaxis / Gums)","Hemoptysis — Altered / Massive"]
  },

  { name: "Hemophilia", system: "Hemato", tags: ["Hematological", "Coagulation"],
    hint: "X-linked recessive. Male. Hemarthrosis + prolonged APTT + normal PT. Factor VIII (A) or IX (B) deficiency.",
    strong:   ["Recurrent Hemarthrosis (Knee / Elbow)","Recurrent Joint Bleeding (Hemarthrosis)","Prolonged Bleeding after Minor Injury / Surgery","Muscle Hematomas","Male"],
    moderate: [],
    weak:     [],
    negative: ["Petechiae / Purpura on Skin","Fever (High Grade + Chill and Rigor)"],
    danger:   ["Hemoptysis — Altered / Massive","Hematemesis / Vomiting blood"]
  },

  // ─── DERMATOLOGY ─────────────────────────────────────────────

  { name: "Psoriasis", system: "Derm", tags: ["Dermatology", "Autoimmune"],
    hint: "Silvery scales on extensor surfaces + scalp + nails. Auspitz sign. Psoriatic arthritis may develop.",
    strong:   ["Scaly Itchy Skin (Silvery Scales)","Scaly Skin (Silvery Scales)","Psoriatic Skin Patches","Nail Changes + Joint Pain (Psoriatic)"],
    moderate: ["Joint Pain / Arthralgia","Pruritus (Generalized)","Itching / Pruritus (generalized)"],
    weak:     [],
    negative: ["Fever (High Grade, Continuous)","Shifting Dullness (ascites)"],
    danger:   ["Generalized Skin Redness and Scaling (>90% BSA)"]
  },

  { name: "Exfoliative Dermatitis (Erythroderma)", system: "Derm", tags: ["Dermatology", "Emergency"],
    hint: ">90% BSA involvement. Causes: psoriasis, eczema, drug reaction, lymphoma. Life-threatening. Temperature dysregulation.",
    strong:   ["Generalized Skin Redness and Scaling (>90% BSA)"],
    moderate: ["Pruritus (Generalized)","Itching / Pruritus (generalized)","Fever + Chills (erythroderma)","Weight Loss","Lymphadenopathy (palpable)"],
    weak:     ["Pitting Edema — Bilateral Legs"],
    negative: [],
    danger:   ["Generalized Skin Redness and Scaling (>90% BSA)","Tachycardia (>100/min)","Hypotension (BP <90/60)"]
  },

  { name: "Leprosy (Lepromatous)", system: "Derm", tags: ["Dermatology", "Infective"],
    hint: "Skin patch with sensory loss + thickened peripheral nerve = leprosy. AFB in slit-skin smear. MDT treatment. Common in Bangladesh.",
    strong:   ["Skin Patches (Hypopigmented) + Numbness","Thickening of Earlobes and Face","Loss of Eyebrows (Madarosis)"],
    moderate: ["Low Socioeconomic Status"],
    weak:     [],
    negative: ["Fever (High Grade, Continuous)","Raised JVP","Shifting Dullness (ascites)"],
    danger:   []
  },

  { name: "Pemphigus Vulgaris", system: "Derm", tags: ["Dermatology", "Autoimmune"],
    hint: "Nikolsky's sign positive. Intraepidermal flaccid bullae. Oral mucosa erosions. Anti-desmoglein antibodies. Steroid treatment.",
    strong:   ["Painful Blistering (Skin + Mucous Membranes)","Skin Erosions + Oral Ulcers","Oral Ulcers","Recurrent Mouth Ulcers"],
    moderate: [],
    weak:     [],
    negative: ["Fever (High Grade, Continuous)","Wheeze / Rhonchi (bilateral)"],
    danger:   ["Skin Erosions + Oral Ulcers","Fever (Persistent / Prolonged)"]
  },

  { name: "Kala-Azar (Visceral Leishmaniasis)", system: "Misc", tags: ["Infective", "Multi-system"],
    hint: "Endemic in Bangladesh. Massive splenomegaly + prolonged fever + skin darkening. rK39 antigen test. Treat with amphotericin B.",
    strong:   ["Prolonged Fever (Months) + Progressive Weight Loss","Splenomegaly","Skin Darkening (Generalized)","Generalized Pigmentation"],
    moderate: ["General Weakness / Fatigue","Dragging Sensation / Mass (Left Upper Abdomen)","Hepatomegaly (cm below costal)","Hepatosplenomegaly","Severe Anemia","Moderate Anemia","Febrile (>37.5°C)"],
    weak:     [],
    negative: ["Lymphadenopathy (palpable)","Raised JVP"],
    danger:   ["Severe Anemia","Tachycardia (>100/min)"]
  },

  // ─── MISCELLANEOUS ───────────────────────────────────────────

  { name: "Pyrexia of Unknown Origin (PUO)", system: "Misc", tags: ["Miscellaneous", "Infective"],
    hint: "Fever >38.3°C for >3 weeks with no diagnosis after 1 week in hospital. Causes: TB, lymphoma, kala-azar, SBE, SLE, drug fever.",
    strong:   ["Fever >38.3°C for >3 Weeks (PUO)","Prolonged Fever (Months) + Progressive Weight Loss","Fever (Persistent / Prolonged)"],
    moderate: ["Night Sweats","Weight Loss","Lymphadenopathy (palpable)","Splenomegaly","Hepatomegaly (cm below costal)","Moderate Anemia","High Fever (>39°C)","Febrile (>37.5°C)"],
    weak:     ["General Weakness / Fatigue"],
    negative: [],
    danger:   ["Unconscious / Comatose","Tachycardia (>100/min)","Hypotension (BP <90/60)"]
  },

  { name: "HIV / AIDS", system: "Misc", tags: ["Miscellaneous", "Infective"],
    hint: "Chronic fever + weight loss >10% + lymphadenopathy + recurrent infections (oral thrush, PCP, TB). HIV ELISA + Western blot. CD4 count.",
    strong:   ["Prolonged Fever (Months) + Progressive Weight Loss","Marked Weight Loss / Anorexia","Chronic Diarrhea + Recurrent Infections","Recurrent Infections / Fever","Painless Lymph Node Enlargement"],
    moderate: ["Weight Loss","Night Sweats","Lymphadenopathy (palpable)","IV Drug Abuse / Tattooing","Moderate Anemia","Severe Anemia"],
    weak:     ["Generalized Lymph Node Swelling"],
    negative: [],
    danger:   ["Unconscious / Comatose","Severe Dyspnea on Exertion"]
  },

  { name: "Takayasu's Disease (Pulseless Disease)", system: "Misc", tags: ["Vascular", "Autoimmune"],
    hint: "Young Asian woman. Absent pulses + asymmetric BP. Aorta + branches involved. ESR elevated. Steroid treatment.",
    strong:   ["Absent or Asymmetric Pulses","Radio-Femoral Delay"],
    moderate: ["Pain in Limbs on Use (Claudication)","Hypertension (BP >140/90)","Headache","Dizziness / Giddiness","General Weakness / Fatigue","Female"],
    weak:     ["Fever (Persistent / Prolonged)"],
    negative: ["Raised JVP","Bilateral Basal Crepitations (LVF)"],
    danger:   ["Absent or Asymmetric Pulses","Unconscious / Comatose"]
  },


  // ─── INFECTIOUS DISEASES ────────────────────────────────────

  { name: "Diarrheal Diseases (Acute Infective)", system: "Infect", tags: ["Infective", "Acute", "GI"],
    hint: "Acute onset loose stools + fever + nausea. Assess dehydration severity. Bloody stool = dysentery (Shigella/Entamoeba). Rice-water stool = Cholera. Recent travel/food history key.",
    strong:   ["Diarrhea — Watery","Diarrhea — Bloody / Mucus","Diarrhea + Fever + Mucus/Blood (Dysentery)","Diarrhea (Watery, Profuse — Rice Water)","Fever (High Grade, Continuous)","Vomiting / Nausea"],
    moderate: ["Abdominal Pain (Colicky)","Dehydration (dry tongue/turgor)","Fever (Chill and Rigor)","Onset: Sudden / Acute","Travel to Endemic Area (Tropics)"],
    weak:     ["Anorexia / Loss of appetite","Fatigue / Weakness / Malaise","Muscle Cramps (Electrolyte Loss)"],
    negative: ["Jaundice (yellow eyes / urine)","Hepatosplenomegaly","Pallor / Fatigue"]
  },

  { name: "Enteric Fever (Typhoid)", system: "Infect", tags: ["Infective", "Bacterial", "Systemic"],
    hint: "Stepwise rising fever + relative bradycardia + rose spots + constipation. Incubation 7–14 days. Blood culture is gold standard. Fecal-oral transmission.",
    strong: ["Fever (Stepwise Rising — Typhoid)","Relative Bradycardia (Fever without Tachycardia)","Rose Spots on Abdomen","Constipation (Predominant — Typhoid)","Fever (Persistent / Prolonged)"],
    moderate: ["Abdominal Pain (General)","Abdominal Distension","Fever (High Grade, Continuous)","Hepatosplenomegaly","Travel to Endemic Area (Tropics)","Onset: Gradual / Insidious","Duration: Weeks (1–4 weeks)"],
    weak:     ["Headache","Anorexia / Loss of appetite","Nausea / Vomiting","Fatigue / Weakness / Malaise","Diarrhea","Cough (Dry, Nocturnal)"],
    negative: ["Diarrhea — Bloody / Mucus","Wheeze","Jaundice (yellow eyes / urine)"]
  },

  { name: "Dengue Fever", system: "Infect", tags: ["Infective", "Viral", "Acute"],
    hint: "Breakbone fever — severe myalgia + retro-orbital headache + biphasic fever + maculopapular rash. Aedes mosquito. Thrombocytopenia key lab finding. Tourniquet test positive.",
    strong: ["Fever (Saddle-back / Biphasic — Dengue)","Retro-orbital Headache (Behind Eyes)","Retro-Orbital Headache (Dengue)","Severe Myalgia / Bone Pain (Breakbone Fever)","Maculopapular Rash (Trunk → Limbs)","Petechiae / Purpura on Skin","Epistaxis / Gum Bleeding"],
    moderate: ["Fever (High Grade, Continuous)","Fever (Persistent / Prolonged)","Vomiting / Nausea","Travel to Endemic Area (Tropics)","Onset: Sudden / Acute"],
    weak:     ["Headache","Anorexia / Loss of appetite","Fatigue / Weakness / Malaise","Lymphadenopathy (palpable)"],
    negative: ["Relative Bradycardia (Fever without Tachycardia)","Wheeze","Morning Stiffness >1 Hour"]
  },

  { name: "Influenza (Seasonal Flu)", system: "Infect", tags: ["Infective", "Viral", "Resp", "Acute"],
    hint: "Abrupt onset + PROMINENT myalgia + high fever + dry cough. Severe prostrating illness unlike common cold. Secondary bacterial pneumonia is key complication.",
    strong: ["Fever (Abrupt Onset — Influenza)","Severe Myalgia / Bone Pain (Breakbone Fever)","Cough (Dry, Nocturnal)","Fever (High Grade, Continuous)","Fatigue / Weakness / Malaise","Profound Fatigue / Malaise","Myalgia / Body Ache","Sore Throat / Coryza"],
    moderate: ["Headache","Sore Throat (2–4 Weeks Prior)","Shortness of Breath","Onset: Sudden / Acute","Tachycardia (>100/min)","Tachypnea (RR >20/min)"],
    weak:     ["Fever (Chill and Rigor)","Nausea / Vomiting","Anorexia / Loss of appetite"],
    negative: ["Relative Bradycardia (Fever without Tachycardia)","Rose Spots on Abdomen","Diarrhea — Watery"]
  },

  { name: "Malaria", system: "Infect", tags: ["Infective", "Parasitic", "Acute"],
    hint: "Paroxysmal fever (rigor→sweat→exhaustion) + splenomegaly + haemolytic anaemia + jaundice. P. falciparum — fever any pattern, most dangerous. Blood film is gold standard.",
    strong: ["Fever (Paroxysmal — Rigor + Sweat)","Fever (Recurrent / Intermittent)","Fever (Chill and Rigor)","Travel to Endemic Area (Tropics)","Chills and Rigors","Splenomegaly"],
    moderate: ["Jaundice (yellow eyes / urine)","Pallor / Fatigue","Severe Anemia","Hepatosplenomegaly","Fever (High Grade, Continuous)","Onset: Sudden / Acute"],
    weak:     ["Headache","Nausea / Vomiting","Abdominal Pain (General)","Dark Urine (tea/cola colored)","Fatigue / Weakness / Malaise"],
    negative: ["Rose Spots on Abdomen","Maculopapular Rash (Trunk → Limbs)","Morning Stiffness >1 Hour"]
  },

  { name: "Cholera", system: "Infect", tags: ["Infective", "Bacterial", "GI", "Acute"],
    hint: "Profuse painless watery diarrhoea (rice-water) + NO fever + rapid severe dehydration. V. cholerae. Fecal-oral/waterborne. ORS is life-saving. No blood/mucus in stool.",
    strong: ["Diarrhea (Watery, Profuse — Rice Water)","Diarrhea — Watery","Dehydration (dry tongue/turgor)","Muscle Cramps (Electrolyte Loss)","Muscle Cramps (Cholera / Electrolyte)","Vomiting / Nausea","Profuse Vomiting"],
    moderate: ["Onset: Sudden / Acute","Travel to Endemic Area (Tropics)","Hypotension (BP <90/60)","Tachycardia (>100/min)","No Fever (Cholera)"],
    weak:     ["Abdominal Distension","Fatigue / Weakness / Malaise"],
    negative: ["Fever (High Grade, Continuous)","Diarrhea — Bloody / Mucus","Rose Spots on Abdomen","Jaundice (yellow eyes / urine)","Relative Bradycardia (Fever without Tachycardia)"]
  },

  { name: "Viral Hepatitis (Acute — A/E/B)", system: "Hepato", tags: ["Infective", "Hepatic", "Acute"],
    hint: "Prodrome (fever+malaise+anorexia) → jaundice + dark urine + pale stool. Tender hepatomegaly. ALT markedly elevated. PT prolonged = severe disease.",
    strong:   ["Jaundice (yellow eyes / urine)","Yellow Discoloration of Eyes / Urine","Dark Urine (tea/cola colored)","Pale / Clay-colored Stool","Liver — Tender","Fever (High Grade, Continuous)"],
    moderate: ["Anorexia / Loss of appetite","Nausea / Vomiting","Right upper abdominal pain (liver / GB)","Hepatomegaly (cm below costal)","Fatigue / Weakness / Malaise","Onset: Sub-acute (days–weeks)"],
    weak:     ["Joint Pain / Arthralgia","Generalized Itching (Obstructive)","Lymphadenopathy (palpable)","Night Sweats"],
    negative: ["Splenomegaly","Caput Medusae","Engorged Abdominal Veins"]
  }
];
