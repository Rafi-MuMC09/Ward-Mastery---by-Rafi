// Ward Mastery — General Examination Causes Data
// All general exam findings, sites, types and causes
// Referenced by app.js via questionsData

const GENERAL_EXAM_DATA = {
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
                    "── RAISED JVP ──",
                    "Heart failure — elevation, sustained abdominojugular reflux >10 seconds",
                    "Pulmonary embolism — elevation",
                    "Chronic pulmonary hypertension — elevation",
                    "Pericardial effusion — elevation, prominent 'y' descent",
                    "Pericardial constriction — elevation, Kussmaul's sign (paradoxical rise on inspiration)",
                    "Superior vena cava obstruction — elevation, loss of pulsation (non-pulsatile, no longer reflects right atrial pressure)",
                    "Cardiac tamponade — elevated JVP with high right ventricular filling pressure",
                    "Tension pneumothorax — JVP may be acutely raised",
                    "Severe right ventricular failure / restrictive cardiomyopathy — elevation with Kussmaul's sign",
                    "── JVP WAVEFORM ABNORMALITIES (level may or may not be raised) ──",
                    "Atrial fibrillation — absent 'a' waves",
                    "Tricuspid stenosis — giant 'a' waves (also seen in pulmonary hypertension from delayed/restricted RV filling)",
                    "Tricuspid regurgitation — giant 'v' or 'cv' waves, may have associated pulsatile liver",
                    "Complete heart block — irregular 'cannon' waves (due to AV dissociation)",
                    "Junctional rhythm / some ventricular & supraventricular tachycardias — regular cannon waves",
                    "── LOW JVP ──",
                    "Hypovolemia / dehydration",
                    "Shock (hypovolemic / haemorrhagic)"
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
                    "Constrictive pericarditis → Raised JVP with Kussmaul's sign, ascites often out of proportion to peripheral oedema",
                    "Nephrotic syndrome → Heavy proteinuria; periorbital oedema (morning); hypoalbuminaemia",
                    "Hepatic (Cirrhosis/CLD) → Hypoalbuminaemia + portal hypertension; ascites prominent",
                    "Nutritional (Kwashiorkor) → Protein deficiency; low albumin; common in children",
                    "Hypothyroidism (Myxoedema) → Non-pitting; pretibial; bradycardia; cold intolerance",
                    "Lymphoedema → Non-pitting; post-mastectomy, filariasis, malignant obstruction",
                    "DVT → Unilateral hot tender swollen leg; calf tenderness; Homan's sign",
                    "Hypoproteinaemia → CLD, nephrotic, protein-losing enteropathy, malnutrition",
                    "Venous stasis / Immobility → Dependent bilateral oedema in elderly/bedridden, varicose veins, chronic venous insufficiency",
                    "Drug-induced → Calcium channel blockers (amlodipine), NSAIDs, corticosteroids, oestrogens"
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
                    "Low volume pulse → Severe heart failure, hypovolaemia, cardiac tamponade, mitral stenosis (inadequate ventricular filling)",
                    "Asymmetric pulses (unequal both sides) → Occlusive peripheral arterial disease, arterial stenosis, aortic dissection (rare)",
                    "Radio-femoral delay (reduced/delayed lower limb pulses) → Coarctation of aorta",
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
