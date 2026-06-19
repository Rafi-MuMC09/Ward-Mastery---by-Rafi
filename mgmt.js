// Management Map
// Disease name → { gm: [...], pm: [...], tests: [...] }
// Sources: Notes & Notes for MRCP, ABM Abdullah

const MGMT_MAP = {
  "Bronchial Asthma": { gm: [
      "Stop smoking; weight-loss interventions",
      "Breathing exercise programs (Buteyko technique, diaphragmatic breathing)",
      "Identify & avoid triggers (occupational, allergens)",
      "Acute attack: O₂ target SpO₂ 94–98%, nebulised β₂-agonist ASAP",
      "Acute severe: IV Magnesium sulphate 1.2–2g over 20 min if no response",
      "Acute life-threatening: ICU review; intubate if pH <7.31"
    ], pm: [
      { name: "SABA — Salbutamol (Step 1)", dose: "Short-acting, reliever" },
      { name: "Low-dose ICS (Step 2)", dose: "e.g. Budesonide <400 µg/day or equivalent" },
      { name: "LTRA — Montelukast/Zafirlukast (Step 3)", dose: "CysLT1 antagonist; add to SABA + ICS" },
      { name: "LABA — Salmeterol (Step 4)", dose: "12h duration; add to ICS" },
      { name: "Theophylline", dose: "Non-specific PDE inhibitor; Step 7" },
      { name: "Omalizumab", dose: "Anti-IgE; SC every 2–4 weeks; severe allergic asthma" },
      { name: "Mepolizumab", dose: "Anti-IL5; raised eosinophils, resistant asthma" },
      { name: "Prednisolone (acute)", dose: "Oral/IV; continue 5 days then stop abruptly" },
      { name: "Ipratropium bromide (acute)", dose: "Nebulised; anticholinergic; adjunct to β₂" },
      { name: "Magnesium sulphate (acute)", dose: "1.2–2g IV over 20 min" }
    ], tests: [
      { name: "FeNO (Fractional Exhaled Nitric Oxide)", note: "≥40 ppb adults / ≥35 ppb children = positive" },
      { name: "Spirometry + Bronchodilator Reversibility (BDR)", note: "FEV₁/FVC <70% (obstructive); +BDR: ≥12% & ≥200 ml FEV₁ improvement" },
      { name: "Peak Expiratory Flow (PEF) variability", note: ">20% variability = positive; monitor 2–4 weeks" },
      { name: "Direct bronchial challenge (methacholine/histamine)", note: "PC20 ≤8 mg/ml = positive; for diagnostic uncertainty" },
      { name: "Pulse oximetry / ABG (acute)", note: "Assess severity; rising PaCO₂ = impending failure" }
    ] },
  "COPD": { gm: [
      "Smoking cessation (most important)",
      "Annual influenza vaccination; one-off pneumococcal vaccination",
      "Pulmonary rehabilitation (aerobic training + education)",
      "LTOT if pO₂ <7.3 kPa (or 7.3–8 kPa + polycythaemia/oedema/pulm. hypertension)",
      "O₂ target in acute exacerbation: SpO₂ 88–92% (before ABG); 94–98% after ABG confirms normal pCO₂",
      "NIV for pH 7.25–7.35 unresponsive to 1h max medical treatment",
      "Lung volume reduction surgery (selected upper-lobe emphysema)"
    ], pm: [
      { name: "SABA / SAMA (1st line)", dose: "Salbutamol (SABA) or Ipratropium (SAMA)" },
      { name: "LABA — Salmeterol", dose: "FEV₁ >50%: add LABA or LAMA" },
      { name: "LAMA — Tiotropium", dose: "FEV₁ >50% or <50%" },
      { name: "LABA + ICS combination inhaler", dose: "FEV₁ <50%; e.g. Salmeterol/Fluticasone" },
      { name: "Prednisolone (acute exacerbation)", dose: "30 mg/day for 7–14 days" },
      { name: "Antibiotics (acute, purulent sputum)", dose: "As per culture/sensitivity" },
      { name: "Oral Theophylline", dose: "After trials of short/long-acting bronchodilators" },
      { name: "Mucolytics", dose: "Chronic productive cough; continue if improving" },
      { name: "Roflumilast", dose: "PDE-4 inhibitor; ≥2 exacerbations/year + FEV₁ <50% on triple therapy" },
      { name: "Doxapram (respiratory stimulant)", dose: "Only if NIV unavailable or inappropriate" }
    ], tests: [
      { name: "Post-bronchodilator Spirometry", note: "FEV₁/FVC <0.7 confirms; FEV₁% predicts severity (Stage 1–4)" },
      { name: "Chest X-ray", note: "Hyperinflation, bullae, flat diaphragm; exclude lung cancer" },
      { name: "Full Blood Count", note: "Exclude secondary polycythaemia" },
      { name: "ABG", note: "pH, pO₂, pCO₂, HCO₃; low pH + high pCO₂ + high HCO₃ (chronic)" },
      { name: "Methacholine challenge", note: "Differentiates COPD from asthma" },
      { name: "BMI calculation", note: "Nutritional status assessment" }
    ] },
  "Bronchial Carcinoma": { gm: [
      "Smoking cessation; avoid occupational carcinogens (asbestos, arsenic, radon)",
      "Multidisciplinary team (MDT) review for all cases",
      "Surgical resection (NSCLC — early stage, good performance status)",
      "Radical radiotherapy (alternative to surgery or adjuvant)",
      "Palliative care / symptom management for advanced disease",
      "Performance status (WHO 0–4) guides treatment decisions"
    ], pm: [
      { name: "Combination chemotherapy (NSCLC)", dose: "Platinum-based regimens" },
      { name: "Chemotherapy (SCLC)", dose: "Very responsive; often etoposide + cisplatin/carboplatin" },
      { name: "Tyrosine kinase inhibitors (NSCLC)", dose: "EGFR-mutant adenocarcinoma" },
      { name: "All-trans retinoic acid (ATRA)", dose: "Acute promyelocytic variant (not standard BC)" }
    ], tests: [
      { name: "Chest X-ray", note: "Initial investigation; hilum enlargement, consolidation, collapse" },
      { name: "Contrast-enhanced CT (chest, liver, adrenals, lower neck)", note: "Staging; perform before biopsy" },
      { name: "PET scan", note: "Preferred after CT for lymph node & distant metastasis assessment" },
      { name: "CT / Ultrasound-guided biopsy", note: "Peripheral lesions" },
      { name: "EBUS-guided biopsy", note: "Paratracheal & peri-bronchial lesions" },
      { name: "Sputum cytology / Bronchoscopy", note: "Central tumours" },
      { name: "TNM staging (8th edition)", note: "T=tumour, N=nodes, M=metastasis" }
    ] },
  "Consolidation (CAP)": { gm: [
      "Assess severity: CURB-65 score (Confusion, Urea >7, RR ≥30, BP <90/60, Age ≥65)",
      "CURB 0–1: treat at home; CURB ≥2: hospitalise",
      "High-flow O₂ to maintain SpO₂ >94%",
      "IV fluids if dehydrated / septic",
      "Physiotherapy for sputum clearance",
      "Add flucloxacillin if Staphylococcus suspected (post-influenza)"
    ], pm: [
      { name: "Low severity (CURB 0–1): Amoxicillin oral", dose: "1st line; Doxycycline / Clarithromycin if penicillin-allergic" },
      { name: "Moderate (CURB 2): Amoxicillin + Clarithromycin oral/IV", dose: "Alternative: Doxycycline / Levofloxacin / Moxifloxacin" },
      { name: "High severity (CURB 3–5): Co-amoxiclav + Clarithromycin IV", dose: "Alt: Benzylpenicillin + Levofloxacin IV; or Cefuroxime + Clarithromycin IV" },
      { name: "MRSA pneumonia: Vancomycin", dose: "IV; teicoplanin + rifampicin if penicillin-allergic" },
      { name: "Staphylococcal (non-MRSA): Flucloxacillin ± Rifampicin", dose: "" }
    ], tests: [
      { name: "Chest X-ray", note: "Lobar consolidation (Strep. pneumoniae), bibasal (Legionella), cavitating (Staph./Klebsiella)" },
      { name: "CURB-65 Score", note: "Severity scoring: 0–1 mild, ≥2 hospital" },
      { name: "FBC, CRP (>100 mg/L → pneumonia likely), Procalcitonin", note: "Inflammatory markers" },
      { name: "Sputum culture + sensitivity", note: "Before antibiotics if possible" },
      { name: "Urine antigen (Legionella, Pneumococcal)", note: "Rapid diagnosis" },
      { name: "Blood cultures", note: "Severe / hospitalised cases" },
      { name: "ABG", note: "Assess respiratory failure" }
    ] },
  "CLD (Cirrhosis)": { gm: [
      "Alcohol cessation (if alcoholic cirrhosis)",
      "Salt restriction ≤90 mmol/day for ascites",
      "Avoid NSAIDs, nephrotoxins, sedatives",
      "Dietary protein — moderate; avoid excess",
      "Therapeutic paracentesis (4–6 L) for large tense ascites with FFP cover",
      "Treat precipitants of hepatic encephalopathy (infection, GI bleed, constipation)",
      "TIPSS for refractory ascites / intractable variceal bleeding",
      "Liver transplantation for end-stage disease",
      "Target BP: HVPG reduction by 20% or <12 mmHg with non-selective beta-blocker"
    ], pm: [
      { name: "Spironolactone", dose: "100–400 mg/day; 1st line diuretic for ascites" },
      { name: "Furosemide", dose: "40–160 mg/day; add if spironolactone max dose reached" },
      { name: "Propranolol / Non-selective beta-blocker", dose: "Reduce portal hypertension / prevent variceal bleed" },
      { name: "Lactulose", dose: "Hepatic encephalopathy; reduces ammonia absorption" },
      { name: "Rifaximin", dose: "Recurrent hepatic encephalopathy prophylaxis" },
      { name: "20% Salt-poor Human Albumin (IV)", dose: "Post-paracentesis, SBP, hepatorenal syndrome" },
      { name: "Ceftriaxone / Cefotaxime", dose: "Spontaneous bacterial peritonitis (SBP)" },
      { name: "Terlipressin", dose: "Hepatorenal syndrome / acute variceal bleed" }
    ], tests: [
      { name: "LFTs (AST, ALT, ALP, GGT, Bilirubin, Albumin)", note: "Assess liver function" },
      { name: "PT/INR, Platelet count", note: "Coagulopathy in cirrhosis" },
      { name: "Serum Albumin", note: "Low = synthetic dysfunction" },
      { name: "Ultrasound ± Doppler (liver, portal vein)", note: "1st line imaging; portal hypertension, HCC screening" },
      { name: "Upper GI Endoscopy (OGD)", note: "Variceal assessment and treatment" },
      { name: "Liver biopsy (transjugular if ascites)", note: "Histological diagnosis; contraindicated percutaneously with ascites" },
      { name: "Ascitic fluid analysis (SAAG, neutrophil count, culture)", note: "SAAG ≥11 g/L = portal hypertension; neutrophils >250/mm³ = SBP" },
      { name: "AFP (Alpha-fetoprotein)", note: "HCC surveillance every 6 months with USS" }
    ] },
  "Acute Viral Hepatitis": { gm: [
      "Mainly supportive: rest, adequate hydration, nutrition",
      "Avoid alcohol and hepatotoxic drugs",
      "Isolation precautions for HAV/HEV (feco-oral route)",
      "Monitor for fulminant hepatic failure (INR, encephalopathy)",
      "Hepatitis A: self-limiting; no specific antiviral",
      "Hepatitis B: most adults resolve spontaneously; antivirals if severe"
    ], pm: [
      { name: "Tenofovir / Entecavir", dose: "Chronic/active Hepatitis B; nucleoside analogues" },
      { name: "Pegylated Interferon-alpha", dose: "Hepatitis B and C; immune modulator" },
      { name: "Sofosbuvir-based regimens (DAAs)", dose: "Hepatitis C; >95% cure rate" },
      { name: "Ursodeoxycholic acid", dose: "Cholestatic hepatitis (symptom relief)" }
    ], tests: [
      { name: "Anti-HAV IgM", note: "Acute Hepatitis A confirmation" },
      { name: "Anti-HAV IgG", note: "Past infection or immunity" },
      { name: "HBsAg, HBeAg, HBcAb IgM, HBsAb", note: "Hepatitis B serology panel" },
      { name: "HBV DNA (PCR)", note: "Viral load; guide treatment" },
      { name: "Anti-HCV antibody + HCV RNA PCR", note: "Hepatitis C diagnosis & confirmation" },
      { name: "LFTs: ALT > AST (Hepatitis B)", note: "Transaminase pattern" },
      { name: "PT/INR", note: "Assess synthetic function; poor prognosis if elevated" },
      { name: "Liver biopsy", note: "Grading/staging chronic hepatitis" }
    ] },
  "Dengue": { gm: [
      "Symptomatic management: fluid resuscitation (oral or IV)",
      "Bed rest; monitor closely for dengue haemorrhagic fever (DHF)",
      "Avoid aspirin and NSAIDs (increase bleeding risk)",
      "Blood transfusion if severe haemorrhagic fever or severe anaemia",
      "ICU care for dengue shock syndrome (DSS)",
      "Mosquito vector control (Aedes aegypti)"
    ], pm: [
      { name: "Paracetamol", dose: "Fever and pain management; avoid NSAIDs/aspirin" },
      { name: "IV fluid resuscitation", dose: "Crystalloids for plasma leakage / shock; careful monitoring" }
    ], tests: [
      { name: "Dengue serology (NS1 antigen, IgM, IgG)", note: "NS1: days 1–5; IgM: after day 5; confirmatory" },
      { name: "FBC: Leukopenia, Neutropenia, Thrombocytopenia", note: "Hallmark findings" },
      { name: "Haematocrit (Hct)", note: "Significantly increased or decreased in DHF (plasma leakage)" },
      { name: "LFTs", note: "Elevated transaminases common" },
      { name: "Dengue PCR", note: "Early diagnosis (first 5 days)" }
    ] },
  "Enteric Fever (Typhoid)": { gm: [
      "Isolation; fecal-oral precautions; hand hygiene",
      "IV fluids and electrolyte replacement",
      "Nutritional support",
      "Monitor for complications: GI perforation, GI bleed, meningitis",
      "Chronic carriers: not allowed in food industry; treat with fluoroquinolones ≥1 month",
      "Cholecystectomy if gallbladder acts as reservoir causing relapse"
    ], pm: [
      { name: "Quinolones — Ciprofloxacin", dose: "1st line (drug of choice for adults); 500 mg BD" },
      { name: "Chloramphenicol", dose: "Alternative; avoid in breast-feeding" },
      { name: "Amoxicillin / Co-trimoxazole", dose: "Alternatives; resistance common" },
      { name: "Ceftriaxone IV", dose: "Severe/MDR cases" },
      { name: "Dexamethasone", dose: "Severe typhoid with encephalopathy/shock" }
    ], tests: [
      { name: "Blood culture (gold standard)", note: "Positive in week 1; 80% sensitivity" },
      { name: "Stool / Urine culture", note: "Week 2–3; positive in carriers" },
      { name: "Widal test", note: "Titres ≥1:160 suggestive; not definitive" },
      { name: "Bone marrow culture", note: "If antibiotics started; most sensitive" },
      { name: "FBC: Leukopenia, Relative Lymphocytosis", note: "Typical; thrombocytopenia if severe" },
      { name: "CRP, LFTs", note: "Elevated in acute phase" }
    ] },
  "Aplastic Anaemia": { gm: [
      "Identify and remove causative agent (drugs, toxins, viruses)",
      "Immunosuppression for non-severe or age >50 (not transplant candidates)",
      "Allogeneic bone marrow transplant (BMT): treatment of choice for severe AA in patients <50 with matched sibling donor",
      "Supportive care: packed RBC transfusion (minimise — risk of sensitisation pre-BMT); platelet transfusion if <10 or bleeding",
      "Use irradiated, CMV-negative blood products pre-BMT",
      "G-CSF may be added to immunosuppression to improve neutrophil recovery"
    ], pm: [
      { name: "Anti-thymocyte Globulin (ATG) + Cyclosporin", dose: "1st line immunosuppression for non-severe AA or no transplant donor" },
      { name: "Eltrombopag", dose: "Thrombopoietin receptor agonist; add to ATG+Cyclosporin for refractory cases" },
      { name: "Oxymetholone (anabolic steroid)", dose: "Mild AA; stimulates erythropoiesis" },
      { name: "G-CSF (Filgrastim)", dose: "Adjunct to immunosuppression; neutrophil recovery" }
    ], tests: [
      { name: "Bone Marrow Trephine Biopsy", note: "BEST for assessing cellularity; shows fatty/hypocellular marrow replacing normal haemopoietic cells" },
      { name: "FBC", note: "Pancytopenia: normochromic normocytic anaemia + leukopenia (lymphocytes spared) + thrombocytopenia" },
      { name: "Reticulocyte count", note: "Low (hypoplastic)" },
      { name: "Aspiration for cytogenetics", note: "Rule out myelodysplasia or leukaemia" },
      { name: "Ham's test / Flow cytometry for PNH", note: "PNH can co-exist or evolve" },
      { name: "Viral serology (Parvovirus, Hepatitis)", note: "Identify infectious cause" }
    ] },
  "Tuberculosis": { gm: [
      "Directly observed therapy (DOT) for: homeless, non-adherent patients, all prisoners",
      "Notification to public health authorities",
      "Contact tracing and screening",
      "Corticosteroids (Prednisolone 20–40 mg) for TB meningitis — first 2–3 weeks then taper",
      "Increase steroid dose in patients on long-term steroids starting anti-TB (Rifampicin induces P450)",
      "Monitor LFTs during therapy (hepatotoxicity risk)"
    ], pm: [
      { name: "Initial phase (2 months): RIPE", dose: "Rifampicin + Isoniazid + Pyrazinamide + Ethambutol" },
      { name: "Continuation phase (4 months)", dose: "Rifampicin + Isoniazid" },
      { name: "Latent TB: Isoniazid alone", dose: "6 months" },
      { name: "TB Meningitis: 4-drug × 2 months then Rifampicin + Isoniazid", dose: "Total 12 months; + Prednisolone" },
      { name: "Pyridoxine (Vitamin B6)", dose: "Low dose prophylaxis against Isoniazid-induced neuropathy; high dose for treatment" },
      { name: "Failing regimen: add Streptomycin", dose: "5-drug regimen: RIPES" }
    ], tests: [
      { name: "Sputum AFB smear + Culture (gold standard)", note: "Culture before starting antibiotics; sensitivity testing" },
      { name: "Chest X-ray", note: "Upper lobe infiltrates, cavitation, hilar lymphadenopathy" },
      { name: "Mantoux (Tuberculin skin test)", note: "Latent TB screening" },
      { name: "IGRA (Interferon-Gamma Release Assay)", note: "Latent TB; more specific than Mantoux" },
      { name: "CT thorax", note: "Extent of disease, mediastinal lymph nodes" },
      { name: "Bone marrow biopsy / Liver biopsy", note: "Miliary TB diagnosis" },
      { name: "CSF analysis (Lymphocytosis, ↑Protein, ↓Glucose)", note: "TB meningitis" }
    ] },
  "UTI / Pyelonephritis": { gm: [
      "Increase fluid intake / hydration",
      "Urine culture before starting antibiotics in: pyelonephritis, recurrent UTI, pregnancy, atypical symptoms",
      "LUTI: 3-day course for uncomplicated cystitis in non-pregnant women",
      "UUTI (pyelonephritis): consider hospital admission; 10–14 days antibiotics",
      "Recurrent UTI: consider cranberry products to reduce frequency",
      "Asymptomatic bacteriuria: do NOT treat (except pregnant women)"
    ], pm: [
      { name: "Trimethoprim or Nitrofurantoin", dose: "1st line: uncomplicated LUTI (3-day course)" },
      { name: "Amoxicillin / Ampicillin, Cephalosporins", dose: "Alternatives for LUTI" },
      { name: "Ciprofloxacin (quinolone)", dose: "7 days: upper UTI; also prostatitis in men" },
      { name: "Co-amoxiclav", dose: "14 days: upper UTI alternative" },
      { name: "Broad-spectrum Cephalosporin / Quinolone (IV)", dose: "BNF recommendation: acute pyelonephritis hospital; 10–14 days" },
      { name: "Nitrofurantoin (1st line in pregnancy)", dose: "Treat symptomatic AND asymptomatic UTI in pregnancy" }
    ], tests: [
      { name: "Urine dipstick", note: "Leucocytes (pyuria), nitrites (Gram-negative); alternative to culture for uncomplicated cystitis" },
      { name: "Midstream urine (MSU) culture", note: "Bacterial count >100,000/mL; gold standard for bacteriuria" },
      { name: "Needle aspiration culture (suprapubic)", note: "GOLD STANDARD — minimises contamination" },
      { name: "Urine cytology + Excretion urography + Cystoscopy", note: "Persistent haematuria in elderly (rule out malignancy)" },
      { name: "Renal ultrasound", note: "Pyelonephritis/recurrent UTI; obstruction, abscess" },
      { name: "Blood cultures + FBC", note: "Systemically unwell / septic patients" }
    ] },
  "DM / Diabetic Foot Ulcer": { gm: [
      "Lifestyle: high-fibre, low-GI diet; discourage diabetic-specific foods",
      "Target weight loss 5–10% if overweight",
      "HbA1c target: 48 mmol/mol (lifestyle/metformin alone); 53 mmol/mol (drugs causing hypoglycaemia)",
      "BP target: <140/80; <130/80 if end-organ damage — ACEi 1st line",
      "Statin (Atorvastatin 20 mg) if 10-yr CVD risk >10%",
      "Diabetic foot: annual screening — 10g monofilament (neuropathy) + pulse palpation (ischaemia)",
      "Diabetic foot ulcer: MDT care (diabetologist, vascular surgery, orthopaedics, tissue viability)",
      "Venous ulcer: multi-layer compression bandaging; check ABPI first"
    ], pm: [
      { name: "Metformin (1st line T2DM)", dose: "Standard-release; titrate up; modified-release if GI intolerance" },
      { name: "2nd line options (add if HbA1c ≥58 mmol/mol on metformin)", dose: "Sulfonylurea, Gliptin (DPP-4i), Pioglitazone, or SGLT-2 inhibitor" },
      { name: "Insulin", dose: "If triple oral therapy fails or HbA1c remains ≥58 mmol/mol" },
      { name: "ACE inhibitor", dose: "BP control 1st line; also nephroprotective" },
      { name: "Atorvastatin 20 mg", dose: "CVD risk reduction" },
      { name: "Antibiotics (diabetic foot cellulitis)", dose: "Flucloxacillin ± Metronidazole; broader cover if MRSA risk" }
    ], tests: [
      { name: "HbA1c", note: "Every 3–6 months until stable, then 6-monthly; diagnostic: ≥48 mmol/mol (6.5%)" },
      { name: "Fasting plasma glucose / OGTT", note: "Diagnosis of DM" },
      { name: "Urine ACR", note: "Annual screening for diabetic nephropathy" },
      { name: "eGFR", note: "Renal function; dose-adjust metformin" },
      { name: "Ankle-Brachial Pressure Index (ABPI)", note: "Screening for peripheral arterial disease; essential before compression bandaging" },
      { name: "10g Monofilament test", note: "Annual neuropathy screening of diabetic foot" },
      { name: "X-ray foot / MRI foot", note: "Charcot foot; osteomyelitis" },
      { name: "Indium-labelled WBC scan", note: "Best differentiation: Charcot vs osteomyelitis" }
    ] },
  "DVT / Cellulitis": { gm: [
      "DVT: Two-level Wells score to estimate clinical probability",
      "DVT: proximal leg vein ultrasound within 4 hours if 'DVT likely' (≥2 points)",
      "DVT: anticoagulate for ≥3 months (or 6 months for unprovoked DVT)",
      "Cellulitis: Eron classification (I–IV) guides admission vs outpatient",
      "Cellulitis Class III/IV: admit for IV antibiotics",
      "Cellulitis: mark erythema borders; reassess at 48h",
      "Facial/periorbital cellulitis: admit (unless very mild)"
    ], pm: [
      { name: "LMWH (Low Molecular Weight Heparin)", dose: "DVT initial anticoagulation; continue ≥5 days until INR ≥2.0" },
      { name: "Warfarin", dose: "DVT: start within 24h; INR 2–3; continue ≥3 months; lifelong for recurrent DVT" },
      { name: "Fondaparinux", dose: "Alternative anticoagulant; DVT/PE" },
      { name: "Rivaroxaban / Apixaban / Dabigatran", dose: "DOACs; alternatives to LMWH + warfarin for DVT/PE" },
      { name: "Flucloxacillin (cellulitis mild/moderate)", dose: "1st line (BNF); oral for outpatient; sensitive Staph/Strep" },
      { name: "Clarithromycin or Clindamycin", dose: "Cellulitis: penicillin allergy" },
      { name: "Benzylpenicillin + Flucloxacillin IV", dose: "Severe cellulitis (inpatient)" },
      { name: "NSAIDs (oral)", dose: "Superficial thrombophlebitis — reduces extension risk 67%" }
    ], tests: [
      { name: "Two-level DVT Wells score", note: "≥2 = DVT likely → USS; <2 = DVT unlikely → D-dimer" },
      { name: "D-dimer", note: "High sensitivity; if negative with low pre-test probability: rules out DVT" },
      { name: "Proximal leg vein Doppler Ultrasound", note: "Diagnostic; within 4 hours if DVT likely" },
      { name: "CT Pulmonary Angiogram (CTPA)", note: "If pulmonary embolism suspected" },
      { name: "Thrombophilia screening", note: "Unprovoked DVT + family history; not if on lifelong warfarin" },
      { name: "Malignancy screen (CXR, FBC, Ca, LFTs, urinalysis)", note: "All unprovoked DVT/PE ≥40 years → CT abdomen/pelvis + mammogram women" },
      { name: "ABPI", note: "Before compression stockings (superficial thrombophlebitis/venous ulcer)" }
    ] },
  "Diarrhoea / Acute Gastroenteritis": { gm: [
      "Oral rehydration is mainstay; IV fluids if unable to take orally",
      "Most bacterial gastroenteritis is self-limiting — antibiotics not routinely indicated",
      "Food hygiene and hand washing education",
      "Campylobacter: IV fluids; antibiotics usually not needed (Erythromycin if severe)",
      "Amoebiasis: Metronidazole",
      "Travellers' diarrhoea: Ciprofloxacin 1st line when antibiotics indicated",
      "Scombroid (histamine) poisoning: self-limiting; antihistamines if severe"
    ], pm: [
      { name: "ORS (Oral Rehydration Salts)", dose: "1st line for all gastroenteritis; maintains hydration" },
      { name: "Ciprofloxacin", dose: "Travellers' diarrhoea 1st line; Typhoid chronic carriers" },
      { name: "Metronidazole", dose: "Amoebiasis (Entamoeba histolytica); Giardiasis" },
      { name: "Erythromycin / Ciprofloxacin", dose: "Campylobacter (severe cases only)" },
      { name: "Chlorpheniramine / Cimetidine IV", dose: "Scombroid (histamine) poisoning — severe" }
    ], tests: [
      { name: "Stool microscopy, culture & sensitivity", note: "Identify organism; mandatory if: bloody diarrhoea, systemic upset, immunocompromised, traveller" },
      { name: "Stool for ova, cysts, parasites (OCP)", note: "Amoebiasis, Giardiasis" },
      { name: "FBC, CRP, U&E, LFTs", note: "Assess severity, dehydration, complications" },
      { name: "Blood cultures", note: "Systemic features / sepsis" },
      { name: "Sigmoidoscopy / Colonoscopy", note: "Chronic / inflammatory diarrhoea (IBD)" }
    ] },
  "Malaria": { gm: [
      "Identify Plasmodium species — determines treatment",
      "Monitor blood glucose every 2h (hypoglycaemia risk — malaria + quinine)",
      "Uncomplicated falciparum: Artemisinin-based Combination Therapy (ACT) — WHO 2010 1st line",
      "Severe falciparum (parasitaemia >2%): parenteral treatment",
      "Exchange transfusion if parasitaemia >10%",
      "P. vivax / ovale: treat hypnozoites to prevent relapse (Primaquine)",
      "Mosquito bite prevention: DEET repellent, nets, appropriate clothing"
    ], pm: [
      { name: "Artemether + Lumefantrine (ACT)", dose: "Uncomplicated P. falciparum — WHO 1st line" },
      { name: "Artesunate IV", dose: "Severe falciparum malaria — WHO preferred over IV quinine" },
      { name: "Quinine IV", dose: "Severe/cerebral malaria; don't reduce initial dose in renal/hepatic failure; teratogenic in 1st trimester high dose" },
      { name: "Chloroquine", dose: "P. vivax, P. ovale, P. malariae (sensitive strains)" },
      { name: "Primaquine", dose: "P. vivax and P. ovale — destroys liver hypnozoites and prevents relapse" },
      { name: "Atovaquone + Proguanil (Malarone)", dose: "Prophylaxis (1–2 days before, 7 days after); also uncomplicated falciparum" },
      { name: "Doxycycline", dose: "Prophylaxis (1–2 days before, 4 weeks after); CI in pregnancy, children <12" },
      { name: "Mefloquine (Lariam)", dose: "Prophylaxis; CI in epilepsy, psychiatric illness; weekly" }
    ], tests: [
      { name: "Thick & Thin Blood Film (gold standard)", note: "Species identification; ring forms in RBCs; falciparum: multiple parasites per cell; schizonts = severe" },
      { name: "Rapid Diagnostic Test (RDT — HRP-2 antigen)", note: "Rapid P. falciparum detection" },
      { name: "Malaria PCR", note: "Species confirmation; low parasitaemia" },
      { name: "FBC", note: "Anaemia, thrombocytopenia, leukopenia" },
      { name: "Blood glucose", note: "Hypoglycaemia (malaria + quinine)" },
      { name: "U&E, Creatinine", note: "Acute renal failure (blackwater fever in P. falciparum)" },
      { name: "Blood culture", note: "Coexistent bacteraemia if haemodynamically unstable" }
    ] },
  "SLE / Rheumatoid Arthritis": { gm: [
      "SLE: Sun protection (sun-block); avoid UV exposure",
      "SLE: Regular monitoring — ESR/CRP (CRP normal in active SLE; rise suggests infection), complement (C3/C4) low in active disease",
      "RA: Start DMARD therapy ASAP (within 3 months of persistent symptoms)",
      "RA: Short-term glucocorticoids for flares (<3 months at lowest effective dose)",
      "RA: Monitor FBC, LFTs, eGFR — DMARD blood monitoring (BSR guidelines)",
      "RA: Pre-biologic screening — CXR + TB assessment before anti-TNF therapy"
    ], pm: [
      { name: "SLE: NSAIDs", dose: "Symptomatic joint/pleuritis pain" },
      { name: "SLE: Hydroxychloroquine", dose: "Skin disease; mild systemic SLE" },
      { name: "SLE: Prednisolone + Cyclophosphamide", dose: "Severe internal organ involvement (renal, neuro)" },
      { name: "RA: Methotrexate (MTX)", dose: "1st line DMARD for moderate–high activity; + folic acid 5 mg/week; monitor FBC + LFTs" },
      { name: "RA: Sulfasalazine", dose: "Low disease activity; safe in pregnancy (MTX CI in pregnancy)" },
      { name: "RA: Hydroxychloroquine (HCQ)", dose: "Low disease activity; annual ophthalmic exam (retinopathy)" },
      { name: "RA: Azathioprine", dose: "Check TPMT status before starting" },
      { name: "RA: Leflunomide", dose: "If other DMARDs contraindicated; also psoriatic arthritis" },
      { name: "RA: Anti-TNF (Etanercept SC, Infliximab IV, Adalimumab SC)", dose: "Inadequate response to ≥2 DMARDs including MTX; risk of TB reactivation" }
    ], tests: [
      { name: "ANA (SLE)", note: "99% positive; best screening test; sensitive but not specific" },
      { name: "Anti-dsDNA (SLE)", note: "Highly specific (>99%); 70% sensitive; monitor disease activity" },
      { name: "Anti-Smith (SLE)", note: "Most specific (>99%); 30% sensitivity" },
      { name: "Complement C3, C4 (SLE)", note: "Low in active disease (immune complex consumption)" },
      { name: "Rheumatoid Factor (RF) + Anti-CCP (RA)", note: "RF 70–80% sensitive; Anti-CCP more specific; poor prognosis if both positive" },
      { name: "X-ray hands/feet (RA)", note: "Joint space narrowing, juxta-articular osteoporosis, erosions" },
      { name: "MRI / Ultrasound joints (RA)", note: "Early synovitis, erosions (more sensitive than X-ray)" },
      { name: "DAS28 score (RA)", note: "Disease activity composite score; guide treatment changes" },
      { name: "Urinalysis + Renal biopsy (SLE nephritis)", note: "Diffuse proliferative GN most common; WHO class" }
    ] },
  "Chronic Bronchitis": { gm: [
      "Smoking cessation — single most important intervention",
      "Annual influenza vaccination; pneumococcal vaccination",
      "Pulmonary rehabilitation programme",
      "O₂ therapy: LTOT if pO₂ <7.3 kPa; target SpO₂ 88–92% in acute exacerbation",
      "Chest physiotherapy and postural drainage for sputum clearance",
      "Treat acute exacerbations: antibiotics if purulent sputum + systemic steroids",
      "NIV if acute hypercapnic respiratory failure not responding to treatment"
    ], pm: [
      { name: "SABA — Salbutamol inhaler", dose: "Short-acting bronchodilator; as needed" },
      { name: "SAMA — Ipratropium inhaler", dose: "Short-acting muscarinic antagonist; adjunct" },
      { name: "LAMA — Tiotropium", dose: "Long-acting muscarinic antagonist; once daily" },
      { name: "LABA + ICS combination", dose: "e.g. Salmeterol/Fluticasone; FEV₁ <50%" },
      { name: "Prednisolone", dose: "30 mg/day × 7–14 days for acute exacerbation" },
      { name: "Antibiotics (exacerbation)", dose: "Amoxicillin / Doxycycline / Clarithromycin; 5–7 days" },
      { name: "Mucolytics — Carbocisteine", dose: "Chronic productive cough; reduces exacerbations" }
    ], tests: [
      { name: "Spirometry (post-bronchodilator)", note: "FEV₁/FVC <0.7 confirms airflow obstruction; FEV₁% grades severity" },
      { name: "Chest X-ray", note: "Exclude other pathology; hyperinflation, increased bronchovascular markings" },
      { name: "Sputum culture", note: "Purulent exacerbation; common organisms: H. influenzae, S. pneumoniae, M. catarrhalis" },
      { name: "ABG", note: "Type II respiratory failure: ↑pCO₂, ↓pO₂, ↑HCO₃" },
      { name: "FBC", note: "Polycythaemia secondary to chronic hypoxia" },
      { name: "ECG / Echo", note: "Cor pulmonale (right heart strain)" }
    ] },
  "Bronchiectasis": { gm: [
      "Treat underlying cause (CF, PCD, immunodeficiency, post-infection)",
      "Chest physiotherapy (active cycle of breathing technique — ACBT) twice daily",
      "Postural drainage; oscillating positive expiratory pressure (OPEP) devices",
      "Annual influenza + pneumococcal vaccination",
      "Pulmonary rehabilitation",
      "Surgery (lobectomy/segmentectomy) for localised bronchiectasis unresponsive to treatment",
      "Haemoptysis: bronchial artery embolisation (massive haemoptysis)"
    ], pm: [
      { name: "Antibiotics (acute exacerbation)", dose: "Amoxicillin or Clarithromycin; guided by sputum culture" },
      { name: "Long-term prophylactic antibiotics", dose: "Azithromycin 250–500 mg 3×/week; ≥3 exacerbations/year" },
      { name: "Nebulised Tobramycin / Colistin", dose: "Chronic Pseudomonas colonisation" },
      { name: "Bronchodilators (SABA/LABA)", dose: "If bronchospasm component" },
      { name: "Hypertonic saline (nebulised 7%)", dose: "Mucociliary clearance; twice daily before physio" },
      { name: "Dornase alfa (DNase)", dose: "Cystic fibrosis-associated bronchiectasis only" },
      { name: "IVIG", dose: "Hypogammaglobulinaemia-related bronchiectasis" }
    ], tests: [
      { name: "HRCT Chest", note: "Gold standard; shows tram-track sign, signet-ring sign (airway diameter > adjacent artery)" },
      { name: "Sputum culture (regular)", note: "Identify colonising organisms; Pseudomonas aeruginosa common in severe disease" },
      { name: "Spirometry", note: "Obstructive or mixed pattern; assess severity" },
      { name: "Immunoglobulin levels (IgG, IgA, IgM)", note: "Exclude hypogammaglobulinaemia" },
      { name: "Sweat chloride / CFTR gene testing", note: "Exclude cystic fibrosis" },
      { name: "Aspergillus serology (IgE, RAST, precipitins)", note: "ABPA as underlying cause" },
      { name: "Ciliary function studies / electron microscopy", note: "Primary ciliary dyskinesia" }
    ] },
  "Pleural Effusion": { gm: [
      "Identify and treat underlying cause (heart failure, malignancy, infection, TB)",
      "Therapeutic thoracocentesis (pleural aspiration) if symptomatic — drain ≤1.5 L in one session",
      "Chest drain (intercostal tube) for large effusions, empyema, or haemothorax",
      "Pleurodesis (chemical — talc or tetracycline) for recurrent malignant effusion",
      "Indwelling pleural catheter (IPC) for recurrent/trapped lung",
      "Surgical decortication for empyema with trapped lung unresponsive to drainage"
    ], pm: [
      { name: "Furosemide ± Spironolactone", dose: "Transudative effusion secondary to heart failure / cirrhosis" },
      { name: "Antibiotics (IV)", dose: "Parapneumonic effusion / empyema: Amoxicillin-clavulanate ± Metronidazole" },
      { name: "Streptokinase (intrapleural)", dose: "Loculated parapneumonic effusion / empyema undrainable" },
      { name: "Anti-TB chemotherapy (RIPE)", dose: "Tuberculous effusion" },
      { name: "Talc slurry / Bleomycin (pleurodesis)", dose: "Recurrent malignant pleural effusion" }
    ], tests: [
      { name: "Chest X-ray", note: "Blunting of costophrenic angle (>200 mL); homogeneous opacity; trachea deviated away (large)" },
      { name: "Ultrasound (pleural)", note: "Best initial investigation; guides safe aspiration; detects loculation" },
      { name: "Pleural fluid aspiration + analysis", note: "Light's criteria: exudate if protein >29 g/L, LDH >2/3 serum upper limit, fluid/serum LDH >0.6" },
      { name: "Pleural fluid glucose", note: "Low: empyema, RA, malignancy, TB" },
      { name: "Pleural fluid cytology", note: "Malignant cells in 60% of malignant effusions" },
      { name: "Pleural biopsy (image-guided Abrams / VATS)", note: "TB / malignancy; VATS most sensitive" },
      { name: "CT Chest with contrast", note: "Characterise effusion; pleural nodularity (malignancy), septation (empyema)" }
    ] },
  "Lung Abscess": { gm: [
      "Prolonged antibiotic therapy (4–6 weeks minimum)",
      "Postural drainage; physiotherapy for sputum clearance",
      "Nutritional support (often malnourished patients)",
      "Treat predisposing factors (aspiration risk, dental hygiene, alcohol)",
      "Surgical drainage (rarely needed): percutaneous CT-guided drainage if no response",
      "Surgery (lobectomy) for massive haemoptysis or resistant abscess"
    ], pm: [
      { name: "Amoxicillin + Metronidazole (oral)", dose: "1st line for community-acquired / aspiration abscess; 4–6 weeks" },
      { name: "Co-amoxiclav (Augmentin)", dose: "Alternative; covers anaerobes and aerobes" },
      { name: "Clindamycin", dose: "Excellent anaerobic cover; alternative to metronidazole if penicillin-allergic" },
      { name: "Piperacillin-Tazobactam IV", dose: "Nosocomial / immunocompromised abscess" },
      { name: "Metronidazole", dose: "Essential for anaerobic cover in aspiration pneumonia/abscess" }
    ], tests: [
      { name: "Chest X-ray", note: "Cavitary lesion with air-fluid level; commonly right lower lobe (aspiration)" },
      { name: "CT Chest", note: "Better delineates abscess wall, satellite nodules; distinguishes empyema from abscess" },
      { name: "Sputum culture + sensitivity", note: "Identify causative organism; often mixed anaerobes" },
      { name: "Bronchoscopy + BAL", note: "If no productive cough; exclude endobronchial obstruction / malignancy" },
      { name: "FBC", note: "Leukocytosis; neutrophilia" },
      { name: "Blood cultures", note: "Systemic sepsis / bacteraemia" },
      { name: "Serology for Entamoeba / Aspergillus", note: "Atypical organisms in immunocompromised" }
    ] },
  "Cystic Fibrosis": { gm: [
      "Multidisciplinary team care (paediatrician, chest physician, dietitian, physiotherapist, psychologist)",
      "Chest physiotherapy twice daily (ACBT, Flutter device, high-frequency chest wall oscillation)",
      "High-calorie, high-fat diet; pancreatic enzyme supplementation with all meals",
      "Annual influenza vaccination; meningococcal, Hib, pneumococcal vaccinations",
      "Treat complications: CFRD (insulin), CF liver disease (ursodeoxycholic acid), distal intestinal obstruction syndrome",
      "Lung transplantation: end-stage lung disease (FEV₁ <30% or rapid decline)",
      "Genetic counselling; screen family members"
    ], pm: [
      { name: "DNase alfa (Dornase alfa)", dose: "Nebulised; cleaves extracellular DNA in mucus; improves FEV₁" },
      { name: "Hypertonic saline 7% (nebulised)", dose: "Mucociliary clearance; before physiotherapy" },
      { name: "Ivacaftor (CFTR potentiator)", dose: "G551D mutation (4–5% of CF); markedly improves lung function" },
      { name: "Lumacaftor/Ivacaftor (Orkambi)", dose: "Phe508del homozygous (most common CF mutation)" },
      { name: "Elexacaftor/Tezacaftor/Ivacaftor (Trikafta)", dose: "Most effective triple CFTR modulator; Phe508del + other mutations" },
      { name: "Ciprofloxacin (oral)", dose: "Pseudomonas aeruginosa eradication (early colonisation)" },
      { name: "Nebulised Tobramycin / Colistin", dose: "Chronic Pseudomonas suppression" },
      { name: "Pancreatic enzyme replacement (Creon)", dose: "With every meal and snack; exocrine pancreatic insufficiency" },
      { name: "Fat-soluble vitamins (A, D, E, K)", dose: "Malabsorption; supplement routinely" }
    ], tests: [
      { name: "Sweat chloride test (pilocarpine iontophoresis)", note: "Gold standard; >60 mmol/L diagnostic; 40–60 borderline" },
      { name: "CFTR gene mutation analysis", note: "Identify specific mutations (e.g. Phe508del); guides modulator therapy" },
      { name: "Spirometry (FEV₁, FVC)", note: "Monitor progression; FEV₁ <30% = severe / transplant evaluation" },
      { name: "Sputum culture (regular)", note: "Pseudomonas, Burkholderia cepacia, MRSA, Aspergillus" },
      { name: "HRCT Chest", note: "Bronchiectasis, mucus plugging, hyperinflation" },
      { name: "Faecal elastase", note: "Exocrine pancreatic insufficiency (low = CF-related)" },
      { name: "HbA1c / OGTT", note: "CF-related diabetes (CFRD); annual from age 10" },
      { name: "LFTs + USS liver", note: "CF liver disease; annual" }
    ] },
  "Mitral Stenosis & Mitral Regurgitation": { gm: [
      "Treat underlying cause (rheumatic heart disease, infective endocarditis)",
      "Secondary prophylaxis of rheumatic fever: Benzathine penicillin IM monthly",
      "MS: Balloon mitral valvuloplasty (percutaneous) — preferred if valve pliable, no calcification, no MR, no LA thrombus",
      "MS: Mitral valve replacement if valvuloplasty not suitable",
      "MR: Surgical repair preferred over replacement; earlier intervention for severe MR",
      "Heart failure management: salt restriction, fluid restriction, daily weights",
      "AF management: rate control ± anticoagulation to prevent systemic embolism",
      "Infective endocarditis prophylaxis for dental procedures (high-risk patients)"
    ], pm: [
      { name: "Diuretics (Furosemide ± Spironolactone)", dose: "Pulmonary congestion / heart failure" },
      { name: "Beta-blockers (Bisoprolol / Metoprolol)", dose: "Rate control in AF; reduce tachycardia" },
      { name: "Digoxin", dose: "Rate control in AF; especially if heart failure" },
      { name: "Warfarin (INR 2–3)", dose: "AF + MS/MR; mechanical valve; LA thrombus" },
      { name: "ACE inhibitors (MR)", dose: "Reduce afterload; symptomatic MR awaiting surgery" },
      { name: "Benzathine penicillin IM 1.2 MU", dose: "Monthly; secondary prophylaxis rheumatic fever" }
    ], tests: [
      { name: "Echocardiography (transthoracic)", note: "BEST initial test; assess valve area, gradient, severity, vegetation, LA size" },
      { name: "TOE (transoesophageal echo)", note: "LA thrombus detection; superior to TTE; pre-valvuloplasty" },
      { name: "ECG", note: "AF; P-mitrale (bifid P in MS); right axis deviation (severe MS)" },
      { name: "Chest X-ray", note: "MS: double shadow (LA), Kerley B lines, pulmonary oedema; MR: cardiomegaly, LA enlargement" },
      { name: "Cardiac catheterisation", note: "Pre-operative; assess coronary artery disease and pulmonary pressures" },
      { name: "Throat swab + ASOT", note: "Rheumatic fever / Group A Streptococcal infection" }
    ] },
  "Aortic Stenosis & Aortic Regurgitation": { gm: [
      "AS: Surgical aortic valve replacement (SAVR) — gold standard for symptomatic severe AS",
      "AS: TAVI (transcatheter aortic valve implantation) — high surgical risk patients",
      "AS: No medical treatment delays progression; treat heart failure symptoms",
      "AR: Surgery indicated when symptoms appear or LV dilates significantly (EF <50%)",
      "AR: Valve repair or replacement; early surgery improves outcomes",
      "Avoid strenuous exercise in severe AS (risk of sudden death)",
      "Infective endocarditis prophylaxis guidance",
      "Regular echo surveillance for progression"
    ], pm: [
      { name: "Furosemide ± Spironolactone", dose: "Heart failure symptoms; volume overload" },
      { name: "ACE inhibitors / ARBs (AR)", dose: "Afterload reduction; asymptomatic severe AR + hypertension" },
      { name: "Nifedipine (AR)", dose: "Vasodilator; alternative if ACEi not tolerated" },
      { name: "Digoxin", dose: "AF + heart failure with valve disease" },
      { name: "Warfarin", dose: "Mechanical prosthetic valve; AF" },
      { name: "Nitrates + Diuretics (AS — acute decompensation)", dose: "Bridge to surgery only; vasodilators contraindicated as outpatient in severe AS" }
    ], tests: [
      { name: "Echocardiography (TTE)", note: "GOLD STANDARD: valve area (<1 cm² = severe AS), peak gradient (>40 mmHg = severe), AR jet, LV dimensions" },
      { name: "ECG", note: "AS: LVH (left axis deviation, strain pattern); AR: LVH + volume overload pattern" },
      { name: "Chest X-ray", note: "AS: calcified aortic valve, post-stenotic aortic dilatation; AR: cardiomegaly, aortic root dilatation" },
      { name: "Cardiac catheterisation", note: "Pre-operative; confirm severity + assess coronary anatomy" },
      { name: "CT aorta", note: "Pre-TAVI planning; assess annulus, access vessels" }
    ] },
  "Congestive Cardiac Failure (CCF)": { gm: [
      "Salt restriction <2 g/day; fluid restriction 1.5–2 L/day",
      "Daily weight monitoring; increase diuretics if >2 kg gain in 2 days",
      "Treat precipitating cause: AF, infection, anaemia, hypertension, ischaemia",
      "Cardiac rehabilitation programme",
      "Cardiac resynchronisation therapy (CRT): EF <35%, LBBB, QRS >120 ms",
      "ICD implantation: EF <35% despite ≥3 months optimal medical therapy",
      "LVAD (left ventricular assist device): bridge to transplant",
      "Heart transplantation: end-stage HF"
    ], pm: [
      { name: "ACE inhibitors (e.g. Ramipril, Lisinopril)", dose: "1st line HFrEF; reduce mortality 20–25%; start low, titrate up" },
      { name: "Beta-blockers (Bisoprolol / Carvedilol / Metoprolol)", dose: "Reduce mortality; start when euvolaemic" },
      { name: "Spironolactone / Eplerenone (MRA)", dose: "Add if EF ≤35%; mortality benefit" },
      { name: "Furosemide (loop diuretic)", dose: "Symptomatic relief; fluid overload; no mortality benefit" },
      { name: "Digoxin", dose: "AF + HF; sinus rhythm if refractory symptoms; narrow therapeutic window" },
      { name: "Sacubitril/Valsartan (ARNi)", dose: "Replace ACEi in HFrEF EF ≤35%; superior to ACEi alone" },
      { name: "SGLT2 inhibitors (Dapagliflozin / Empagliflozin)", dose: "HFrEF and HFpEF; reduce HF hospitalisations" },
      { name: "Ivabradine", dose: "Sinus rhythm + HR ≥70 + EF ≤35% + on max beta-blocker" }
    ], tests: [
      { name: "Echocardiography", note: "KEY TEST: EF (HFrEF <40%, HFmrEF 40–49%, HFpEF ≥50%), wall motion, valves" },
      { name: "BNP / NT-proBNP", note: "Best marker: BNP <35 / NT-proBNP <125 pg/mL excludes HF; elevated in active HF" },
      { name: "Chest X-ray", note: "Cardiomegaly, upper lobe diversion, Kerley B lines, bat-wing pulmonary oedema" },
      { name: "ECG", note: "Identify AF, LBBB, LVH, ischaemia" },
      { name: "U&E, Creatinine, eGFR", note: "Monitor renal function; ACEi/diuretic effect" },
      { name: "TFTs", note: "Thyroid disease causing/contributing to AF or HF" },
      { name: "Coronary angiography", note: "Suspected ischaemic aetiology; guides revascularisation" }
    ] },
  "Hypertrophic Cardiomyopathy (HCM)": { gm: [
      "Avoid strenuous exercise and dehydration (reduce preload → worsen LVOTO)",
      "Avoid vasodilators and diuretics in obstructive HCM (worsen gradient)",
      "Genetic counselling and family screening (autosomal dominant; echo all 1st-degree relatives)",
      "ICD implantation: high-risk features (prior VT/VF, family history of sudden cardiac death, syncope, LV wall thickness ≥30 mm)",
      "Septal reduction therapy: surgical myectomy (gold standard) or alcohol septal ablation (high surgical risk)",
      "Heart transplantation: end-stage dilated phase of HCM"
    ], pm: [
      { name: "Beta-blockers (Propranolol / Bisoprolol)", dose: "1st line; reduce LVOTO gradient, HR, symptoms; prevent arrhythmia" },
      { name: "Verapamil / Diltiazem (non-dihydropyridine CCBs)", dose: "Alternative if beta-blockers not tolerated; improve diastolic filling" },
      { name: "Disopyramide", dose: "Obstructive HCM; combined with beta-blocker if symptoms persist" },
      { name: "Mavacamten", dose: "Selective cardiac myosin inhibitor; symptomatic obstructive HCM; new targeted therapy" },
      { name: "Anticoagulation (Warfarin / DOAC)", dose: "AF in HCM (high stroke risk)" }
    ], tests: [
      { name: "Echocardiography (TTE)", note: "GOLD STANDARD: asymmetric septal hypertrophy (≥15 mm), systolic anterior motion (SAM) of mitral valve, LVOTO gradient >30 mmHg" },
      { name: "Cardiac MRI", note: "Accurate wall thickness; late gadolinium enhancement (fibrosis) — prognostic" },
      { name: "ECG", note: "LVH; deep septal Q waves (inferolateral); WPW pattern; AF" },
      { name: "Holter monitor (24–48h)", note: "Non-sustained VT — major risk factor for sudden death" },
      { name: "Exercise stress test", note: "Provocative LVOTO; BP response (failure to rise = high risk)" },
      { name: "Genetic testing", note: "Sarcomere mutations (MYH7, MYBPC3); guides family screening" }
    ] },
  "Nephrotic Syndrome": { gm: [
      "Identify and treat underlying cause (minimal change, FSGS, membranous, diabetic nephropathy)",
      "Salt restriction <2 g/day; fluid restriction if oedema",
      "Oedema management: diuretics (furosemide ± spironolactone)",
      "Thromboembolism prophylaxis: anticoagulate if albumin <20 g/L (especially membranous nephropathy)",
      "Statin therapy: hyperlipidaemia is common",
      "Treat hypertension with ACE inhibitors (reduce proteinuria)",
      "Infections: vaccinate (pneumococcal, influenza); prophylactic penicillin in children",
      "Dietary: adequate protein intake; low-sodium diet"
    ], pm: [
      { name: "Prednisolone", dose: "Minimal change disease: 60 mg/day × 4–8 weeks; 80–90% remission" },
      { name: "Cyclophosphamide", dose: "Steroid-resistant or frequently relapsing nephrotic syndrome" },
      { name: "Ciclosporin / Tacrolimus", dose: "FSGS, membranous nephropathy; calcineurin inhibitors" },
      { name: "Rituximab", dose: "Frequently relapsing / steroid-dependent minimal change; membranous" },
      { name: "Furosemide ± Spironolactone", dose: "Oedema management" },
      { name: "ACE inhibitors / ARBs", dose: "Reduce proteinuria; slow progression; also antihypertensive" },
      { name: "Statins (Atorvastatin)", dose: "Dyslipidaemia associated with nephrotic syndrome" },
      { name: "LMWH / Warfarin", dose: "Thromboembolism prevention / treatment (membranous nephropathy risk)" }
    ], tests: [
      { name: "Urine dipstick + Urine ACR or PCR", note: "Proteinuria >3.5 g/24h (nephrotic-range); frothy urine" },
      { name: "24-hour urine protein / Urine PCR", note: "Quantify proteinuria; >3.5 g/24h = nephrotic" },
      { name: "Serum Albumin", note: "<25 g/L in nephrotic syndrome; low due to urinary losses" },
      { name: "Serum Cholesterol / Lipid profile", note: "Elevated (liver compensatory lipoprotein synthesis)" },
      { name: "Renal biopsy", note: "GOLD STANDARD for diagnosis; adults with nephrotic syndrome (except diabetic nephropathy)" },
      { name: "Complement (C3, C4, CH50)", note: "Low in membranoproliferative GN, lupus nephritis" },
      { name: "ANA, Anti-dsDNA", note: "Lupus nephritis" },
      { name: "Hepatitis B, C serology", note: "Secondary membranous nephropathy" }
    ] },
  "Glomerulonephritis (incl. Post-streptococcal)": { gm: [
      "PSGN: supportive treatment; self-limiting (complete recovery in 95% children)",
      "Treat underlying infection (penicillin for streptococcal infection)",
      "Salt restriction; fluid restriction if oliguria/oedema",
      "Antihypertensive treatment (essential in PSGN)",
      "Rapidly progressive GN (RPGN): aggressive immunosuppression urgently",
      "Treat underlying cause: SLE (steroids + cyclophosphamide), vasculitis (steroids + RTX/cyclophosphamide), IgA nephropathy",
      "Renal replacement therapy if acute kidney injury severe"
    ], pm: [
      { name: "Penicillin V (oral)", dose: "Streptococcal infection eradication in PSGN; 10 days" },
      { name: "Prednisolone (high dose)", dose: "RPGN, IgA nephropathy, lupus nephritis; pulse IV methylprednisolone in RPGN" },
      { name: "Cyclophosphamide", dose: "Crescentic GN (RPGN), vasculitis, lupus nephritis; with steroids" },
      { name: "Rituximab", dose: "ANCA-vasculitis-associated GN; alternative to cyclophosphamide" },
      { name: "Mycophenolate mofetil (MMF)", dose: "Lupus nephritis maintenance; alternative to cyclophosphamide" },
      { name: "ACE inhibitors / ARBs", dose: "IgA nephropathy + proteinuria; reduce progression" },
      { name: "Plasma exchange", dose: "Anti-GBM disease (Goodpasture's); ANCA-associated GN with severe renal failure" }
    ], tests: [
      { name: "Urinalysis + Urine microscopy", note: "Haematuria + red cell casts = nephritis; dysmorphic RBCs" },
      { name: "Renal biopsy", note: "GOLD STANDARD for diagnosis and classification of GN" },
      { name: "ASOT (anti-streptolysin O titre)", note: "PSGN: elevated 2–4 weeks after streptococcal infection" },
      { name: "Anti-DNase B", note: "More sensitive than ASOT for skin streptococcal infection" },
      { name: "Throat swab / Skin swab culture", note: "Identify Group A Streptococcus" },
      { name: "Complement C3, C4", note: "PSGN, lupus: C3 LOW; IgA nephropathy: C3 normal" },
      { name: "ANCA (cANCA/pANCA)", note: "Vasculitis-associated GN (Wegener's, MPA)" },
      { name: "Anti-GBM antibody", note: "Goodpasture's syndrome" },
      { name: "ANA, Anti-dsDNA", note: "Lupus nephritis" }
    ] },
  "Chronic Kidney Disease (CKD)": { gm: [
      "Treat underlying cause (DM, hypertension, GN)",
      "Blood pressure target: <130/80 mmHg; ACEi/ARBs 1st line (renoprotective)",
      "Dietary protein restriction (0.6–0.8 g/kg/day) in advanced CKD",
      "Salt restriction; low-potassium diet if hyperkalaemic",
      "Anaemia of CKD: Erythropoietin-stimulating agents (ESA); target Hb 10–12 g/dL",
      "CKD-MBD: phosphate restriction, phosphate binders, active vitamin D",
      "Cardiovascular risk reduction: statin, aspirin",
      "Prepare for renal replacement therapy (haemodialysis, peritoneal dialysis, transplant) when eGFR <15",
      "Avoid nephrotoxins (NSAIDs, IV contrast, aminoglycosides)"
    ], pm: [
      { name: "ACE inhibitors / ARBs", dose: "Renoprotective; reduce proteinuria; 1st line antihypertensive in CKD" },
      { name: "Erythropoietin (EPO) / Darbepoetin", dose: "Anaemia of CKD; give IV iron first (check iron stores)" },
      { name: "IV / Oral Iron", dose: "Iron deficiency in CKD; mandatory before ESA therapy" },
      { name: "Calcium carbonate / Sevelamer", dose: "Phosphate binders; CKD-mineral bone disease" },
      { name: "Alfacalcidol / Calcitriol (active Vit D)", dose: "Secondary hyperparathyroidism; CKD-MBD" },
      { name: "Sodium bicarbonate", dose: "Metabolic acidosis in CKD; slows progression" },
      { name: "Loop diuretics (Furosemide)", dose: "Volume overload; hypertension in CKD" },
      { name: "Statins", dose: "Cardiovascular risk reduction; Atorvastatin preferred" }
    ], tests: [
      { name: "eGFR (CKD-EPI equation)", note: "Staging: G1≥90, G2 60–89, G3a 45–59, G3b 30–44, G4 15–29, G5 <15 mL/min/1.73m²" },
      { name: "Urine ACR", note: "Albumin:creatinine ratio; A1 <3, A2 3–30, A3 >30 mg/mmol" },
      { name: "Renal USS", note: "Small echogenic kidneys (chronic); assess for obstruction, cysts, size" },
      { name: "Renal biopsy", note: "Unexplained CKD or rapidly progressing GFR decline" },
      { name: "FBC", note: "Normochromic normocytic anaemia of CKD" },
      { name: "Serum Electrolytes (K⁺, Na⁺, HCO₃, Ca²⁺, PO₄)", note: "Monitor metabolic complications" },
      { name: "Serum Parathyroid Hormone (PTH)", note: "Secondary hyperparathyroidism; CKD-MBD" }
    ] },
  "Inflammatory Bowel Disease (IBD)": { gm: [
      "Distinguish Crohn's disease from Ulcerative colitis (treatment differs)",
      "Nutritional support: exclusive enteral nutrition (1st line for Crohn's induction in children)",
      "Smoking cessation (smoking worsens Crohn's; paradoxically protective in UC)",
      "UC: Colectomy curative (no Crohn's equivalent cure)",
      "UC severe attack: admit, IV hydration, IV corticosteroids; review at 72h (if failing → rescue therapy or colectomy)",
      "Crohn's: surgery for complications (fistula, stricture, abscess, perforation)",
      "Colorectal cancer surveillance colonoscopy (UC >8–10 years, Crohn's colitis)"
    ], pm: [
      { name: "5-ASA (Mesalazine / Sulphasalazine)", dose: "UC: 1st line induction + maintenance; topical (suppository/enema) for proctitis" },
      { name: "Prednisolone (oral)", dose: "Moderate–severe flare; 40 mg/day tapering; not for maintenance" },
      { name: "IV Hydrocortisone", dose: "Severe UC attack; 100 mg QDS IV" },
      { name: "Azathioprine / Mercaptopurine", dose: "Steroid-sparing maintenance; check TPMT before starting" },
      { name: "Methotrexate", dose: "Crohn's disease maintenance; 25 mg SC/IM weekly; folic acid" },
      { name: "Infliximab (anti-TNF)", dose: "Moderate–severe Crohn's and UC; fistulising Crohn's; with azathioprine" },
      { name: "Adalimumab (anti-TNF)", dose: "Alternative anti-TNF; SC self-injection" },
      { name: "Vedolizumab", dose: "Anti-integrin; UC and Crohn's; gut-selective" },
      { name: "Ciclosporin IV", dose: "Rescue therapy for severe UC failing IV steroids; bridge to azathioprine or colectomy" }
    ], tests: [
      { name: "Colonoscopy + biopsy", note: "GOLD STANDARD: UC = continuous mucosal inflammation from rectum; Crohn's = skip lesions, transmural, granulomas" },
      { name: "Faecal calprotectin", note: "Non-invasive marker of intestinal inflammation; differentiate IBD from IBS" },
      { name: "CRP + ESR", note: "Inflammatory activity; poor specificity" },
      { name: "FBC", note: "Anaemia, leukocytosis, thrombocytosis in active IBD" },
      { name: "Abdominal X-ray", note: "Toxic megacolon (colon >6 cm); perforation (free gas under diaphragm)" },
      { name: "CT abdomen/pelvis", note: "Crohn's complications: abscess, fistula, obstruction" },
      { name: "MRI enterography / pelvis", note: "Crohn's small bowel disease; perianal disease (fistula mapping)" },
      { name: "ANCA + ASCA serology", note: "pANCA (UC); ASCA (Crohn's); moderate specificity" }
    ] },
  "Carcinoma of the Stomach": { gm: [
      "Staging with CT chest/abdomen/pelvis + laparoscopy before surgery",
      "Curative resection: total or subtotal gastrectomy + D2 lymph node dissection (gold standard surgery)",
      "Perioperative chemotherapy improves survival (FLOT or ECF regimen)",
      "Palliative: gastrectomy or bypass for obstruction; stenting; radiotherapy",
      "H. pylori eradication reduces risk (prevention/early MALT lymphoma treatment)",
      "Nutritional support: nasojejunal feeding or parenteral nutrition post-operatively",
      "MDT approach: oncology, surgery, gastroenterology, nutrition"
    ], pm: [
      { name: "FLOT regimen (perioperative)", dose: "5-FU, Leucovorin, Oxaliplatin, Docetaxel; 4 cycles pre + 4 post-surgery" },
      { name: "ECF regimen (perioperative)", dose: "Epirubicin, Cisplatin, 5-Fluorouracil; alternative" },
      { name: "Trastuzumab (HER2+)", dose: "HER2-positive advanced gastric cancer; + chemotherapy" },
      { name: "Ramucirumab (anti-VEGFR2)", dose: "2nd line metastatic gastric cancer" },
      { name: "Pembrolizumab", dose: "PD-L1 positive advanced/metastatic gastric cancer" }
    ], tests: [
      { name: "Upper GI Endoscopy (OGD) + biopsy", note: "GOLD STANDARD diagnosis; histology (adenocarcinoma 95%); H. pylori testing" },
      { name: "CT chest/abdomen/pelvis", note: "Staging; assess resectability, lymph nodes, metastases" },
      { name: "Laparoscopy + peritoneal washings", note: "Exclude peritoneal metastases before planned curative surgery" },
      { name: "EUS (Endoscopic Ultrasound)", note: "T and N staging; most accurate for local tumour invasion" },
      { name: "PET-CT", note: "Detect occult metastases" },
      { name: "HER2 testing (IHC + FISH)", note: "HER2-positive tumours eligible for Trastuzumab" },
      { name: "FBC, LFTs, CEA, CA 19-9", note: "Anaemia; tumour markers (low sensitivity but useful for monitoring)" }
    ] },
  "Carcinoma of the Colon": { gm: [
      "Surgical resection is primary curative treatment (right/left hemicolectomy, anterior resection, abdominoperineal resection)",
      "Pre-operative staging: CT chest/abdomen/pelvis; MRI rectum for rectal cancer",
      "Adjuvant chemotherapy if Stage III (node-positive); Stage II high-risk",
      "Rectal cancer: pre-operative chemoradiation → reduces local recurrence",
      "Total mesorectal excision (TME): gold standard for rectal cancer surgery",
      "Metastatic disease: liver metastases may be resectable (curative intent)",
      "Screening: colonoscopy; FOBT; family history → earlier surveillance",
      "Lynch syndrome / FAP: genetic counselling; prophylactic colectomy in FAP"
    ], pm: [
      { name: "FOLFOX (Oxaliplatin + Leucovorin + 5-FU)", dose: "Adjuvant chemotherapy; Stage III colon cancer; also metastatic" },
      { name: "CAPOX (Capecitabine + Oxaliplatin)", dose: "Alternative to FOLFOX; oral capecitabine" },
      { name: "Bevacizumab (anti-VEGF)", dose: "Metastatic CRC; add to chemotherapy" },
      { name: "Cetuximab / Panitumumab (anti-EGFR)", dose: "Metastatic CRC; only RAS/RAF wild-type tumours" },
      { name: "Pembrolizumab / Nivolumab", dose: "MSI-high / dMMR metastatic CRC; immunotherapy" },
      { name: "Capecitabine + Radiotherapy", dose: "Pre-operative chemoradiation for rectal cancer" }
    ], tests: [
      { name: "Colonoscopy + biopsy", note: "GOLD STANDARD: visualise entire colon; histological diagnosis" },
      { name: "CT colonography (virtual colonoscopy)", note: "Alternative if colonoscopy incomplete or declined" },
      { name: "CT chest/abdomen/pelvis", note: "Staging; liver, lung, peritoneal metastases" },
      { name: "MRI pelvis", note: "Rectal cancer local staging; circumferential resection margin (CRM)" },
      { name: "CEA (carcinoembryonic antigen)", note: "Pre-operative baseline; post-operative surveillance marker; not diagnostic" },
      { name: "MSI/MMR testing (IHC or PCR)", note: "Lynch syndrome screening; immunotherapy eligibility" },
      { name: "KRAS/NRAS/BRAF mutation testing", note: "Metastatic CRC; anti-EGFR eligibility" }
    ] },
  "Obstructive Jaundice": { gm: [
      "Identify cause: gallstones (choledocholithiasis), cholangiocarcinoma, pancreatic carcinoma, benign stricture",
      "Relieve obstruction: ERCP + sphincterotomy (common bile duct stones — gold standard)",
      "Surgical biliary bypass (palliative) or Whipple's procedure (curative for pancreatic head cancer)",
      "Biliary stenting (ERCP or percutaneous): unresectable malignant obstruction",
      "Pre-operative vitamin K if prolonged jaundice (correct coagulopathy)",
      "Treat cholangitis: IV antibiotics urgently + biliary drainage",
      "Monitor: AKI risk (hepatorenal syndrome); avoid nephrotoxins"
    ], pm: [
      { name: "IV antibiotics (cholangitis)", dose: "Piperacillin-Tazobactam or Cephalosporin + Metronidazole; urgent" },
      { name: "Vitamin K (IV / oral)", dose: "Correct coagulopathy (impaired bile-dependent absorption); pre-operatively" },
      { name: "Ursodeoxycholic acid", dose: "Primary biliary cholangitis; primary sclerosing cholangitis (limited effect)" },
      { name: "Gemcitabine + Cisplatin", dose: "Cholangiocarcinoma / pancreatic cancer (palliative chemotherapy)" }
    ], tests: [
      { name: "LFTs pattern: ↑↑ALP + ↑↑GGT + ↑Bilirubin (conjugated), normal/mildly ↑ALT", note: "Cholestatic/obstructive pattern" },
      { name: "Abdominal Ultrasound", note: "1st line: dilated bile ducts (>6 mm CBD); gallstones; liver lesions" },
      { name: "MRCP (MRI cholangiography)", note: "Non-invasive gold standard for biliary tree anatomy; CBD stones, strictures" },
      { name: "CT abdomen with contrast", note: "Mass lesion; vascular involvement; staging" },
      { name: "ERCP", note: "Therapeutic: sphincterotomy, stone removal, stent insertion; diagnostic if MRCP inconclusive" },
      { name: "CA 19-9", note: "Elevated in pancreatic and biliary malignancy; not diagnostic alone" },
      { name: "Urine: dark urine (conjugated bilirubin), pale stools (no urobilinogen)", note: "Classic obstructive jaundice pattern" }
    ] },
  "Liver Abscess": { gm: [
      "Pyogenic: drainage (percutaneous CT/USS-guided or surgical) + IV antibiotics",
      "Amoebic: medical treatment alone usually sufficient (no drainage needed unless large/rupture risk)",
      "IV antibiotics for 2–4 weeks then oral; guided by culture",
      "Treat underlying source: biliary, abdominal, dental (for pyogenic)",
      "Monitor for complications: rupture, empyema, bacteraemia",
      "Repeat imaging to confirm resolution"
    ], pm: [
      { name: "Metronidazole (amoebic)", dose: "800 mg TDS × 10 days; drug of choice for Entamoeba histolytica" },
      { name: "Diloxanide furoate (amoebic)", dose: "Follow metronidazole; eliminates intraluminal cysts" },
      { name: "Piperacillin-Tazobactam IV (pyogenic)", dose: "Broad-spectrum cover; anaerobes + Gram-negatives" },
      { name: "Ceftriaxone + Metronidazole (pyogenic)", dose: "Alternative IV regimen" },
      { name: "Meropenem IV", dose: "Severe/resistant pyogenic liver abscess" }
    ], tests: [
      { name: "Abdominal Ultrasound", note: "1st line: hypoechoic cavity with debris; right lobe most common" },
      { name: "CT abdomen with contrast", note: "Peripheral rim enhancement; identifies multiple abscesses; better than USS" },
      { name: "Amoebic serology (ELISA)", note: "Entamoeba histolytica antibodies; >95% sensitivity for amoebic abscess" },
      { name: "Pus culture + sensitivity", note: "Pyogenic: Klebsiella, E. coli, anaerobes most common" },
      { name: "Blood cultures", note: "Bacteraemia from pyogenic source" },
      { name: "FBC + CRP", note: "Leukocytosis; elevated CRP/ESR" },
      { name: "LFTs", note: "Elevated ALP; bilirubin may be raised" }
    ] },
  "Haemochromatosis": { gm: [
      "Regular venesection (phlebotomy): remove 500 mL blood weekly until ferritin <50 µg/L and transferrin saturation <30%",
      "Maintenance venesection: every 3 months to maintain ferritin <50 µg/L",
      "Avoid alcohol (accelerates liver damage), vitamin C supplements (increases iron absorption), raw shellfish (Vibrio risk)",
      "Screen 1st-degree relatives: ferritin + transferrin saturation + HFE gene testing",
      "Screen for complications: diabetes (OGTT), cardiac (ECG/Echo), liver (LFTs, USS, biopsy), hypogonadism (LH, FSH, testosterone)",
      "Liver transplantation: end-stage cirrhosis"
    ], pm: [
      { name: "Venesection (therapeutic phlebotomy)", dose: "500 mL/week until iron depletion; primary treatment — no drug needed" },
      { name: "Desferrioxamine (deferoxamine)", dose: "Chelating agent; SC infusion; only if venesection not possible (severe anaemia, heart failure)" },
      { name: "Deferasirox / Deferiprone", dose: "Oral iron chelators; alternative to desferrioxamine" },
      { name: "Insulin", dose: "Diabetes mellitus due to pancreatic iron deposition" }
    ], tests: [
      { name: "Serum Ferritin", note: "Elevated (>300 µg/L men, >200 µg/L women); sensitive but not specific" },
      { name: "Transferrin saturation", note: ">45% = abnormal; >60% strongly suggestive; BEST screening test" },
      { name: "HFE gene testing (C282Y, H63D mutations)", note: "C282Y homozygous in 80–85% hereditary haemochromatosis" },
      { name: "Liver biopsy + Perl's stain", note: "Iron deposition; hepatic iron index; assess cirrhosis (historically gold standard; MRI now preferred)" },
      { name: "MRI liver (T2*)", note: "Non-invasive quantification of liver iron; now preferred over biopsy for staging" },
      { name: "LFTs + FBC", note: "Cirrhosis complications; anaemia from venesection" },
      { name: "Fasting glucose / HbA1c", note: "Bronze diabetes from pancreatic iron deposition" }
    ] },
  "Rheumatoid Arthritis": { gm: [
      "Start DMARD therapy within 3 months of persistent synovitis",
      "Target remission or low disease activity (treat-to-target strategy)",
      "Regular DAS28 monitoring every 1–3 months; escalate if not improving",
      "Short-term corticosteroids (bridge therapy): lowest dose for shortest time",
      "Physiotherapy; occupational therapy; joint protection education",
      "Pre-biologic screening: CXR, TB IGRA/Mantoux, hepatitis B serology, varicella status",
      "Cardiovascular risk assessment (RA doubles CVD risk)",
      "Pre-methotrexate: FBC, LFTs, renal function; then monitor regularly"
    ], pm: [
      { name: "Methotrexate (MTX)", dose: "1st line DMARD; 7.5–25 mg weekly; + folic acid 5 mg once weekly (not same day)" },
      { name: "Sulfasalazine", dose: "Alternative or combination; 500 mg → 2–3 g/day; safe in pregnancy" },
      { name: "Hydroxychloroquine (HCQ)", dose: "Mild RA; combination; annual eye review (retinopathy risk)" },
      { name: "Leflunomide", dose: "Alternative to MTX; 20 mg/day; teratogenic (washout needed)" },
      { name: "Etanercept (SC)", dose: "Anti-TNF biologic; inadequate response to ≥2 DMARDs" },
      { name: "Infliximab (IV)", dose: "Anti-TNF biologic; combined with MTX" },
      { name: "Adalimumab (SC)", dose: "Anti-TNF biologic; SC fortnightly" },
      { name: "Tocilizumab", dose: "Anti-IL6 receptor; alternative biologic" },
      { name: "Abatacept", dose: "T-cell costimulation blocker; anti-TNF failure" },
      { name: "Rituximab (IV)", dose: "Anti-CD20; B-cell depletion; anti-TNF failure or contraindication" }
    ], tests: [
      { name: "Rheumatoid Factor (RF)", note: "70–80% sensitive; also positive in Sjögren's, SLE, infections" },
      { name: "Anti-CCP antibodies", note: "More specific than RF; poor prognosis marker; also anti-MCV" },
      { name: "X-ray hands + feet", note: "Juxta-articular osteoporosis, joint space narrowing, erosions (late)" },
      { name: "MRI / Ultrasound joints", note: "Early synovitis and erosions (more sensitive than X-ray)" },
      { name: "FBC, ESR, CRP", note: "Inflammatory markers; disease activity monitoring" },
      { name: "DAS28 score", note: "Disease activity composite score; guides treatment changes" },
      { name: "LFTs + Renal function", note: "DMARD monitoring (MTX hepatotoxicity, leflunomide)" }
    ] },
  "Dermatomyositis": { gm: [
      "Rest during active disease; graduated physiotherapy after inflammation controlled",
      "Sun protection (photosensitive rash)",
      "Screen for underlying malignancy (dermatomyositis >40 years — 30% associated with cancer)",
      "Malignancy screen: CT chest/abdomen/pelvis, OGD/colonoscopy, mammogram, PSA, CA-125",
      "Respiratory involvement: monitor SpO₂, PFTs; ILD management",
      "Swallowing assessment if dysphagia (aspiration risk)",
      "Physiotherapy and occupational therapy for muscle rehabilitation"
    ], pm: [
      { name: "Prednisolone (high dose)", dose: "1st line; 1 mg/kg/day (max 60–80 mg); taper slowly over months" },
      { name: "Methotrexate", dose: "Steroid-sparing agent; skin and muscle disease" },
      { name: "Azathioprine", dose: "Steroid-sparing; maintenance; check TPMT" },
      { name: "IVIG (IV immunoglobulin)", dose: "Refractory DM; 2 g/kg over 2–5 days monthly" },
      { name: "Rituximab", dose: "Refractory or anti-synthetase syndrome associated ILD" },
      { name: "Hydroxychloroquine", dose: "Skin manifestations (amyopathic dermatomyositis)" },
      { name: "Mycophenolate mofetil", dose: "ILD associated with DM; steroid-sparing" }
    ], tests: [
      { name: "CK (Creatine Kinase)", note: "MOST SENSITIVE marker of muscle damage; elevated in acute phase; guides treatment" },
      { name: "Aldolase, LDH, AST", note: "Other muscle enzymes; elevated with muscle disease" },
      { name: "Myositis-specific antibodies (MSAs)", note: "Anti-Jo-1 (antisynthetase syndrome + ILD); Anti-Mi-2 (classic DM); Anti-MDA5 (amyopathic DM + rapidly progressive ILD)" },
      { name: "EMG (Electromyography)", note: "Myopathic pattern: short-duration, polyphasic, low-amplitude motor units" },
      { name: "MRI muscle (STIR sequence)", note: "Inflammation / oedema in affected muscles; guide biopsy site" },
      { name: "Muscle biopsy", note: "Perifascicular atrophy (DM); perimysial inflammation; CD4+ T-cells (DM)" },
      { name: "CT chest / PFTs", note: "ILD (interstitial lung disease) — common complication" },
      { name: "Anti-nuclear antibody (ANA)", note: "Positive in majority; non-specific" }
    ] },
  "Systemic Sclerosis / SLE": { gm: [
      "SLE: Sun protection; avoid UV exposure (photoprotection)",
      "SLE: Regular monitoring of disease activity (ESR, CRP, complement, anti-dsDNA)",
      "SLE: Hydroxychloroquine for all SLE patients unless contraindicated (reduces flares + mortality)",
      "Systemic Sclerosis: Keep hands warm; avoid cold exposure (Raynaud's)",
      "SSc: Physiotherapy (hand exercises); mouth-opening exercises; occupational therapy",
      "SSc: Screen for pulmonary hypertension annually (Echo) and ILD (PFTs, HRCT)",
      "SSc: Screen for scleroderma renal crisis (BP monitoring, ACEi immediately)",
      "SSc: GI management: small-meal diet, head of bed elevation, prokinetics for dysmotility"
    ], pm: [
      { name: "SLE: Hydroxychloroquine", dose: "All SLE; baseline + annual eye exam; reduces flares + mortality" },
      { name: "SLE: Prednisolone", dose: "Active disease; lowest effective dose" },
      { name: "SLE: Mycophenolate mofetil", dose: "Lupus nephritis induction + maintenance; teratogenic" },
      { name: "SLE: Cyclophosphamide IV (pulse)", dose: "Severe lupus nephritis class III/IV + CNS lupus" },
      { name: "SLE: Belimumab", dose: "Anti-BLyS; active SLE despite standard therapy; SC weekly or IV monthly" },
      { name: "SSc: Nifedipine / Amlodipine", dose: "Raynaud's phenomenon; 1st line vasodilator" },
      { name: "SSc: Iloprost IV", dose: "Severe Raynaud's / digital ulcers; prostacyclin analogue" },
      { name: "SSc: Bosentan / Sildenafil", dose: "Pulmonary arterial hypertension; endothelin antagonist / PDE5i" },
      { name: "SSc: ACE inhibitors", dose: "Scleroderma renal crisis — IMMEDIATE; life-saving" },
      { name: "SSc: Methotrexate / MMF", dose: "Skin thickening; ILD maintenance" }
    ], tests: [
      { name: "ANA (SLE)", note: "99% sensitive; best screening test" },
      { name: "Anti-dsDNA (SLE)", note: "Highly specific; correlates with disease activity; ↑ in flare" },
      { name: "Anti-Smith (SLE)", note: "Most specific (>99%); 30% sensitive" },
      { name: "Complement C3, C4 (SLE)", note: "Low in active SLE (immune complex consumption)" },
      { name: "Antiphospholipid antibodies (SLE)", note: "Lupus anticoagulant, anticardiolipin, anti-β2GPI — antiphospholipid syndrome" },
      { name: "Anti-Scl-70 (topoisomerase I) (SSc)", note: "Diffuse cutaneous SSc + ILD association" },
      { name: "Anti-centromere antibody (SSc)", note: "Limited cutaneous SSc (CREST syndrome); lower ILD risk, higher PAH risk" },
      { name: "Anti-RNA polymerase III (SSc)", note: "Diffuse SSc; scleroderma renal crisis risk" },
      { name: "Echocardiography (SSc)", note: "Pulmonary hypertension screening (annual)" },
      { name: "HRCT chest + PFTs (SSc)", note: "ILD detection; restrict pattern" },
      { name: "Nailfold capillaroscopy (SSc)", note: "Specific for SSc; abnormal capillary loops, dropout" }
    ] },
  "Hypothyroidism (incl. Myxoedema, Cretinism)": { gm: [
      "Levothyroxine replacement lifelong",
      "Cretinism (congenital hypothyroidism): start levothyroxine IMMEDIATELY after diagnosis (neonatal screening); delay causes irreversible intellectual disability",
      "Myxoedema coma (medical emergency): IV T3 (liothyronine) + IV hydrocortisone + supportive care (rewarming, O₂, IV fluids)",
      "Elderly patients: start low-dose levothyroxine (25 µg/day), increase slowly (cardiac risk)",
      "Ischaemic heart disease: start 12.5–25 µg/day; increase cautiously",
      "Monitor: TSH 6–8 weeks after starting or dose change; then annually once stable"
    ], pm: [
      { name: "Levothyroxine (T4)", dose: "1.6 µg/kg/day (typical adult 100–150 µg/day); target TSH 0.5–2.5 mIU/L; take on empty stomach" },
      { name: "Liothyronine (T3) IV", dose: "Myxoedema coma: 5–20 µg IV slowly; T3 faster onset than T4" },
      { name: "IV Hydrocortisone", dose: "Myxoedema coma: empirical (co-existent adrenal insufficiency)" }
    ], tests: [
      { name: "TSH", note: "BEST initial screening test; elevated TSH in primary hypothyroidism" },
      { name: "Free T4 (FT4)", note: "Low in overt hypothyroidism; normal in subclinical (TSH↑ only)" },
      { name: "Free T3 (FT3)", note: "May be normal until late; low in severe hypothyroidism" },
      { name: "Anti-TPO antibodies (anti-thyroid peroxidase)", note: "Hashimoto's thyroiditis (most common cause in iodine-sufficient areas)" },
      { name: "Anti-thyroglobulin antibodies", note: "Hashimoto's; less specific than anti-TPO" },
      { name: "Thyroid USS", note: "Hashimoto's: heterogeneous, hypoechoic gland; goitre assessment" },
      { name: "TFTs in neonatal screening (heel prick)", note: "TSH on day 5–8; congenital hypothyroidism — universal screening" }
    ] },
  "Hyperthyroidism (incl. Graves' Disease)": { gm: [
      "Three options: antithyroid drugs, radioiodine (¹³¹I), or surgery — chosen based on cause, age, goitre size, patient preference",
      "Graves' disease: antithyroid drugs 1st (18 months); relapse → radioiodine or thyroidectomy",
      "Radioiodine: contraindicated in pregnancy, active Graves' ophthalmopathy",
      "Thyroidectomy: large goitre, compressive symptoms, suspicious nodule, radioiodine contraindicated",
      "Thyroid storm: medical emergency — propylthiouracil (blocks new hormone AND peripheral conversion), propranolol (symptoms), Lugol's iodine (blocks release), hydrocortisone (blocks conversion), treat precipitant",
      "Graves' ophthalmopathy: selenium (mild); IV methylprednisolone (active moderate–severe); orbital decompression"
    ], pm: [
      { name: "Propylthiouracil (PTU)", dose: "1st line in pregnancy (1st trimester); thyroid storm; blocks T4→T3 conversion" },
      { name: "Carbimazole", dose: "1st line antithyroid drug (UK); 20–40 mg/day; titrate or block-replace" },
      { name: "Propranolol", dose: "Symptom control (tremor, tachycardia, anxiety); until euthyroid" },
      { name: "Radioiodine (¹³¹I)", dose: "Definitive treatment for Graves' / toxic nodular disease; avoid pregnancy ≥6 months" },
      { name: "Lugol's iodine", dose: "Pre-operative (reduce vascularity); thyroid storm" },
      { name: "Potassium perchlorate", dose: "Amiodarone-induced thyrotoxicosis; blocks iodine uptake" },
      { name: "IV Hydrocortisone", dose: "Thyroid storm: blocks T4→T3 conversion; adrenal support" }
    ], tests: [
      { name: "TSH", note: "Suppressed (<0.1 mIU/L) in all overt hyperthyroidism" },
      { name: "Free T4 + Free T3", note: "Elevated; T3-toxicosis: FT3↑ with normal FT4" },
      { name: "TSH receptor antibodies (TRAb / TSI)", note: "Graves' disease specific; also monitor pregnancy (risk to fetus)" },
      { name: "Anti-TPO antibodies", note: "Elevated in Graves' and Hashimoto's" },
      { name: "Thyroid isotope scan (Tc-99m / I-123)", note: "Graves': diffuse uptake; toxic adenoma: hot nodule; thyroiditis: low uptake" },
      { name: "Thyroid USS", note: "Nodule characterisation; hypervascular in Graves' (colour Doppler)" },
      { name: "TFTs in thyroid storm", note: "FT4/FT3 extremely elevated; TSH suppressed" }
    ] },
  "Cushing's Syndrome": { gm: [
      "Identify cause: exogenous steroids (most common), pituitary ACTH adenoma (Cushing's disease), adrenal tumour, ectopic ACTH",
      "Exogenous steroids: gradual reduction/withdrawal (risk of adrenal crisis)",
      "Pituitary adenoma (Cushing's disease): transsphenoidal adenomectomy (1st line surgery)",
      "Adrenal adenoma: laparoscopic adrenalectomy",
      "Ectopic ACTH: treat primary tumour; bilateral adrenalectomy if source unresectable",
      "Peri-operative hydrocortisone cover (adrenal insufficiency post-surgery)",
      "Post-operative cortisol replacement until HPA axis recovers (months–years)"
    ], pm: [
      { name: "Metyrapone", dose: "Blocks cortisol synthesis (11β-hydroxylase inhibitor); pre-operative control; UK most commonly used" },
      { name: "Ketoconazole", dose: "Blocks multiple steroidogenic enzymes; pre-operative; hepatotoxic" },
      { name: "Mifepristone", dose: "Glucocorticoid receptor antagonist; ectopic Cushing's / inoperable" },
      { name: "Pasireotide", dose: "Somatostatin analogue; residual/recurrent Cushing's disease post-surgery" },
      { name: "Cabergoline", dose: "Dopamine agonist; adjunct for Cushing's disease (30% response)" },
      { name: "Hydrocortisone replacement", dose: "Post-adrenalectomy / post-pituitary surgery; lifelong if bilateral adrenalectomy" }
    ], tests: [
      { name: "24-hour urinary free cortisol (UFC)", note: "Elevated (>3× ULN diagnostic); collect ×2" },
      { name: "Late-night salivary cortisol (×2)", note: "Loss of diurnal rhythm; >97th percentile = positive; good sensitivity" },
      { name: "Low-dose dexamethasone suppression test (1 mg overnight)", note: "Screening: cortisol <50 nmol/L = normal suppression; >138 nmol/L = Cushing's" },
      { name: "Plasma ACTH", note: "ACTH-dependent (pituitary/ectopic): ACTH high; ACTH-independent (adrenal): ACTH suppressed" },
      { name: "High-dose dexamethasone suppression test", note: "Cushing's disease: cortisol suppresses >50%; ectopic ACTH: no suppression" },
      { name: "CRH stimulation test", note: "Cushing's disease: exaggerated ACTH/cortisol response; ectopic: no response" },
      { name: "MRI pituitary (gadolinium)", note: "Pituitary adenoma (often <5 mm microadenoma)" },
      { name: "CT/MRI abdomen + CT chest", note: "Adrenal tumour or ectopic ACTH source (lung, pancreas)" },
      { name: "IPSS (Inferior Petrosal Sinus Sampling)", note: "GOLD STANDARD to distinguish pituitary vs ectopic ACTH; gradient >3:1 = pituitary" }
    ] },
  "Addison's Disease (Primary Adrenal Insufficiency)": { gm: [
      "Lifelong glucocorticoid and mineralocorticoid replacement",
      "Patient education: sick-day rules (double/triple hydrocortisone dose during illness, fever, surgery)",
      "Steroid emergency card/medical alert bracelet",
      "Adrenal crisis: medical emergency — IV hydrocortisone 100 mg STAT + IV saline + IV glucose",
      "Avoid dehydration; adequate salt intake",
      "Pre-operative hydrocortisone cover for all procedures under general anaesthetic",
      "Treat underlying cause (autoimmune, TB adrenalitis, adrenal haemorrhage)"
    ], pm: [
      { name: "Hydrocortisone", dose: "15–25 mg/day in 2–3 divided doses (morning heaviest); glucocorticoid replacement" },
      { name: "Fludrocortisone", dose: "50–200 µg/day; mineralocorticoid replacement; monitor BP + electrolytes" },
      { name: "DHEA (dehydroepiandrosterone)", dose: "25–50 mg/day; consider in women with persistent fatigue and low wellbeing" },
      { name: "IV Hydrocortisone 100 mg", dose: "Adrenal crisis: STAT IV bolus then 200 mg/24h infusion or 50 mg QDS IM" },
      { name: "IV 0.9% Saline + IV Dextrose", dose: "Adrenal crisis: volume replacement + hypoglycaemia correction" }
    ], tests: [
      { name: "Short Synacthen test (SST)", note: "GOLD STANDARD: cortisol <500 nmol/L at 30 or 60 min = adrenal insufficiency" },
      { name: "Serum cortisol (09:00)", note: "<100 nmol/L = adrenal insufficiency likely; >500 nmol/L = excluded" },
      { name: "Plasma ACTH", note: "Elevated (>100 pg/mL) in primary adrenal insufficiency; low in secondary" },
      { name: "Anti-adrenal (21-hydroxylase) antibodies", note: "Autoimmune Addison's; 80–90% of cases in developed countries" },
      { name: "U&E: Hyponatraemia + Hyperkalaemia", note: "Mineralocorticoid deficiency; combined with hypoglycaemia" },
      { name: "CT adrenals", note: "Bilateral adrenal enlargement (TB, haemorrhage, metastases); small in autoimmune" },
      { name: "TFTs (exclude polyglandular syndrome)", note: "Autoimmune thyroid disease co-exists in Schmidt syndrome" }
    ] },
  "Parkinsonism / Parkinson's Disease": { gm: [
      "Multidisciplinary approach: neurologist, physiotherapist, OT, speech therapist, dietitian",
      "Physiotherapy: gait training, balance exercises, falls prevention",
      "Speech and language therapy: hypophonia, dysphagia",
      "Occupational therapy: activities of daily living, home adaptations",
      "Deep brain stimulation (DBS): subthalamic nucleus — significant motor fluctuations/dyskinesias on levodopa",
      "Dopaminergic medication should not be stopped abruptly (risk of neuroleptic malignant-like syndrome)",
      "Avoid metoclopramide, prochlorperazine (dopamine antagonists — worsen Parkinsonism)"
    ], pm: [
      { name: "Levodopa + Carbidopa (co-careldopa)", dose: "Most effective; gold standard for motor symptoms; carbidopa prevents peripheral conversion" },
      { name: "Levodopa + Benserazide (co-beneldopa)", dose: "Alternative combination preparation" },
      { name: "Dopamine agonists (Pramipexole, Ropinirole, Rotigotine patch)", dose: "Early PD (delay motor fluctuations); also adjunct to levodopa" },
      { name: "MAO-B inhibitors (Selegiline, Rasagiline)", dose: "Early PD; neuroprotective; adjunct" },
      { name: "COMT inhibitors (Entacapone)", dose: "Motor fluctuations on levodopa; add to levodopa to extend effect" },
      { name: "Amantadine", dose: "Early mild symptoms; also treats levodopa-induced dyskinesias" },
      { name: "Anticholinergics (Procyclidine / Trihexyphenidyl)", dose: "Tremor in young patients; avoid in elderly (confusion)" }
    ], tests: [
      { name: "Clinical diagnosis (cardinal features)", note: "Bradykinesia + at least 1 of: rigidity, rest tremor (3–6 Hz), postural instability" },
      { name: "DaTscan (¹²³I-Ioflupane SPECT)", note: "Distinguishes PD/DLB (reduced DAT) from essential tremor / drug-induced Parkinsonism (normal); not routine" },
      { name: "MRI brain", note: "Exclude secondary causes: vascular, hydrocephalus, space-occupying lesion; normal in idiopathic PD" },
      { name: "UPDRS (Unified Parkinson's Disease Rating Scale)", note: "Monitor disease severity and treatment response" },
      { name: "Response to levodopa trial", note: ">30% improvement = supports PD diagnosis" }
    ] },
  "Cerebrovascular Disease (Stroke / TIA)": { gm: [
      "Ischaemic stroke: thrombolysis (IV alteplase) within 4.5 hours of onset if eligible",
      "Mechanical thrombectomy: large vessel occlusion within 24h at specialist centres",
      "TIA: immediate dual antiplatelet (aspirin + clopidogrel) × 21 days then single agent; treat urgently (ABCD² score)",
      "Stroke unit admission: proven to reduce mortality and disability",
      "Secondary prevention: antiplatelets (non-cardioembolic), anticoagulation (AF-related)",
      "Blood pressure control; statin therapy; lifestyle modification",
      "Haemorrhagic stroke: reverse anticoagulation; BP control; neurosurgery if indicated",
      "Physiotherapy, speech therapy, OT: early rehabilitation"
    ], pm: [
      { name: "Alteplase (IV tPA)", dose: "0.9 mg/kg (max 90 mg); within 4.5h of ischaemic stroke; CT must exclude haemorrhage first" },
      { name: "Aspirin 300 mg", dose: "Immediately after ischaemic stroke (once haemorrhage excluded); 2 weeks then 75 mg long-term" },
      { name: "Clopidogrel 75 mg", dose: "Long-term antiplatelet; superior to aspirin alone in non-cardioembolic stroke" },
      { name: "Warfarin / DOACs (Apixaban / Rivaroxaban)", dose: "AF-related cardioembolic stroke; start 2–14 days post-stroke depending on infarct size" },
      { name: "Atorvastatin 80 mg", dose: "All ischaemic stroke/TIA; high-intensity statin regardless of cholesterol" },
      { name: "Antihypertensives", dose: "Target <130/80 mmHg long-term; avoid over-aggressive reduction in acute phase" }
    ], tests: [
      { name: "CT brain (non-contrast)", note: "URGENT: exclude haemorrhage before thrombolysis; haemorrhage hyperdense; early ischaemia subtle" },
      { name: "MRI brain (DWI/ADC)", note: "Most sensitive for acute ischaemia within hours; DWI bright = acute infarct" },
      { name: "CT angiography (CTA)", note: "Large vessel occlusion; thrombectomy planning; also carotid stenosis" },
      { name: "Carotid Doppler Ultrasound", note: "Carotid stenosis (TIA/stroke); >70% stenosis = endarterectomy" },
      { name: "ECG + 24h Holter monitor", note: "AF detection (cardioembolic source)" },
      { name: "Echocardiogram (TTE/TOE)", note: "Intracardiac thrombus, valvular disease, PFO" },
      { name: "FBC, Clotting, Cholesterol, HbA1c, Glucose", note: "Risk factor assessment" },
      { name: "NIHSS score", note: "Stroke severity quantification; guides treatment decision" }
    ] },
  "Peripheral Neuropathy": { gm: [
      "Identify and treat underlying cause (DM, alcohol, vitamin deficiency, drugs, autoimmune)",
      "Diabetic neuropathy: optimal glycaemic control slows progression",
      "Alcohol-related: thiamine + B-complex vitamins; alcohol cessation",
      "Guillain-Barré syndrome (GBS): monitor respiratory function (FVC); ITU if FVC <1L or declining",
      "GBS: IVIG or plasma exchange (equally effective); do NOT use steroids (worsens GBS)",
      "CIDP: IVIG, plasma exchange, or steroids (unlike GBS, steroids help in CIDP)",
      "Neuropathic pain management; falls prevention; foot care in diabetic neuropathy"
    ], pm: [
      { name: "IVIG (IV immunoglobulin)", dose: "GBS: 0.4 g/kg/day × 5 days; CIDP: 2 g/kg over 2–5 days" },
      { name: "Plasma exchange", dose: "GBS (equally effective to IVIG); CIDP" },
      { name: "Prednisolone", dose: "CIDP (not GBS); vasculitis neuropathy; multifocal motor neuropathy" },
      { name: "Pregabalin / Gabapentin", dose: "Neuropathic pain; 1st/2nd line" },
      { name: "Amitriptyline", dose: "Neuropathic pain; diabetic neuropathy; 10–75 mg nocte" },
      { name: "Duloxetine", dose: "Diabetic peripheral neuropathy pain; also depression" },
      { name: "Thiamine (B1) IV then oral", dose: "Alcohol-related neuropathy; Wernicke's encephalopathy prevention/treatment" },
      { name: "B12 (IM cyanocobalamin / hydroxocobalamin)", dose: "B12 deficiency neuropathy; IM if malabsorption" }
    ], tests: [
      { name: "Nerve conduction studies (NCS) + EMG", note: "GOLD STANDARD: demyelinating (↓velocity, prolonged latency) vs axonal (↓amplitude); localise lesion" },
      { name: "Fasting glucose / HbA1c", note: "Diabetic neuropathy (most common cause globally)" },
      { name: "B12, Folate, Thiamine", note: "Nutritional deficiency neuropathy" },
      { name: "TFTs", note: "Hypothyroid neuropathy" },
      { name: "Protein electrophoresis (SPEP + UPEP)", note: "Paraprotein-associated neuropathy (MGUS, myeloma)" },
      { name: "Anti-ganglioside antibodies (Anti-GQ1b, Anti-GM1)", note: "GBS variants (Miller Fisher: anti-GQ1b); MMN: anti-GM1" },
      { name: "CSF analysis", note: "GBS: albuminocytological dissociation (↑↑protein, normal cells)" },
      { name: "Nerve biopsy (sural nerve)", note: "Vasculitic neuropathy; amyloidosis; diagnosis when NCS inconclusive" }
    ] },
  "Myasthenia Gravis": { gm: [
      "CT chest: all patients — thymoma present in 10–15%; thymectomy beneficial even without thymoma in generalised MG",
      "Thymectomy: all patients with thymoma; consider in generalised seropositive MG <60 years",
      "Myasthenic crisis: ICU, intubation if FVC <1L; IVIG or plasma exchange",
      "Avoid drugs that worsen MG: aminoglycosides, quinolones, magnesium, beta-blockers, penicillamine, chloroquine",
      "Pregnancy: MG may worsen in 1st trimester/post-partum; neonatal MG (transplacental antibodies)"
    ], pm: [
      { name: "Pyridostigmine (Mestinon)", dose: "1st line symptomatic; 30–90 mg QDS–6×/day; acetylcholinesterase inhibitor" },
      { name: "Prednisolone", dose: "Immunosuppression; start low (20–25 mg/day) to avoid early worsening; titrate up" },
      { name: "Azathioprine", dose: "Steroid-sparing; 2–3 mg/kg/day; check TPMT; takes 6–18 months effect" },
      { name: "Mycophenolate mofetil", dose: "Alternative steroid-sparing agent" },
      { name: "Ciclosporin / Tacrolimus", dose: "Refractory MG" },
      { name: "Rituximab", dose: "MuSK antibody-positive MG; refractory AChR-positive MG" },
      { name: "Eculizumab", dose: "Complement inhibitor; refractory generalised AChR+ MG" },
      { name: "IVIG (2 g/kg over 5 days)", dose: "Myasthenic crisis; pre-operative; rapid deterioration" },
      { name: "Plasma exchange (PLEX)", dose: "Myasthenic crisis; rapid response; pre-thymectomy" }
    ], tests: [
      { name: "Anti-AChR antibodies", note: "85% sensitivity in generalised MG; 50% in ocular MG; most specific for MG" },
      { name: "Anti-MuSK antibodies", note: "10–15% of AChR-negative generalised MG; different clinical phenotype" },
      { name: "Anti-LRP4 antibodies", note: "Double-seronegative MG" },
      { name: "Tensilon (Edrophonium) test", note: "Short-acting AChE inhibitor; dramatic improvement in ptosis/diplopia = positive; now less used (cardiac risk)" },
      { name: "Repetitive nerve stimulation (RNS)", note: "Decrement >10% at 3 Hz = MG" },
      { name: "Single-fibre EMG (SFEMG)", note: "Most sensitive test (>95%); jitter + blocking; gold standard" },
      { name: "CT chest", note: "All MG patients; thymoma detection" },
      { name: "FVC monitoring", note: "Respiratory function; mandatory in generalised MG crisis" }
    ] },
  "Lymphoma (Hodgkin's & Non-Hodgkin's)": { gm: [
      "Ann Arbor staging I–IV guides treatment (I=single node, IV=extranodal)",
      "Hodgkin Lymphoma (HL): highly curable; chemotherapy ± radiotherapy",
      "Follicular NHL (low grade, asymptomatic): 'Watch and wait'",
      "DLBCL (aggressive): R-CHOP; intent to cure",
      "H. pylori-positive gastric MALT: H. pylori eradication first (85% remission)",
      "Stem cell transplantation (autologous): relapsed/refractory lymphoma",
      "Allogeneic SCT: multiply relapsed; GvL effect",
      "Tumour lysis syndrome prophylaxis: allopurinol + IV fluids before chemotherapy"
    ], pm: [
      { name: "ABVD (HL)", dose: "Doxorubicin, Bleomycin, Vinblastine, Dacarbazine; standard HL treatment" },
      { name: "BEACOPPesc (HL)", dose: "Advanced HL; higher complete remission but more toxicity" },
      { name: "R-CHOP (DLBCL)", dose: "Rituximab + Cyclophosphamide, Doxorubicin, Vincristine, Prednisolone; 6 cycles" },
      { name: "R-CVP (Follicular NHL)", dose: "Rituximab + Cyclophosphamide, Vincristine, Prednisolone" },
      { name: "Rituximab maintenance", dose: "After induction in follicular NHL; 2-yearly SC" },
      { name: "Brentuximab vedotin", dose: "CD30-targeted antibody-drug conjugate; relapsed/refractory HL" },
      { name: "Pembrolizumab / Nivolumab", dose: "Relapsed/refractory classical HL; PD-1 inhibitors" },
      { name: "H. pylori eradication (MALT)", dose: "PPI + Clarithromycin + Amoxicillin × 14 days" }
    ], tests: [
      { name: "Lymph node biopsy (excisional)", note: "GOLD STANDARD: HL (RS cells: CD15+, CD30+, CD45-); NHL (various immunophenotypes)" },
      { name: "FDG-PET-CT", note: "Staging + response assessment (DLBCL, HL); interim PET after 2 cycles guides treatment" },
      { name: "Contrast CT chest/abdomen/pelvis", note: "Initial staging; NHL baseline" },
      { name: "Bone marrow biopsy (trephine)", note: "Stage IV assessment; high-grade NHL" },
      { name: "FBC, ESR, LDH, Albumin", note: "International Prognostic Index (IPI); ESR elevated in HL" },
      { name: "β2-microglobulin", note: "NHL prognostic marker" },
      { name: "FISH / cytogenetics", note: "MYC, BCL2, BCL6 rearrangements (double-hit lymphoma = worse prognosis)" },
      { name: "Uric acid, LDH, K⁺, Creatinine", note: "Tumour lysis syndrome monitoring pre/post chemo" }
    ] },
  "Anaemia (Iron Deficiency, B12/Folate, Haemolytic)": { gm: [
      "Identify and treat underlying cause first (bleeding, diet, malabsorption, haemolysis, chronic disease)",
      "Iron deficiency (IDA): investigate cause before treating; OGD/colonoscopy for GI blood loss in adults",
      "B12 deficiency: identify cause (pernicious anaemia, diet, malabsorption)",
      "Haemolytic anaemia: supportive; treat cause; folate supplementation",
      "Severe anaemia (Hb <7 g/dL or symptomatic): blood transfusion",
      "Sickle cell crisis: IV fluids, O₂, analgesia, antibiotics if infection; exchange transfusion if severe"
    ], pm: [
      { name: "Oral ferrous sulphate / ferrous fumarate", dose: "IDA: 200 mg TDS; for at least 3 months after Hb normalises to replenish stores" },
      { name: "IV iron (ferric carboxymaltose)", dose: "IDA: malabsorption, intolerance to oral, inflammatory bowel disease, post-bariatric" },
      { name: "Hydroxocobalamin IM", dose: "B12 deficiency: 1 mg IM 3× weekly × 2 weeks, then 3-monthly (if no dietary cause)" },
      { name: "Folic acid 5 mg/day", dose: "Folate deficiency; haemolytic anaemia (supplement ongoing); not given alone in B12 deficiency (masks B12 deficiency neuropathy)" },
      { name: "Prednisolone", dose: "Warm autoimmune haemolytic anaemia (AIHA): 1 mg/kg/day; 1st line" },
      { name: "Rituximab", dose: "Refractory AIHA; 2nd line" },
      { name: "Hydroxycarbamide (Hydroxyurea)", dose: "Sickle cell disease; ↑HbF production; reduces crises" },
      { name: "Erythropoietin (ESA)", dose: "Anaemia of chronic disease / CKD" }
    ], tests: [
      { name: "FBC + Blood film", note: "Microcytic hypochromic (IDA/thalassaemia); macrocytic (B12/folate); normochromic normocytic (chronic disease, haemolytic)" },
      { name: "Serum iron, TIBC, Transferrin saturation, Ferritin", note: "IDA: ↓ferritin (<12), ↓iron, ↑TIBC, ↓saturation; chronic disease: ↓iron, ↓TIBC, normal/↑ferritin" },
      { name: "Serum B12 + Folate", note: "Deficiency diagnosis; B12 <160 pg/mL = deficient" },
      { name: "Reticulocyte count", note: "Haemolytic: elevated; aplastic: low; treatment response: rises before Hb improves" },
      { name: "Coombs' test (DAT)", note: "WARM AIHA: IgG-coated RBCs; positive direct antiglobulin test" },
      { name: "Haemoglobin electrophoresis", note: "Thalassaemia, sickle cell disease, HbC" },
      { name: "Intrinsic factor antibodies + Parietal cell antibodies", note: "Pernicious anaemia (autoimmune B12 deficiency)" },
      { name: "LFTs, Bilirubin, LDH, Haptoglobin", note: "Haemolysis: ↑bilirubin (unconjugated), ↑LDH, ↓haptoglobin" }
    ] },
  "Pneumothorax": { gm: [
    "Confirm with CXR: >2 cm rim = large; <2 cm = small",
    "Small/primary spontaneous: high-flow O₂ 15 L/min; observe if asymptomatic; aspiration if symptomatic",
    "Large/tension: immediate needle decompression (2nd ICS mid-clavicular line) THEN chest drain",
    "Chest drain (intercostal): 4th/5th ICS anterior axillary line; connect to underwater seal",
    "Do NOT clamp chest drain",
    "Avoid air travel/diving until >6 weeks post full resolution",
    "Recurrent or bilateral: surgical pleurodesis (VATS)"
  ], pm: [
    { name: "High-flow O₂ (15 L/min)", dose: "Accelerates reabsorption of pleural air 4× faster than room air" },
    { name: "Needle aspiration (14–16G cannula)", dose: "2nd ICS MCL; 1st line for primary spontaneous PTX; aspirate up to 2.5L" },
    { name: "Chest drain (Seldinger technique)", dose: "4th/5th ICS AAL; for large/tension/failed aspiration" },
    { name: "Entonox (if pain)", dose: "Analgesia during drain insertion; AVOID in PTX if using N₂O" }
  ], tests: [
    { name: "CXR (erect, PA)", note: "Visible lung edge; size: <2 cm small, ≥2 cm large; absence of lung markings peripherally" },
    { name: "ABG", note: "Hypoxia (↓pO₂); may show respiratory alkalosis (tachypnoea); important in bilateral/tension" },
    { name: "CT chest", note: "Gold standard for size; distinguishes from bullous COPD; bilateral assessment" },
    { name: "USS chest (bedside)", note: "Emergency: absent lung sliding = pneumothorax; rapid bedside tool in ICU/ED" }
  ]},
  "Diffuse Parenchymal Lung Disease (DPLD)": { gm: [
    "Refer to specialist ILD clinic; MDT review",
    "Stop causative agent if drug-induced or occupational exposure",
    "Pulmonary rehabilitation programme",
    "Supplemental O₂ for hypoxaemia (SpO₂ <88% at rest or on exertion)",
    "Annual influenza + pneumococcal vaccination",
    "Lung transplantation: end-stage ILD (FVC <50% or rapidly declining)",
    "Antifibrotic therapy for IPF: pirfenidone or nintedanib"
  ], pm: [
    { name: "Pirfenidone", dose: "IPF: 2403 mg/day in 3 divided doses; antifibrotic; slows FVC decline" },
    { name: "Nintedanib", dose: "IPF and progressive fibrotic ILD; 150 mg BD; tyrosine kinase inhibitor" },
    { name: "Prednisolone", dose: "Non-IPF ILD (NSIP, COP, sarcoidosis, CTD-ILD); 0.5 mg/kg/day tapering" },
    { name: "Azathioprine / MMF", dose: "Steroid-sparing in CTD-ILD, NSIP" },
    { name: "Rituximab", dose: "CTD-ILD (especially antisynthetase/anti-MDA5); refractory cases" },
    { name: "Sildenafil", dose: "Pulmonary hypertension complicating ILD" }
  ], tests: [
    { name: "HRCT chest (expiratory views)", note: "GOLD STANDARD: UIP pattern (honeycombing + traction bronchiectasis) = IPF; GGO dominant = NSIP/COP" },
    { name: "Pulmonary function tests (spirometry + DLCO)", note: "Restrictive pattern: ↓FVC, ↓TLC, normal/↑FEV1/FVC; ↓DLCO = gas transfer impairment" },
    { name: "Bronchoscopy + BAL", note: "Cell differentials: lymphocytosis (HP, sarcoid, COP); eosinophilia (eosinophilic ILD)" },
    { name: "Surgical lung biopsy (VATS)", note: "When HRCT non-diagnostic; histological pattern determines prognosis" },
    { name: "ANA, anti-dsDNA, anti-Scl70, anti-Jo-1, ANCA", note: "Screen for CTD as underlying cause" },
    { name: "6-minute walk test", note: "Functional capacity; desaturation >4% = significant disease" }
  ]},
  "Superior Vena Cava Obstruction": { gm: [
    "Urgent assessment — can be life-threatening if tracheal compression",
    "Most common cause: bronchial carcinoma (70%); lymphoma (15%)",
    "Radiotherapy: rapid relief in lymphoma and SCLC",
    "Chemotherapy: SCLC (highly chemosensitive)",
    "SVC stenting (endovascular): fastest relief of obstruction",
    "Dexamethasone: reduce peri-tumour oedema",
    "Avoid IV lines, BP measurement in upper limbs",
    "Anticoagulation if thrombotic cause"
  ], pm: [
    { name: "Dexamethasone 8 mg BD", dose: "Reduce tumour oedema; rapid symptomatic relief while awaiting definitive treatment" },
    { name: "SVC stent (endovascular)", dose: "Fastest decompression; 90%+ success rate; consider before histological diagnosis if severe" },
    { name: "Diuretics (furosemide)", dose: "Symptomatic oedema relief; use cautiously (risk of hypovolaemia)" }
  ], tests: [
    { name: "CXR", note: "Superior mediastinal widening; pleural effusion; tracheal deviation" },
    { name: "CT chest with contrast (venography)", note: "BEST: defines level + cause of obstruction; collateral vessel mapping" },
    { name: "Bronchoscopy + biopsy / CT-guided biopsy", note: "Histological diagnosis before treatment (except emergency)" },
    { name: "Sputum cytology", note: "Central tumour; may give diagnosis non-invasively" }
  ]},
  "Primary Biliary Cirrhosis": { gm: [
    "Ursodeoxycholic acid (UDCA) 13–15 mg/kg/day: slows progression, improves biochemistry",
    "Treat pruritus: cholestyramine 1st line; rifampicin 2nd line; naltrexone 3rd line",
    "Fat-soluble vitamin supplementation (A, D, E, K)",
    "Calcium + Vitamin D: osteoporosis prevention (high risk in PBC)",
    "Liver transplantation: end-stage disease, intractable pruritus, or bilirubin >100",
    "Screen for complications: oesophageal varices, HCC (6-monthly USS+AFP)"
  ], pm: [
    { name: "Ursodeoxycholic acid (UDCA)", dose: "13–15 mg/kg/day; 1st line; improves LFTs and survival" },
    { name: "Obeticholic acid", dose: "Inadequate response to UDCA; FXR agonist; 5–10 mg/day" },
    { name: "Cholestyramine 4 g QDS", dose: "Pruritus 1st line; bile acid sequestrant; take 2h apart from other medications" },
    { name: "Rifampicin 150 mg BD", dose: "Pruritus 2nd line; induces CYP; monitor LFTs" },
    { name: "Naltrexone 12.5–50 mg", dose: "Pruritus 3rd line; opioid antagonist" }
  ], tests: [
    { name: "Anti-mitochondrial antibody (AMA M2)", note: "DIAGNOSTIC: 95% sensitive and specific for PBC; titre >1:40" },
    { name: "LFTs: ↑↑ALP + ↑GGT; ↑Bilirubin (late)", note: "Cholestatic pattern; ALP may be 10× normal" },
    { name: "Serum IgM", note: "Markedly elevated in PBC; helps differentiate from PSC" },
    { name: "USS abdomen", note: "Exclude biliary obstruction; liver texture; splenomegaly" },
    { name: "Liver biopsy", note: "Staging (Ludwig I-IV); biliary epithelial granulomas = pathognomonic (florid duct lesion)" },
    { name: "Anti-nuclear antibody (anti-SP100, anti-GP210)", note: "AMA-negative PBC; worse prognosis markers" }
  ]},
  "Budd-Chiari Syndrome": { gm: [
    "Anticoagulation: start immediately (LMWH then warfarin) if thrombotic cause",
    "Treat underlying cause: haematological malignancy, JAK2 mutation (polycythaemia vera), OCP",
    "TIPS (transjugular intrahepatic portosystemic shunt): 1st line for progressive disease",
    "Surgical portosystemic shunt: if TIPS fails",
    "Liver transplantation: acute liver failure or TIPS failure",
    "Manage ascites with diuretics + paracentesis",
    "Investigate for prothrombotic conditions"
  ], pm: [
    { name: "LMWH (enoxaparin)", dose: "Acute phase anticoagulation; therapeutic dose" },
    { name: "Warfarin", dose: "Long-term anticoagulation; target INR 2–3; lifelong in most cases" },
    { name: "Spironolactone ± furosemide", dose: "Ascites management" },
    { name: "Thrombolysis (tPA)", dose: "Acute complete thrombosis <72h; catheter-directed thrombolysis" }
  ], tests: [
    { name: "Doppler USS hepatic veins", note: "1st LINE: absent/reversed hepatic vein flow; caudate lobe hypertrophy (separate drainage)" },
    { name: "CT/MRI abdomen with contrast", note: "Hepatic vein thrombosis; caudate lobe hypertrophy; patchy enhancement (mosaic pattern)" },
    { name: "JAK2 V617F mutation", note: "Present in 40-50%; underlying myeloproliferative disorder" },
    { name: "Thrombophilia screen", note: "Factor V Leiden, prothrombin mutation, antiphospholipid antibodies, protein C/S" },
    { name: "Liver biopsy", note: "Centrilobular congestion + necrosis; not required for diagnosis" }
  ]},
  "Hepatoma (Hepatocellular Carcinoma)": { gm: [
    "Barcelona Clinic Liver Cancer (BCLC) staging guides treatment",
    "Surgical resection: BCLC 0/A, preserved liver function, no portal hypertension",
    "Liver transplantation: Milan criteria (1 lesion ≤5cm or 3 lesions ≤3cm each, no vascular invasion)",
    "Radiofrequency ablation (RFA): small tumours ≤3cm not suitable for surgery",
    "Transarterial chemoembolisation (TACE): intermediate stage (BCLC B)",
    "Sorafenib / Lenvatinib: advanced stage (BCLC C); systemic therapy",
    "Atezolizumab + Bevacizumab: 1st line advanced HCC (superior to sorafenib)",
    "Surveillance: AFP + USS every 6 months in cirrhosis/HBV patients"
  ], pm: [
    { name: "Sorafenib", dose: "400 mg BD; multikinase inhibitor; BCLC C advanced HCC" },
    { name: "Lenvatinib", dose: "Alternative 1st line; 8–12 mg OD based on weight" },
    { name: "Atezolizumab + Bevacizumab", dose: "Preferred 1st line advanced HCC; PD-L1 inhibitor + anti-VEGF" },
    { name: "Nivolumab / Pembrolizumab", dose: "2nd line; checkpoint inhibitor" }
  ], tests: [
    { name: "AFP (alpha-fetoprotein)", note: ">400 ng/mL highly suggestive; used in surveillance; not diagnostic alone" },
    { name: "Triphasic CT abdomen / MRI liver", note: "DIAGNOSTIC: arterial enhancement + portal venous washout = HCC; LI-RADS scoring" },
    { name: "USS abdomen", note: "Surveillance tool; 6-monthly in at-risk patients" },
    { name: "Liver biopsy", note: "Only if imaging inconclusive; risk of seeding; usually avoided if clinical diagnosis clear" },
    { name: "Child-Pugh / MELD score", note: "Assess liver function reserve; determines treatment eligibility" }
  ]},
  "Ileocecal Tuberculosis": { gm: [
    "4-drug anti-TB therapy (RIPE) for 2 months, then 2-drug (RI) for 4 months (total 6 months)",
    "Surgery if: obstruction, perforation, fistula, abscess, failed medical treatment",
    "Nutritional support: high-protein, high-calorie diet",
    "Notify to public health; contact tracing",
    "Distinguish from Crohn's disease (colonoscopy + biopsy essential)",
    "Monitor LFTs during ATT"
  ], pm: [
    { name: "Rifampicin + Isoniazid + Pyrazinamide + Ethambutol", dose: "Initial 2 months (RIPE); then Rifampicin + Isoniazid × 4 months" },
    { name: "Pyridoxine (B6)", dose: "Prophylaxis against INH-induced peripheral neuropathy" },
    { name: "Prednisolone", dose: "Adjunct if large inflammatory mass or obstruction risk" }
  ], tests: [
    { name: "Colonoscopy + biopsy", note: "GOLD STANDARD: ileocecal involvement; skip lesions; biopsy shows granulomas with caseation" },
    { name: "Histology: caseating granulomas + AFB", note: "Pathognomonic for TB; distinguishes from Crohn's (non-caseating granulomas)" },
    { name: "Mantoux / IGRA", note: "Positive in most cases; IGRA more specific" },
    { name: "Chest X-ray", note: "Concurrent pulmonary TB in ~50%" },
    { name: "CT abdomen", note: "Mural thickening of ileocaecal junction; lymphadenopathy (often necrotic centrally)" },
    { name: "Sputum AFB smear + culture", note: "If pulmonary TB suspected concurrently" }
  ]},
  "Polycystic Kidney Disease": { gm: [
    "Blood pressure control (<130/80): ACEi or ARBs 1st line (slow progression)",
    "Tolvaptan: vasopressin receptor antagonist; slows cyst growth in rapidly progressive ADPKD",
    "Adequate hydration (reduces ADH-driven cyst growth)",
    "Avoid nephrotoxins; avoid contact sports (risk of cyst rupture)",
    "Screen and treat UTI aggressively (can be recurrent, difficult to treat)",
    "Renal replacement therapy when ESRD reached",
    "Screen for intracranial aneurysm if family history of SAH (MRA brain)",
    "Genetic counselling"
  ], pm: [
    { name: "Tolvaptan (Jinarc)", dose: "Rapidly progressive ADPKD (aged 18–50, eGFR >25); titrate 45–120 mg/day; monitor LFTs (hepatotoxicity)" },
    { name: "ACE inhibitors / ARBs", dose: "BP control 1st line; renoprotective; target <130/80" },
    { name: "Analgesics (paracetamol)", dose: "Cyst pain; AVOID NSAIDs (nephrotoxic)" },
    { name: "Antibiotics (fluoroquinolone)", dose: "Cyst infection: ciprofloxacin penetrates cysts; treat for 4–6 weeks" }
  ], tests: [
    { name: "USS kidneys", note: "DIAGNOSTIC in most cases: multiple bilateral cysts; enlarged kidneys; Ravine criteria for diagnosis by age" },
    { name: "MRI kidneys (total kidney volume)", note: "TKV predicts progression; used to select patients for tolvaptan" },
    { name: "UPCR / eGFR", note: "Monitor renal function; CKD staging" },
    { name: "PKD1/PKD2 gene testing", note: "Diagnostic uncertainty; younger patients; living related donor screening" },
    { name: "MRA brain", note: "Screen for intracranial aneurysm if FH of SAH or prior aneurysm" }
  ]},
  "Idiopathic Thrombocytopenic Purpura (ITP)": { gm: [
    "Asymptomatic + platelets >30: observe, no treatment needed",
    "Symptoms OR platelets <20-30: treat",
    "Avoid NSAIDs, aspirin, IM injections",
    "Splenectomy: 2nd line; >80% achieve remission; vaccinate against encapsulated organisms before (pneumococcal, Hib, meningococcal)",
    "Emergency (platelet <5 or active bleeding): IVIG + high dose steroids + platelet transfusion"
  ], pm: [
    { name: "Prednisolone 1 mg/kg/day", dose: "1st line; taper over 6–8 weeks; most respond within 2 weeks" },
    { name: "IVIG 1–2 g/kg", dose: "Rapid rise in platelets (24–72h); pre-surgery, emergency, pregnancy; temporary effect" },
    { name: "Anti-D immunoglobulin", dose: "RhD+ non-splenectomised; alternative to IVIG; cheaper" },
    { name: "Rituximab", dose: "Refractory ITP; 2nd line before splenectomy; 60% response" },
    { name: "Thrombopoietin receptor agonists (Eltrombopag / Romiplostim)", dose: "Chronic refractory ITP; stimulate platelet production" },
    { name: "Dexamethasone 40 mg/day × 4 days", dose: "High-dose pulse; alternative to prednisolone; higher initial response" }
  ], tests: [
    { name: "FBC + peripheral blood film", note: "Isolated thrombocytopenia; normal RBC + WBC morphology; large platelets on film" },
    { name: "Bone marrow biopsy", note: "Increased megakaryocytes; done if diagnosis uncertain, age >60, or pre-splenectomy" },
    { name: "H. pylori testing (UBT or stool antigen)", note: "Eradication improves platelet count in ~50% of H. pylori-positive ITP" },
    { name: "ANA, anti-dsDNA", note: "Exclude SLE (secondary ITP)" },
    { name: "HIV + Hepatitis C serology", note: "Secondary causes of thrombocytopenia" }
  ]},
  "Hemophilia": { gm: [
    "Comprehensive care at haemophilia treatment centre",
    "Prophylactic factor replacement: 3× weekly (A) or 2× weekly (B) from childhood — prevents joint damage",
    "Avoid IM injections, NSAIDs, aspirin",
    "DDAVP (desmopressin): mild haemophilia A only — releases stored vWF + FVIII",
    "Inhibitor development (15–30% of Haem A): bypass therapy (FEIBA, recombinant FVIIa)",
    "Gene therapy: available for haemophilia A and B (curative potential)",
    "Physiotherapy: joint rehabilitation after haemarthrosis",
    "Medical alert bracelet; avoid contact sports"
  ], pm: [
    { name: "Factor VIII concentrate (Haemophilia A)", dose: "Recombinant preferred; dose based on bleeding severity; 1 IU/kg raises FVIII by 2%" },
    { name: "Factor IX concentrate (Haemophilia B)", dose: "Recombinant preferred; 1 IU/kg raises FIX by 1%" },
    { name: "Desmopressin (DDAVP)", dose: "Mild Haem A: 0.3 mcg/kg IV/SC; stimulates FVIII release; not useful in severe disease" },
    { name: "Tranexamic acid", dose: "Adjunct; mucosal bleeding (dental, oral); inhibits fibrinolysis" },
    { name: "Emicizumab (Hemlibra)", dose: "Haemophilia A ± inhibitors; bispecific antibody; SC weekly/fortnightly/monthly" }
  ], tests: [
    { name: "APTT (prolonged)", note: "Screening test; corrects on mixing study (no inhibitor); does NOT correct with inhibitor" },
    { name: "Factor VIII assay", note: "Haem A: mild 5–40%, moderate 1–5%, severe <1%" },
    { name: "Factor IX assay", note: "Haem B: same severity classification as Haem A" },
    { name: "Bethesda assay (inhibitor level)", note: "Quantifies inhibitor titre; >5 BU = high responder" },
    { name: "PT, TT, fibrinogen", note: "Normal in haemophilia; helps differentiate from other coagulopathies" },
    { name: "Genetic testing", note: "Intron 22 inversion (45% of severe Haem A); carrier detection; prenatal diagnosis" }
  ]},
  "Chronic Myeloid Leukemia (CML)": { gm: [
    "BCR-ABL1 testing confirms diagnosis (Philadelphia chromosome t(9;22))",
    "Tyrosine kinase inhibitors (TKI): treatment of choice for all phases",
    "Aim: complete molecular response (CMR); 'treatment-free remission' possible after deep sustained response",
    "Monitor response: BCR-ABL1 quantitative PCR every 3 months",
    "Allogeneic stem cell transplant: TKI failure, blast crisis, T315I mutation",
    "Blast crisis management: intensive chemotherapy + TKI then SCT"
  ], pm: [
    { name: "Imatinib (Gleevec) 400 mg/day", dose: "1st generation TKI; 1st line; highly effective; resistance mutations develop in some" },
    { name: "Dasatinib 100 mg/day", dose: "2nd generation TKI; 1st or 2nd line; more potent; pulmonary HTN risk" },
    { name: "Nilotinib 300 mg BD", dose: "2nd generation TKI; 1st or 2nd line; cardiovascular risk" },
    { name: "Ponatinib", dose: "T315I mutation; 3rd generation TKI" },
    { name: "Hydroxyurea", dose: "Cytoreduction while awaiting TKI; NOT definitive treatment" }
  ], tests: [
    { name: "Peripheral blood film", note: "Leukocytosis with full myeloid spectrum; basophilia; low LAP score" },
    { name: "BCR-ABL1 PCR (quantitative)", note: "GOLD STANDARD for diagnosis and monitoring; detects t(9;22)" },
    { name: "Cytogenetics (karyotype)", note: "Philadelphia chromosome t(9;22)(q34;q11) in 95%" },
    { name: "FISH for BCR-ABL1", note: "Faster than karyotype; useful when cytogenetics fail" },
    { name: "Bone marrow biopsy", note: "Hypercellular marrow; determine phase (chronic/accelerated/blast)" },
    { name: "FBC, differential, uric acid", note: "Leukocytosis (50–500×10⁹/L); thrombocytosis common; splenomegaly on USS" }
  ]},
  "Chronic Lymphatic Leukemia (CLL)": { gm: [
    "Binet/Rai staging determines need for treatment",
    "Early stage (Binet A, B): Watch and wait if asymptomatic",
    "Active disease: treat if rapid lymphocyte doubling (<6 months), B symptoms, cytopenias, bulky disease",
    "Ibrutinib: 1st line preferred in most patients (BTK inhibitor)",
    "FCR (fludarabine + cyclophosphamide + rituximab): young fit patients with mutated IgHV",
    "Venetoclax + Obinutuzumab: fixed duration; excellent outcomes",
    "Allogeneic SCT: high-risk, del(17p) / TP53 mutation, multiply relapsed",
    "Infection prophylaxis: IVIg for recurrent infections due to hypogammaglobulinaemia"
  ], pm: [
    { name: "Ibrutinib 420 mg/day", dose: "BTK inhibitor; 1st line continuous therapy; atrial fibrillation risk" },
    { name: "Venetoclax + Obinutuzumab", dose: "Fixed 12-month regimen; BCL-2 inhibitor + anti-CD20; tumour lysis syndrome risk" },
    { name: "FCR (Fludarabine + Cyclophosphamide + Rituximab)", dose: "Young fit patients; mutated IgHV; 6 cycles" },
    { name: "Chlorambucil + Obinutuzumab / Rituximab", dose: "Elderly/unfit; gentler option" },
    { name: "Acalabrutinib", dose: "More selective BTK inhibitor; less AF than ibrutinib" }
  ], tests: [
    { name: "FBC + blood film", note: "Lymphocytosis >5×10⁹/L; smudge cells (Gumprecht cells) pathognomonic" },
    { name: "Immunophenotyping (flow cytometry)", note: "DIAGNOSTIC: CD5+, CD19+, CD23+, CD20(dim), CD200+; kappa/lambda restriction" },
    { name: "FISH panel (del 17p, del 11q, trisomy 12, del 13q)", note: "Prognostic; del(17p) = worst prognosis; ibrutinib preferred" },
    { name: "IgHV mutational status", note: "Mutated = better prognosis; unmutated = worse, benefits more from ibrutinib" },
    { name: "Serum immunoglobulins", note: "Hypogammaglobulinaemia common; recurrent infection risk" },
    { name: "Coombs' test", note: "AIHA complicates 5–10% of CLL" }
  ]},
  "Hereditary Hemolytic Anemia (Thalassemia / Sickle Cell)": { gm: [
    "Thalassaemia major: regular transfusion every 4-6 weeks to keep Hb >9-10 g/dL",
    "Iron chelation: start after 10-20 units of blood (serum ferritin >1000); desferrioxamine or deferasirox",
    "Hydroxyurea: sickle cell disease — increases HbF, reduces sickling",
    "Sickle cell crisis: IV fluids, O₂, opioid analgesia, antibiotics if infected",
    "Folic acid supplementation: all haemolytic anaemias",
    "Allogeneic SCT: curative option in thalassaemia major (young, HLA-matched donor)",
    "Gene therapy: emerging curative option",
    "Splenectomy: hypersplenism or transfusion refractory; vaccinate before"
  ], pm: [
    { name: "Regular packed RBC transfusion", dose: "Thalassaemia major; target Hb 9-10 g/dL pre-transfusion" },
    { name: "Desferrioxamine (deferoxamine)", dose: "SC/IV infusion 8-12h, 5-7 days/week; iron chelation" },
    { name: "Deferasirox", dose: "Oral iron chelator; 20-40 mg/kg/day; monitor renal function" },
    { name: "Hydroxyurea", dose: "Sickle cell: 15-35 mg/kg/day; increases HbF; reduces frequency of crises" },
    { name: "Folic acid 5 mg/day", dose: "All haemolytic anaemias; increased folate demand" },
    { name: "Voxelotor", dose: "Sickle cell: increases Hb-O₂ affinity; reduces sickling" },
    { name: "Crizanlizumab", dose: "Sickle cell: anti-P-selectin; reduces vaso-occlusive crises" }
  ], tests: [
    { name: "Haemoglobin electrophoresis", note: "GOLD STANDARD: HbA2 >3.5% (thalassaemia trait); HbF elevated; HbS in sickle cell" },
    { name: "FBC + blood film", note: "Microcytic hypochromic anaemia; target cells, sickle cells; nucleated RBCs" },
    { name: "Serum ferritin + transferrin saturation", note: "Iron overload monitoring in transfused patients" },
    { name: "MRI liver T2* + MRI cardiac T2*", note: "Non-invasive iron quantification in liver and heart; guide chelation" },
    { name: "Reticulocyte count", note: "Elevated (haemolysis); reflects erythropoietic response" },
    { name: "Bilirubin (unconjugated) + LDH + haptoglobin", note: "Haemolysis markers; ↑bilirubin + ↑LDH + ↓haptoglobin" }
  ]},
  "Psoriasis": { gm: [
    "Identify and avoid triggers (stress, infection, trauma, drugs: beta-blockers, lithium, NSAIDs, antimalarials)",
    "Skin hydration: emollients regularly",
    "Phototherapy (NB-UVB): moderate-severe plaque psoriasis not responding to topicals",
    "PASI score to assess severity: mild <10, moderate 10-20, severe >20",
    "Screen for psoriatic arthritis (30% of patients); refer to rheumatology if joints involved",
    "Cardiovascular risk management (psoriasis is independent CVD risk factor)"
  ], pm: [
    { name: "Topical corticosteroids", dose: "1st line mild-moderate; potency matched to site; avoid face/flexures with potent steroids" },
    { name: "Vitamin D analogues (calcipotriol)", dose: "Mild-moderate; often combined with topical steroid (Dovobet)" },
    { name: "Coal tar preparations", dose: "Mild-moderate; scalp psoriasis; anti-inflammatory + antiproliferative" },
    { name: "Methotrexate", dose: "Moderate-severe; 7.5–25 mg weekly; + folic acid; monitor LFTs + FBC" },
    { name: "Ciclosporin", dose: "Rapid response needed; short courses; monitor BP + renal function" },
    { name: "Acitretin", dose: "Pustular/erythrodermic psoriasis; highly teratogenic" },
    { name: "Biologics (anti-TNF: adalimumab, etanercept)", dose: "Moderate-severe failing systemic; also IL-17 (secukinumab) and IL-23 (guselkumab) inhibitors" }
  ], tests: [
    { name: "Clinical diagnosis", note: "Erythematous plaques with silvery scales on extensor surfaces; Auspitz sign; no biopsy usually needed" },
    { name: "Skin biopsy (if diagnostic doubt)", note: "Acanthosis; parakeratosis; Munro's microabscesses; elongated rete ridges" },
    { name: "FBC, LFTs, renal function", dose: "Baseline before systemic therapy; ongoing monitoring" },
    { name: "PASI score", note: "Psoriasis Area and Severity Index; guides treatment decisions" },
    { name: "Joint X-rays / MRI", note: "If psoriatic arthritis suspected; periostitis, pencil-in-cup deformity" }
  ]},
  "Pemphigus Vulgaris": { gm: [
    "Hospitalise if widespread blistering or haemodynamic compromise",
    "Fluid and electrolyte replacement",
    "Wound care: non-adherent dressings; treat secondary infections",
    "Nutritional support if oral involvement severe",
    "Ophthalmology review if conjunctival involvement",
    "Aim: remission with minimum steroid dose; disease often lifelong"
  ], pm: [
    { name: "Prednisolone 1 mg/kg/day", dose: "1st line; high dose to control disease; taper slowly" },
    { name: "Rituximab 1 g IV × 2 doses (2 weeks apart)", dose: "Now preferred 1st line by many centres; faster remission; reduces steroid use; anti-CD20" },
    { name: "Azathioprine 2–3 mg/kg/day", dose: "Steroid-sparing; check TPMT before starting" },
    { name: "Mycophenolate mofetil 1.5 g BD", dose: "Alternative steroid-sparing; better tolerated than azathioprine" },
    { name: "IVIG 2 g/kg/cycle", dose: "Refractory pemphigus; rapid response; expensive" },
    { name: "Dapsone", dose: "Adjunct; IgA pemphigus" }
  ], tests: [
    { name: "Nikolsky's sign", note: "Gentle lateral pressure causes skin separation; positive in active pemphigus" },
    { name: "Skin biopsy (perilesional)", note: "Intraepidermal blistering (above basal layer); acantholysis" },
    { name: "Direct immunofluorescence (DIF)", note: "GOLD STANDARD: IgG + C3 in intercellular pattern (chicken wire) in epidermis" },
    { name: "Anti-desmoglein 1 and 3 antibodies (ELISA)", note: "Dsg3: mucosal type; Dsg1+3: mucocutaneous; correlates with disease activity" },
    { name: "FBC, LFTs, glucose", note: "Baseline before immunosuppression; monitor on treatment" }
  ]},
  "Leprosy (Lepromatous)": { gm: [
    "Multi-drug therapy (MDT) as per WHO; never monotherapy",
    "Paucibacillary (1-5 lesions, smear negative): Rifampicin 600mg monthly + Dapsone 100mg daily × 6 months",
    "Multibacillary (>5 lesions, smear positive): Rifampicin 600mg + Clofazimine 300mg monthly + Dapsone 100mg + Clofazimine 50mg daily × 12 months",
    "Leprosy reactions: Type 1 (reversal reaction) — prednisolone; Type 2 (ENL — erythema nodosum leprosum) — thalidomide or prednisolone",
    "Physiotherapy: prevent deformity; self-care for anaesthetic limbs",
    "Foot care education; protective footwear",
    "Ocular care: treat lagophthalmos to prevent corneal ulceration",
    "Notification to public health; contact tracing"
  ], pm: [
    { name: "Rifampicin 600 mg once monthly", dose: "Bactericidal; supervised dose; essential component of MDT" },
    { name: "Dapsone 100 mg daily", dose: "Bacteriostatic; self-administered; check G6PD deficiency" },
    { name: "Clofazimine 300 mg monthly + 50 mg daily", dose: "Multibacillary leprosy; anti-inflammatory; causes skin darkening" },
    { name: "Prednisolone 40–60 mg/day", dose: "Lepra reactions (reversal/ENL); neuropathic pain" },
    { name: "Thalidomide", dose: "Severe ENL in males; powerful anti-TNF effect; NEVER in females (teratogenic)" }
  ], tests: [
    { name: "Slit-skin smear (ZN stain for AFB)", note: "Multibacillary: positive (bacteriological index); paucibacillary: negative" },
    { name: "Skin biopsy", note: "Foamy macrophages with AFB (lepromatous); well-formed granulomas without AFB (tuberculoid)" },
    { name: "Lepromin test", note: "Mitsuda reaction: positive in tuberculoid (good immunity); negative in lepromatous" },
    { name: "Nerve conduction studies", note: "Assess nerve function; monitor for new nerve damage" },
    { name: "Slit-lamp examination", note: "Ocular complications: corneal sensation, lagophthalmos, iridocyclitis" }
  ]},
  "Exfoliative Dermatitis (Erythroderma)": { gm: [
    "Hospital admission: temperature dysregulation (hypothermia/hyperthermia), fluid loss, infection risk",
    "Treat underlying cause: psoriasis, eczema, drug reaction, lymphoma, PRP",
    "Stop all non-essential medications (identify causative drug)",
    "Fluid balance: significant insensible losses through skin",
    "Temperature control: keep warm; avoid cold exposure",
    "Nutritional support: high protein (increased catabolism)",
    "Infection surveillance: secondary Staphylococcal superinfection common",
    "Emollients: regular application to prevent further skin barrier loss"
  ], pm: [
    { name: "Topical emollients (white soft paraffin / aqueous cream)", dose: "Frequent application; maintain skin barrier; soothe skin" },
    { name: "Prednisolone (oral)", dose: "Eczema-related erythroderma; cautious in psoriasis (rebound risk)" },
    { name: "Ciclosporin", dose: "Psoriatic erythroderma; rapid onset; avoid in severe infections" },
    { name: "Acitretin", dose: "Psoriatic erythroderma; slower onset; teratogenic" },
    { name: "Antibiotics (flucloxacillin / vancomycin)", dose: "Staphylococcal superinfection; IV if systemic sepsis" },
    { name: "Antihistamines (chlorpheniramine)", dose: "Pruritus relief; sedating antihistamine at night" }
  ], tests: [
    { name: "Skin biopsy", note: "Identify underlying cause; may need multiple biopsies; features of psoriasis/eczema/lymphoma" },
    { name: "FBC + differential", note: "Eosinophilia (drug reaction); lymphocytosis (Sézary syndrome)" },
    { name: "Peripheral blood Sézary cell count", note: ">1000/mm³ Sézary cells = Sézary syndrome (erythrodermic CTCL)" },
    { name: "LFTs, U&E, albumin", note: "Protein loss; hepatic involvement; metabolic complications" },
    { name: "Blood cultures", note: "Secondary bacteraemia; common in severe erythroderma" },
    { name: "CT chest/abdomen/pelvis", note: "Exclude lymphoma as underlying cause" }
  ]},
  "Kala-Azar (Visceral Leishmaniasis)": { gm: [
    "Liposomal amphotericin B: treatment of choice in immunocompetent patients",
    "Supportive care: nutritional support (severely malnourished), blood transfusion for severe anaemia",
    "Treat secondary infections (bacterial, fungal)",
    "Post-kala-azar dermal leishmaniasis (PKDL): can develop months-years after treatment",
    "Vector control: insecticide-treated bed nets, indoor residual spraying",
    "WHO elimination programme: rK39 rapid test + treatment"
  ], pm: [
    { name: "Liposomal Amphotericin B (AmBisome)", dose: "Treatment of choice: 3 mg/kg/day IV on days 1-5, 14, 21 (total 21 mg/kg); 95%+ cure" },
    { name: "Miltefosine", dose: "1st oral drug; 2.5 mg/kg/day × 28 days; teratogenic — avoid in pregnancy" },
    { name: "Conventional Amphotericin B", dose: "Alternative if liposomal not available; 0.75–1 mg/kg/day × 15-20 doses" },
    { name: "Paromomycin IM", dose: "Combination with liposomal amphotericin in endemic areas" }
  ], tests: [
    { name: "rK39 rapid diagnostic test", note: "Point-of-care; 90%+ sensitivity and specificity; use in endemic areas first" },
    { name: "Bone marrow / splenic aspirate (Leishman-Donovan bodies)", note: "GOLD STANDARD: LD bodies in macrophages; splenic aspirate most sensitive (95%) but risky" },
    { name: "Serology (ELISA / DAT)", note: "Direct agglutination test (DAT): high sensitivity; used in field settings" },
    { name: "Leishmania PCR", note: "Most sensitive; blood/bone marrow; detect sub-patent infection" },
    { name: "FBC", note: "Pancytopenia; leukopenia; anaemia; thrombocytopenia" },
    { name: "USS abdomen", note: "Massive splenomegaly + hepatomegaly confirmation; exclude splenic abscess" }
  ]},
  "Pyrexia of Unknown Origin (PUO)": { gm: [
    "Systematic workup: infection (40%), malignancy (20%), autoimmune (15%), miscellaneous (15%), undiagnosed (10%)",
    "Stop all non-essential medications (drug fever)",
    "Repeat examination daily — new clues emerge",
    "Avoid empirical antibiotics or steroids until diagnosis established (unless deteriorating)",
    "In Bangladesh/endemic areas: always exclude TB, kala-azar, typhoid, malaria",
    "PET-CT increasingly used when standard workup negative"
  ], pm: [
    { name: "Empirical anti-TB therapy", dose: "If high clinical suspicion for TB and unable to confirm; diagnostic-therapeutic trial" },
    { name: "NSAIDs (naproxen)", dose: "Naproxen test: fever that responds = neoplastic fever; fever persisting = infectious" },
    { name: "Treat identified cause", dose: "Antibiotics for infection; steroids for autoimmune/inflammatory; chemotherapy for malignancy" }
  ], tests: [
    { name: "Blood cultures (×3, 30 min apart)", note: "Mandatory; aerobic + anaerobic; drawn during fever spike; culture for 2 weeks (subacute endocarditis)" },
    { name: "FBC + differential + ESR + CRP + LFTs + TFTs", note: "Screening panel; eosinophilia (parasites, drugs); elevated LFTs (hepatic TB/abscess/malignancy)" },
    { name: "Chest X-ray", note: "TB, lymphoma, sarcoidosis" },
    { name: "USS abdomen + pelvis", note: "Abscess, lymphadenopathy, organomegaly, masses" },
    { name: "CT chest/abdomen/pelvis with contrast", note: "Most useful when initial workup negative" },
    { name: "PET-CT (FDG)", note: "Identifies occult infection, vasculitis, malignancy; high sensitivity" },
    { name: "Bone marrow biopsy", note: "Miliary TB, lymphoma, leishmaniasis, chronic disseminated fungal infection" },
    { name: "IGRA / Mantoux + sputum AFB + ADA (if lymphadenopathy)", note: "TB workup; serum ADA elevated in TB meningitis/pleuritis" }
  ]},
  "Pyrexia of Unknown Origin (HIV/AIDS)": { gm: [
    "HIV testing with consent (ELISA + Western blot or 4th generation combination test)",
    "CD4 count determines opportunistic infection risk and ART urgency",
    "ART (antiretroviral therapy): start in ALL patients regardless of CD4",
    "Opportunistic infection prophylaxis based on CD4: <200 (PCP prophylaxis), <100 (MAC prophylaxis), <50 (CMV prophylaxis)",
    "Screen and treat TB co-infection",
    "Nutritional support",
    "Safeguarding and sexual health counselling"
  ], pm: [
    { name: "ART: Tenofovir + Emtricitabine + Dolutegravir (TDF/FTC/DTG)", dose: "Preferred 1st line regimen; once daily; high barrier to resistance" },
    { name: "Co-trimoxazole prophylaxis", dose: "CD4 <200: PCP prophylaxis; also toxoplasma prophylaxis" },
    { name: "Fluconazole", dose: "Oral/oesophageal candidiasis; cryptococcal meningitis" },
    { name: "Isoniazid preventive therapy (IPT)", dose: "Latent TB in HIV; 6–36 months" }
  ], tests: [
    { name: "HIV 4th generation (Ag/Ab combo) ELISA", note: "Detects p24 antigen + HIV antibodies; positive from week 2-4; confirm with Western blot" },
    { name: "CD4 T-cell count", note: "<200 = AIDS-defining; <50 = risk of CMV, MAC" },
    { name: "HIV viral load (RNA PCR)", note: "Quantifies viral replication; guides ART initiation and monitoring" },
    { name: "FBC, LFTs, renal function, fasting lipids", note: "Baseline before ART; monitoring" },
    { name: "TB screening (CXR, sputum, IGRA)", note: "Most common co-infection; LAM urine test in CD4 <100" },
    { name: "Cryptococcal antigen (CrAg)", note: "Serum CrAg screening if CD4 <100 before ART" }
  ]},
  "Takayasu's Disease (Pulseless Disease)": { gm: [
    "Glucocorticoids: 1st line for active disease; high-dose prednisolone",
    "Immunosuppressive drugs: steroid-sparing agents",
    "Revascularisation (percutaneous or surgical): for significant stenosis causing ischaemia",
    "Antihypertensives: BP management (difficult — upper limb pulses absent; use lower limb BP)",
    "Aspirin: antiplatelet therapy",
    "Monitor disease activity: clinical + ESR/CRP + MRA/PET-CT"
  ], pm: [
    { name: "Prednisolone 1 mg/kg/day", dose: "1st line; remission induction; taper over months" },
    { name: "Methotrexate", dose: "Steroid-sparing; 15–25 mg weekly; most commonly used" },
    { name: "Azathioprine", dose: "Alternative steroid-sparing" },
    { name: "Tocilizumab (anti-IL-6)", dose: "Refractory disease; increasingly used" },
    { name: "Aspirin 75–100 mg/day", dose: "Antiplatelet; reduce ischaemic complications" }
  ], tests: [
    { name: "MRA (MR angiography) / CTA", note: "BEST non-invasive: vessel wall thickening; stenosis/occlusion/aneurysm in aorta and branches" },
    { name: "PET-CT", note: "Active inflammation; FDG uptake in vessel walls; monitors response to treatment" },
    { name: "ESR + CRP", note: "Elevated in active disease; poor correlation (can be normal in active Takayasu)" },
    { name: "Conventional angiography", note: "Gold standard for vascular anatomy; pre-revascularisation planning" },
    { name: "Echocardiogram", note: "Aortic regurgitation; cardiac involvement; LV function" },
    { name: "Blood pressure in all 4 limbs", note: "Asymmetric BP (>10 mmHg difference = significant); use lower limb for true BP" }
  ]},

  // ── MISSING MANAGEMENT: EXISTING 96 DISEASES ──────

  "Mixed Mitral Stenosis + Regurgitation": { gm: [
    "Determine dominant lesion clinically (stenosis vs. regurgitation)",
    "Treat heart failure: diuretics, salt restriction, fluid management",
    "Rate control if atrial fibrillation: digoxin, beta-blockers",
    "Anticoagulation: warfarin if AF (target INR 2–3)",
    "Endocarditis prophylaxis: good dental hygiene; antibiotics not routinely recommended",
    "Valve intervention: balloon valvotomy (if stenosis dominant, pliable valve, no significant MR); valve replacement if mixed dominant"
  ], pm: [
    { name: "Furosemide 40–80 mg/day", dose: "Heart failure; reduce pulmonary congestion" },
    { name: "Digoxin 125–250 mcg/day", dose: "Rate control in AF; improves CO in LV failure" },
    { name: "Warfarin (target INR 2–3)", dose: "Mandatory in AF; rheumatic mitral disease + AF = high stroke risk" },
    { name: "Beta-blocker (bisoprolol 2.5–10 mg)", dose: "Rate control if AF; reduce tachycardia" },
    { name: "ACE inhibitor (if MR dominant)", dose: "Enalapril 5–20 mg/day; reduce afterload; beneficial in MR" },
    { name: "Benzathine penicillin", dose: "Secondary prevention of rheumatic fever; monthly IM if rheumatic aetiology" }
  ], tests: [
    { name: "Echocardiography (2D + Doppler)", note: "GOLD STANDARD: valve morphology, gradient, orifice area, regurgitation severity, LV/RV function, PA pressure" },
    { name: "ECG", note: "AF, P-mitrale (broad P wave in sinus rhythm), RV hypertrophy (right axis deviation)" },
    { name: "CXR", note: "LA enlargement (double shadow right heart border), pulmonary congestion, Kerley B lines, mitral valve calcification" },
    { name: "Cardiac catheterisation", note: "Pre-operative assessment; assess coronary arteries; confirm haemodynamic severity" }
  ]},

  "Hypertension": { gm: [
    "Lifestyle modification FIRST: weight loss (BMI <25), DASH diet (reduce salt <6g/day), regular aerobic exercise 30 min/day ≥5 days/week",
    "Reduce alcohol to <14 units/week (men), <7 units/week (women)",
    "Stop smoking — does not lower BP but reduces overall cardiovascular risk",
    "Home/ambulatory BP monitoring for diagnosis and monitoring",
    "Treat underlying cause if secondary hypertension (renal artery stenosis, hyperaldosteronism, phaeochromocytoma)",
    "Target BP: <140/90 general; <130/80 if DM, CKD, high CVD risk; <150/90 if >80 years"
  ], pm: [
    { name: "Amlodipine 5–10 mg OD", dose: "1st line: CCB (especially >55 yrs or black patients); also ACEi/ARB if <55 yrs" },
    { name: "Ramipril 2.5–10 mg OD (ACEi)", dose: "1st line <55 yrs; renoprotective in CKD/DM; avoid in pregnancy; monitor K+ and creatinine" },
    { name: "Losartan 50–100 mg OD (ARB)", dose: "Alternative to ACEi if cough; same indications; avoid in pregnancy" },
    { name: "Indapamide 1.5 mg OD (thiazide-like)", dose: "Step 2 add-on; add to ACEi/ARB + CCB (A+C+D regimen)" },
    { name: "Bisoprolol 5–10 mg OD", dose: "Step 4 or if beta-blocker indicated (angina, AF, HF); not 1st line for HTN alone" },
    { name: "Spironolactone 25–50 mg", dose: "Step 4 resistant HTN; check eGFR and K+ before starting" }
  ], tests: [
    { name: "Urine dipstick + albumin:creatinine ratio (ACR)", note: "Proteinuria = secondary cause (renal) or target organ damage" },
    { name: "Blood glucose, lipid profile, eGFR, electrolytes", note: "Cardiovascular risk factors; baseline renal function before ACEi/ARB" },
    { name: "ECG", note: "LV hypertrophy (Sokolow criteria); strain pattern; AF" },
    { name: "Fundoscopy", note: "Hypertensive retinopathy grade I–IV; papilloedema = malignant HTN" },
    { name: "24-hour ambulatory BP monitor (ABPM)", note: "Gold standard for diagnosis; white coat effect; masked hypertension" },
    { name: "Renal USS + Doppler", note: "If secondary HTN suspected (renal artery stenosis, polycystic kidneys)" }
  ]},

  "Subacute Bacterial Endocarditis": { gm: [
    "Blood cultures BEFORE antibiotics: 3 sets from different sites, 30 min apart",
    "IV antibiotics: 4–6 weeks for native valve endocarditis",
    "Rheumatology/cardiology/microbiology MDT approach",
    "Echocardiography (TOE if TTE equivocal) for vegetations, abscesses, valve function",
    "Indications for surgery: heart failure from valve dysfunction, uncontrolled infection, prevention of embolism (large vegetation >10mm)",
    "Dental hygiene: good oral hygiene reduces risk; no antibiotic prophylaxis routinely (NICE 2008)",
    "Monitor complications: embolic events, renal failure, heart block"
  ], pm: [
    { name: "Native valve (Strep viridans): Benzylpenicillin 1.2g IV 4-hourly + Gentamicin 1 mg/kg IV TDS × 4 weeks", dose: "Synergistic bactericidal combination; monitor gentamicin levels" },
    { name: "Staph aureus native valve: Flucloxacillin 2g IV 6-hourly × 6 weeks", dose: "Anti-staphylococcal; add gentamicin for first 3–5 days" },
    { name: "MRSA: Vancomycin 15–20 mg/kg IV 12-hourly × 6 weeks", dose: "Monitor trough levels (15–20 mg/L); add rifampicin 300–600 mg BD" },
    { name: "Prosthetic valve: Vancomycin + Rifampicin + Gentamicin", dose: "6 weeks minimum; rifampicin added after 3–5 days of bactericidal therapy" }
  ], tests: [
    { name: "Blood cultures ×3 (before antibiotics)", note: "ESSENTIAL: 90% sensitivity if 3 sets; culture for minimum 5 days; Gram stain + sensitivity" },
    { name: "Echocardiography (TTE then TOE)", note: "TOE superior: detects vegetations (>2mm), perivalvular abscess, valve perforation; TOE if TTE negative but high suspicion" },
    { name: "Duke criteria", note: "Major: positive blood cultures, new valvular regurgitation, echocardiographic findings; Minor: fever, predisposing condition, vascular/immunological phenomena" },
    { name: "FBC, ESR, CRP, U&E, urinalysis", note: "Anaemia of chronic disease; elevated inflammatory markers; haematuria (immune complex nephritis)" },
    { name: "CT head / MRI brain", note: "If neurological symptoms: embolic stroke, mycotic aneurysm, cerebral abscess" }
  ]},

  "Rheumatic Fever": { gm: [
    "Strict bed rest during acute phase",
    "Treat group A streptococcal infection: penicillin V or amoxicillin × 10 days",
    "Eradicate any residual GAS infection",
    "Anti-inflammatory therapy for arthritis and carditis",
    "Secondary prophylaxis: MANDATORY to prevent recurrence and progressive valve disease",
    "Duration of secondary prophylaxis: 5 years or until age 21 (no carditis); 10 years or until age 21 (carditis without residual); lifelong (rheumatic heart disease)",
    "Cardiac: manage CCF, pericarditis; valve surgery if severe RHD"
  ], pm: [
    { name: "Benzathine penicillin G 1.2M units IM stat", dose: "Eradicate GAS; reduces severity and duration if given early" },
    { name: "Aspirin 75–100 mg/kg/day (max 4g/day)", dose: "Anti-inflammatory; arthritis relief; taper over 6–8 weeks" },
    { name: "Prednisolone 1–2 mg/kg/day (max 80 mg)", dose: "Severe carditis with CCF; 2–4 weeks then taper" },
    { name: "Benzathine penicillin G 1.2M units IM monthly", dose: "SECONDARY PROPHYLAXIS — lifelong if RHD; prevents recurrence" },
    { name: "Naproxen 10–20 mg/kg/day", dose: "Alternative to aspirin for arthritis (particularly for Sydenham's chorea)" },
    { name: "Haloperidol / valproate", dose: "Sydenham's chorea management" }
  ], tests: [
    { name: "Throat swab + ASO titre (Anti-Streptolysin O)", note: "ASO titre >200 Todd units; rising titre more significant; peak 3–4 weeks after infection" },
    { name: "Anti-DNase B titre", note: "More sensitive for skin GAS infection; elevated in rheumatic fever" },
    { name: "Echocardiography", note: "Carditis assessment: mitral/aortic valve involvement, pericardial effusion, LV function; subclinical carditis detectable" },
    { name: "ECG", note: "Prolonged PR interval (1st degree heart block — Jones minor criterion); ST changes (pericarditis)" },
    { name: "FBC, ESR, CRP", note: "Elevated inflammatory markers; leucocytosis; anaemia" }
  ]},

  "Eisenmenger's Syndrome": { gm: [
    "No curative treatment once Eisenmenger established — reversal of shunt prevents repair",
    "Avoid: dehydration, iron deficiency, pregnancy (very high maternal mortality), high altitude, systemic vasodilators, NSAIDs",
    "Supplemental O2: does not alter pulmonary pressures but improves symptoms",
    "Phlebotomy: if symptomatic polycythaemia (Hct >65%) with symptoms; replace with IV fluids",
    "Heart-lung transplantation or lung transplantation + cardiac repair: only curative option",
    "Contraception: essential (pregnancy contraindicated); hormonal OCP with caution",
    "Endocarditis prophylaxis: dental hygiene"
  ], pm: [
    { name: "Bosentan (endothelin receptor antagonist)", dose: "Oral; 62.5–125 mg BD; improves exercise capacity and haemodynamics; monitor LFTs" },
    { name: "Sildenafil / Tadalafil (PDE5 inhibitor)", dose: "Pulmonary vasodilation; 20 mg TDS (sildenafil); improves 6MWT" },
    { name: "IV Epoprostenol (prostacyclin)", dose: "Continuous IV; most potent; improves survival in severe PAH; central line required" },
    { name: "Warfarin", dose: "Anticoagulation if PA thrombosis; controversial — bleeding risk from polycythaemia" },
    { name: "Iron supplementation", dose: "Iron deficiency common (phlebotomy) — correct cautiously; iron deficiency worsens symptoms" }
  ], tests: [
    { name: "Echo + Doppler", note: "PA pressure assessment; shunt direction (right-to-left confirms Eisenmenger's); RV function" },
    { name: "Cardiac catheterisation", note: "Pulmonary vascular resistance >8 Wood units; O2 saturation step-up in appropriate chamber" },
    { name: "FBC", note: "Secondary polycythaemia (Hct may be 65–70%); thrombocytopenia; iron deficiency" },
    { name: "ABG + SpO2", note: "Hypoxaemia; differential cyanosis in PDA Eisenmenger (lower limb more cyanosed)" },
    { name: "6-minute walk test (6MWT)", note: "Functional capacity assessment; monitors disease progression and treatment response" }
  ]},

  "Tetralogy of Fallot": { gm: [
    "Definitive treatment: complete surgical repair (typically 3–6 months of age)",
    "Palliative: Blalock-Taussig shunt (subclavian to pulmonary artery) — prior to definitive repair",
    "Tet spells (hypercyanotic episodes): knee-chest position, morphine, propranolol, IV fluids, O2, phenylephrine",
    "Infective endocarditis prophylaxis",
    "Post-repair: long-term follow-up for pulmonary regurgitation, RV dysfunction, arrhythmia",
    "Genetic counselling: associated with chromosome 22q11 deletion (DiGeorge)"
  ], pm: [
    { name: "Propranolol 0.5–1 mg/kg/day", dose: "Prevent tet spells; reduces RVOT obstruction; pre-operative management" },
    { name: "Morphine IV (tet spell)", dose: "0.1–0.2 mg/kg; reduces pulmonary vascular resistance; calms infant" },
    { name: "Phenylephrine (tet spell)", dose: "Increases SVR; forces blood through pulmonary circulation; IV bolus 5–10 mcg/kg" },
    { name: "IV fluids", dose: "Correct dehydration/hypovolaemia; maintain preload" }
  ], tests: [
    { name: "Echocardiography", note: "GOLD STANDARD: VSD size, RV outflow obstruction severity, PA anatomy, aortic override, RV hypertrophy" },
    { name: "CXR", note: "Boot-shaped heart (coeur en sabot): RV hypertrophy + concave PA segment; oligaemic lung fields" },
    { name: "ECG", note: "Right axis deviation; RV hypertrophy; right bundle branch block" },
    { name: "Cardiac MRI", note: "Post-operative: assess RV volumes, pulmonary regurgitation severity, residual defects" },
    { name: "FBC + ABG", note: "Polycythaemia; hypoxaemia; pre-operative risk assessment" }
  ]},

  "Ventricular Septal Defect": { gm: [
    "Small VSD (restrictive): observation; majority close spontaneously by age 5",
    "Large VSD: surgical repair or catheter-based device closure",
    "Heart failure management: diuretics, ACEi; medical stabilisation before surgery",
    "Surgical repair: patch closure; optimal age 3–6 months if large VSD with failure to thrive",
    "Endocarditis prophylaxis: dental hygiene",
    "Post-repair follow-up: residual VSD, arrhythmia, aortic regurgitation"
  ], pm: [
    { name: "Furosemide 1–2 mg/kg/day", dose: "Heart failure; pulmonary congestion; pre-surgical management" },
    { name: "Captopril / Enalapril", dose: "ACEi; reduce afterload; improve CO; heart failure management" },
    { name: "High-calorie feeds", dose: "Failure to thrive management in infants; nasogastric feeds if needed" }
  ], tests: [
    { name: "Echocardiography (2D + colour Doppler)", note: "GOLD STANDARD: VSD site, size, shunt direction, PA pressure, LV/RV function; measure Qp:Qs ratio" },
    { name: "CXR", note: "Cardiomegaly; increased pulmonary vascular markings; LA/LV enlargement" },
    { name: "ECG", note: "Left ventricular hypertrophy (large VSD with L-R shunt); biventricular hypertrophy if large" },
    { name: "Cardiac catheterisation", note: "O2 saturation step-up in RV; Qp:Qs ratio; pulmonary vascular resistance pre-operatively" }
  ]},

  "Atrial Septal Defect": { gm: [
    "Small ASD: observation; many close spontaneously if small",
    "Significant ASD (Qp:Qs >1.5:1): closure by age 3–5 before pulmonary HTN develops",
    "Catheter-based device closure (Amplatzer): preferred for ostium secundum ASD",
    "Surgical repair: primum ASD, sinus venosus ASD (not suitable for device closure)",
    "Anticoagulation: if AF develops",
    "Post-closure: follow-up for residual shunt, arrhythmia, pulmonary HTN"
  ], pm: [
    { name: "Aspirin 75–100 mg/day", dose: "Post-device closure: 6 months to prevent thrombus on device" },
    { name: "Warfarin / DOAC", dose: "If AF complicates ASD; long-term anticoagulation" },
    { name: "Diuretics", dose: "If right heart failure develops; furosemide + spironolactone" }
  ], tests: [
    { name: "Echocardiography (TTE + bubble contrast)", note: "GOLD STANDARD: ASD site, size, shunt direction, RV enlargement; bubble study confirms R-to-L shunt" },
    { name: "ECG", note: "RBBB (right bundle branch block) + right axis deviation (secundum); left axis deviation (primum)" },
    { name: "CXR", note: "Prominent pulmonary artery; pulmonary plethora; RV enlargement" },
    { name: "Cardiac MRI", note: "Accurate Qp:Qs calculation; sinus venosus ASD assessment; pre-operative planning" }
  ]},

  "Patent Ductus Arteriosus": { gm: [
    "Premature infant: indomethacin or ibuprofen (prostaglandin inhibitor) to promote closure",
    "Symptomatic or haemodynamically significant PDA: catheter-based coil/device closure",
    "Surgical ligation: if catheter closure not possible or failed",
    "Small/silent PDA: observation; device closure to prevent endocarditis",
    "Eisenmenger's PDA: no closure possible; manage as pulmonary arterial hypertension"
  ], pm: [
    { name: "Indomethacin 0.1–0.25 mg/kg IV", dose: "Promotes ductal closure in premature infants; inhibits prostaglandin synthesis; 3 doses" },
    { name: "Ibuprofen IV", dose: "Alternative to indomethacin; similar efficacy; fewer renal side-effects" },
    { name: "Alprostadil (PGE1)", dose: "Keeps duct open in ductal-dependent lesions (TOF, critical PS, coarctation) before surgery" }
  ], tests: [
    { name: "Echocardiography + colour Doppler", note: "Confirms PDA; continuous turbulent flow in PA; LV/LA enlargement (volume overload)" },
    { name: "CXR", note: "Cardiomegaly; increased pulmonary vascular markings; LA enlargement" },
    { name: "ECG", note: "LV hypertrophy; LA enlargement if large PDA" },
    { name: "Cardiac catheterisation", note: "PA O2 saturation elevated; O2 step-up at PA level; aortopulmonary shunt confirmed" }
  ]},

  "Duodenal Ulcer with Pyloric Stenosis": { gm: [
    "NBM initially; nasogastric drainage",
    "IV fluid resuscitation: correct dehydration and electrolyte imbalance (hypochloraemic metabolic alkalosis)",
    "Correct hypokalaemia BEFORE surgery (important)",
    "H. pylori eradication therapy",
    "Definitive surgery: pyloroplasty or gastrojejunostomy after medical stabilisation",
    "PPI therapy: high dose IV initially, then oral long-term",
    "Monitor urine output and electrolytes closely"
  ], pm: [
    { name: "IV 0.9% NaCl + KCl", dose: "Correct hypovolaemia and hypochloraemic metabolic alkalosis; restore electrolytes before surgery" },
    { name: "IV Omeprazole / Pantoprazole 40 mg BD", dose: "Suppress acid secretion; reduce ulcer activity; switch to oral when tolerating" },
    { name: "H. pylori eradication: Triple therapy", dose: "PPI + Amoxicillin 1g + Clarithromycin 500mg BD × 7–14 days (after surgical stabilisation)" },
    { name: "IV Metoclopramide", dose: "Anti-emetic if vomiting; caution with extrapyramidal effects" }
  ], tests: [
    { name: "Serum electrolytes + arterial blood gas", note: "Hypochloraemic metabolic alkalosis (↓Cl⁻, ↓K⁺, ↑HCO₃⁻, metabolic alkalosis) — pathognomonic" },
    { name: "Succussion splash test", note: "Positive if gastric stasis >3h after food/drink — clinical diagnosis" },
    { name: "Upper GI endoscopy (OGD)", note: "Confirm pyloric stenosis + active ulcer; biopsy for H. pylori; assess severity" },
    { name: "Upper GI barium meal (if OGD not possible)", note: "Classic 'rat-tail' narrowing of pylorus; dilated stomach with retained food" },
    { name: "Urea breath test / stool antigen", note: "H. pylori detection; test of cure 4 weeks after eradication" }
  ]},

  "Hemochromatosis": { gm: [
    "Therapeutic phlebotomy: mainstay of treatment; 500 mL blood (250 mg iron) weekly until serum ferritin <50 mcg/L",
    "Maintenance phlebotomy: 3–4/year to maintain ferritin <50 mcg/L",
    "Avoid iron supplements, vitamin C supplements (increase iron absorption)",
    "Avoid alcohol — accelerates liver damage",
    "Screen first-degree relatives: HFE gene testing (C282Y homozygosity)",
    "Screen for complications: liver cirrhosis (AFP + USS 6-monthly), diabetes, hypogonadism, cardiomyopathy",
    "Liver transplantation: end-stage cirrhosis"
  ], pm: [
    { name: "Desferrioxamine (deferoxamine)", dose: "If phlebotomy not tolerated (anaemia, poor veins); SC/IV infusion; iron chelation" },
    { name: "Deferasirox (oral chelator)", dose: "Alternative oral chelation; 20 mg/kg/day; monitor renal function" },
    { name: "Insulin (if diabetes mellitus)", dose: "Bronze diabetes — often insulin-dependent; DM secondary to pancreatic iron deposition" },
    { name: "Testosterone replacement", dose: "Hypogonadism from pituitary iron deposition" }
  ], tests: [
    { name: "Serum ferritin + transferrin saturation", note: "Transferrin saturation >45% = screening test; ferritin elevated (>200 women, >300 men) — note ferritin is acute phase reactant" },
    { name: "HFE gene mutation testing (C282Y, H63D)", note: "C282Y homozygosity (HH diagnosis); H63D less severe; genetic confirmation" },
    { name: "Liver biopsy", note: "Grading iron overload (Scheuer grade I–IV); fibrosis staging; hepatic iron index (HII >1.9 confirms HH)" },
    { name: "MRI liver (T2*)", note: "Non-invasive iron quantification; avoids biopsy in many cases" },
    { name: "LFTs, glucose, testosterone, LH/FSH, TSH", note: "Assess end-organ damage: liver, pancreas, pituitary, thyroid" }
  ]},

  "Post-Streptococcal Glomerulonephritis": { gm: [
    "Hospitalise if hypertensive urgency, oliguria, or rapid deterioration",
    "Rest during acute phase",
    "Fluid restriction and low-sodium diet if oedematous/oliguric",
    "Treat residual GAS infection: penicillin V or amoxicillin × 10 days",
    "Monitor BP closely — hypertension is the main management challenge",
    "Self-limiting in children (95% complete recovery); adults have worse prognosis (up to 50% develop CKD)",
    "Rarely requires immunosuppression (unlike other GN)"
  ], pm: [
    { name: "Furosemide 40–80 mg IV/oral", dose: "Fluid overload, hypertension and oedema management; diuresis" },
    { name: "Amlodipine / nifedipine", dose: "Hypertension management; CCB preferred in acute setting" },
    { name: "Labetalol IV", dose: "Hypertensive emergency (encephalopathy, severe hypertension)" },
    { name: "Penicillin V 500 mg QDS × 10 days", dose: "Eradicate residual GAS infection; does NOT alter course of nephritis" },
    { name: "Calcium gluconate + Calcium resonium", dose: "If severe hyperkalaemia" }
  ], tests: [
    { name: "Urinalysis + microscopy", note: "Haematuria (RBC casts = pathognomonic), proteinuria, granular casts; 'coca-cola' or smoky urine" },
    { name: "ASO titre + Anti-DNase B", note: "Evidence of recent GAS infection; ASO rises 1–3 weeks post-pharyngitis; Anti-DNase B for skin infection" },
    { name: "C3 complement (↓)", note: "MARKEDLY LOW C3 (with normal C4) — pathognomonic; returns to normal in 8–12 weeks" },
    { name: "Throat swab + skin swab", note: "Culture for GAS; often negative by the time nephritis presents" },
    { name: "Renal biopsy", note: "Indicated if: atypical features, no complement recovery at 12 weeks, rapidly progressive course; shows endocapillary proliferative GN with humps on EM" }
  ]},

  "Hypertension with CKD": { gm: [
    "Target BP: <130/80 mmHg in CKD (especially if proteinuric)",
    "ACEi or ARB: FIRST LINE — renoprotective, reduce proteinuria; monitor K+ and creatinine",
    "Low-sodium diet (<5–6 g/day)",
    "Manage CKD complications: anaemia (EPO), hyperphosphataemia, metabolic acidosis, secondary hyperparathyroidism",
    "Avoid nephrotoxins: NSAIDs, contrast agents, aminoglycosides",
    "Cardiovascular risk reduction: statins, antiplatelet agents",
    "Dialysis planning when eGFR approaches <15 mL/min"
  ], pm: [
    { name: "Ramipril / Enalapril (ACEi)", dose: "1st line; 5–20 mg/day; reduces proteinuria; renoprotective; monitor K+ and creatinine at 2 weeks" },
    { name: "Losartan / Irbesartan (ARB)", dose: "If ACEi not tolerated; same renoprotective benefit; avoid combination ACEi+ARB" },
    { name: "Amlodipine 5–10 mg OD", dose: "Add-on antihypertensive; CCB; no renal dose adjustment needed" },
    { name: "Furosemide 40–250 mg/day", dose: "Volume overload in CKD; thiazides ineffective if eGFR <30" },
    { name: "Doxazosin (alpha-blocker)", dose: "Step 4; useful in resistant HTN + CKD; no renal dose adjustment" }
  ], tests: [
    { name: "eGFR, serum creatinine, urea", note: "Monitor renal function; CKD staging (G1–G5); check 2 weeks after starting/changing RAS blockade" },
    { name: "Urine ACR (albumin:creatinine ratio)", note: "Proteinuria quantification; ACR >3 = significant; target with ACEi/ARB" },
    { name: "Serum potassium", note: "Hyperkalaemia risk with ACEi/ARB in CKD; K+ <5.5 to continue RAS therapy" },
    { name: "FBC", note: "Anaemia of CKD (normochromic normocytic); EPO deficiency" },
    { name: "Renal USS", note: "Kidney size, cortical echogenicity, obstruction; small echogenic kidneys = CKD" }
  ]},

  "Lupus Nephritis": { gm: [
    "Treatment based on ISN/RPS class (class III/IV most severe — diffuse proliferative)",
    "Hydroxychloroquine: all SLE patients with nephritis",
    "Induction therapy: high-dose corticosteroids + cyclophosphamide OR mycophenolate mofetil (MMF)",
    "Maintenance therapy: MMF or azathioprine + low-dose prednisolone (minimum 3 years)",
    "Strict BP control (<130/80): ACEi/ARB preferred",
    "Hydroxychloroquine: reduces flares and overall mortality",
    "Renal transplantation: ESRD from LN"
  ], pm: [
    { name: "Prednisolone 0.5–1 mg/kg/day (+ IV methylprednisolone pulses)", dose: "Induction; 3× IV methylpred 500 mg pulses for rapidly progressive disease; taper over months" },
    { name: "Mycophenolate mofetil (MMF) 2–3 g/day", dose: "Preferred induction for non-black patients; also maintenance at 1–2 g/day" },
    { name: "Cyclophosphamide IV (Euro-Lupus low-dose)", dose: "Induction: 500 mg IV fortnightly × 6; better tolerated than high-dose; for severe class IV" },
    { name: "Hydroxychloroquine 200–400 mg/day", dose: "All LN patients; reduces flares; antithrombotic; monitor eyes annually" },
    { name: "Belimumab (anti-BLyS)", dose: "Add-on for active SLE/LN; reduces flares and steroid requirements" },
    { name: "Voclosporin + MMF", dose: "New regimen for class III/IV/V LN; calcineurin inhibitor + MMF; approved 2021" }
  ], tests: [
    { name: "Renal biopsy", note: "ESSENTIAL for classification; ISN/RPS class I–VI; class III/IV (proliferative) = most severe, needs aggressive treatment" },
    { name: "Anti-dsDNA + complement (C3, C4)", note: "Rising anti-dsDNA + falling complement = disease activity marker; monitor every 3 months" },
    { name: "Urine ACR / 24h protein", note: "Proteinuria quantification; nephrotic range (>3.5g/day) in class V (membranous LN)" },
    { name: "Urine microscopy (RBC casts)", note: "Active nephritis = RBC casts + dysmorphic RBCs" },
    { name: "eGFR trend", note: "Rapidly declining eGFR = urgent biopsy; crescentic GN possible" }
  ]},

  "Ankylosing Spondylitis": { gm: [
    "Exercise and physiotherapy: CENTRAL to management; maintain spinal mobility",
    "Hydrotherapy and breathing exercises: reduce kyphosis progression",
    "NSAIDs: 1st line; continuous use if active disease (may slow radiographic progression)",
    "Biological therapy if NSAIDs fail",
    "Eye review urgently: acute anterior uveitis — topical steroids + mydriatics",
    "Screen for complications: aortic regurgitation, AV block, ILD",
    "Avoid spinal manipulation; caution with atlantoaxial instability"
  ], pm: [
    { name: "Naproxen 500 mg BD or Diclofenac 75 mg BD", dose: "1st line NSAID; continuous if active disease; gastroprotection with PPI" },
    { name: "Anti-TNF biologics (Adalimumab / Etanercept / Infliximab / Certolizumab)", dose: "Active AS failing ≥2 NSAIDs; BASDAI >4; dramatically reduce inflammation and symptoms" },
    { name: "IL-17 inhibitor (Secukinumab / Ixekizumab)", dose: "Alternative to anti-TNF; especially if anterior uveitis or IBD not predominant" },
    { name: "Sulfasalazine 2–3 g/day", dose: "Peripheral joint involvement (not axial); limited benefit for spine" },
    { name: "Local steroid injections", dose: "SI joint injection; peripheral joint or tendon enthesis injection" }
  ], tests: [
    { name: "HLA-B27", note: "Present in 90–95% of AS patients; not diagnostic alone (8% of normal population HLA-B27 positive); supports diagnosis" },
    { name: "MRI sacroiliac joints", note: "GOLD STANDARD for early diagnosis; bone marrow oedema (STIR sequences); detects early changes before X-ray" },
    { name: "X-ray pelvis (SI joints)", note: "Sacroiliitis grading I–IV; syndesmophytes (bamboo spine); squaring of vertebral bodies" },
    { name: "ESR, CRP, FBC", note: "Elevated in active disease; CRP correlates with disease activity (BASDAI/ASDAS scores)" },
    { name: "Echocardiogram", note: "Aortic regurgitation; aortitis assessment in long-standing disease" }
  ]},

  "Juvenile Idiopathic Arthritis": { gm: [
    "Multidisciplinary team: paediatric rheumatology, physiotherapy, occupational therapy, ophthalmology",
    "Regular slit-lamp eye examination: uveitis (often asymptomatic — can cause blindness if missed)",
    "NSAIDs: symptom relief; not disease-modifying",
    "Methotrexate: 1st DMARD; effective for polyarticular and oligoarticular JIA",
    "Biologics: anti-TNF or IL-6 inhibitors if DMARD failure",
    "Systemic JIA (Still's disease): IL-1 and IL-6 inhibitors (anakinra, tocilizumab) preferred",
    "School and psychosocial support: important in children with chronic disease"
  ], pm: [
    { name: "Naproxen 10–15 mg/kg/day", dose: "Symptom relief; anti-inflammatory; pseudoporphyria risk (avoid if photosensitive)" },
    { name: "Methotrexate 10–15 mg/m²/week + Folic acid", dose: "1st line DMARD; polyarticular and oligoarticular JIA; oral or SC; monitor FBC + LFTs" },
    { name: "Etanercept / Adalimumab (anti-TNF)", dose: "Polyarticular JIA failing MTX; also for uveitis (adalimumab preferred)" },
    { name: "Tocilizumab (anti-IL-6)", dose: "Systemic JIA; polyarticular JIA failing anti-TNF" },
    { name: "Anakinra / Canakinumab (anti-IL-1)", dose: "Systemic JIA with macrophage activation syndrome risk" },
    { name: "Intra-articular triamcinolone", dose: "Oligoarticular JIA; joint injection under GA; reduces local inflammation" }
  ], tests: [
    { name: "FBC, ESR, CRP, ferritin", note: "Systemic JIA: very high ferritin (>10,000 suggests MAS); anaemia of chronic disease" },
    { name: "ANA (anti-nuclear antibody)", note: "Positive ANA in oligoarticular JIA = HIGH risk of uveitis; titre correlates with eye disease" },
    { name: "RF (rheumatoid factor) + anti-CCP", note: "RF-positive polyarticular JIA = similar prognosis to adult RA; erosive disease" },
    { name: "Slit-lamp eye examination", note: "Uveitis screening: oligoarticular ANA+ = every 3 months; other subtypes = 6-monthly" },
    { name: "X-ray affected joints", note: "Periarticular osteoporosis; soft tissue swelling; late: joint space narrowing, erosions" }
  ]},

  "Motor Neuron Disease": { gm: [
    "Specialist MND clinic: neurologist, respiratory physician, dietician, speech therapist, occupational therapist, palliative care",
    "Multidisciplinary support is core — no curative treatment",
    "Respiratory support: NIV when FVC <50% or symptomatic respiratory failure; invasive ventilation — patient choice",
    "Nutritional support: PEG (percutaneous endoscopic gastrostomy) if dysphagia; insert when FVC >50%",
    "Communication aids: augmentative and alternative communication (AAC) devices",
    "Riluzole: only licensed neuroprotective drug; modest survival benefit (~3 months)",
    "Advance care planning and preferred place of death: early discussion"
  ], pm: [
    { name: "Riluzole 50 mg BD", dose: "Only licensed disease-modifying drug; glutamate antagonist; ~3 months survival benefit; monitor LFTs" },
    { name: "Edaravone (Radicava) IV", dose: "Approved in USA/Japan; free radical scavenger; slows decline in selected early ALS" },
    { name: "Baclofen 5–80 mg/day", dose: "Spasticity management (UMN component)" },
    { name: "Quinine sulphate 300 mg nocte", dose: "Cramps management" },
    { name: "Glycopyrronium / Hyoscine", dose: "Sialorrhoea (drooling) — reduce secretions" },
    { name: "Lorazepam / Morphine (palliative)", dose: "Breathlessness, anxiety, pain in end-stage disease" }
  ], tests: [
    { name: "EMG + nerve conduction studies", note: "GOLD STANDARD: active denervation (fibrillations, positive sharp waves) + chronic reinnervation in ≥3 regions; normal NCS (no sensory loss)" },
    { name: "MRI brain + spine", note: "Exclude structural causes; corticospinal tract signal change on MRI (supportive)" },
    { name: "Pulmonary function tests (FVC supine + erect)", note: "FVC <80% = monitor; <50% = NIV initiation; supine FVC preferred for diaphragm weakness" },
    { name: "SOD1 gene testing", note: "Familial ALS (5–10%); SOD1, C9orf72, FUS mutations; genetic counselling" },
    { name: "Awake overnight oximetry", note: "Screen for nocturnal hypoventilation; ≥5% of night with SpO2 <88% = NIV indication" }
  ]},

  "Multiple Sclerosis": { gm: [
    "Neurologist-led MDT: physiotherapy, occupational therapy, bladder specialist, counsellor",
    "Acute relapse treatment: IV methylprednisolone 1g/day × 3–5 days (speeds recovery, does not alter long-term outcome)",
    "Disease-modifying therapies (DMTs): reduce relapse rate and disability progression",
    "Symptomatic management: spasticity, bladder, fatigue, pain, depression",
    "Bladder: self-catheterisation for retention; oxybutynin for urgency; desmopressin for nocturia",
    "Vitamin D supplementation: low vitamin D associated with MS activity",
    "Pregnancy: MS relapses reduce during pregnancy, increase post-partum"
  ], pm: [
    { name: "Beta-interferon 1a / 1b (Avonex/Rebif/Betaseron)", dose: "Moderate efficacy DMT; SC or IM; reduces relapses by ~30%; flu-like side effects" },
    { name: "Glatiramer acetate (Copaxone)", dose: "Moderate efficacy DMT; SC daily; injection site reactions; no flu symptoms" },
    { name: "Natalizumab (Tysabri)", dose: "High efficacy anti-α4 integrin; 68% reduction in relapses; PML risk (JC virus)" },
    { name: "Alemtuzumab (Lemtrada)", dose: "Very high efficacy; anti-CD52; IV infusion courses; significant autoimmune side effects" },
    { name: "Ocrelizumab (Ocrevus)", dose: "Anti-CD20; primary progressive MS + relapsing MS; first drug approved for PPMS" },
    { name: "Baclofen 10–80 mg/day", dose: "Spasticity; titrate slowly; abrupt withdrawal causes seizures" },
    { name: "IV methylprednisolone 1g/day × 3 days", dose: "Acute relapse; speeds recovery; does not improve long-term outcome" }
  ], tests: [
    { name: "MRI brain + spine (gadolinium-enhanced)", note: "GOLD STANDARD: dissemination in space and time; T2 lesions (plaques), gadolinium-enhancing (active); juxtacortical, periventricular, infratentorial, spinal cord" },
    { name: "CSF analysis (lumbar puncture)", note: "Oligoclonal bands (IgG) in CSF (not serum) — present in 90%; elevated IgG index; lymphocytosis in active MS" },
    { name: "Visual evoked potentials (VEP)", note: "Delayed P100 latency = optic nerve demyelination; useful in clinically isolated syndrome" },
    { name: "Anti-AQP4 antibody (anti-aquaporin-4)", note: "Distinguish from NMOSD (Neuromyelitis Optica); positive in 70–80% of NMO" }
  ]},

  "Friedreich's Ataxia": { gm: [
    "No disease-modifying therapy available — supportive care",
    "Multidisciplinary team: neurology, cardiology, physiotherapy, orthopaedic surgery",
    "Physiotherapy: maintain mobility, prevent contractures",
    "Orthopaedic surgery: pes cavus correction, scoliosis surgery",
    "Cardiomyopathy management: echo surveillance, ACEi/beta-blockers if systolic dysfunction",
    "Diabetes management if present (frataxin deficiency affects pancreas)",
    "Genetic counselling: autosomal recessive (GAA repeat expansion in frataxin gene FXN)"
  ], pm: [
    { name: "Idebenone 450–2250 mg/day", dose: "Antioxidant; improves cardiomyopathy in some trials; used in practice despite limited evidence" },
    { name: "Omaveloxolone (Skyclarys)", dose: "NRF2 activator; approved USA 2023 for FA; slows neurological decline" },
    { name: "Beta-blocker (bisoprolol 2.5–10 mg)", dose: "Hypertrophic cardiomyopathy; symptomatic management" },
    { name: "Insulin / metformin", dose: "Diabetes mellitus (30% develop DM)" },
    { name: "Baclofen / tizanidine", dose: "Spasticity management" }
  ], tests: [
    { name: "Genetic testing (FXN GAA repeat expansion)", note: "DIAGNOSTIC: >66 GAA repeats in both alleles; confirms diagnosis without biopsy" },
    { name: "Echocardiography", note: "Hypertrophic cardiomyopathy (50–80%); annual monitoring; systolic dysfunction late sign" },
    { name: "ECG", note: "T-wave inversion (commonest); short PR interval; arrhythmias (AF, VT)" },
    { name: "Nerve conduction studies + EMG", note: "Absent sensory action potentials; reduced or absent sensory nerve conduction velocities; normal motor NCS" },
    { name: "MRI brain + spine", note: "Spinal cord atrophy (posterior columns, spinocerebellar tracts); cerebellar atrophy late" }
  ]},

  "Guillain-Barré Syndrome": { gm: [
    "Monitor respiratory function urgently: FVC every 4 hours; if FVC <1.5L or <20 mL/kg → ICU and consider intubation",
    "Monitor swallowing: risk of aspiration",
    "Autonomic monitoring: continuous cardiac monitoring (arrhythmias), BP fluctuations",
    "IVIG or plasma exchange: equally effective; IVIG preferred (simpler); within 2 weeks of onset",
    "Do NOT use steroids — shown to worsen outcome in GBS",
    "DVT prophylaxis: LMWH + compression stockings",
    "Physiotherapy and rehabilitation: crucial for recovery",
    "Analgesia: neuropathic pain prominent; gabapentin, carbamazepine, opioids"
  ], pm: [
    { name: "IVIG 0.4 g/kg/day × 5 days (or 1 g/kg/day × 2 days)", dose: "1st line; equivalent to plasma exchange; start within 2 weeks of weakness onset" },
    { name: "Plasma exchange (plasmapheresis)", dose: "5 exchanges over 2 weeks; remove pathogenic antibodies; equivalent efficacy to IVIG" },
    { name: "Gabapentin 300 mg TDS", dose: "Neuropathic pain; titrate; often severe radicular/burning pain in GBS" },
    { name: "LMWH (enoxaparin) + TED stockings", dose: "DVT prophylaxis; immobile patients at high VTE risk" },
    { name: "Morphine PCA / IV opioid", dose: "Severe neuropathic pain unresponsive to gabapentin" }
  ], tests: [
    { name: "Nerve conduction studies (NCS) + EMG", note: "GOLD STANDARD: demyelinating pattern (prolonged distal latencies, slow conduction, conduction block) in AIDP; axonal pattern in AMAN/AMSAN" },
    { name: "CSF (lumbar puncture)", note: "Albuminocytological dissociation: elevated protein (>0.45 g/L) with normal WBC (<10 cells/mm³) — classic; may be normal in first week" },
    { name: "FVC (forced vital capacity) serial measurements", note: "Key monitoring: FVC <1.5L or declining trend → ICU; FVC <1L → intubation" },
    { name: "Anti-ganglioside antibodies (anti-GQ1b, anti-GM1)", note: "Anti-GQ1b: Miller Fisher syndrome (ophthalmoplegia, ataxia, areflexia); anti-GM1: axonal GBS" },
    { name: "Campylobacter jejuni serology/stool culture", note: "Most common preceding infection (30%); associated with AMAN subtype and anti-GM1" }
  ]},

  "Chronic Inflammatory Demyelinating Polyneuropathy": { gm: [
    "Distinguish from GBS: CIDP = progressive >8 weeks, relapsing; GBS = acute, monophasic",
    "Three evidence-based treatments: IVIG, plasma exchange, corticosteroids",
    "IVIG: 1st line for most patients; 2g/kg loading then maintenance every 3–4 weeks",
    "Steroids: prednisolone 1mg/kg/day; taper once response achieved",
    "Long-term maintenance: most patients require ongoing therapy",
    "Physiotherapy: maintain function and prevent contractures",
    "Monitor for relapses and adjust treatment dose/frequency accordingly"
  ], pm: [
    { name: "IVIG 2 g/kg over 2–5 days (loading)", dose: "Then maintenance 1 g/kg every 3–4 weeks; adjust based on response" },
    { name: "Prednisolone 60 mg/day (or 1 mg/kg/day)", dose: "Taper over months once response; long-term low dose maintenance often needed" },
    { name: "Plasma exchange", dose: "Alternative to IVIG; 5–6 exchanges; useful if IVIG fails" },
    { name: "Azathioprine / Mycophenolate", dose: "Steroid-sparing agents for long-term maintenance" },
    { name: "Rituximab", dose: "Refractory CIDP; particularly if anti-CNTN1 or anti-NF155 antibody positive" }
  ], tests: [
    { name: "Nerve conduction studies (NCS)", note: "Demyelinating: prolonged distal latency, slow conduction velocity <75% lower limit, conduction block, temporal dispersion; at least 2 nerves affected" },
    { name: "CSF analysis", note: "Elevated protein (typically >1g/L); normal cells (albuminocytological dissociation); oligoclonal bands absent" },
    { name: "Anti-nodal/paranodal antibodies (anti-NF155, anti-CNTN1, anti-CASPR1)", note: "Positive in 10–15%; predict poor response to IVIG (need rituximab); important emerging biomarkers" },
    { name: "Nerve biopsy (sural)", note: "Onion-bulb formation (repeated demyelination/remyelination); macrophage-associated demyelination; only if diagnosis uncertain" }
  ]},

  "Spastic Paraplegia (Cord Compression)": { gm: [
    "Medical emergency: urgent MRI spine within 24 hours of suspected cord compression",
    "Identify and treat cause: TB spine, malignant cord compression, disc prolapse, abscess",
    "Malignant cord compression: high-dose dexamethasone 16mg stat → 8mg BD; urgent radiotherapy or surgery",
    "TB spine: anti-TB therapy (RIPE regimen × 6–12 months); surgery if instability or failure",
    "Physiotherapy: prevent joint contractures, improve mobility",
    "Bladder management: clean intermittent catheterisation (CIC) or suprapubic catheter",
    "Bowel management: regular laxatives, digital rectal stimulation",
    "Pressure ulcer prevention: pressure-relieving mattress, regular repositioning"
  ], pm: [
    { name: "Dexamethasone 16 mg IV stat → 8 mg BD", dose: "Malignant cord compression; reduces oedema; start immediately; taper after radiotherapy" },
    { name: "Baclofen 10–80 mg/day", dose: "Spasticity; start 5mg TDS, titrate; abrupt withdrawal causes seizures" },
    { name: "Tizanidine 2–36 mg/day", dose: "Alternative antispastic; less muscle weakness than baclofen" },
    { name: "Oxybutynin 5 mg TDS / Solifenacin", dose: "Detrusor overactivity/bladder urgency" },
    { name: "LMWH", dose: "DVT prophylaxis in paralysed patients" }
  ], tests: [
    { name: "MRI spine (emergency, gadolinium-enhanced)", note: "GOLD STANDARD: level of compression, cause, cord signal change; T2 cord signal = poor prognostic sign" },
    { name: "Plain X-ray spine", note: "Vertebral collapse, gibbus deformity, erosion of pedicles; quick first-line imaging" },
    { name: "CT spine", note: "Bony detail; fracture assessment; better than MRI for bone lesions" },
    { name: "Bone scan / PET-CT", note: "Multiple metastases assessment; primary cancer staging" },
    { name: "Bone marrow biopsy / CT-guided vertebral biopsy", note: "Histological diagnosis of cause; essential for malignancy" }
  ]},

  "Transverse Myelitis": { gm: [
    "Urgent MRI spine within 4 hours to exclude compressive lesion",
    "High-dose IV methylprednisolone: 1g/day × 5 days (speeds recovery in inflammatory/demyelinating TM)",
    "Plasma exchange (PLEX): if steroid failure, MOG/AQP4 antibody positive, rapidly progressive",
    "Identify underlying cause: MS, NMOSD, SLE, Sjögren's, viral (VZV, EBV, CMV)",
    "Bladder management: intermittent catheterisation",
    "DVT prophylaxis: LMWH",
    "Rehabilitation: physiotherapy, occupational therapy essential",
    "NMOSD: long-term immunosuppression (azathioprine, rituximab) to prevent relapses"
  ], pm: [
    { name: "IV Methylprednisolone 1g/day × 5 days", dose: "1st line for inflammatory TM; speeds neurological recovery" },
    { name: "Plasma exchange (PLEX) × 5 cycles", dose: "Steroid-refractory; MOG/AQP4 positive; rapidly deteriorating" },
    { name: "Azathioprine 2–3 mg/kg/day", dose: "Long-term prevention in NMOSD" },
    { name: "Rituximab 1g × 2 doses", dose: "NMOSD maintenance therapy; preferred in anti-AQP4 positive" },
    { name: "Baclofen", dose: "Spasticity" }
  ], tests: [
    { name: "MRI spine (T2 with gadolinium)", note: "T2 hyperintensity spanning ≥3 vertebral segments = NMOSD (longitudinally extensive); <3 segments = MS more likely" },
    { name: "Anti-AQP4 (anti-aquaporin-4) antibody", note: "Neuromyelitis optica spectrum disorder (NMOSD); positive = more severe; long-term immunosuppression needed" },
    { name: "Anti-MOG antibody", note: "MOG antibody-associated disease (MOGAD); distinct from NMOSD; responds to steroids" },
    { name: "CSF analysis", note: "Pleocytosis (>50 cells = inflammatory); elevated protein; oligoclonal bands (MS)" },
    { name: "MRI brain", note: "Demyelinating lesions suggest MS; area postrema lesion = NMOSD pathognomonic" }
  ]},

  "Wilson's Disease": { gm: [
    "Lifelong copper chelation or zinc therapy",
    "Avoid high-copper foods: shellfish, liver, nuts, chocolate, mushrooms",
    "Penicillamine: 1st line; copper chelator",
    "Zinc acetate: inhibits copper absorption; preferred maintenance or mild disease",
    "Trientine: alternative chelator if penicillamine intolerant",
    "Liver transplantation: acute liver failure or end-stage cirrhosis (curative)",
    "Screen siblings and children: serum ceruloplasmin + 24h urine copper + slit-lamp",
    "Neurological monitoring: neuropsychiatric symptoms may worsen initially with penicillamine"
  ], pm: [
    { name: "Penicillamine 750–1500 mg/day", dose: "1st line copper chelator; urinary copper excretion increases; take 30–60 min before meals; SLE-like side effects; give pyridoxine supplement" },
    { name: "Trientine (triethylene tetramine) 750–2000 mg/day", dose: "If penicillamine intolerant; equally effective chelator; fewer side effects" },
    { name: "Zinc acetate 150 mg/day (50 mg TDS)", dose: "Inhibits intestinal copper absorption; preferred maintenance; mild hepatic disease; preferred in pregnancy" },
    { name: "Tetrathiomolybdate", dose: "Investigational; rapid copper chelation; neurological WD (penicillamine can worsen neurology)" }
  ], tests: [
    { name: "Serum ceruloplasmin (↓)", note: "Low in 95% of WD (<200 mg/L); but can be normal in acute liver failure; also low in protein-losing states" },
    { name: "24-hour urine copper (↑)", note: ">100 mcg/24h (>1.6 µmol/24h) = significant; >40 mcg/24h in symptomatic patient is diagnostic; >1600 mcg/24h in acute liver failure" },
    { name: "Kayser-Fleischer rings (slit-lamp)", note: "Present in 95% with neurological WD; 50% with hepatic WD; absent does NOT exclude WD" },
    { name: "Liver biopsy (hepatic copper concentration)", note: "Hepatic copper >250 mcg/g dry weight = DIAGNOSTIC (normal <50 mcg/g)" },
    { name: "ATP7B gene mutation testing", note: "Genetic confirmation; identifies compound heterozygotes; family screening" }
  ]},

  "Intracranial Space Occupying Lesion": { gm: [
    "Urgent CT head with contrast as first investigation",
    "MRI brain preferred for posterior fossa and more detailed characterisation",
    "Raised ICP management: head elevation 30°, avoid hypotension, IV mannitol for acute herniation",
    "Dexamethasone: reduces peri-tumour oedema; 4–8 mg QDS; taper gradually",
    "Primary brain tumour: MDT — neurosurgery, oncology, radiotherapy",
    "Surgical options: biopsy, debulking, complete resection (if feasible)",
    "Seizure management: levetiracetam if seizures occur (prophylaxis not routinely recommended)",
    "Metastasis: identify and treat primary; whole brain radiotherapy or stereotactic radiosurgery"
  ], pm: [
    { name: "Dexamethasone 4–8 mg QDS", dose: "Peri-tumoural oedema; start immediately; taper once definitive treatment initiated" },
    { name: "Mannitol 20% 0.25–0.5 g/kg IV", dose: "Acute herniation/raised ICP; osmotic diuresis; temporary bridge" },
    { name: "Levetiracetam 500 mg BD (escalate to 1500 mg BD)", dose: "Seizure management; preferred over phenytoin; fewer drug interactions" },
    { name: "Temozolomide (chemotherapy)", dose: "Glioblastoma (GBM); concurrent with radiotherapy then adjuvant; alkylating agent" },
    { name: "Bevacizumab (anti-VEGF)", dose: "Recurrent GBM; reduces oedema and steroid requirements" }
  ], tests: [
    { name: "CT head (with contrast)", note: "First-line emergency: identifies mass, midline shift, hydrocephalus, herniation; ring enhancement = high-grade tumour or abscess" },
    { name: "MRI brain (gadolinium) with spectroscopy", note: "Superior tissue characterisation; MR spectroscopy: choline peak ↑ (tumour), NAA ↓; differentiates tumour from demyelination, abscess" },
    { name: "CT chest/abdomen/pelvis + CT-PET", note: "Search for primary malignancy in suspected metastasis" },
    { name: "Stereotactic biopsy", note: "Histological diagnosis; WHO grading I–IV; essential before chemotherapy/radiotherapy" },
    { name: "MGMT methylation status + IDH mutation", note: "GBM: MGMT methylated = better response to temozolomide; IDH mutation = better prognosis (WHO grade)" }
  ]},

  "Graves' Disease (Hyperthyroidism)": { gm: [
    "Three treatment options: antithyroid drugs (ATDs), radioactive iodine (RAI), thyroidectomy",
    "ATDs: carbimazole/propylthiouracil — 1st line for initial management; 12–18 months course",
    "Block-and-replace regimen: high-dose carbimazole + levothyroxine (maintains euthyroid)",
    "Titration regimen: adjust carbimazole dose to TSH/FT4",
    "Beta-blocker: symptom relief (tremor, palpitations, sweating) while awaiting euthyroid state",
    "RAI (I-131): definitive treatment; contraindicated in pregnancy, active thyroid eye disease",
    "Thyroidectomy: large goitre, failed medical, patient preference; risk of hypoparathyroidism and recurrent laryngeal nerve palsy"
  ], pm: [
    { name: "Carbimazole 10–40 mg/day", dose: "1st line ATD; blocks thyroid hormone synthesis; agranulocytosis risk (0.3%); STOP and check WBC if sore throat/fever" },
    { name: "Propylthiouracil (PTU) 200–400 mg/day", dose: "Preferred in 1st trimester pregnancy; also blocks T4→T3 conversion; hepatotoxicity risk" },
    { name: "Propranolol 20–80 mg TDS", dose: "Beta-blocker; symptomatic relief; blocks peripheral T4→T3 conversion; use until euthyroid" },
    { name: "Radioactive iodine (I-131)", dose: "Definitive; outpatient; results in hypothyroidism (expected outcome); avoid pregnancy ×4–6 months post-RAI" },
    { name: "Lugol's iodine solution", dose: "Pre-operative preparation + thyroid storm; blocks hormone release acutely" }
  ], tests: [
    { name: "TFTs: TSH (↓↓), Free T4 (↑), Free T3 (↑)", note: "Suppressed TSH first sign; confirm with FT4; FT3 elevated in T3 toxicosis (TSH-low, FT4-normal)" },
    { name: "TSH receptor antibodies (TRAb/TSI)", note: "Positive in 95% of Graves'; confirms autoimmune cause; titre correlates with disease activity; useful in pregnancy (neonatal Graves' risk)" },
    { name: "Thyroid USS + Doppler", note: "Diffuse goitre with increased vascularity (Graves'); excludes toxic nodule" },
    { name: "Thyroid uptake scan (Tc-99m or I-123)", note: "Diffuse uptake = Graves'; hot nodule = toxic adenoma; low uptake = destructive thyroiditis (De Quervain's)" },
    { name: "FBC (baseline before carbimazole)", note: "Baseline WBC; monitor for agranulocytosis; stop carbimazole if neutrophils <1.0" }
  ]},

  "Hypopituitarism (Sheehan's Syndrome)": { gm: [
    "Systematic hormone replacement for each deficient axis",
    "Hydrocortisone FIRST before thyroid replacement (avoid addisonian crisis)",
    "Hydrocortisone: essential for life (cortisol deficiency); sick-day rules — double dose during illness",
    "Levothyroxine after hydrocortisone is established",
    "Oestrogen replacement (women premenopausal): HRT",
    "Growth hormone: improves body composition, QoL, bone density; adult GHD",
    "Desmopressin: if cranial DI coexists",
    "Monitor: regular pituitary MRI, hormone levels, bone density"
  ], pm: [
    { name: "Hydrocortisone 15–25 mg/day (divided: 10mg morning, 5mg noon, 5mg evening)", dose: "Cortisol replacement; physiological dosing; sick-day rules: double dose if fever/illness/surgery" },
    { name: "Levothyroxine 50–150 mcg/day", dose: "Thyroid replacement; dose by FT4 (NOT TSH — which is suppressed in central hypothyroidism)" },
    { name: "HRT (oestradiol + progesterone)", dose: "Premenopausal women with FSH/LH deficiency; until natural menopause age" },
    { name: "Testosterone (in men)", dose: "Hypogonadotropic hypogonadism; IM depot or topical gel" },
    { name: "Recombinant GH (somatropin) SC", dose: "Adult GHD: 0.2–0.4 mg/day; improves body composition, bone density, QoL; titrate by IGF-1" }
  ], tests: [
    { name: "Pituitary hormone screen: IGF-1, cortisol (09:00), FT4, TSH, FSH, LH, testosterone/oestradiol, prolactin", note: "9am cortisol <100 nmol/L = adrenal insufficiency; 100–500 = stimulation test needed" },
    { name: "Short Synacthen test (SST)", note: "Peak cortisol <500 nmol/L at 30 min = adrenal insufficiency" },
    { name: "Insulin tolerance test (ITT)", note: "Gold standard for GH and ACTH reserve; contraindicated in epilepsy, IHD; specialist centre" },
    { name: "MRI pituitary (with gadolinium)", note: "Sheehan's: empty sella or pituitary necrosis; size, stalk, optic chiasm compression" },
    { name: "Visual field testing (Humphrey)", note: "Bitemporal hemianopia from chiasmal compression" }
  ]},

  "Acromegaly": { gm: [
    "Aim: normalise IGF-1 and GH (<1 mcg/L on OGTT); treat tumour",
    "Surgery: transsphenoidal surgery (TSS) — 1st line for most; cure rate ~60–80% microadenoma",
    "Radiotherapy: if surgery incomplete; fractionated or stereotactic (Gamma Knife); may take years",
    "Medical: when surgery not curative or patient unfit",
    "Manage complications: sleep apnoea (CPAP), DM, HTN, colon polyps (colonoscopy)",
    "Pituitary insufficiency screen post-surgery",
    "Screen for cardiac complications: echocardiogram (cardiomyopathy, valve disease)"
  ], pm: [
    { name: "Octreotide LAR 20–40 mg IM monthly (somatostatin analogue)", dose: "1st line medical; reduces GH secretion; normalises IGF-1 in ~60%; also reduces tumour size" },
    { name: "Lanreotide Autogel 60–120 mg SC monthly", dose: "Alternative somatostatin analogue; same efficacy as octreotide" },
    { name: "Cabergoline 0.5–3.5 mg/week", dose: "Dopamine agonist; adjunct; useful if mixed GH/prolactin adenoma; oral; cheaper" },
    { name: "Pegvisomant 10–30 mg/day SC", dose: "GH receptor antagonist; normalises IGF-1 in >90%; does NOT reduce tumour size; most effective" }
  ], tests: [
    { name: "IGF-1 (age-matched)", note: "BEST screening test; elevated in acromegaly; correlates with disease activity; monitor treatment response" },
    { name: "OGTT with GH levels", note: "GOLD STANDARD for diagnosis: GH fails to suppress to <1 mcg/L (or <0.4 mcg/L with sensitive assay) after 75g glucose = confirms autonomous GH secretion" },
    { name: "MRI pituitary (gadolinium)", note: "Tumour size, invasion, relationship to chiasm; macroadenoma (>1cm) in most acromegaly patients" },
    { name: "Visual fields (Goldmann or Humphrey)", note: "Chiasmal compression; bitemporal hemianopia" },
    { name: "Echo, colonoscopy, sleep study", note: "Cardiomyopathy; colonic polyps/cancer (2× increased risk); sleep apnoea (70%)" }
  ]},

  "Diabetes Mellitus": { gm: [
    "Lifestyle modification: medical nutrition therapy (MNT), physical activity, weight loss (T2DM)",
    "HbA1c targets: <48 mmol/mol (6.5%) for most T2DM; <53 mmol/mol (7%) if complex",
    "Self-monitoring blood glucose: essential in T1DM; consider in T2DM on insulin",
    "Sick-day rules: maintain insulin in illness (never omit in T1DM), monitor glucose frequently",
    "Foot care: annual podiatry; foot examination; patient education",
    "Annual eye screening: diabetic retinopathy (dilated fundoscopy or retinal photography)",
    "Cardiovascular risk: statins in T2DM >40 years or with CV risk; ACEi if proteinuria; aspirin",
    "Hypertension: <130/80 target; ACEi/ARB 1st line"
  ], pm: [
    { name: "Metformin 500 mg BD → 1g BD (T2DM)", dose: "1st line T2DM; biguanide; reduces hepatic glucose output; no hypoglycaemia; stop if eGFR <30; GI side effects" },
    { name: "SGLT-2 inhibitor (Empagliflozin/Dapagliflozin)", dose: "T2DM + CVD/CKD/HF — preferred; reduces CV events and renal progression; glucosuria; DKA risk" },
    { name: "GLP-1 agonist (Semaglutide/Liraglutide SC)", dose: "T2DM + obesity + CVD; weight loss + HbA1c reduction; GI side effects; weekly SC preferred" },
    { name: "Insulin (Basal-Bolus regimen — T1DM)", dose: "T1DM: basal (glargine/detemir OD) + bolus (novorapid/aspart before meals); carb counting; CGM ideal" },
    { name: "Sitagliptin/Alogliptin (DPP-4 inhibitor)", dose: "T2DM; weight neutral; safe in CKD (dose-adjusted); no hypoglycaemia" },
    { name: "Gliclazide (sulphonylurea)", dose: "T2DM; stimulates insulin secretion; hypoglycaemia risk; dose-reduce in elderly/CKD" }
  ], tests: [
    { name: "HbA1c", note: "Glycaemic control over 3 months; diagnosis if ≥48 mmol/mol (6.5%); target <53 mmol/mol (7%); unreliable in haemolytic anaemia, haemoglobinopathies" },
    { name: "Fasting plasma glucose / OGTT", note: "FPG ≥7.0 mmol/L = DM; 2h OGTT ≥11.1 = DM; impaired fasting 5.6–6.9; IGT 7.8–11.0 at 2h" },
    { name: "Urine ACR (albumin:creatinine ratio)", note: "Annual screening; >3 mg/mmol = microalbuminuria; >30 = macroalbuminuria; start ACEi/ARB" },
    { name: "eGFR + creatinine", note: "Annual renal function; DKD staging; adjust medications (metformin, SGLT2i)" },
    { name: "Fasting lipid profile", note: "Annual; statin initiation if 10-year CVD risk >10% in T1DM or any T2DM >40 yrs" },
    { name: "Fundoscopy / retinal photography", note: "Annual diabetic retinopathy screening; refer ophthalmology if moderate background or worse" }
  ]},

  "Obesity": { gm: [
    "Stepwise approach: lifestyle → pharmacological → surgical",
    "Dietary modification: 500–600 kcal deficit/day; Mediterranean or low-carbohydrate diet",
    "Physical activity: ≥150 min/week moderate intensity aerobic + resistance training",
    "Behavioural therapy: CBT, motivational interviewing; address emotional eating",
    "Pharmacotherapy: if BMI ≥30 (or ≥27 with comorbidity) and lifestyle fails",
    "Bariatric surgery: BMI ≥40 (or ≥35 with comorbidities); most effective long-term weight loss",
    "Treat comorbidities: T2DM, HTN, dyslipidaemia, OSA (CPAP), NAFLD, PCOS"
  ], pm: [
    { name: "Orlistat 120 mg TDS with meals", dose: "Pancreatic lipase inhibitor; reduces fat absorption by 30%; GI side effects (steatorrhoea); fat-soluble vitamin supplementation" },
    { name: "Semaglutide (Wegovy) 2.4 mg weekly SC", dose: "GLP-1 agonist; 15–20% body weight reduction; nausea; approved for obesity (not just T2DM)" },
    { name: "Liraglutide (Saxenda) 3 mg/day SC", dose: "GLP-1 agonist; ~8% weight reduction; daily injection; approved for obesity" },
    { name: "Naltrexone + Bupropion (Mysimba)", dose: "Combined opioid antagonist + dopamine agonist; reduces appetite; ~5–8% weight loss" }
  ], tests: [
    { name: "BMI (weight kg ÷ height m²)", note: "Overweight ≥25; Obese ≥30; Morbidly obese ≥40; Waist circumference: >102 cm male, >88 cm female = central obesity" },
    { name: "Fasting glucose + HbA1c", note: "Screen for T2DM; annual if pre-diabetic or BMI ≥30" },
    { name: "Fasting lipid profile", note: "Dyslipidaemia common (↑TG, ↓HDL, ↑LDL); cardiovascular risk assessment" },
    { name: "LFTs + USS abdomen", note: "NAFLD; liver steatosis on USS; ALT elevation" },
    { name: "Sleep study (polysomnography)", note: "Obstructive sleep apnoea (OSA) — 30–40% of obese; EPWORTH score screening first" },
    { name: "TFTs", note: "Exclude secondary obesity: hypothyroidism, Cushing's" }
  ]},

  "Short Stature": { gm: [
    "Identify aetiology: constitutional delay, familial short stature, GH deficiency, hypothyroidism, chronic disease, chromosomal",
    "Constitutional delay of growth and puberty (CDGP): most common; reassurance; no treatment needed",
    "GH deficiency: recombinant GH therapy",
    "Hypothyroidism: levothyroxine",
    "Turner syndrome: GH therapy + oestrogen replacement",
    "Chronic disease: treat underlying disease first",
    "Psychological support: body image issues, bullying — address proactively",
    "Monitor growth: serial height measurements plotted on growth chart; height velocity"
  ], pm: [
    { name: "Recombinant GH (somatropin) SC", dose: "GH deficiency: 0.025–0.035 mg/kg/day SC; also approved for Turner syndrome, SGA, CKD, Prader-Willi; monitor IGF-1" },
    { name: "Oxandrolone (anabolic steroid)", dose: "Turner syndrome + CDGP: low-dose; increases height velocity; virilisation risk" },
    { name: "Levothyroxine", dose: "Hypothyroidism-related short stature; catch-up growth expected" },
    { name: "Testosterone (CDGP in boys)", dose: "Short course low-dose testosterone to kickstart pubertal growth spurt; 3–6 months" }
  ], tests: [
    { name: "Growth chart plotting (serial measurements)", note: "Height velocity <4 cm/year = pathological; mid-parental height calculation" },
    { name: "Bone age (X-ray left wrist)", note: "Delayed bone age = CDGP or GH deficiency; advanced bone age = precocious puberty or exogenous steroids" },
    { name: "IGF-1 + IGFBP-3", note: "Low = GH deficiency or malnutrition; age-matched reference ranges essential" },
    { name: "GH stimulation test (ITT or glucagon test)", note: "Peak GH <20 mU/L (6.7 mcg/L) = GH deficiency confirmed" },
    { name: "Karyotype (girls)", note: "Turner syndrome (45X or mosaic); indicated in all girls with unexplained short stature" },
    { name: "TFTs, FBC, coeliac screen, ESR, renal/liver function", note: "Exclude chronic disease as cause: coeliac, IBD, CKD, hypothyroidism" }
  ]},

  "Anemia (Iron Deficiency)": { gm: [
    "Identify and treat underlying cause: GI blood loss (most common in adult males and post-menopausal women), menorrhagia, malabsorption (coeliac)",
    "Dietary advice: increase iron-rich foods (red meat, lentils, dark leafy vegetables)",
    "Iron supplementation: oral preferred; takes 3–6 months to replenish stores",
    "Continue supplementation for 3 months after Hb normalises (to replenish stores)",
    "Investigate GI source: OGD + colonoscopy in males and post-menopausal women",
    "Blood transfusion: only if symptomatic severe anaemia (Hb <7 g/dL) or cardiac compromise"
  ], pm: [
    { name: "Ferrous sulphate 200 mg TDS (65 mg elemental iron/tablet)", dose: "1st line oral iron; take with vitamin C (enhances absorption); GI side effects; take on empty stomach" },
    { name: "Ferrous gluconate 300 mg BD", dose: "Better tolerated than ferrous sulphate; fewer GI effects; less elemental iron per tablet" },
    { name: "IV iron (ferric carboxymaltose / iron sucrose)", dose: "Malabsorption (coeliac, IBD), intolerance to oral iron, pregnancy 2nd/3rd trimester, pre-dialysis CKD" },
    { name: "Blood transfusion (packed RBCs)", dose: "Hb <7 g/dL symptomatic; Hb <8 g/dL with cardiac disease; give slowly (risk fluid overload)" }
  ], tests: [
    { name: "FBC + blood film", note: "Microcytic (MCV <80) hypochromic anaemia; ↑RDW; pencil cells, target cells on film; low Hb" },
    { name: "Serum iron, TIBC, transferrin saturation, serum ferritin", note: "IDA: ↓ferritin (<30 mcg/L), ↓serum iron, ↑TIBC, ↓transferrin saturation (<20%); ferritin is acute phase reactant (can be falsely elevated)" },
    { name: "Reticulocyte count", note: "Low reticulocyte count = poor bone marrow response; rises within 7–10 days of treatment (therapeutic test)" },
    { name: "OGD + colonoscopy", note: "Mandatory in all males and post-menopausal women with IDA — exclude GI malignancy, peptic ulcer, coeliac" },
    { name: "Coeliac serology (anti-TTG IgA)", note: "IDA + malabsorption; coeliac disease common cause; duodenal biopsy if positive" }
  ]},

  // ── NEW 11 DISEASES MANAGEMENT ─────────────────────

  "Diarrheal Diseases": { gm: [
    "Assess and correct dehydration: oral rehydration solution (ORS) for mild-moderate; IV fluids for severe",
    "WHO ORS: 3.5g NaCl + 2.5g NaHCO3 + 1.5g KCl + 20g glucose per litre of water",
    "BRAT diet initially then normal diet early (not prolonged fasting)",
    "Identify and isolate infective cause; stool culture if blood or prolonged >72h",
    "Avoid antimotility agents (loperamide) in bloody/infective diarrhoea — risk of toxic megacolon",
    "Hand hygiene and infection control measures",
    "Notify public health if suspected outbreak or notifiable organism"
  ], pm: [
    { name: "ORS (Oral Rehydration Solution)", dose: "Cornerstone of treatment; 200–400 mL after each loose stool; sachets or homemade" },
    { name: "IV 0.9% NaCl + KCl", dose: "Severe dehydration, vomiting, unable to tolerate orally; correct electrolytes" },
    { name: "Ciprofloxacin 500 mg BD × 3–5 days", dose: "Bacterial dysentery (Shigella, Salmonella); fluoroquinolone resistance increasing — check sensitivities" },
    { name: "Metronidazole 400 mg TDS × 7–10 days", dose: "Giardiasis, amoebic dysentery, C. difficile (mild)" },
    { name: "Fidaxomicin / Vancomycin oral", dose: "C. difficile infection; fidaxomicin preferred to reduce recurrence" },
    { name: "Loperamide 4 mg then 2 mg after each stool (max 16mg/day)", dose: "Non-infective/traveller's diarrhoea only; AVOID in bloody diarrhoea" },
    { name: "Zinc supplementation 20 mg/day × 10–14 days", dose: "Children <5 years; reduces severity and duration; WHO recommendation" }
  ], tests: [
    { name: "Stool microscopy, culture and sensitivity", note: "If bloody, febrile, or >72h duration; detect Salmonella, Shigella, Campylobacter, E. coli O157" },
    { name: "Stool for ova, cysts and parasites (OCP)", note: "Giardia, Entamoeba, Cryptosporidium; 3 samples on different days" },
    { name: "C. difficile toxin PCR (stool)", note: "If recent antibiotics or hospitalisation; gold standard C. diff detection" },
    { name: "FBC, U&E, CRP", note: "Assess severity; hypokalaemia, hyponatraemia; elevated CRP if infective" },
    { name: "Sigmoidoscopy / colonoscopy", note: "If chronic, bloody, or inflammatory cause suspected (IBD, pseudomembranous colitis)" }
  ]},

  "Enteric Fever (Typhoid)": { gm: [
    "Hospitalisation for treatment and isolation (barrier nursing)",
    "Fluid and electrolyte replacement: IV fluids if unable to tolerate orally",
    "Nutritional support: soft, easily digestible diet; small frequent meals",
    "Monitor for complications: GI perforation (rigid abdomen, sudden deterioration), GI bleed, encephalopathy",
    "Notify public health authority",
    "Test-of-cure stool cultures (3 consecutive negative cultures) before returning to food handling work",
    "Contacts: trace and screen if food handler or healthcare worker"
  ], pm: [
    { name: "Ciprofloxacin 500 mg BD × 10–14 days (oral) or 400 mg IV BD", dose: "1st choice uncomplicated typhoid (check local resistance); fluoroquinolone" },
    { name: "Ceftriaxone 2–4g/day IV × 10–14 days", dose: "Preferred in pregnant women, children, and quinolone-resistant typhoid; 3rd gen cephalosporin" },
    { name: "Azithromycin 500 mg/day × 7 days", dose: "Alternative for uncomplicated MDR typhoid; good oral bioavailability" },
    { name: "Dexamethasone 3 mg/kg IV stat then 1 mg/kg 6-hourly × 8 doses", dose: "Severe typhoid with encephalopathy or shock only; reduces mortality" },
    { name: "Chloramphenicol 500 mg QDS × 14 days", dose: "Historical 1st line; still used in resource-limited settings; aplastic anaemia risk" }
  ], tests: [
    { name: "Blood culture (most important)", note: "GOLD STANDARD; positive in 80% week 1; 40% week 3; collect BEFORE antibiotics; Salmonella typhi/paratyphi" },
    { name: "Bone marrow culture", note: "Most sensitive (90%+); positive even after antibiotic; used in diagnostic dilemma" },
    { name: "Stool and urine culture", note: "Positive in 50% week 1; useful for monitoring carriers; negative in chronic carriers on blood culture" },
    { name: "Widal test", note: "Serology; poor sensitivity and specificity; negative in early infection; not useful for chronic carriage; only after 5–7 days fever" },
    { name: "FBC, LFTs, electrolytes", note: "Leucopenia with relative lymphocytosis; mild transaminitis; hyponatraemia" }
  ]},

  "Dengue Fever": { gm: [
    "No specific antiviral treatment — supportive management",
    "Avoid NSAIDs and aspirin: bleeding risk from thrombocytopenia and platelet dysfunction",
    "Paracetamol for fever and pain (only safe analgesic)",
    "Adequate oral hydration: 2–3L/day; ORS if vomiting",
    "Monitor: FBC daily (platelet count), haematocrit (plasma leakage), BP, urine output",
    "Warning signs requiring admission: abdominal pain, persistent vomiting, rapid breathing, bleeding, lethargy, liver enlargement, platelet <100",
    "Dengue haemorrhagic fever: IV fluid resuscitation with crystalloid; avoid colloid initially",
    "Transfusion: platelets if <10 or active bleeding; packed RBCs for haemorrhage"
  ], pm: [
    { name: "Paracetamol 1g QDS (max 4g/day)", dose: "Only safe antipyretic and analgesic; avoid aspirin and NSAIDs absolutely" },
    { name: "ORS / IV Normal Saline", dose: "Hydration; IV fluid 5–10 mL/kg/h if plasma leakage (↑Hct >20%); titrate carefully" },
    { name: "Platelet transfusion", dose: "Platelet <10×10⁹/L; active bleeding; prophylactic not recommended above this threshold" },
    { name: "Packed RBC transfusion", dose: "Significant haemorrhage; Hct drop >10%; haemodynamic compromise" }
  ], tests: [
    { name: "NS1 antigen (Dengue NS1)", note: "Positive from day 1–7; most useful in early febrile phase; detects dengue antigen in serum" },
    { name: "Dengue IgM/IgG serology (ELISA)", note: "IgM positive from day 5–7; IgG = secondary infection (cross-reactive); NS1 + IgM/IgG most sensitive combination" },
    { name: "FBC: platelet count + haematocrit", note: "Thrombocytopenia (hallmark); Hct rise >20% = plasma leakage (DHF); leucopenia and neutropenia" },
    { name: "Dengue PCR (RT-PCR)", note: "Gold standard for early diagnosis; detects viral RNA days 1–5; serotyping possible" },
    { name: "Tourniquet test (Rumpel-Leede)", note: "≥10 petechiae in 1 inch² after 5 min with BP cuff at mid-pressure = positive; capillary fragility" }
  ]},

  "Influenza (Seasonal Flu)": { gm: [
    "Rest and adequate fluid intake",
    "Antipyretics for fever and myalgia",
    "Oseltamivir (Tamiflu): start within 48 hours of symptom onset for maximum benefit",
    "Isolation: respiratory isolation; droplet precautions",
    "Annual influenza vaccination: all high-risk groups + healthcare workers",
    "Hospitalise if: signs of pneumonia (tachypnoea, hypoxia), cytokine storm, sepsis, immunocompromised",
    "Secondary bacterial pneumonia: chest infection antibiotics (amoxicillin + doxycycline; co-amoxiclav if LRTI)",
    "Avoid aspirin in children <16 years: Reye's syndrome risk"
  ], pm: [
    { name: "Oseltamivir (Tamiflu) 75 mg BD × 5 days", dose: "Neuraminidase inhibitor; most effective if started <48h; reduce to 75 mg OD if eGFR 10–30; high-risk patients: start up to 5 days" },
    { name: "Zanamivir (Relenza) 10 mg inhaled BD × 5 days", dose: "Alternative neuraminidase inhibitor; inhaled; useful if oseltamivir resistance; avoid in asthma (bronchospasm risk)" },
    { name: "Paracetamol 1g QDS", dose: "Fever and myalgia management; avoid aspirin" },
    { name: "IV antibiotics (amoxicillin + flucloxacillin / co-amoxiclav)", dose: "Secondary bacterial pneumonia; Strep pneumoniae, Staph aureus most common pathogens" }
  ], tests: [
    { name: "Nasopharyngeal swab — influenza PCR (RT-PCR)", note: "GOLD STANDARD; detects influenza A/B and subtype; 3–4h turnaround; most sensitive" },
    { name: "Rapid influenza diagnostic test (RIDT)", note: "Point-of-care antigen detection; result in 15 min; 50–70% sensitivity; negative does NOT exclude" },
    { name: "CXR", note: "Bilateral interstitial infiltrates (primary viral pneumonia); consolidation (secondary bacterial); normal in uncomplicated flu" },
    { name: "FBC, CRP, procalcitonin", note: "Lymphopenia common in influenza; procalcitonin helps distinguish bacterial from viral pneumonia" }
  ]},

  "Malaria": { gm: [
    "Rapid diagnosis and treatment — delay increases mortality",
    "Determine species and severity: thick and thin blood films URGENTLY",
    "P. falciparum: treat as medical emergency (can be fatal within 24–48h)",
    "Admit all P. falciparum regardless of severity",
    "Supportive care: IV fluids for hypovolaemia, glucose for hypoglycaemia, blood transfusion for severe anaemia",
    "Monitor: blood glucose 4-hourly (hypoglycaemia risk with quinine), daily parasitaemia, FBC, renal function",
    "Cerebral malaria: ITU care, IV antimalarials, anti-seizure treatment",
    "Prevention: antimalarial prophylaxis, insect repellent, bed nets"
  ], pm: [
    { name: "Artemether-Lumefantrine (Coartem/Riamet) 4 tabs BD × 3 days", dose: "1ST LINE uncomplicated P. falciparum (WHO 2010); ACT (artemisinin-based combination therapy)" },
    { name: "IV Artesunate 2.4 mg/kg at 0, 12, 24h then daily", dose: "1ST LINE severe/cerebral falciparum malaria; superior to IV quinine (WHO recommendation)" },
    { name: "IV Quinine + Doxycycline", dose: "Alternative severe malaria if artesunate unavailable; quinine 20 mg/kg loading then 10 mg/kg 8-hourly; monitor QT; hypoglycaemia risk" },
    { name: "Chloroquine 600mg base then 300mg at 6, 24, 48h", dose: "P. vivax, P. ovale, P. malariae (NOT falciparum — widespread resistance)" },
    { name: "Primaquine 15 mg/day × 14 days", dose: "P. vivax and P. ovale: eradicates liver hypnozoites (prevents relapse); check G6PD first (haemolysis risk)" }
  ], tests: [
    { name: "Blood film (thick + thin) — urgent", note: "GOLD STANDARD; thick film: detect parasites; thin film: species identification + parasitaemia %; repeat 12-24 hourly if negative but suspicion remains" },
    { name: "Rapid diagnostic test (RDT) for malaria antigens", note: "HRP-2 antigen (falciparum); pLDH (all species); result in 15–30 min; sensitivity ~95%; cannot replace blood film for species ID and parasitaemia" },
    { name: "Malaria PCR", note: "Most sensitive; mixed infections; low-level parasitaemia; reference labs" },
    { name: "FBC, blood glucose, renal function, LFTs", note: "Thrombocytopenia (hallmark); haemolytic anaemia; hypoglycaemia (quinine + P. falciparum); renal failure (blackwater fever)" },
    { name: "G6PD enzyme assay", note: "Before primaquine; G6PD deficiency → severe haemolysis with primaquine" }
  ]},

  "Cholera": { gm: [
    "Rapid rehydration is the priority — 90% of deaths are preventable with fluid",
    "Mild-moderate dehydration: ORS aggressively (750 mL/h for adults)",
    "Severe dehydration: IV Ringer's lactate (preferred over NaCl — corrects acidosis better)",
    "Children: IV Ringer's lactate 100 mL/kg over 3h; ORS as soon as tolerating",
    "Continue replacing ongoing losses: measure stool output and replace mL for mL",
    "Monitor: BP, HR, urine output, electrolytes",
    "Antibiotics: shorten duration and reduce stool volume by 50%; NOT primary treatment",
    "Notify public health; isolate; safe water supply and sanitation control"
  ], pm: [
    { name: "Oral Rehydration Solution (ORS) — WHO formulation", dose: "Mild-moderate: 750 mL/h initial; replace stool losses; continue until diarrhoea resolves" },
    { name: "IV Ringer's Lactate", dose: "Severe dehydration: 100 mL/kg over 3h in adults; Hartmann's solution preferred over normal saline" },
    { name: "Doxycycline 300 mg single dose (adult)", dose: "Antibiotic of choice; reduces stool volume and duration; single dose as effective as multiple" },
    { name: "Azithromycin 1g single dose", dose: "Children and pregnant women; alternative to doxycycline" },
    { name: "Ciprofloxacin 1g single dose", dose: "Alternative; increasing resistance in some regions" },
    { name: "Zinc 20 mg/day × 10 days", dose: "Children <5 years with cholera; reduces duration and severity" }
  ], tests: [
    { name: "Stool microscopy + dark-field microscopy", note: "Rapid vibrio identification: 'shooting star' motility under dark-field; curved Gram-negative rods on Gram stain" },
    { name: "Stool culture (TCBS agar)", note: "Vibrio cholerae O1/O139 grows as yellow colonies on TCBS (thiosulfate-citrate-bile-sucrose) agar; GOLD STANDARD" },
    { name: "Rapid cholera test (Crystal VC)", note: "Point-of-care dipstick; detects Vibrio cholerae O1/O139 in stool within 15 min; field diagnosis" },
    { name: "Serum electrolytes, urea, creatinine", note: "Hypokalaemia, hyponatraemia, metabolic acidosis; prerenal uraemia from hypovolaemia" }
  ]},

  "Viral Hepatitis (A, E & B)": { gm: [
    "Rest: in acute phase; avoid strenuous activity",
    "Adequate nutrition: high calorie, low fat if nauseated",
    "Avoid hepatotoxic drugs: paracetamol max 2g/day (reduce further in alcohol users); avoid NSAIDs",
    "Absolutely no alcohol during acute illness",
    "Hepatitis A: notify public health; contacts — HAV vaccine or immunoglobulin within 14 days",
    "Hepatitis B acute: 95% of adults recover spontaneously; monitor for fulminant hepatic failure",
    "Hepatitis B chronic: antiviral therapy if HBeAg positive + high ALT + high viral load",
    "Hepatitis E in pregnancy: deliver if near term; liver transplant if fulminant hepatic failure",
    "Isolation: hepatitis A and E (fecal-oral) — enteric precautions"
  ], pm: [
    { name: "Tenofovir disoproxil (TDF) 300 mg OD", dose: "Chronic Hep B: 1st line antiviral; potent, low resistance; safe in pregnancy; monitor renal function" },
    { name: "Entecavir 0.5 mg OD", dose: "Chronic Hep B: 1st line alternative; very low resistance; not for lamivudine-resistant HBV" },
    { name: "Pegylated interferon alpha-2a (Pegasys) 180 mcg SC weekly × 48 weeks", dose: "Chronic Hep B: finite course; ~30% seroconversion; side effects significant; check TFTs" },
    { name: "Ribavirin + Sofosbuvir (Hep E chronic)", dose: "Immunocompromised with chronic Hep E (organ transplant); ribavirin off-label" },
    { name: "HAV vaccine / HAV immunoglobulin", dose: "Post-exposure prophylaxis; contacts within 14 days; immunoglobulin if immunocompromised" }
  ], tests: [
    { name: "Hepatitis serology panel", note: "Hep A: anti-HAV IgM (acute), IgG (immune). Hep B: HBsAg (infection), anti-HBc IgM (acute), HBeAg (high replication), HBV DNA (viral load), anti-HBs (immunity). Hep E: anti-HEV IgM + PCR" },
    { name: "LFTs (ALT, AST, bilirubin, ALP, GGT)", note: "ALT/AST markedly elevated (hepatocellular); ALP rises if cholestatic; bilirubin rises with jaundice" },
    { name: "Prothrombin time / INR", note: "Synthetic liver function; PT prolonged = severe hepatitis; single best indicator of prognosis" },
    { name: "Abdominal USS", note: "Hepatomegaly; exclude biliary obstruction; ascites; gallbladder wall thickening" },
    { name: "HBV DNA (viral load)", note: "Guides antiviral treatment in chronic Hep B; >2000 IU/mL = treatment threshold (with elevated ALT)" }
  ]},

  "Peptic Ulcer Disease": { gm: [
    "Test and treat H. pylori (UBT or stool antigen) in all PUD",
    "Stop NSAIDs/aspirin if possible; if must continue, add PPI",
    "Lifestyle: avoid smoking, alcohol, coffee, spicy food, large meals",
    "GI bleed: Rockford/Blatchford score; urgent OGD within 24h (high-risk: within 12h)",
    "OGD: all males and post-menopausal women with unexplained iron deficiency anaemia",
    "Perforation: urgent surgical referral — laparoscopic repair",
    "Test of cure: UBT or stool antigen 4 weeks after eradication therapy (not serology)"
  ], pm: [
    { name: "H. pylori Triple Therapy: PPI + Amoxicillin 1g + Clarithromycin 500mg (all BD × 14 days)", dose: "1st line eradication; all three drugs twice daily for 14 days; take with food; check local clarithromycin resistance" },
    { name: "Quadruple therapy (PPI + Bismuth + Metronidazole + Tetracycline)", dose: "2nd line if triple fails; bismuth quadruple therapy × 14 days; use if clarithromycin resistance suspected" },
    { name: "Omeprazole 20mg BD / Lansoprazole 30mg BD", dose: "PPI; acid suppression after eradication; heal ulcer in 4–6 weeks; take 30 min before meals; maintenance if recurrent" },
    { name: "Ranitidine (H2 blocker)", dose: "2nd line if PPI intolerated; 300 mg nocte; less potent than PPI" },
    { name: "Sucralfate 1g QDS", dose: "Mucosal protective; gastric ulcer; non-pregnant patients" }
  ], tests: [
    { name: "OGD (upper GI endoscopy)", note: "GOLD STANDARD: visualise ulcer, take biopsies (H. pylori CLO test + histology, exclude malignancy); mandatory for GU (repeat 6–8 weeks to confirm healing)" },
    { name: "Urea breath test (UBT)", note: "Non-invasive H. pylori detection; sensitivity/specificity >95%; test of cure (4 weeks after eradication); stop PPI 2 weeks before test" },
    { name: "H. pylori stool antigen", note: "Alternative to UBT; same accuracy; useful test of cure; stop PPI 2 weeks before" },
    { name: "Serum H. pylori IgG antibody", note: "Positive = past or current infection; NOT used for test of cure; less specific" },
    { name: "FBC, ferritin, U&E, LFTs", note: "Anaemia from bleeding; renal function before PPI (hypomagnesaemia long-term)" }
  ]},

  "Gastroesophageal Reflux Disease (GERD)": { gm: [
    "Lifestyle modification (often most effective): weight loss, elevate head of bed 15–20cm, avoid eating <3h before bed",
    "Avoid trigger foods: chocolate, fatty/spicy food, coffee, alcohol, carbonated drinks",
    "Stop smoking",
    "Smaller, more frequent meals",
    "PPI trial: 4–8 weeks; best taken 30–60 min before meals",
    "OGD if: alarm symptoms, aged >55 with new symptoms, failure to respond to PPI",
    "Barrett's oesophagus: surveillance OGD every 3–5 years; high-grade dysplasia → endoscopic ablation",
    "Fundoplication (Nissen): surgical option for failed medical treatment or hiatus hernia"
  ], pm: [
    { name: "Omeprazole 20 mg OD (or Lansoprazole 30 mg OD)", dose: "1st line PPI; 4–8 weeks; take 30–60 min before breakfast; step-down to on-demand after" },
    { name: "Esomeprazole 40 mg OD / Pantoprazole 40 mg OD", dose: "Alternative PPIs; esomeprazole most potent; IV pantoprazole if cannot tolerate orally" },
    { name: "Gaviscon Advance (alginate)", dose: "Post-meal symptom relief; forms raft over gastric contents; good for laryngopharyngeal reflux" },
    { name: "Ranitidine (H2 blocker) 150 mg BD", dose: "Alternative to PPI; nocturnal reflux; less effective for erosive oesophagitis; 2nd line" },
    { name: "Metoclopramide 10 mg TDS", dose: "Prokinetic; improves LOS tone and gastric emptying; short-term only; tardive dyskinesia risk" }
  ], tests: [
    { name: "OGD (upper GI endoscopy)", note: "Grade erosive oesophagitis (Los Angeles A–D); Barrett's biopsy; exclude malignancy; not needed for typical uncomplicated GERD in young patients" },
    { name: "24-hour pH monitoring (oesophageal pH-metry)", note: "GOLD STANDARD: confirms pathological acid reflux; DeMeester score; useful pre-fundoplication" },
    { name: "Oesophageal manometry", note: "LOS pressure assessment; exclude achalasia (mimics GERD); pre-operative assessment" },
    { name: "Barium swallow", note: "Hiatus hernia; oesophageal stricture; reflux visualisation — functional assessment" }
  ]},

  "Non-Alcoholic Fatty Liver Disease (NAFLD)": { gm: [
    "Address underlying metabolic syndrome: weight loss is most effective intervention",
    "Weight loss 7–10%: reduces steatosis and inflammation; >10% may reverse fibrosis",
    "Aerobic exercise: 150–300 min/week; reduces liver fat independent of weight loss",
    "Optimise glycaemic control in T2DM (HbA1c <48 mmol/mol)",
    "Treat dyslipidaemia: statins safe in NAFLD (not contraindicated)",
    "Alcohol: reduce to below recommended limits even though not primary cause",
    "Avoid hepatotoxic drugs (methotrexate if significant fibrosis — monitor LFTs)",
    "Liver transplantation: end-stage NASH cirrhosis; NASH recurs post-transplant in obese"
  ], pm: [
    { name: "GLP-1 agonists (Semaglutide / Liraglutide)", dose: "Weight loss + NASH benefit; reduces liver inflammation and fibrosis in trials; 1st choice if T2DM + NAFLD" },
    { name: "SGLT-2 inhibitors (Empagliflozin / Dapagliflozin)", dose: "T2DM + NAFLD; reduce liver fat and ALT; cardiovascular and renal protection" },
    { name: "Pioglitazone 30 mg OD", dose: "Thiazolidinedione; reduces NASH histology in T2DM + NASH; weight gain and fluid retention side effects" },
    { name: "Vitamin E 800 IU/day", dose: "Non-diabetic NASH; antioxidant; reduces inflammation (PIVENS trial); avoid in diabetics, men with CVD risk" },
    { name: "Statins (atorvastatin)", dose: "Safe in NAFLD; do NOT withhold; reduces cardiovascular risk; may reduce ALT" }
  ], tests: [
    { name: "LFTs (ALT, AST, GGT)", note: "ALT typically 1–4× upper limit; AST:ALT ratio <1 (unlike alcoholic hepatitis where >2); GGT elevated" },
    { name: "USS abdomen", note: "Bright echogenic liver = steatosis; USS detects >30% steatosis; cannot grade fibrosis" },
    { name: "FIB-4 score (age × AST ÷ platelet × √ALT)", note: "<1.3 = low fibrosis risk; >2.67 = high risk; non-invasive fibrosis assessment; 1st step in NAFLD" },
    { name: "FibroScan (transient elastography)", note: "Liver stiffness measurement; grades fibrosis F0–F4; CAP (controlled attenuation parameter) grades steatosis" },
    { name: "Liver biopsy", note: "GOLD STANDARD for NASH diagnosis and fibrosis staging; NAS score ≥5 = NASH; only needed if diagnosis uncertain or significant fibrosis suspected and FibroScan equivocal" }
  ]},

  "Hypertension in Pregnancy": { gm: [
    "Gestational HTN: antihypertensive if BP ≥150/100; aim 135/85",
    "Pre-eclampsia: delivery is the only cure; manage in hospital",
    "Target BP in pre-eclampsia: 135/85 mmHg",
    "Magnesium sulphate: seizure prophylaxis in pre-eclampsia (not antihypertensive) and treatment of eclampsia",
    "Timing of delivery: severe pre-eclampsia ≥34 weeks — deliver; 37 weeks — deliver regardless",
    "Fetal monitoring: CTG, umbilical artery Doppler, growth scans",
    "Postpartum: BP can worsen 3–5 days post-delivery; continue antihypertensives; stop within 3 months",
    "Future risk: 25% chance of recurrence in next pregnancy; increased lifetime CVD risk"
  ], pm: [
    { name: "Labetalol 200 mg BD → TDS → QDS (up to 800 mg/day)", dose: "1st line oral antihypertensive in pregnancy; alpha + beta blocker; AVOID in asthma" },
    { name: "Nifedipine SR 10–20 mg BD", dose: "Oral; 1st line alternative; CCB; good if labetalol contraindicated; monitor for headache (reflex tachycardia)" },
    { name: "Methyldopa 250 mg TDS (up to 3g/day)", dose: "Safe, long track record in pregnancy; central alpha agonist; sedation and depression side effects" },
    { name: "IV Labetalol 20–80 mg boluses (max 300 mg) / infusion", dose: "Hypertensive emergency in pregnancy (BP ≥160/110)" },
    { name: "IV Hydralazine 5–10 mg boluses (max 20 mg)", dose: "Alternative IV antihypertensive in emergency; vasodilator; reflex tachycardia" },
    { name: "Magnesium sulphate 4g IV loading then 1g/h infusion", dose: "Eclampsia treatment AND severe pre-eclampsia prophylaxis; monitor Mg levels, urine output, reflexes; antidote = calcium gluconate" },
    { name: "Aspirin 75–150 mg OD from 12 weeks", dose: "PREVENTION of pre-eclampsia in high-risk women (>1 moderate risk factor); start 12–16 weeks until 36 weeks" }
  ], tests: [
    { name: "Urinalysis (dipstick) + urine PCR", note: "Proteinuria: ≥2+ dipstick or ≥300 mg/24h or PCR ≥30 mg/mmol = pre-eclampsia; repeat if 1+ on dipstick" },
    { name: "FBC + blood film", note: "Thrombocytopenia (HELLP); haemolysis (microangiopathic haemolytic anaemia on film)" },
    { name: "LFTs + urea + creatinine", note: "HELLP: ↑ALT, ↑AST; renal impairment in pre-eclampsia" },
    { name: "Uric acid (serum)", note: "Elevated in pre-eclampsia; correlates with disease severity; useful marker but not diagnostic" },
    { name: "sFlt-1 / PlGF ratio", note: "Angiogenic biomarkers; sFlt-1/PlGF >38 = high likelihood pre-eclampsia within 4 weeks; useful triage tool" },
    { name: "CTG + fetal USS + umbilical artery Doppler", note: "Fetal wellbeing; IUGR assessment; absent/reversed end-diastolic flow = severe fetal compromise" }
  ]}
,
  "COPD": { gm: [
    "Smoking cessation: most important intervention — slows FEV1 decline",
    "Pulmonary rehabilitation: improves exercise tolerance and QoL in all GOLD stages",
    "Vaccinations: annual influenza + pneumococcal (PCV13 + PPSV23)",
    "Long-term oxygen therapy (LTOT): if pO2 <7.3 kPa or pO2 7.3–8.0 kPa with cor pulmonale/polycythaemia; ≥15 h/day",
    "NIV (non-invasive ventilation): acute exacerbation with pH 7.25–7.35 after 1h medical treatment",
    "Nutritional support: BMI <21 = poor prognosis; high-calorie diet",
    "Palliative care: end-stage COPD; opioids for refractory breathlessness",
    "Acute exacerbation: controlled O2 (target SpO2 88–92%), nebulised bronchodilators, prednisolone 30–40 mg × 5 days, antibiotics if purulent sputum"
  ], pm: [
    { name: "SABA — Salbutamol 100–200 mcg inhaled PRN", dose: "Reliever; short-acting beta-2 agonist; all stages; use before LABA" },
    { name: "LAMA — Tiotropium 18 mcg OD (Spiriva)", dose: "1st line maintenance; reduces exacerbations; HandiHaler or Respimat device" },
    { name: "LABA — Salmeterol 50 mcg BD / Formoterol 12 mcg BD", dose: "Add to LAMA if symptoms persist; combined LABA+LAMA preferred over either alone" },
    { name: "ICS + LABA (Seretide / Symbicort)", dose: "Add if frequent exacerbations (≥2/year) despite LABA+LAMA; ICS alone not recommended" },
    { name: "LABA + LAMA (Anoro / Ultibro)", dose: "Dual bronchodilation; preferred over ICS+LABA if no frequent exacerbations; first-line GOLD B/E" },
    { name: "Roflumilast 500 mcg OD (PDE4 inhibitor)", dose: "Severe COPD + chronic bronchitis + frequent exacerbations; reduces exacerbations; diarrhoea/weight loss side effects" },
    { name: "Prednisolone 30 mg OD × 5 days", dose: "Acute exacerbation; reduces recovery time; not long-term" },
    { name: "Doxycycline / Amoxicillin / Co-amoxiclav", dose: "Acute exacerbation with purulent sputum; 5–7 days" }
  ], tests: [
    { name: "Spirometry (post-bronchodilator FEV1/FVC)", note: "GOLD STANDARD for diagnosis: FEV1/FVC <0.70 confirms obstruction; GOLD staging by FEV1 % predicted: G1 ≥80%, G2 50–79%, G3 30–49%, G4 <30%" },
    { name: "CXR", note: "Hyperinflation (flat diaphragms, >6 anterior ribs), bullae; exclude other diagnoses; not diagnostic for COPD" },
    { name: "ABG (arterial blood gas)", note: "Type II respiratory failure (↓pO2, ↑pCO2); assess for LTOT and NIV criteria; during acute exacerbation" },
    { name: "FBC", note: "Polycythaemia (chronic hypoxaemia); eosinophilia (frequent exacerbators — consider ICS)" },
    { name: "Alpha-1 antitrypsin level", note: "Young patient (<45 yrs) with COPD or family history; AAT deficiency if low (<11 µmol/L)" },
    { name: "ECG + Echo", note: "Cor pulmonale: P pulmonale, right axis deviation, RV hypertrophy; pulmonary hypertension assessment" },
    { name: "TLCO (transfer factor / DLCO)", note: "Reduced in emphysema; helps differentiate from asthma (normal DLCO)" }
  ]}

};
