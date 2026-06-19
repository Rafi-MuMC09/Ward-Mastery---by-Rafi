// Disease Library — Clinical Reference Data
// Each entry: sys, sysClass, name, cc[], gen[], note
// To add a disease: add entry here AND matching DDx entry in ddx.js

const DISEASE_LIB = [

  // ─── RESPIRATORY (Ch.2) ─────────────────────────────
  { sys:"Resp", sysClass:"sys-resp", name:"Bronchial Asthma",
    cc:["Shortness of Breath","Chest Tightness","Cough (Dry, Nocturnal)","Seasonal Variation of Cough","Wheeze"],
    gen:["Tachycardia (>100/min)","Tachypnea (RR >20/min)","Wheeze / Rhonchi (bilateral)","Central Cyanosis","Hyperresonant (emphysema/PTX)"],
    note:"Young patient. Seasonal variation. H/o atopy, allergy. Responds to bronchodilator."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Chronic Bronchitis",
    cc:["Cough with Mucoid Sputum (>3 months/yr)","Shortness of Breath on Exertion","Wheeze"],
    gen:["Central Cyanosis","Raised JVP","Pitting Edema — Bilateral Legs","Tachycardia (>100/min)","Tachypnea (RR >20/min)"],
    note:"Chronic smoker. Cough worse in morning and winter. May develop cor pulmonale."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"COPD",
    cc:["Progressive / Increasing Breathlessness","Cough (Chronic >3 Weeks)","Weight Loss","Exertional Dyspnea"],
    gen:["Barrel-Shaped Chest","Emaciated / Cachexic","Hyperresonant (emphysema/PTX)","Prominent Accessory Muscles","Suprasternal/Supraclavicular Excavation"],
    note:"Heavy smoker. Barrel chest. Hyperresonant. Pink puffer vs blue bloater distinction."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Bronchiectasis",
    cc:["Cough (Foul-Smelling Purulent Sputum)","Hemoptysis","Shortness of Breath","Fever (Recurrent / Intermittent)"],
    gen:["Moderate Anemia","Drumstick Appearance (Grade 2–3)","Coarse Crepitations / Crackles","Dull Percussion Note","Ill / Toxic Looking"],
    note:"Copious purulent sputum increases on posture change. Clubbing present. History of childhood whooping cough or TB."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Pleural Effusion (Tubercular)",
    cc:["Shortness of Breath","Chest Pain (Pleuritic)","Fever (Low Grade, Evening Rise)","Weight Loss","Night Sweats"],
    gen:["Mild Anemia","Tachycardia (>100/min)","Tachypnea (RR >20/min)","Trachea Shifted — Opposite Side","Stony Dullness (effusion)"],
    note:"Stony dullness, absent breath sounds. Trachea shifted away. Low SES, TB contact."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Pulmonary Tuberculosis",
    cc:["Cough (Chronic >3 Weeks)","Fever (Low Grade, Evening Rise)","Night Sweats","Weight Loss","Hemoptysis"],
    gen:["Emaciated / Cachexic","Moderate Anemia","Febrile (>37.5°C)","Dull Percussion Note","Bronchial Breath Sounds"],
    note:"Evening fever, night sweats, weight loss triad. Low SES. TB contact. Apical signs."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Lung Abscess",
    cc:["Fever (High Grade + Chill and Rigor)","Cough (Foul-Smelling Purulent Sputum)","Chest Pain (Central / General)","Weight Loss"],
    gen:["Ill / Toxic Looking","High Fever (>39°C)","Moderate Anemia","Drumstick Appearance (Grade 2–3)","Dull Percussion Note"],
    note:"Foul smelling, dark sputum. High fever. Occupational risk (truck driver, alcoholic). Anaerobic infection."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Bronchial Carcinoma",
    cc:["Cough (Chronic >3 Weeks)","Hemoptysis","Weight Loss","Hoarseness of Voice","Chest Pain (Central / General)"],
    gen:["Emaciated / Cachexic","Moderate Anemia","Drumstick Appearance (Grade 2–3)","Lymphadenopathy (palpable)","Chronic Smoker"],
    note:"Elderly heavy smoker. Clubbing + supraclavicular nodes = malignancy. Bovine cough = recurrent laryngeal nerve involvement."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Consolidation (Pneumonia)",
    cc:["Fever (High Grade + Chill and Rigor)","Cough with Rusty / Purulent Sputum","Chest Pain (Pleuritic)","Myalgia / Body Ache"],
    gen:["Ill / Toxic Looking","Tachycardia (>100/min)","High Fever (>39°C)","Tachypnea (RR >20/min)","Herpes Labialis"],
    note:"Acute onset. Rusty sputum. High fever. Bronchial breathing + increased resonance distinguishes from effusion."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Pneumothorax",
    cc:["Sudden Onset Severe Breathlessness","Chest Pain (Unilateral)"],
    gen:["Tachycardia (>100/min)","Tachypnea (RR >20/min)","Raised JVP","Trachea Shifted — Opposite Side","Hyperresonant (emphysema/PTX)"],
    note:"Sudden onset. Young tall thin male. Hyperresonance + absent breath sounds. Trachea shifts away."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Superior Vena Cava Obstruction",
    cc:["Swelling of Face, Neck, Arms","Headache (Worse on Bending)","Shortness of Breath","Cough (Chronic >3 Weeks)"],
    gen:["Facial / Periorbital Puffiness","Raised JVP — Non-Pulsatile","Central Cyanosis","Visible Veins / Engorged","Tachypnea (RR >20/min)"],
    note:"Bronchial carcinoma most common cause. Non-pulsatile raised JVP key finding."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Diffuse Parenchymal Lung Disease (DPLD)",
    cc:["Progressive / Increasing Breathlessness","Cough (Dry, Nocturnal)","Weight Loss"],
    gen:["Tachypnea (RR >20/min)","Fine Crepitations (basal)","Drumstick Appearance (Grade 2–3)","Central Cyanosis"],
    note:"Progressive dyspnea with bilateral fine crepitations. CXR: ground glass. Velcro crackles pathognomonic."
  },
  { sys:"Resp", sysClass:"sys-resp", name:"Cystic Fibrosis",
    cc:["Cough with Purulent Sputum (since childhood)","Recurrent Chest Infections (childhood)","Failure to Thrive"],
    gen:["Below Average / Thin","Drumstick Appearance (Grade 2–3)","Coarse Crepitations / Crackles","Barrel-Shaped Chest"],
    note:"Young patient. Autosomal recessive. Chronic infections + malabsorption. Sweat chloride >60 mmol/L."
  },

  // ─── CVS (Ch.3) ─────────────────────────────────────
  { sys:"CVS", sysClass:"sys-cvs", name:"Mitral Stenosis",
    cc:["Shortness of Breath (PND / Orthopnea)","Palpitation","Hemoptysis","Leg / Ankle Swelling"],
    gen:["Tachycardia (>100/min)","Irregular Pulse","Raised JVP","Pitting Edema — Bilateral Legs","Mild Jaundice"],
    note:"Rheumatic heart disease. Tapping apex = MDM. Malar flush characteristic. AF common."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Mitral Regurgitation",
    cc:["Shortness of Breath on Exertion","General Weakness / Fatigue","Palpitation"],
    gen:["Ill / Toxic Looking","Tachycardia (>100/min)","Irregular Pulse","Displaced Laterally","Heaving / Thrusting Apex"],
    note:"Displaced thrusting apex. Pansystolic murmur to axilla. S3 = volume overload."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Mixed Mitral Stenosis + Regurgitation",
    cc:["Shortness of Breath (PND / Orthopnea)","Leg / Ankle Swelling","Palpitation"],
    gen:["Tachycardia (>100/min)","Irregular Pulse","Raised JVP","Pitting Edema — Bilateral Legs","Mild Jaundice"],
    note:"Both MDM and PSM present. Dominant lesion determines apex character."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Aortic Stenosis",
    cc:["Shortness of Breath on Exertion","Exertional Syncope","Exertional Chest Pain / Angina"],
    gen:["Low Volume Pulse","Narrow Pulse Pressure","Heaving / Thrusting Apex","Carotid Thrill"],
    note:"Triad: dyspnea, syncope, angina. Slow rising pulse. ESM to neck. Ejection click."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Aortic Regurgitation",
    cc:["Palpitation (Awareness of Heartbeat)","Exertional Dyspnea"],
    gen:["Collapsing / Waterhammer Pulse","Wide Pulse Pressure","Displaced Laterally","Heaving / Thrusting Apex"],
    note:"Collapsing pulse + wide pulse pressure = AR. EDM at LSE. BP may be 160/30."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Congestive Cardiac Failure",
    cc:["Shortness of Breath (PND / Orthopnea)","Leg / Ankle Swelling","General Weakness / Fatigue","Palpitation"],
    gen:["Ill / Toxic Looking","Tachycardia (>100/min)","Tachypnea (RR >20/min)","Raised JVP","Pitting Edema — Bilateral Legs","Pitting Edema — Sacral"],
    note:"Raised JVP + bilateral edema + basal crepitations = CCF. S3 = volume overload."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Hypertension",
    cc:["Headache (Throbbing, Frontal)","Dizziness / Giddiness","Cramps in Legs"],
    gen:["Hypertension (BP >140/90)","Heaving / Thrusting Apex"],
    note:"Often asymptomatic. Heaving non-displaced apex = LVH. Screen for end-organ damage."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Subacute Bacterial Endocarditis",
    cc:["Fever (Persistent / Prolonged)","Malaise / Weight Loss","Palpitation","Shortness of Breath"],
    gen:["Ill / Toxic Looking","Moderate Anemia","Drumstick Appearance (Grade 2–3)","Changing Murmur (SBE)","Spider Angioma"],
    note:"Fever + changing murmur + embolic phenomena. IV drug abuse, dental procedures. Blood cultures key."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Rheumatic Fever",
    cc:["Migrating Polyarthritis (Large Joints)","Fever (>4 Days)","Chest Pain (Central / General)","General Weakness / Fatigue"],
    gen:["Febrile (>37.5°C)","Tachycardia (>100/min)","Joint Warmth","Joint Tenderness","Joint Redness / Erythema"],
    note:"Jones criteria. Migratory large joint arthritis. Preceding streptococcal sore throat. Carditis may develop."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Eisenmenger's Syndrome",
    cc:["Severe Dyspnea on Exertion","Hemoptysis","Chest Pain (Central / General)"],
    gen:["Emaciated / Cachexic","Facial / Periorbital Puffiness","Central Cyanosis","Drumstick Appearance (Grade 2–3)","Low Volume Pulse"],
    note:"Central cyanosis + clubbing in both fingers and toes. Eisenmenger = reversal of L→R shunt."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Tetralogy of Fallot",
    cc:["Severe Dyspnea on Exertion","Squatting Spells","Cyanosis since Birth / Infancy"],
    gen:["Central Cyanosis","Drumstick Appearance (Grade 2–3)","Right Parasternal Heave"],
    note:"Classic cyanotic CHD. Squatting relieves dyspnea. RVOT obstruction + VSD + RVH + overriding aorta."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Ventricular Septal Defect",
    cc:["Shortness of Breath on Exertion","Recurrent Chest Infections (childhood)"],
    gen:["Heaving / Thrusting Apex","Tachycardia (>100/min)"],
    note:"PSM at LLSE + thrill. Small VSD = loud murmur ('maladie de Roger'). Large = pulmonary HTN."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Atrial Septal Defect",
    cc:["Shortness of Breath on Exertion","Recurrent Chest Infections (childhood)","Palpitation"],
    gen:["Right Parasternal Heave"],
    note:"Fixed wide split S2 pathognomonic. ESM at pulmonary area. May present late in adult life."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Patent Ductus Arteriosus",
    cc:["Shortness of Breath on Exertion","Recurrent Chest Infections (childhood)"],
    gen:["Collapsing / Waterhammer Pulse","Wide Pulse Pressure","Heaving / Thrusting Apex"],
    note:"Continuous machinery murmur = PDA. Collapsing pulse + wide pulse pressure."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Hypertrophic Cardiomyopathy",
    cc:["Exertional Chest Pain / Angina","Exertional Syncope","Shortness of Breath on Exertion"],
    gen:["Double Apical Impulse","Jerky / Bifid Pulse","Family Hx — Sudden Cardiac Death"],
    note:"Young + exertional syncope + family history of sudden death. Dynamic LVOTO. Jerky pulse."
  },
  { sys:"CVS", sysClass:"sys-cvs", name:"Hypertension in Pregnancy",
    cc:["Currently Pregnant / Antenatal","Amenorrhea","Severe Headache (Pre-eclampsia / HTN)","Headache + Visual Disturbance (Pregnancy)","Oedema of Face and Hands (Pregnancy)","Epigastric Pain (RUQ) in Pregnancy","Nausea / Vomiting","Seizures"],
    gen:["Hypertension in Pregnancy (≥140/90)","Facial / Periorbital Puffiness","Pitting Edema — Bilateral Legs","Peripheral Oedema (Pregnancy)","Proteinuria (Dipstick ≥2+)","Hyperreflexia (Brisk DTRs)","Ankle Clonus","Fundoscopy — Hypertensive Changes"],
    note:"Gestational HTN: BP ≥140/90 after 20 weeks, no proteinuria. Pre-eclampsia: HTN + proteinuria ≥300 mg/24h. Eclampsia = pre-eclampsia + seizures. HELLP = Haemolysis + Elevated Liver enzymes + Low Platelets. Delivery is definitive treatment."
  },

  // ─── GIT (Ch.4) ─────────────────────────────────────
  { sys:"GIT", sysClass:"sys-git", name:"Peptic Ulcer Disease",
    cc:["Epigastric Pain (Hunger Pain, Relieved by Food)","Nocturnal Epigastric Pain","Heartburn / Belching","Vomiting / Nausea","Hematemesis / Vomiting blood","Melena (black tarry stool)","Aggravated by: Empty stomach / Hunger","Relieved by: Food / Antacid (DU pain)","Aggravated by: Smoking / NSAIDs / Steroids"],
    gen:["Well / Normal Looking","Epigastric Tenderness","Mild Anemia","Pallor (if GI blood loss)","No Organomegaly"],
    note:"DU: hunger pain relieved by food, nocturnal, wakes patient at night. GU: pain worsened by food. H. pylori main cause (~80%). Alarm features (>55 yrs, weight loss, dysphagia, haematemesis) → urgent OGD. Complications: haemorrhage (haematemesis/melaena), perforation, pyloric stenosis (projectile vomiting of previous day's food — no bile, succussion splash)."
  },
  { sys:"GIT", sysClass:"sys-git", name:"Duodenal Ulcer with Pyloric Stenosis",
    cc:["Projectile Vomiting (No Bile)","Epigastric Pain (Hunger Pain, Relieved by Food)","Weight Loss"],
    gen:["Emaciated / Cachexic","Dehydration (dry tongue/turgor)","Moderate Anemia","Visible Peristalsis"],
    note:"Projectile vomiting of previous day's food (no bile). Succussion splash. Dehydration, weight loss."
  },
  { sys:"GIT", sysClass:"sys-git", name:"Gastroesophageal Reflux Disease (GERD)",
    cc:["Heartburn / Belching","Belching / Bloating","Cough (Dry, Nocturnal)","Hoarseness of Voice","Dysphagia","Belching / Bloating"],
    gen:["Usually Well Looking","Mild Epigastric Tenderness","Obesity (Major Risk Factor)","No Organomegaly","Dental Erosions (Chronic Regurgitation)"],
    note:"LOS incompetence → acid reflux. Risk factors: obesity, hiatus hernia, pregnancy, smoking, large meals. Alarm symptoms → OGD. Barrett's oesophagus (columnar metaplasia) = pre-malignant complication."
  },
  { sys:"GIT", sysClass:"sys-git", name:"Carcinoma of the Stomach",
    cc:["Upper Abdominal Pain / Discomfort","Marked Weight Loss / Anorexia","Dysphagia","Vomiting / Nausea"],
    gen:["Emaciated / Cachexic","Moderate Anemia","Lymphadenopathy (palpable)"],
    note:"Elderly male. Progressive weight loss + epigastric mass. Virchow's node = gastric malignancy."
  },
  { sys:"GIT", sysClass:"sys-git", name:"Carcinoma Head of Pancreas",
    cc:["Jaundice (Progressive, Painless)","Epigastric Pain (Radiating to Back)","Weight Loss","Generalized Itching (Obstructive)"],
    gen:["Emaciated / Cachexic","Severe Anemia","Deep / Severe Jaundice","Scratch Marks (uremia/itch)"],
    note:"Painless progressive jaundice + palpable gallbladder = Courvoisier's law. Scratch marks. CA-19-9 raised."
  },
  { sys:"GIT", sysClass:"sys-git", name:"Inflammatory Bowel Disease (Crohn's/UC)",
    cc:["Loose Stools with Mucus / Blood","Abdominal Pain (Colicky)","Recurrent Mouth Ulcers","Marked Weight Loss / Anorexia","Fever (Persistent / Prolonged)"],
    gen:["Emaciated / Cachexic","Moderate Anemia","Drumstick Appearance (Grade 2–3)"],
    note:"Crohn's: skip lesions, any GIT, clubbing, perianal disease. UC: continuous colonic involvement, bloody diarrhea."
  },
  { sys:"GIT", sysClass:"sys-git", name:"Ileocecal Tuberculosis",
    cc:["Diarrhea","Colicky Abdominal Pain (RIF / Umbilicus)","Fever (Low Grade, Evening Rise)","Weight Loss","Night Sweats"],
    gen:["Emaciated / Cachexic","Moderate Anemia","Febrile (>37.5°C)"],
    note:"Evening fever + doughy RIF mass + TB contact. Distinguish from Crohn's. Colonoscopy + biopsy needed."
  },
  { sys:"GIT", sysClass:"sys-git", name:"Carcinoma of Colon",
    cc:["Left Lower Abdominal Pain","Change in Bowel Habit (Alternating)","Bleeding per Rectum (Fresh Blood)","Weight Loss"],
    gen:["Moderate Anemia","Emaciated / Cachexic"],
    note:"Change in bowel habit + rectal bleeding + weight loss in elderly = carcinoma colon until proven otherwise."
  },

  // ─── HEPATOBILIARY (Ch.5) ───────────────────────────
  { sys:"Hepato", sysClass:"sys-hep", name:"Obstructive Jaundice",
    cc:["Yellow Discoloration of Eyes / Urine","Generalized Itching (Obstructive)","Marked Weight Loss / Anorexia"],
    gen:["Deep / Severe Jaundice","Mild Anemia","Scratch Marks (uremia/itch)","Pale / Clay-colored Stool","Hepatomegaly (cm below costal)","Palpable Gallbladder"],
    note:"Pale stool + dark urine + itch = obstructive. Painless + palpable GB = Ca pancreas."
  },
  { sys:"Hepato", sysClass:"sys-hep", name:"Acute Viral Hepatitis",
    cc:["Anorexia","Yellow Discoloration of Eyes / Urine","Upper Abdominal Pain / Discomfort","General Weakness / Fatigue","Vomiting / Nausea"],
    gen:["Mild Jaundice","Moderate Jaundice","Febrile (>37.5°C)"],
    note:"Anorexia precedes jaundice. Tender hepatomegaly. OCP history in women. Hepatitis A/B/E."
  },
  { sys:"Hepato", sysClass:"sys-hep", name:"Chronic Liver Disease (Cirrhosis)",
    cc:["Swelling of Abdomen (Ascites)","Leg / Ankle Swelling","General Weakness / Fatigue","Oliguria / Scanty Micturition","Hematemesis (Variceal)"],
    gen:["Mild Jaundice","Spider Angioma","Palmar Erythema","Completely White Nails","Dupuytren's Contracture","Gynecomastia","Loss of Pubic / Axillary Hair"],
    note:"Stigmata: spider naevi, palmar erythema, leukonychia, gynecomastia. Ascites + splenomegaly = portal HTN."
  },
  { sys:"Hepato", sysClass:"sys-hep", name:"Liver Abscess (Amoebic)",
    cc:["Fever (High Grade + Chill and Rigor)","Right Upper Abdominal Pain (to Right Shoulder)","Weight Loss","General Weakness / Fatigue"],
    gen:["Ill / Toxic Looking","High Fever (>39°C)","Moderate Anemia"],
    note:"High fever + tender hepatomegaly + right shoulder pain. Chews betel nut (risk). USG confirms."
  },
  { sys:"Hepato", sysClass:"sys-hep", name:"Primary Biliary Cirrhosis",
    cc:["Generalized Itching (Day and Night)","Jaundice","Swelling of Abdomen (Ascites)","Oliguria / Scanty Micturition","General Weakness / Fatigue"],
    gen:["Deep / Severe Jaundice","Scratch Marks (uremia/itch)","Xanthelasma / Xanthomas","Skin Darkening (Generalized)","Amenorrhea"],
    note:"Middle-aged woman. Severe itch + jaundice + pigmentation. Pale foul-smelling stool (steatorrhea). AMA positive."
  },
  { sys:"Hepato", sysClass:"sys-hep", name:"Hepatoma (Hepatocellular Carcinoma)",
    cc:["Upper Abdominal Mass / Discomfort","Marked Weight Loss / Anorexia","Swelling of Abdomen (Ascites)"],
    gen:["Emaciated / Cachexic","Moderate Jaundice"],
    note:"Previous HBV/HCV or cirrhosis. Hard irregular liver + AFP raised. Venous hum over liver."
  },
  { sys:"Hepato", sysClass:"sys-hep", name:"Hemochromatosis",
    cc:["General Weakness / Fatigue","Swelling of Abdomen (Ascites)","Breathlessness (Cardiomyopathy)","Generalized Pigmentation","Joint Pain / Arthralgia"],
    gen:["Generalized Hyperpigmentation","Skin Darkening (Generalized)"],
    note:"Bronze diabetes. Iron overload: liver, heart, endocrine. Pigmentation + DM + liver disease triad."
  },
  { sys:"Hepato", sysClass:"sys-hep", name:"Budd-Chiari Syndrome",
    cc:["Swelling of Abdomen (Ascites)","Oliguria / Scanty Micturition"],
    gen:["Mild Jaundice","Liver — Tender"],
    note:"Hepatic vein obstruction. OCP in women. Tender hepatomegaly + massive ascites. Doppler USG confirms."
  },
  { sys:"Hepato", sysClass:"sys-hep", name:"Viral Hepatitis (A, E & B)",
    cc:["Anorexia / Loss of appetite","Yellow Discoloration of Eyes / Urine","Right upper abdominal pain (liver / GB)","Dark Urine (tea/cola colored)","Pale / Clay-colored Stool","Profound Fatigue / Malaise","Nausea / Vomiting","Joint Pain / Arthralgia"],
    gen:["Mild to Moderate Jaundice","Liver — Tender","Hepatomegaly (cm below costal)","Febrile (>37.5°C) — Prodromal Phase","Mild Cervical Lymphadenopathy","Splenomegaly (15–20% cases)"],
    note:"Hep A & E: fecal-oral, self-limiting, no chronicity. Hep B: parenteral/sexual/vertical; 5–10% → chronic. Hep E in pregnancy: 20–25% fulminant hepatic failure. ALT markedly elevated. PT prolonged = severe disease."
  },
  { sys:"Hepato", sysClass:"sys-hep", name:"Non-Alcoholic Fatty Liver Disease (NAFLD)",
    cc:["General Weakness / Fatigue","Right upper abdominal pain (liver / GB)","Fatigue / Weakness / Malaise","Weight Gain (Progressive)","Belching / Bloating"],
    gen:["Obese — Central Adiposity","Hepatomegaly — Smooth, Non-Tender","Acanthosis Nigricans (Axillae / Neck)","Hypertension","No Stigmata of Chronic Liver Disease (Early Stage)"],
    note:"Spectrum: Steatosis → NASH → Fibrosis → Cirrhosis → HCC. Associated with metabolic syndrome, T2DM, obesity, dyslipidaemia. Diagnosis of exclusion (alcohol <14–21 units/week). FIB-4 score + FibroScan assess fibrosis non-invasively."
  },

  // ─── NEPHROLOGY (Ch.6) ──────────────────────────────
  { sys:"Neph", sysClass:"sys-neph", name:"Nephrotic Syndrome",
    cc:["Anasarca (Generalized)","Oliguria / Scanty Micturition","Frothy Urine","Anorexia / Loss of appetite"],
    gen:["Swelling / Puffiness of Face (Worse Morning)","Pitting Edema — Bilateral Legs","Mild Anemia","Completely White Nails","Hypotension (BP <90/60)","Mild Jaundice"],
    note:"Massive proteinuria + hypoalbuminemia + edema + hyperlipidemia. Frothy urine. Periorbital puffiness worst in morning."
  },
  { sys:"Neph", sysClass:"sys-neph", name:"Post-Streptococcal Glomerulonephritis",
    cc:["Swelling / Puffiness of Face (Worse Morning)","Smoky / High-Colored Urine","General Weakness / Fatigue","Sore Throat (2–3 Weeks Prior)"],
    gen:["Mild Anemia","Puffy Face / Facial Puffiness","Hypertension (renal)","Periorbital Edema (morning)","Pitting Edema — Bilateral Legs"],
    note:"Child or young adult. Preceding throat infection. Nephritic picture: hematuria + hypertension + oliguria."
  },
  { sys:"Neph", sysClass:"sys-neph", name:"Polycystic Kidney Disease",
    cc:["Loin Pain (Dull Ache, Bilateral)","Urinary Frequency","Mass in Abdomen"],
    gen:["Well / Normal Looking","Hypertension (renal)","Family Hx — Similar Illness"],
    note:"Autosomal dominant. Family history key. Bilateral huge ballotable kidneys. Recurrent UTI. Berry aneurysm risk."
  },
  { sys:"Neph", sysClass:"sys-neph", name:"Chronic Kidney Disease (Diabetic Nephropathy)",
    cc:["Weakness / Anorexia / Nausea / Vomiting","Nocturia + Scanty Micturition","Swelling of Face and Legs","Palpitation","Shortness of Breath on Exertion"],
    gen:["Emaciated / Cachexic","Pallor (renal anemia)","Periorbital Edema (morning)","Pitting Edema — Bilateral Legs","Uremic Fetor (ammoniacal breath)","Scratch Marks (uremic pruritus)","Severe Anemia"],
    note:"Known DM history. Proteinuria → edema → hypertension → CKD progression. Pallor + uremic fetor."
  },
  { sys:"Neph", sysClass:"sys-neph", name:"Hypertension with CKD",
    cc:["General Weakness / Fatigue","Oliguria / Scanty Micturition","Leg / Ankle Swelling"],
    gen:["Moderate Anemia","Pitting Edema — Bilateral Legs","Scratch Marks (uremia/itch)","Hypertension (renal)"],
    note:"CKD secondary to longstanding hypertension. Renal anemia + uremic symptoms + hypertension."
  },
  { sys:"Neph", sysClass:"sys-neph", name:"Lupus Nephritis",
    cc:["Pain in Multiple Joints","Skin Rash (Butterfly / Malar)","Fever (Persistent / Prolonged)","Hematuria + Leg Swelling","Oral Ulcers","Hair Loss + Weight Loss"],
    gen:["Emaciated / Cachexic","Butterfly / Malar Rash","Loss of Pubic / Axillary Hair","Moderate Anemia","Hypertension (renal)","Pitting Edema — Bilateral Legs"],
    note:"Young woman. SLE with renal involvement. Butterfly rash + arthritis + hematuria. ANA + anti-dsDNA positive."
  },
  { sys:"Neph", sysClass:"sys-neph", name:"Pyrexia of Unknown Origin in Hemodialysis",
    cc:["Fever (Persistent / Prolonged)","General Weakness / Fatigue","Vomiting / Nausea","Swelling / Puffiness of Face (Worse Morning)"],
    gen:["Emaciated / Cachexic","Febrile (>37.5°C)","Moderate Anemia"],
    note:"CKD on hemodialysis with unexplained fever. Access site infection, bacterial endocarditis, TB must be excluded."
  },

  // ─── RHEUMATOLOGY (Ch.7) ────────────────────────────
  { sys:"Rheum", sysClass:"sys-rheum", name:"Systemic Lupus Erythematosus (SLE)",
    cc:["Pain in Multiple Joints","Butterfly / Malar Rash","Febrile (>37.5°C)","Hair Loss + Weight Loss","Oral Ulcers","Menstrual Irregularities"],
    gen:["Emaciated / Cachexic","Butterfly / Malar Rash","Hair Loss + Weight Loss","Oral Ulcers","Moderate Anemia","Skin Rash (Butterfly / Malar)"],
    note:"Young woman. SALAD: Serositis, Arthritis, Lupus rash, Alopecia, Discoid rash. ANA + anti-dsDNA."
  },
  { sys:"Rheum", sysClass:"sys-rheum", name:"Rheumatoid Arthritis",
    cc:["Pain and Swelling of Small Joints (Hands/Feet)","Morning Stiffness >1 Hour","Fever (>4 Days)","General Weakness / Fatigue"],
    gen:["Moderate Anemia","Swollen Small Joints (hands/feet)","Joint Warmth","Joint Tenderness"],
    note:"Symmetrical small joint arthritis. Morning stiffness. RF + Anti-CCP positive. Extra-articular: nodules, lung, eye."
  },
  { sys:"Rheum", sysClass:"sys-rheum", name:"Dermatomyositis",
    cc:["Proximal Muscle Weakness (Combing / Stairs)","Skin Rash (Face, Trunk, Hands)","Joint Pain / Arthralgia"],
    gen:["Ill / Toxic Looking","Heliotrope Rash (Periorbital)","Gottron Papules (Knuckles)","Proximal Muscle Weakness"],
    note:"Proximal muscle weakness + heliotrope rash + Gottron's papules. Malignancy association in >40 years."
  },
  { sys:"Rheum", sysClass:"sys-rheum", name:"Ankylosing Spondylitis",
    cc:["Low Back Pain (Worse at Night / Morning)","Morning Stiffness of Spine","Limitation of Spinal Movement"],
    gen:["Below Average / Thin","Uveitis / Red Eye","Kyphosis / Scoliosis / Lordosis","Sacroiliac Joint Tenderness","Reduced Chest Expansion"],
    note:"Young male. HLA-B27. Sacroiliac tenderness. Bamboo spine on X-ray. Iritis, aortic regurgitation."
  },
  { sys:"Rheum", sysClass:"sys-rheum", name:"Systemic Sclerosis (Scleroderma)",
    cc:["Skin Thickening and Tightening (Hands / Face)","Difficulty Opening Mouth","Raynaud's Phenomenon (Fingers)","Joint Pain / Arthralgia","Dysphagia"],
    gen:["Sclerodactyly","Raynaud's Phenomenon","Telangiectasia","Restricted Range of Motion","Calcinosis Cutis"],
    note:"Skin tightening + Raynaud's + dysphagia. CREST: Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyly, Telangiectasia."
  },
  { sys:"Rheum", sysClass:"sys-rheum", name:"Juvenile Idiopathic Arthritis",
    cc:["Joint Pain and Swelling (Multiple, Child)","Fever (Recurrent / Intermittent)","Marked Weight Loss / Anorexia"],
    gen:["Anxious / Distressed","Moderate Anemia","Swollen Large Joints (knee/hip)","Joint Tenderness","Febrile (>37.5°C)"],
    note:"<16 years age. Systemic JIA (Still's): quotidian fever + salmon rash + arthritis."
  },
  { sys:"Rheum", sysClass:"sys-rheum", name:"Hemophilic Arthritis",
    cc:["Recurrent Hemarthrosis (Knee / Elbow)","Prolonged Bleeding after Minor Injury / Surgery","Muscle Hematomas"],
    gen:["Joint Effusion / Fluctuation","Joint Deformity","Male"],
    note:"X-linked recessive. Hemarthrosis = most common complication. Factor VIII (A) or IX (B) deficiency."
  },

  // ─── NEUROLOGY (Ch.8) ───────────────────────────────
  { sys:"Neuro", sysClass:"sys-neuro", name:"Parkinsonism",
    cc:["Tremor of Hands (Resting)","Difficulty Walking / Bradykinesia","Difficulty Writing / Speaking","Involuntary Movements","Constipation"],
    gen:["Expressionless Face (myxedema)","Tremor of Hands (Resting)","Difficulty Walking / Bradykinesia","Increased Tone (spasticity)","Abnormal Gait","Speech — Dysarthria"],
    note:"Triad: tremor + rigidity + bradykinesia. Resting tremor. Shuffling gait. L-dopa responsive."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Motor Neuron Disease",
    cc:["Progressive Weakness of Limbs","Wasting of Muscles","Difficulty Swallowing / Speech","Weight Loss"],
    gen:["Emaciated / Cachexic","Muscle Wasting","Fasciculations","Speech — Dysarthria"],
    note:"Mixed UMN+LMN signs with NO sensory loss = MND. Fasciculations + wasting. EMG confirms."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Multiple Sclerosis",
    cc:["Weakness (Relapsing-Remitting)","Inability to Walk","Visual Disturbance (Optic Neuritis)","General Weakness / Fatigue"],
    gen:["Ill / Toxic Looking","Brisk Deep Reflexes (UMN)","Increased Tone (spasticity)","Nystagmus (VIII / cerebellum)","Urinary Incontinence"],
    note:"Young woman. Relapsing-remitting. Disseminated in time and space. Uhthoff's phenomenon (worse in heat)."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Cerebrovascular Accident (Stroke)",
    cc:["Sudden Weakness of One Side (Hemiplegia)","Difficulty in Speech (Aphasia)","Facial Deviation"],
    gen:["Ill / Toxic Looking","Hypertension (BP >140/90)","Hemiplegia / Hemiparesis","Facial Palsy (VII)","Babinski Extensor (UMN)"],
    note:"Hypertension + DM + smoking = risk. UMN hemiplegia. NIHSS scoring. CT scan to differentiate ischaemic vs haemorrhagic."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Friedreich's Ataxia",
    cc:["Weakness + Wasting of Leg / Foot Muscles","Tingling / Numbness of Feet","Difficulty Walking / Bradykinesia"],
    gen:["Short Stature","Pes Cavus","Kyphosis / Scoliosis / Lordosis","High Arched Palate","Mild Anemia"],
    note:"Autosomal recessive. Pes cavus + kyphoscoliosis + absent reflexes + ataxia. Cardiomyopathy association."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Peripheral Neuropathy (Diabetic)",
    cc:["Weakness + Wasting of Leg / Foot Muscles","Tingling / Numbness of Feet","Difficulty Walking / Bradykinesia","Burning Sensation of Hands and Feet"],
    gen:["Obese","Mild Anemia","Glove-Stocking Sensory Loss","Postural Hypotension","Diabetes Mellitus"],
    note:"DM + glove-stocking neuropathy. Absent ankle reflexes. Autonomic features: postural hypotension, gastroparesis."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Guillain-Barré Syndrome",
    cc:["Ascending Weakness of Both Lower Limbs","Difficulty Walking / Bradykinesia","Tingling / Numbness of Feet","H/o Recent Respiratory Infection (1–2 Wks Prior)"],
    gen:["Ill / Toxic Looking","Mild Anemia","Decreased Tone (flaccidity)","Absent Deep Reflexes (LMN)"],
    note:"Ascending LMN paralysis after respiratory/GI infection. Areflexia. CSF: albuminocytological dissociation."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Chronic Inflammatory Demyelinating Polyneuropathy",
    cc:["Progressive Weakness of Upper and Lower Limbs","Weakness + Wasting of Leg / Foot Muscles","Pins and Needles (Paresthesia)"],
    gen:["Obese","Mild Anemia","Proximal Muscle Weakness","Glove-Stocking Sensory Loss"],
    note:"CIDP = chronic GBS. Relapsing-remitting or progressive. EMG/NCS + CSF confirms."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Myasthenia Gravis",
    cc:["Fatigable Weakness after Activity","Difficulty Swallowing / Speech","Drooping of Upper Eyelids (Ptosis)","Double Vision"],
    gen:["Ill / Toxic Looking","Ptosis (III)","Proximal Muscle Weakness"],
    note:"Fatigable weakness = hallmark. Ptosis worse with sustained gaze. AChR antibodies. Ice pack test."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Spastic Paraplegia (Cord Compression)",
    cc:["Weakness of Both Lower Limbs","Inability to Void Urine (Retention)","Low Back Pain + Limb Tingling / Numbness"],
    gen:["Ill / Toxic Looking","Catheter In Situ","Paraplegia / Paraparesis","Increased Tone (spasticity)"],
    note:"Sensory level + paraplegia + bladder dysfunction = cord compression. MRI spine urgent."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Transverse Myelitis",
    cc:["Sudden Inability to Walk","Inability to Void Urine (Retention)","Chest / Back Pain (Neurological)"],
    gen:["Ill / Toxic Looking","Catheter In Situ","Reduced Tone (Flaccid Paraplegia)"],
    note:"Acute paraplegia + bladder + sensory level. Post-infectious or MS-related. MRI confirms."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Myopathy",
    cc:["Proximal Muscle Wasting (No Sensory Symptoms)","Wasting of Muscles"],
    gen:["Emaciated / Cachexic","Proximal Muscle Weakness","Muscle Wasting"],
    note:"Pure proximal weakness without sensory loss = myopathy. CPK elevated. EMG/muscle biopsy confirms type."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Wilson's Disease",
    cc:["Tremor + Involuntary Movements (Choreoathetosis)","Involuntary Movements","Difficulty Writing / Speaking","H/o Recurrent Jaundice (Childhood)"],
    gen:["Anxious / Distressed","Kayser-Fleischer Ring","Tremor (hands / tongue)","Speech — Dysarthria","Hepatomegaly (cm below costal)"],
    note:"Young patient + liver + neuropsychiatric. KF ring pathognomonic. Serum ceruloplasmin low."
  },
  { sys:"Neuro", sysClass:"sys-neuro", name:"Intracranial Space Occupying Lesion",
    cc:["Headache (Worse Morning, on Straining)","Vomiting (Projectile, Without Nausea)","Visual Disturbance (Optic Neuritis)","Focal Neurological Deficit"],
    gen:["Ill / Toxic Looking","Papilledema (raised ICP)"],
    note:"Raised ICP triad: headache + vomiting + papilledema. CT/MRI brain urgent."
  },

  // ─── ENDOCRINOLOGY (Ch.9) ───────────────────────────
  { sys:"Endo", sysClass:"sys-endo", name:"Hypothyroidism (Myxedema)",
    cc:["Weight Gain (Progressive)","Cold Intolerance","Lethargy / Increased Sleepiness","Constipation","Poor Memory / Lack of Concentration","Menorrhagia"],
    gen:["Pallor / Fatigue","Facial / Periorbital Puffiness","Loss of Eyebrows (Madarosis)","Bradycardia (<60/min)","Expressionless Face (myxedema)","Pitting Edema — Bilateral Legs","Diffuse Goiter (smooth)"],
    note:"Cold + constipation + weight gain + bradycardia + dry skin. TSH elevated. T4 low."
  },
  { sys:"Endo", sysClass:"sys-endo", name:"Graves' Disease (Hyperthyroidism)",
    cc:["Weight Loss (Despite Good Appetite)","Heat Intolerance / Sweating","Palpitation","Tremor of Hands (Fine)","Anxiety / Irritability"],
    gen:["Anxious / Distressed","Below Average / Thin","Exophthalmos / Proptosis","Lid Lag / Lid Retraction","Diffuse Goiter (smooth)","Bruit Over Thyroid","Tachycardia (>100/min)","Irregular Pulse","Pretibial Myxedema"],
    note:"Heat intolerance + weight loss + tremor + tachycardia. Exophthalmos unique to Graves'. TSH suppressed."
  },
  { sys:"Endo", sysClass:"sys-endo", name:"Cushing's Syndrome",
    cc:["Excessive Weight Gain (Truncal)","General Weakness / Fatigue","Backache / Bone Pain","Bleeding Spots on Skin / Bruising","Menstrual Irregularities"],
    gen:["Cushingoid Appearance","Obese","Striae","Hypertension (BP >140/90)","Moderate Anemia"],
    note:"Moon face + buffalo hump + striae + hypertension. 24hr UFC or dexamethasone suppression test."
  },
  { sys:"Endo", sysClass:"sys-endo", name:"Addison's Disease",
    cc:["General Weakness / Fatigue","Loss of Appetite + Nausea + Dizziness","Generalized Pigmentation","Amenorrhea"],
    gen:["Emaciated / Cachexic","Generalized Hyperpigmentation","Palmar Crease Pigmentation","Mucosal Pigmentation (mouth)","Loss of Pubic / Axillary Hair","Hypotension (BP <90/60)"],
    note:"Pigmentation + postural hypotension + weakness. Hyponatremia + hyperkalemia. Short Synacthen test."
  },
  { sys:"Endo", sysClass:"sys-endo", name:"Hypopituitarism (Sheehan's Syndrome)",
    cc:["Failure to Breastfeed Postpartum","General Weakness / Fatigue","Cold Intolerance","Constipation","Weight Loss"],
    gen:["Mild Anemia","Emaciated / Cachexic","Loss of Pubic / Axillary Hair"],
    note:"Postpartum hemorrhage + failure to lactate + amenorrhea. Panhypopituitarism. All pituitary axes affected."
  },
  { sys:"Endo", sysClass:"sys-endo", name:"Acromegaly",
    cc:["Progressive Enlargement of Hands / Feet / Face","General Weakness / Fatigue","Change in Voice (Hoarseness)","Joint Pain / Arthralgia","Excessive Sweating"],
    gen:["Macroglossia","Bitemporal Hemianopia","Hypertension (BP >140/90)","Acanthosis Nigricans"],
    note:"GH excess. Large acral parts + coarse features + hypertension. IGF-1 elevated. Glucose suppression test."
  },
  { sys:"Endo", sysClass:"sys-endo", name:"Diabetes Mellitus",
    cc:["Weight Loss (Despite Good Appetite)","Polydipsia (Excessive Thirst)","Polyuria (Frequent Urination)","Burning Sensation of Hands and Feet","Dimness of Vision"],
    gen:["Obese","Glove-Stocking Sensory Loss","Absent Deep Reflexes (LMN)","Fundoscopy — Diabetic Retinopathy","Peripheral Pulses Absent"],
    note:"Triad: polydipsia + polyuria + weight loss. HbA1c + fasting glucose. Screen for all complications."
  },
  { sys:"Endo", sysClass:"sys-endo", name:"Obesity",
    cc:["Weight Gain (Progressive)"],
    gen:["Obese","Hypertension (BP >140/90)","Acanthosis Nigricans"],
    note:"BMI >30. Primary vs secondary (Cushing's, hypothyroid). Screen for metabolic syndrome."
  },
  { sys:"Endo", sysClass:"sys-endo", name:"Short Stature",
    cc:["Short Height since Childhood","Poor Growth Compared to Peers"],
    gen:["Short Stature","Emaciated / Cachexic"],
    note:"Evaluate: familial, constitutional, GH deficiency, hypothyroid, systemic disease, chromosomal."
  },

  // ─── HEMATOLOGY (Ch.10) ─────────────────────────────
  { sys:"Hemato", sysClass:"sys-hemato", name:"Anemia (Iron Deficiency)",
    cc:["General Weakness / Fatigue","Dysphagia (Plummer-Vinson)","Pica (Craving for Clay / Ice)"],
    gen:["Pallor / Fatigue","Present (Spooning of Nails)","Oral Ulcers","Present (Spooning of Nails)","Tachycardia (>100/min)","Splenomegaly"],
    note:"Koilonychia + pallor + dysphagia (Plummer-Vinson). Microcytic hypochromic anemia. Serum ferritin low."
  },
  { sys:"Hemato", sysClass:"sys-hemato", name:"Aplastic Anemia",
    cc:["Pallor / Fatigue","Bleeding Manifestations (Purpura / Epistaxis / Gums)","Recurrent Infections / Fever"],
    gen:["Ill / Toxic Looking","Severe Anemia","Petechiae / Purpura on Skin","High Fever (>39°C)"],
    note:"Pancytopenia without organomegaly. Hypocellular bone marrow. No splenomegaly key finding."
  },
  { sys:"Hemato", sysClass:"sys-hemato", name:"Chronic Myeloid Leukemia (CML)",
    cc:["Dragging Sensation / Mass (Left Upper Abdomen)","General Weakness / Fatigue","Excessive Sweating","Backache / Bone Pain"],
    gen:["Moderate Anemia","Splenomegaly","Hepatomegaly (cm below costal)","Bony Tenderness"],
    note:"Massive splenomegaly + sternal tenderness. Philadelphia chromosome. CML → CML blast crisis."
  },
  { sys:"Hemato", sysClass:"sys-hemato", name:"Chronic Lymphatic Leukemia (CLL)",
    cc:["Generalized Lymph Node Swelling","General Weakness / Fatigue","Recurrent Infections / Fever"],
    gen:["Mild Anemia","Lymphadenopathy (palpable)","Petechiae / Purpura on Skin"],
    note:"Elderly male. Generalized lymphadenopathy + splenomegaly. Small lymphocytes on blood film. Smudge cells."
  },
  { sys:"Hemato", sysClass:"sys-hemato", name:"Lymphoma (Hodgkin's / Non-Hodgkin's)",
    cc:["Painless Lymph Node Enlargement","Fever (Pel-Ebstein / B-symptoms)","Night Sweats","Pruritus (Generalized)"],
    gen:["Mild Anemia","Lymphadenopathy (palpable)"],
    note:"B symptoms + painless lymphadenopathy. Hodgkin's: bimodal age, Reed-Sternberg cells. Staging CT chest/abdomen."
  },
  { sys:"Hemato", sysClass:"sys-hemato", name:"Hereditary Hemolytic Anemia",
    cc:["Jaundice (Recurrent) + Splenomegaly","Pallor / Fatigue","Dark Urine + Family History of Anemia","Family Hx — Similar Illness"],
    gen:["Moderate Anemia","Moderate Jaundice"],
    note:"Jaundice + anemia + splenomegaly + family history = hemolytic anemia. RBC morphology, Hb electrophoresis."
  },
  { sys:"Hemato", sysClass:"sys-hemato", name:"Idiopathic Thrombocytopenic Purpura (ITP)",
    cc:["Petechiae / Purpura on Skin","Epistaxis / Gum Bleeding","Menorrhagia"],
    gen:["Well / Normal Looking","Petechiae / Purpura on Skin"],
    note:"Thrombocytopenia without splenomegaly. Anti-platelet antibodies. Bone marrow: increased megakaryocytes."
  },
  { sys:"Hemato", sysClass:"sys-hemato", name:"Hemophilia",
    cc:["Recurrent Hemarthrosis (Knee / Elbow)","Prolonged Bleeding after Minor Injury / Surgery","Muscle Hematomas"],
    gen:["Swollen Large Joints (knee/hip)","Joint Deformity","Male"],
    note:"X-linked recessive. Male. Hemarthrosis + prolonged APTT + normal PT. Factor VIII (A) or IX (B) deficiency."
  },

  // ─── DERMATOLOGY (Ch.11) ────────────────────────────
  { sys:"Derm", sysClass:"sys-derm", name:"Psoriasis",
    cc:["Scaly Itchy Skin (Silvery Scales)","Nail — Dry / Brittle / Flat","Nail Changes + Joint Pain (Psoriatic)"],
    gen:["Scaly Itchy Skin (Silvery Scales)","Scaly Itchy Skin (Silvery Scales)","Nail Changes + Joint Pain (Psoriatic)","Nail Changes + Joint Pain (Psoriatic)","General Weakness / Fatigue"],
    note:"Silvery scales on extensor surfaces + scalp + nails. Auspitz sign. Psoriatic arthritis may develop."
  },
  { sys:"Derm", sysClass:"sys-derm", name:"Exfoliative Dermatitis (Erythroderma)",
    cc:["Generalized Skin Redness and Scaling (>90% BSA)","Pruritus (Generalized)","Fever + Chills (erythroderma)","Weight Loss"],
    gen:["Scratch Marks (uremia/itch)","Loss of Pubic / Axillary Hair","Lymphadenopathy (palpable)","Pitting Edema — Bilateral Legs"],
    note:">90% BSA involvement. Causes: psoriasis, eczema, drug reaction, lymphoma. Life-threatening if severe."
  },
  { sys:"Derm", sysClass:"sys-derm", name:"Leprosy (Lepromatous)",
    cc:["Skin Patches (Hypopigmented) + Numbness","Thickening of Earlobes and Face","Loss of Eyebrows (Madarosis)"],
    gen:["Ill / Toxic Looking"],
    note:"Skin patch with sensory loss + thickened nerve = leprosy. AFB in slit-skin smear. MDT treatment."
  },
  { sys:"Derm", sysClass:"sys-derm", name:"Pemphigus Vulgaris",
    cc:["Painful Blistering (Skin + Mucous Membranes)","Oral Ulcers","Skin Erosions + Oral Ulcers"],
    gen:["Ill / Toxic Looking"],
    note:"Nikolsky's sign positive. Intraepidermal blisters. Anti-desmoglein antibodies. Steroid treatment."
  },
  { sys:"Derm", sysClass:"sys-derm", name:"Kala-Azar (Visceral Leishmaniasis)",
    cc:["Prolonged Fever (Months) + Progressive Weight Loss","Weight Loss","Swelling of Abdomen (Ascites)","Skin Darkening (Generalized)"],
    gen:["Emaciated / Cachexic","High Fever (>39°C)","Generalized Hyperpigmentation","Severe Anemia"],
    note:"Endemic area. Massive splenomegaly + fever + skin darkening. rK39 antigen test. Treat with amphotericin B."
  },

  // ─── MISCELLANEOUS (Ch.12) ──────────────────────────
  { sys:"Misc", sysClass:"sys-misc", name:"Pyrexia of Unknown Origin (PUO)",
    cc:["Fever >38.3°C for >3 Weeks (PUO)","Malaise / Weight Loss","Night Sweats"],
    gen:["Febrile (>37.5°C)","Moderate Anemia","Lymphadenopathy (palpable)","Hepatosplenomegaly","Joint Pain / Arthralgia"],
    note:"Causes: TB, lymphoma, kala-azar, SBE, SLE, drug fever. Extensive workup needed. FUO = fever >38.3°C, >3 weeks."
  },
  { sys:"Misc", sysClass:"sys-misc", name:"Pyrexia of Unknown Origin (HIV/AIDS)",
    cc:["Prolonged Fever (Months) + Progressive Weight Loss","Marked Weight Loss / Anorexia","Chronic Diarrhea + Recurrent Infections","Recurrent Infections / Fever","Generalized Lymph Node Swelling"],
    gen:["Emaciated / Cachexic","Oral Ulcers","Lymphadenopathy (palpable)"],
    note:"Chronic fever + weight loss + lymphadenopathy + recurrent infections = AIDS until proven otherwise. HIV ELISA + Western blot."
  },
  { sys:"Misc", sysClass:"sys-misc", name:"Takayasu's Disease (Pulseless Disease)",
    cc:["General Weakness / Fatigue","Absent or Asymmetric Pulses","Headache + Visual Disturbance (Vascular)","Pain in Limbs on Use (Claudication)"],
    gen:["Female","Absent or Asymmetric Pulses","Radio-Femoral Delay","Carotid Bruit"],
    note:"Young Asian woman. Absent pulses + asymmetric BP. Aorta + branches involved. ESR elevated. Steroid treatment."
  },
,
  {name:"Diarrheal Diseases",sys:"Infect",sysClass:"sys-infect",
    cc:["Diarrhea","Vomiting / Nausea","Fever (>4 Days)","General Weakness / Fatigue"],
    gen:["Febrile (>37.5°C)","Dehydration (dry tongue/turgor)"],
    note:"Assess severity of dehydration clinically. Bloody diarrhoea = dysentery (Shigella, E. coli O157, Entamoeba). Rice-water stool = Cholera. Explosive, offensive, watery = C. difficile or Giardia. Check for systemic sepsis."},
  {name:"Enteric Fever (Typhoid)",sys:"Infect",sysClass:"sys-infect",
    cc:["Fever (Stepwise Rising — Typhoid)","Headache","Relative Bradycardia (Fever without Tachycardia)","Constipation (Predominant — Typhoid)","Diarrhea","Cough (Dry, Nocturnal)","Nausea / Vomiting","Abdominal Pain (General)","Travel to Endemic Area (Tropics)"],
    gen:["Rose Spots on Abdomen","Relative Bradycardia (Fever without Tachycardia)","Febrile (>37.5°C)","Moderate Anemia","Hepatosplenomegaly"],
    note:"Salmonella typhi (typhoid), Paratyphi (paratyphoid) = enteric fevers. Incubation 7–14 days, fecal-oral. Constipation more common than diarrhoea in 1st–2nd week; loose stools may appear in 3rd week. Complications in 3rd week: GI perforation, GI bleed. Blood culture is gold standard (positive in 80%). Widal test: poor sensitivity."},
  {name:"Dengue Fever",sys:"Infect",sysClass:"sys-infect",
    cc:["Fever (Saddle-back / Biphasic — Dengue)","Severe Myalgia / Bone Pain (Breakbone Fever)","Retro-Orbital Headache (Dengue)","Maculopapular Rash (Trunk → Limbs)","Vomiting / Nausea","Epistaxis / Gum Bleeding"],
    gen:["Flushed / Plethoric Face","Maculopapular Rash (Trunk → Limbs)","Petechiae / Purpura on Skin","Lymphadenopathy (palpable)","Hepatomegaly (cm below costal)"],
    note:"Aedes aegypti mosquito. RNA Flavivirus. Incubation 4–10 days. DHF = thrombocytopenia + haemorrhage + plasma leakage. Warning signs of DHF: abdominal pain, persistent vomiting, bleeding, rapid breathing, lethargy. No specific antiviral — symptomatic. Aspirin/NSAIDs CONTRAINDICATED (bleeding risk)."},
  {name:"Influenza (Seasonal Flu)",sys:"Infect",sysClass:"sys-infect",
    cc:["Fever (Abrupt Onset — Influenza)","Myalgia / Body Ache","Headache","Cough (Dry / Non-productive)","Sore Throat / Coryza","Profound Fatigue / Malaise"],
    gen:["Flushed / Plethoric Face","Tachycardia (>100/min)","Febrile (>37.5°C)","Lymphadenopathy (palpable)"],
    note:"Influenza A & B. Peaks Nov–March. Complications: primary viral pneumonia, secondary bacterial pneumonia (S. aureus MRSA, S. pneumoniae), myocarditis, encephalitis, Reye's syndrome (aspirin in children). High risk groups: elderly, pregnant, DM, CKD, cardiac/respiratory disease, immunocompromised."},
  {name:"Malaria",sys:"Infect",sysClass:"sys-infect",
    cc:["Fever (Paroxysmal — Rigor + Sweat)","Myalgia / Body Ache","Headache","Vomiting / Nausea","Jaundice (Haemolytic — Malaria)"],
    gen:["Febrile (>37.5°C)","Moderate Anemia","Mild Jaundice","Splenomegaly","Hepatomegaly (cm below costal)"],
    note:"P. falciparum — most dangerous; P. vivax — relapses; P. malariae — quartan; P. ovale — relapses. Blackwater fever: massive haemolysis + haemoglobinuria in falciparum. Cerebral malaria: seizures, coma = medical emergency. Blood film (thick and thin) is gold standard."},
  {name:"Cholera",sys:"Infect",sysClass:"sys-infect",
    cc:["Diarrhea (Watery, Profuse — Rice Water)","Profuse Vomiting","Muscle Cramps (Cholera / Electrolyte)","No Fever (Cholera)"],
    gen:["Dehydration (dry tongue/turgor)","Ill / Toxic Looking","Tachycardia (>100/min)","Hypotension (BP <90/60)","Hoarse Voice (Severe Dehydration)"],
    note:"Vibrio cholerae O1/O139. Rice-water stools pathognomonic — isotonic fluid poured into gut. Fecal-oral transmission, epidemic/waterborne. Deaths from hypovolaemia, not the organism. No fever = key differentiator from dysentery. ORS is the cornerstone; antibiotics shorten course."}
];
