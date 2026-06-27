// Ward Mastery — Systemic Inquiry Data
// All systemic inquiry questions + clinical exam notes (Macleod's 15th ed.)
// Referenced by app.js via questionsData

const SYSTEMIC_INQUIRY_DATA = {
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
                            {
                                text: "Step 1: Place right hand FLAT over precordium — get general impression of cardiac impulse across all areas",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Apexbeat-supine.jpg", caption: "Palpation of apex beat — patient supine" }]
                            },
                            {
                                text: "Step 2: Lay fingers PARALLEL to rib spaces → locate most inferior and lateral point of impulse = Apex Beat",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Apexbeatpoint.jpg", caption: "Locating the apex beat point" }]
                            },
                            {
                                text: "If apex not palpable: roll patient onto LEFT SIDE (left lateral position) — brings apex closer to chest wall",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Apexbeat-axilla.jpg", caption: "Left lateral position — apex beat near axilla" }]
                            },
                            {
                                text: "Step 3: Apply HEEL of right hand firmly to left parasternal area, patient holds breath in expiration — feel for RV heave",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Heave.jpg", caption: "Palpating for RV heave" }]
                            },
                            {
                                text: "Step 4: Palpate for THRILLS at apex and on both sides of sternum using flat of fingers",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Thrill-mitral.jpg", caption: "Palpating for thrill at mitral area" }]
                            },
                            {
                                text: "── AREA 1: MITRAL AREA (Apex) — 5th ICS, mid-clavicular line ──",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Apexbeatarea.jpg", caption: "Mitral area — location" }]
                            },
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
                            {
                                text: "Thrill here → VSD (ventricular septal defect) — also felt at right sternal border simultaneously",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Thrill-tricuspid.jpg", caption: "Palpating for thrill at tricuspid area" }]
                            },
                            "── AREA 3: PULMONARY AREA — 2nd ICS, left sternal border ──",
                            "Location: 2nd left intercostal space, left sternal border",
                            {
                                text: "Palpate with flat of fingers for thrills",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Thrill-pulmonary.jpg", caption: "Palpating for thrill at pulmonary area" }]
                            },
                            "Thrill here → Pulmonary Stenosis",
                            {
                                text: "Palpable P2 (loud pulmonary component of S2) → Pulmonary Hypertension",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Palpable-p2.jpg", caption: "Palpable P2" }]
                            },
                            "── AREA 4: AORTIC AREA — 2nd ICS, right sternal border ──",
                            "Location: 2nd right intercostal space, right sternal border",
                            {
                                text: "Palpate with flat of fingers for thrills",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Thrill-aortic.jpg", caption: "Palpating for thrill at aortic area" }]
                            },
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
                            {
                                text: "── AREA 1: MITRAL AREA (Apex) — 5th ICS, mid-clavicular line ──",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Auscultation-mitral.jpg", caption: "Auscultation — Mitral area" }]
                            },
                            "Location: 5th left ICS at mid-clavicular line",
                            "S1 loudest here (mitral valve closure). Listen for: pansystolic murmur of MR (radiates to axilla) | mid-diastolic rumble of MS (bell, left lateral position) | S3, S4 (bell)",
                            "Special position: Roll patient LEFT LATERAL + bell at apex with LIGHT pressure → brings out Mitral Stenosis mid-diastolic murmur. Can ask patient to exercise briefly (clenching fist) to accentuate it",
                            {
                                text: "── AREA 2: TRICUSPID AREA — 4th ICS, left sternal border ──",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Auscultation-tricuspid.jpg", caption: "Auscultation — Tricuspid area" }]
                            },
                            "Location: 4th left intercostal space, lower left sternal border",
                            "Listen for: pansystolic murmur of Tricuspid Regurgitation (increases with INSPIRATION — Carvallo's sign) | early diastolic murmur of AR (diaphragm, patient leaning forward) | VSD pansystolic murmur",
                            "Early diastolic AR murmur: BEST heard here with diaphragm, patient sitting forward, breath held in FULL EXPIRATION",
                            {
                                text: "── AREA 3: PULMONARY AREA — 2nd ICS, left sternal border ──",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Auscultation-pulmonary.jpg", caption: "Auscultation — Pulmonary area" }]
                            },
                            "Location: 2nd left intercostal space, left sternal border",
                            "S2 splitting best heard here on inspiration (physiological). Listen for: ejection systolic murmur of PS | loud P2 (pulmonary HTN) | fixed split S2 (ASD)",
                            "Physiological split: A2 then P2 on inspiration — widens. Closes on expiration. Fixed split (no change with breathing) → ASD",
                            {
                                text: "── AREA 4: AORTIC AREA — 2nd ICS, right sternal border ──",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Auscultation-aortic.jpg", caption: "Auscultation — Aortic area" }]
                            },
                            "Location: 2nd right intercostal space, right sternal border",
                            "Listen for: ejection systolic murmur of Aortic Stenosis (harsh, radiates to carotids) | ejection click of bicuspid aortic valve just after S1",
                            "Always listen over BOTH CAROTIDS with diaphragm for radiation of AS murmur and for carotid bruits (held inspiration)",
                            "Also listen in LEFT AXILLA for radiation of Mitral Regurgitation murmur",
                            "── SPECIAL POSITIONS ──",
                            "Mitral Stenosis: Left lateral position + bell at apex, light pressure (accentuated by exercise / fist clenching)",
                            "Aortic Regurgitation: Sitting forward, breath held in full expiration, diaphragm at lower left sternal edge",
                            "── HEART SOUNDS ──",
                            "S1 (lub): Closure of mitral + tricuspid. Best at apex. Loud S1 → Mitral Stenosis. Soft S1 → poor LV function, severe MR",
                            {
                                text: "S2 (dub): Closure of aortic (A2) + pulmonary (P2). Best at left sternal edge. Physiological split on inspiration. Fixed split → ASD. Loud P2 → Pulmonary HTN. Absent A2 → severe calcific AS",
                                media: [{ type: "image", url: "https://raw.githubusercontent.com/Rafi-MuMC09/Ward-Mastery---by-Rafi/main/images/systemicinquiry/cvs/Palpable-A2.jpg", caption: "Palpable A2" }]
                            },
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
                ],
                clinicalExamNotes: [
                    {
                        title: "Inspection — General & Chest Wall (Macleod's)",
                        points: [
                            "From end of bed: note breathlessness, use of accessory muscles (sternocleidomastoid, trapezius, scalenes), pursed-lip breathing, cyanosis",
                            "Hyperinflation (chronic airflow obstruction): increased AP diameter, raised sternum/clavicles, prolonged expiration, intercostal indrawing on forced inspiration",
                            "Interstitial disease: small, stiff lungs — diminished thoracic volume, raised resting respiratory rate (opposite pattern to hyperinflation)",
                            "Chest wall deformity: Pectus excavatum (congenital, sunken sternum) | Pectus carinatum (acquired, prominent sternum + Harrison's sulcus — from childhood airflow obstruction) | Kyphoscoliosis",
                            "Check sputum pots — note colour, viscosity, blood. Foul-smelling sputum suggests anaerobic infection",
                            "Look for scars (thoracotomy may be visible only from side/behind), chest drains, asymmetry",
                            "Count respiratory rate quietly (breaths in 15 sec × 4) without patient noticing — normal 12–15/min at rest; >20/min is abnormal in an adult",
                            "Cheyne-Stokes respiration (alternating deep/shallow breathing): seen at altitude, elderly, heart failure, dying patients — abnormal carotid chemoreceptor feedback",
                            "Skin lesions: Erythema nodosum on shins → sarcoidosis | Subcutaneous metastatic nodules → lung cancer"
                        ]
                    },
                    {
                        title: "Inspection — Hands, Face & Neck (Macleod's)",
                        points: [
                            "Hands: finger clubbing, tar staining (smoking), nail discoloration, cyanosis, small-muscle wasting (T1 root damage from apical lung tumour)",
                            "Fine tremor of outstretched hands: common — direct effect of high-dose beta-agonist bronchodilators",
                            "Coarse flapping tremor (asterixis): CO2 retention / respiratory failure — test with wrists extended, arms outstretched, while feeling the pulse",
                            "Finger clubbing in adult → consider lung cancer or pulmonary fibrosis; in young patient → chronic suppurative disease (cystic fibrosis)",
                            "Clubbing + painful tender wrist/ankle swelling → hypertrophic pulmonary osteoarthropathy (associated with lung cancer)",
                            "Face: Superior Vena Cava obstruction → dusky, generalised swelling of head/neck/face + subconjunctival oedema (non-mobile, looks like tear inside lower lid) — suggests mediastinal tumour invasion",
                            "Horner's syndrome (ptosis + miosis + anhidrosis + enophthalmos): apical lung tumour disrupting cervical sympathetic chain",
                            "Check conjunctiva for anaemia, tongue for central cyanosis (blue-grey discoloration)",
                            "Neck: JVP raised in pulmonary hypertension; acutely raised in tension pneumothorax or large PE",
                            "Tracheal deviation: AWAY from affected side = tension pneumothorax (acute) | TOWARDS affected side = upper lobe fibrosis/collapse or post-lobectomy/pneumonectomy (chronic)",
                            "Cricosternal distance: normally 3 finger-breadths between sternal notch and cricoid cartilage; REDUCED in hyperinflation"
                        ]
                    },
                    {
                        title: "Palpation (Macleod's)",
                        points: [
                            "Trachea: gently advance one finger in sternal notch — should be equidistant from both sternomastoid heads",
                            "Cervical lymph nodes: examine from behind, patient sitting forward — palpable nodes may indicate lung cancer metastasis, TB lymphadenitis, or lymphoma",
                            "Chest expansion (upper): palms over pectoral region, thumbs opposed in midline, ask for deep breath, judge outward thumb movement",
                            "Chest expansion (lower): cup hands around lower lateral chest wall, fingertips firm in mid-axillary line, pull hands medially to tighten skin, thumbs as pointers",
                            "Asymmetry of expansion matters more than absolute degree (varies between individuals)",
                            "Hoover's sign: paradoxical INWARD movement of lower ribs on inspiration (instead of normal outward) — caused by flat diaphragm in COPD hyperinflation",
                            "Surgical emphysema: palpable crackling under skin (subcutaneous air) — complicates pneumothorax with chest drain or rib fracture",
                            "Apex beat: normally 5th ICS mid-clavicular line — may be impalpable in hyperinflation (lingula expands between heart and chest wall)",
                            "Right ventricular heave: palpable in pulmonary hypertension; palpable P2 — finger over pulmonary area feels pulmonary valve closure"
                        ]
                    },
                    {
                        title: "Percussion (Macleod's)",
                        points: [
                            "Technique: apply middle finger of non-dominant hand firmly along an intercostal space (parallel to ribs), strike with flexed tip of dominant index/middle finger — movement from the WRIST, not elbow",
                            "Always compare mirror-image sites on right and left BEFORE moving to next level — asymmetry is the key finding, not absolute loudness",
                            "Sequence: start at supraclavicular fossae → down anterior/lateral chest → posteriorly (patient sitting forward, arms folded, percuss lateral to spinal muscles)",
                            "Normal: resonant, hollow ringing sound. Exception — physiological cardiac dullness at lower left sternal edge (right ventricle)",
                            "Loss of normal cardiac dullness → hyperinflation (lingula overlies heart)",
                            "Dull thud (no resonance) → consolidation or pleural fluid",
                            "Hyperresonant (extra clear) → pneumothorax (subtle difference from normal lung, since normal lung is already mostly air)",
                            "Resonant percussion + unilateral absent breath sounds = classic combination for pneumothorax"
                        ]
                    },
                    {
                        title: "Auscultation — Breath Sounds (Macleod's)",
                        points: [
                            "Why bronchial vs vesicular: large airway sound is harsh/'bronchial' (heard normally over larynx/trachea); this is normally muffled by air-filled alveolar lung → 'vesicular' breath sounds at chest wall",
                            "Consolidation (pneumonia) or fibrotic scarring (post-TB) IMPROVES sound conduction → bronchial breathing heard clearly over the chest wall (abnormal if heard peripherally)",
                            "Lobar collapse (proximal bronchial obstruction): diminished expansion, dull percussion, REDUCED breath sounds and vocal resonance (different pattern from consolidation)",
                            "Pneumothorax or pleural effusion: lung separated from chest wall by air/fluid → breath sounds very quiet or absent. Distinguish by percussion: resonant = pneumothorax | dull = pleural fluid",
                            "Use the BELL instead of diaphragm if: cachectic chest wall (sunken spaces, poor diaphragm contact) OR hairy chest wall (hair against diaphragm mimics crackles)",
                            "Technique: auscultate apices first (compare right/left), patient breathes slowly/deeply through open mouth, same sequence of sites as percussion, always compare mirror-image positions",
                            "Vocal resonance: ask patient to say 'one, one, one' — muffled over healthy lung, LOUD and clear over consolidation/fibrosis (same mechanism as bronchial breathing)",
                            "Whispering pectoriloquy: whispered speech normally inaudible at chest wall, but heard clearly over consolidated/fibrotic lung — confirms same finding as vocal resonance"
                        ]
                    },
                    {
                        title: "Added Sounds — Wheeze, Crackles, Rub (Macleod's)",
                        points: [
                            "Wheeze: musical whistling sound, mostly expiratory, from narrowed small airways (bronchospasm/secretions)",
                            "Polyphonic wheeze (multiple pitches together) → asthma, bronchitis, COPD exacerbation",
                            "Monophonic wheeze (single pitch, consistent every breath, doesn't clear with cough) → fixed bronchial obstruction — suspect underlying cancer partially obstructing a bronchus",
                            "Crackles: brief non-musical sounds, mostly inspiratory — represent sudden opening of small airways",
                            "A few crackles at lung bases on first few deep breaths that CLEAR with cough = normal (gravitational atelectasis) — NOT pathological",
                            "Crackles persisting after several breaths + cough = pathological",
                            "Fine crackles ('Velcro' quality), inspiratory, lung bases posteriorly/laterally → interstitial pulmonary fibrosis (also pulmonary oedema, some viral pneumonias)",
                            "Coarse crackles (loud, scanty, change with each breath) → purulent airway secretions — bronchopneumonia, bronchiectasis",
                            "Pleural rub: rasping/grating sound, every breath, sounds superficial ('sandpaper rubbing') → pleural inflammation (infection or infarction), often with pleuritic chest pain",
                            "Pleural rub may DISAPPEAR if a parapneumonic effusion or empyema develops (fluid separates the inflamed pleural surfaces)"
                        ]
                    },
                    {
                        title: "🎯 Disease Pattern Recognition — History + Exam Combined (Macleod's Box 5.7)",
                        points: [
                            "── ACUTE BRONCHITIS / COPD EXACERBATION ── History: cough, sputum, wheeze, acute-on-chronic dyspnoea, mucopurulent sputum, ankle swelling, headache (hypercapnia) | Exam: polyphonic wheeze, hyperinflation, quiet breath sounds, flapping tremor (CO2 retention), ankle oedema (cor pulmonale)",
                            "── PNEUMONIA ── History: fever, rigors, pleuritic pain, rusty sputum, loss of appetite | Exam: if lobar — dull percussion, bronchial breathing, increased vocal resonance",
                            "── MALIGNANCY (Lung Cancer) ── History: insidious onset, weight loss, cough, haemoptysis, persisting pain | Exam: cervical lymphadenopathy, finger clubbing, signs of lobar/lung collapse ± effusion",
                            "── PULMONARY FIBROSIS ── History: progressive dyspnoea, cough | Exam: tachypnoea, finger clubbing, central cyanosis, inspiratory FINE crackles at bases",
                            "── PLEURAL EFFUSION ── History: progressive dyspnoea | Exam: unilateral basal dullness + reduced breath sounds",
                            "── PULMONARY EMBOLISM (Large) ── History: sudden severe dyspnoea | Exam: normal breath sounds (key point — exam can be deceptively normal)",
                            "── PULMONARY EMBOLISM (Medium) ── History: episodes of pleuritic pain, haemoptysis | Exam: pleural rub, crackles if infarct",
                            "── PULMONARY EMBOLISM (Multiple small / Chronic) ── History: progressive dyspnoea | Exam: raised JVP, RV heave, loud P2 (pulmonary hypertension picture)",
                            "── ASTHMA ── History: atopy, hay fever, pet ownership, variable wheeze, sleep disturbance | Exam: polyphonic expiratory wheeze, eczema"
                        ]
                    }
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
                ],
                clinicalExamNotes: [
                    {
                        title: "General Examination — Stigmata of Liver Disease (Macleod's)",
                        points: [
                            "General: demeanour, cachexia, nutrition, height/weight/BMI/waist circumference — note truncal vs generalised obesity",
                            "Striae → rapid weight gain, pregnancy, rarely Cushing's syndrome. Loose skin folds → recent weight loss",
                            "Hands: clubbing, koilonychia (spoon nails), leuconychia (white nails — hypoalbuminaemia), palmar erythema",
                            "Iron deficiency stigmata: angular cheilitis (cracked mouth corners), atrophic glossitis (pale smooth tongue)",
                            "Beefy raw tongue → folate/B12 deficiency. Mouth ulcers → coeliac disease, IBD",
                            "Troisier's sign: enlarged LEFT supraclavicular node → gastric or pancreatic cancer spread",
                            "Hepatosplenomegaly + widespread lymphadenopathy → suspect lymphoma",
                            "── CHRONIC LIVER DISEASE STIGMATA (Fig 6.9) ──",
                            "Spider naevi + palmar erythema → excess oestrogen (reduced hepatic breakdown); fill from a central vessel, SVC distribution (upper trunk/arms/face). Up to 5 spider naevi normal in women/pregnancy — multiple in men = pathological",
                            "Gynaecomastia + loss of body hair + testicular atrophy → reduced oestrogen breakdown",
                            "Finger clubbing → cirrhosis, IBD, malabsorption",
                            "Dupuytren's contracture → alcohol-related liver disease",
                            "Bilateral parotid swelling (sialoadenosis) → chronic alcohol misuse",
                            "── SIGNS OF LIVER FAILURE ──",
                            "Asterixis (coarse flapping tremor, arms outstretched, wrists dorsiflexed) → hepatic encephalopathy",
                            "Fetor hepaticus → 'mousy' breath odour from portosystemic shunting",
                            "Altered mental state → day/night reversal → confusion → coma (graded, West Haven)",
                            "In a JAUNDICED patient: spider naevi + palmar erythema + ascites → strongly suggests CHRONIC LIVER DISEASE rather than simple obstructive jaundice"
                        ]
                    },
                    {
                        title: "Inspection — Abdomen (Macleod's)",
                        points: [
                            "Position: supine, comfortable, 1-2 pillows to relax abdominal wall. Expose xiphisternum to symphysis pubis",
                            "Note breath smells: alcohol, fetor hepaticus, uraemia, melaena, ketones",
                            "Normal abdomen: flat or slightly scaphoid, symmetrical. Umbilicus normally inverted",
                            "Visible veins: portal hypertension/IVC obstruction. Caput medusae = veins draining AWAY from umbilicus (recanalised umbilical vein via falciform ligament)",
                            "Umbilical varix → bluish distended umbilicus. Umbilical hernia → everted, non-vascular, may have cough impulse",
                            "Dilated veins flowing SUPERIORLY = IVC obstruction. Veins flowing INFERIORLY (rare) = SVC obstruction",
                            "Diffuse swelling → ascites or intestinal obstruction. Localised → urinary retention, mass, organomegaly",
                            "Obesity: umbilicus usually SUNKEN. Ascites: umbilicus FLAT or EVERTED",
                            "Scars/stomas: small infraumbilical scar = previous laparoscopy. Ileostomy = spout, usually right iliac fossa. Colostomy = usually left iliac fossa, flush if terminal",
                            "Incisional hernia: palpable defect at scar site, more obvious when patient raises head off bed or coughs",
                            "Sister Mary Joseph's nodule: hard subcutaneous nodule at umbilicus → metastatic cancer"
                        ]
                    },
                    {
                        title: "Palpation — General Technique & Key Signs (Macleod's)",
                        points: [
                            "Warm clean hands, flat right hand on abdominal wall, patient's arms by sides. Watch patient's FACE for discomfort throughout",
                            "Start light superficial palpation AWAY from pain site → palpate all regions → repeat with deeper palpation",
                            "Tenderness by site: Epigastrium → peptic ulcer | Right hypochondrium → cholecystitis | Left iliac fossa → diverticulitis | Right iliac fossa → appendicitis or Crohn's ileitis",
                            "Voluntary guarding: conscious muscle contraction from pain. Involuntary guarding: reflex contraction from peritoneal inflammation",
                            "Generalised peritonitis: board-like rigidity, abdominal wall no longer moves with respiration, breathing becomes thoracic",
                            "Rebound tenderness: elicit by cough or gentle percussion (preferred over rapid hand removal) — indicates intra-abdominal disease",
                            "── KEY ABDOMINAL SIGNS (Box 6.10) ──",
                            "Murphy's sign (Acute Cholecystitis): palpate RUQ during deep inspiration — pain causes arrest of inspiration. Sensitivity 50-97%, Specificity 50-80%",
                            "Rovsing's sign (Acute Appendicitis): palpation in LEFT iliac fossa produces pain in RIGHT iliac fossa",
                            "Iliopsoas sign: flex thigh against resistance — pain suggests retroileal appendicitis, iliopsoas abscess, perinephric abscess",
                            "Grey Turner's sign (flank bruising) + Cullen's sign (periumbilical bruising): haemorrhagic pancreatitis, aortic rupture, ruptured ectopic pregnancy",
                            "── THE SIX F's OF ABDOMINAL DISTENSION ──",
                            "Fat (obesity) · Fluid (ascites) · Flatus (obstruction/ileus) · Faeces (constipation) · Fetus (pregnancy) · (sometimes a 6th: Fibroid/mass)",
                            "Pulsatile upper abdominal mass: normal aortic pulsation (thin person), gastric/pancreatic tumour transmitting pulsation, or true aortic aneurysm"
                        ]
                    },
                    {
                        title: "Palpation — Liver, Spleen & Kidney (Macleod's)",
                        points: [
                            "── LIVER ──",
                            "Technique: flat hand in right iliac fossa, fingers pointing up, fingertips parallel to rectus sheath. Patient breathes in deeply through mouth. Feel for edge descending. Move hand up 1cm at a time between breaths",
                            "Describe: size, surface (smooth/irregular), edge (smooth/irregular), consistency (soft/hard), tenderness, pulsatility",
                            "Soft + tender liver → right heart failure (congestion). Pulsatile liver → tricuspid regurgitation",
                            "Hard + irregular → metastatic tumour. Bruit over liver → acute alcoholic hepatitis, hepatocellular cancer, AV malformation, portosystemic shunt (most commonly: transmitted heart murmur)",
                            "Causes of hepatomegaly: chronic parenchymal disease (alcohol, steatosis, autoimmune/viral hepatitis, PBC), malignancy (primary/secondary), right heart failure, haematological (lymphoma, leukaemia, myelofibrosis, polycythaemia), rarities (amyloidosis, Budd-Chiari, sarcoidosis)",
                            "Courvoisier's sign: palpable gallbladder + jaundice → malignant extrahepatic obstruction (pancreatic cancer), NOT gallstones (gallstone gallbladder usually fibrosed, tender but impalpable)",
                            "── SPLEEN ──",
                            "Spleen must enlarge 3-FOLD before becoming palpable — any palpable spleen = splenomegaly",
                            "Technique: hand over umbilicus, ask deep inspiration, feel edge descending, move hand diagonally UP toward left hypochondrium 1cm at a time. If impalpable: left hand pulls ribcage forward, or roll patient onto right side",
                            "Splenic notch (medial surface) is the key differentiator from kidney",
                            "── SPLEEN vs KIDNEY (Box 6.13) ──",
                            "Spleen: smooth/regular, moves diagonally+superficially on inspiration, CANNOT feel deep into it (bimanual), HAS a notch, percussion DULL over it, sometimes crosses midline",
                            "Kidney: ballotable, moves vertically+deeply, CAN feel deep into it (ballottable), NO notch, percussion RESONANT over it (overlying bowel), does not cross midline (except horseshoe kidney)",
                            "Causes of splenomegaly: haematological (lymphoma, leukaemia, myeloproliferative, haemolytic anaemia), portal hypertension, infections (malaria, kala-azar, glandular fever, TB, brucellosis, endocarditis), Felty's syndrome (RA + splenomegaly), SLE, rarities (sarcoid, amyloid)"
                        ]
                    },
                    {
                        title: "Percussion — Liver Span & Ascites (Macleod's)",
                        points: [
                            "Liver percussion: patient holds breath in full expiration, percuss DOWN from right 5th ICS mid-clavicular line, find upper border of dullness, measure distance to palpable liver edge",
                            "Resonance below 5th ICS → hyperinflated lungs OR Chilaiditi's sign (transverse colon interposed between liver and diaphragm)",
                            "Spleen dullness: normally present posterior to left mid-axillary line, 9th-11th ribs",
                            "── ASCITES: SHIFTING DULLNESS ──",
                            "Percuss from midline OUT to flank (resonant → dull). Keep finger at the dull point, roll patient to OPPOSITE side, wait 10 sec for fluid to gravitate, percuss again",
                            "If previously-dull area becomes RESONANT after rolling = shifting dullness = ascites present",
                            "── ASCITES: FLUID THRILL ──",
                            "For tensely distended abdomen: palm flat on left side of abdomen, flick fingers on right side. Have assistant place hand-edge on midline (prevents skin-transmitted impulse). Ripple felt = fluid thrill (only in GROSS ascites)"
                        ]
                    },
                    {
                        title: "Auscultation (Macleod's)",
                        points: [
                            "Place diaphragm right of umbilicus, do NOT move it. Listen up to 2 MINUTES before concluding bowel sounds are absent",
                            "Normal bowel sounds: gurgling, every 5-10 seconds (frequency varies)",
                            "ABSENT bowel sounds → paralytic ileus or peritonitis",
                            "Increased frequency + high-pitched TINKLING sounds → intestinal obstruction",
                            "Listen above umbilicus for AORTIC bruit; 2-3cm above/lateral to umbilicus for RENAL ARTERY STENOSIS bruit; over liver for hepatic bruit",
                            "Friction rub (sounds like rubbing dry fingers) over liver = perihepatitis; over spleen = perisplenitis",
                            "Succussion splash: rock patient's pelvis with both hands — sounds like shaking a half-filled water bottle. Audible splash >4 hours after eating/drinking → DELAYED GASTRIC EMPTYING (e.g. pyloric stenosis)"
                        ]
                    }
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
            "Renal System": {
                icon: "🫘",
                questions: [
                    "Do you have frequency of micturition?",
                    "Are you passing larger amount of urine? (polyuria)",
                    "Are you passing less urine than usual? (oliguria)",
                    "Do you get up at night to pass urine? (nocturia)",
                    "Do you feel pain during passing urine? (dysuria)",
                    "If your bladder is full, do you have to void immediately? (urgency)",
                    "Do you notice narrow stream while passing urine? (poor stream)",
                    "Do you notice difficulty in starting micturition? (hesitancy)",
                    "Is there any dribbling at the end of micturition? (terminal dribbling)",
                    "Do you have incontinence of urine? (stress, urge or overflow?)",
                    "What is the color of your urine? Is it mixed with blood? (hematuria)",
                    "Is the urine frothy? (proteinuria — nephrotic syndrome)",
                    "Do you have any loin pain? Does it go from loin to groin? (ureteric colic)",
                    "Do you have swelling of your face, ankles or whole body? (oedema)",
                    "Do you have headache or visual disturbance? (hypertensive nephropathy)",
                    "Have you had a recent sore throat or skin infection? (post-streptococcal GN)"
                ],
                clinicalExamNotes: [
                    {
                        title: "Renal Examination — Sequence & General Signs (Macleod's)",
                        points: [
                            "SEQUENCE: General appearance → Fluid status → Hands/Face → BP → Abdomen (kidneys) → Other systems",
                            "── GENERAL APPEARANCE ──",
                            "Pallor: anaemia of chronic kidney disease (reduced erythropoietin)",
                            "Sallow/yellow-brown complexion: uraemic pigmentation (retained urochrome) — seen in advanced CKD",
                            "Uraemic frost: white crystalline deposits on skin from urea — only in severe end-stage renal failure",
                            "Oedema: periorbital oedema (early morning, especially in nephrotic syndrome) + ankle/sacral pitting oedema",
                            "Scratch marks (excoriations): generalised pruritus from uraemia or phosphate deposition",
                            "── FLUID STATUS ASSESSMENT ──",
                            "PROCEDURE: Assess fluid balance — look for signs of fluid overload OR depletion",
                            "Fluid overload: raised JVP, peripheral oedema, pulmonary oedema (crackles), hypertension, ascites",
                            "Fluid depletion: low JVP, dry mucous membranes, reduced skin turgor, postural hypotension, tachycardia",
                            "Skin turgor test: pinch skin on dorsum of hand — slow return = dehydration (unreliable in elderly)"
                        ]
                    },
                    {
                        title: "Renal Examination — Hands, Face & BP (Macleod's)",
                        points: [
                            "── HANDS ──",
                            "Leuconychia (white nails): hypoalbuminaemia → nephrotic syndrome",
                            "Half-and-half nails (Lindsay nails): proximal white + distal brown → chronic renal failure",
                            "Peripheral neuropathy: glove-and-stocking sensory loss → uraemic neuropathy",
                            "AV fistula: palpate and auscultate for bruit at wrist or antecubital fossa → patient on haemodialysis",
                            "Tinel's sign at wrist: carpal tunnel syndrome → amyloidosis in dialysis patients",
                            "── FACE ──",
                            "Periorbital oedema: most prominent in the morning → nephrotic syndrome (earliest sign in children)",
                            "Pallor of conjunctiva: anaemia of CKD",
                            "Fundoscopy: hypertensive retinopathy, diabetic retinopathy → underlying cause of CKD",
                            "── BLOOD PRESSURE ──",
                            "Always measure BP in renal patients — hypertension is both a cause AND consequence of CKD",
                            "Measure both arms. Check for postural drop (autonomic neuropathy from uraemia)",
                            "Bruits over renal arteries (flanks): renal artery stenosis → renovascular hypertension"
                        ]
                    },
                    {
                        title: "Renal Examination — Abdominal Palpation of Kidneys (Macleod's)",
                        points: [
                            "── PALPATION OF KIDNEYS ──",
                            "Position: Patient supine, knees slightly flexed to relax abdominal muscles",
                            "BIMANUAL TECHNIQUE: Place one hand in the loin (posteriorly, below 12th rib) and other hand anteriorly in the flank",
                            "Ask patient to breathe in deeply — during inspiration the kidney descends and may become palpable between both hands (ballotment)",
                            "BALLOTTEMENT: Push up firmly with the posterior hand and feel the kidney bounce against the anterior hand",
                            "Normal kidneys: usually NOT palpable (right slightly lower than left). Right kidney more often palpable in thin patients",
                            "── PALPABLE KIDNEY — CAUSES ──",
                            "Unilateral enlarged kidney: renal cell carcinoma, hydronephrosis, polycystic kidney (one side), renal abscess",
                            "Bilateral enlarged kidneys: adult polycystic kidney disease (APKD — irregular, lobulated, bilateral), bilateral hydronephrosis",
                            "Small kidneys (not palpable but detected on USS): chronic pyelonephritis, bilateral renal artery stenosis, CKD",
                            "── DISTINGUISHING KIDNEY FROM SPLEEN/LIVER ──",
                            "Kidney: ballottable (can be bounced between hands), resonant on percussion (bowel in front), does not have a notch, moves down on inspiration",
                            "Spleen: NOT ballottable, dull on percussion, has a notch, moves diagonally towards RIF on inspiration",
                            "── RENAL ANGLE TENDERNESS ──",
                            "PROCEDURE: Patient sitting forward. Place flat of hand in costovertebral angle (angle between 12th rib and lateral border of paraspinal muscles). Strike with ulnar border of fist",
                            "Positive (tender): pyelonephritis, perinephric abscess, ureteric obstruction",
                            "── BLADDER PALPATION ──",
                            "Bladder only palpable when it contains >150–200 mL. Felt as a smooth suprapubic mass rising towards umbilicus",
                            "Palpable bladder: urinary retention (prostate enlargement in men, neurogenic bladder)"
                        ]
                    },
                    {
                        title: "Disease-wise Renal Findings (Macleod's)",
                        points: [
                            "── NEPHROTIC SYNDROME ──",
                            "Periorbital oedema (morning), pitting ankle and sacral oedema, ascites, pleural effusion",
                            "Leuconychia (white nails from hypoalbuminaemia), frothy urine (proteinuria)",
                            "BP normal or raised. No haematuria (usually). Causes: Minimal change disease (children), Membranous nephropathy (adults), DM, SLE",
                            "── NEPHRITIC SYNDROME / ACUTE GN ──",
                            "Haematuria (smoky/cola-coloured urine), oliguria, hypertension, mild oedema (periorbital)",
                            "History: preceded by sore throat (2 weeks) or skin infection (3 weeks) → post-streptococcal GN",
                            "── CHRONIC KIDNEY DISEASE (CKD) ──",
                            "Pallor (anaemia), sallow skin (uraemic pigmentation), pruritus (scratch marks), periorbital oedema",
                            "Hypertension, fluid overload, uraemic fetor (urine smell on breath), peripheral neuropathy",
                            "AV fistula (on dialysis), tunnelled catheter scars, transplant scar in iliac fossa",
                            "── ACUTE KIDNEY INJURY (AKI) ──",
                            "Signs of precipitating cause: hypovolaemia (pre-renal), obstruction (post-renal), nephrotoxic drugs",
                            "Oliguria/anuria, fluid overload, rising creatinine. Kussmaul breathing if severe metabolic acidosis",
                            "── POLYCYSTIC KIDNEY DISEASE (APKD) ──",
                            "Bilateral irregular lobulated masses in flanks, ballottable, may be tender if cyst rupture/infection",
                            "Hypertension, haematuria (cyst rupture), family history (autosomal dominant)",
                            "── RENAL CELL CARCINOMA ──",
                            "Classic triad: haematuria + loin pain + palpable renal mass (only 10% present with all three)",
                            "Varicocoele (left-sided, sudden onset) — left gonadal vein drains into left renal vein → blocked by tumour",
                            "── RENAL ARTERY STENOSIS ──",
                            "Hypertension resistant to treatment, renal bruit in flank, asymmetric kidneys on USS"
                        ]
                    }
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
                ],
                clinicalExamNotes: [
                    {
                        title: "Locomotor Examination — Look, Feel, Move Principle (Macleod\'s)",
                        points: [
                            "GENERAL PRINCIPLE — LOOK, FEEL, MOVE: Follow this sequence for every joint",
                            "Always compare the opposite side. Always expose the joint above AND below the affected one",
                            "Ask which area is painful BEFORE palpating — do not cause additional pain",
                            "Assess ACTIVE movement before passive movement",
                            "── LOOK (Inspection) ──",
                            "Skin: erythema (redness), rash, psoriatic plaques, bruising, sinuses",
                            "Subcutaneous tissues: swelling — bony hard vs soft/fluctuant (effusion) vs soft tissue",
                            "Bony outline: deformity — valgus/varus, subluxation, dislocation",
                            "Muscle: wasting around the joint",
                            "Posture and gait: antalgic gait (leans away from painful side), Trendelenburg gait (hip), shuffling (Parkinson\'s)",
                            "── FEEL (Palpation) ──",
                            "Warmth: use back of hand to compare same joint bilaterally. Warm = active inflammation",
                            "Tenderness: localise exactly — joint line, bone, tendon, bursa",
                            "Swelling character: bony hard = osteophytes (OA) | soft/fluctuant = synovial effusion | boggy = synovial thickening (RA)",
                            "Effusion test (knee): Patella tap test — compress suprapatellar pouch downward with one hand, tap patella with other. Patella bounces = effusion",
                            "Bulge test (knee, small effusion): empty medial parapatellar gutter with hand, then stroke lateral side — bulge appears medially",
                            "Stability: test ligaments — valgus/varus stress for MCL/LCL | anterior/posterior drawer for cruciate ligaments",
                            "── MOVE (Range of Motion) ──",
                            "Active first (patient moves themselves) — reveals functional ability and pain on movement",
                            "Passive (examiner moves) — reveals full range and end-feel (hard/soft/springy)",
                            "Document in degrees. Compare with opposite side",
                            "Crepitus: felt or heard on movement → cartilage loss (OA)"
                        ]
                    },
                    {
                        title: "Joint-specific Examination Procedures (Macleod\'s)",
                        points: [
                            "── HANDS ──",
                            "Inspect dorsal then palmar surface: swelling of MCP joints (RA) | DIP joints (OA/psoriatic) | PIP joints (RA/OA)",
                            "Deformities: Bouchard\'s nodes (PIP bony swellings, OA) | Heberden\'s nodes (DIP bony swellings, OA) | Boutonniere | Swan neck | Z-thumb | Ulnar deviation at MCPs (RA)",
                            "Squeeze test: gentle lateral compression of all MCPs simultaneously — tenderness = active synovitis (RA)",
                            "Grip strength: ask patient to squeeze your fingers",
                            "── SPINE ──",
                            "Inspect from behind: scoliosis (lateral curvature) | from side: loss of lumbar lordosis | kyphosis",
                            "Schober\'s test (lumbar flexion): Mark L5 vertebra and 10 cm above. Ask patient to touch toes. Normal — marks separate to >15 cm. <4 cm increase = ankylosing spondylitis",
                            "Straight leg raise (SLR): patient supine. Raise leg with knee straight — pain radiating below knee at <70° = nerve root compression (L4/L5/S1)",
                            "── HIP ──",
                            "Thomas test: flex one hip fully → other hip rises off table if fixed flexion deformity",
                            "FADIR test: Flexion, ADduction, Internal Rotation → pain = hip pathology or impingement",
                            "── KNEE ──",
                            "Patella tap + bulge sign for effusion (see above)",
                            "McMurray\'s test: flex knee fully, rotate tibia — click/pain on extension = meniscal tear",
                            "── SHOULDER ──",
                            "Painful arc: pain between 60–120° abduction only → supraspinatus tendinitis or subacromial bursitis",
                            "Full abduction loss: rotator cuff tear"
                        ]
                    },
                    {
                        title: "Disease-wise Locomotor Findings (Macleod\'s)",
                        points: [
                            "── RHEUMATOID ARTHRITIS (RA) ──",
                            "Symmetrical polyarthritis — small joints of hands and feet (MCP, PIP, wrists) + large joints",
                            "Morning stiffness >30–60 minutes, improves with activity",
                            "Deformities: ulnar deviation, swan neck, boutonniere, Z-thumb",
                            "Extra-articular: rheumatoid nodules (elbows), anaemia, splenomegaly (Felty\'s), lung fibrosis, scleritis",
                            "── OSTEOARTHRITIS (OA) ──",
                            "Asymmetrical, large weight-bearing joints (hip, knee) + DIP/PIP/CMC of thumb",
                            "Heberden\'s nodes (DIP) + Bouchard\'s nodes (PIP). Stiffness <30 min (after rest, eases quickly)",
                            "Crepitus, bony swelling, reduced range of movement. No systemic features",
                            "── GOUT ──",
                            "Acute monoarthritis — first MTP joint (podagra) most common. Also ankle, knee",
                            "Red, hot, swollen, extremely tender joint. Tophi on ears/elbows in chronic gout",
                            "Trigger: alcohol, red meat, diuretics, dehydration",
                            "── ANKYLOSING SPONDYLITIS ──",
                            "Young man, insidious lower back pain + morning stiffness improving with exercise",
                            "Reduced lumbar flexion (Schober\'s test), reduced chest expansion, question-mark posture, sacroiliac joint tenderness",
                            "Extra-articular: anterior uveitis (iritis), aortic regurgitation, apical lung fibrosis",
                            "── SEPTIC ARTHRITIS ──",
                            "EMERGENCY: hot, red, swollen, exquisitely tender joint, fever. Usually monoarticular. DO NOT MISS",
                            "Patient refuses to move joint at all (active or passive). Most common: knee, hip, shoulder",
                            "── PSORIATIC ARTHRITIS ──",
                            "Asymmetrical, DIP joint involvement, dactylitis (sausage digit), nail pitting, onycholysis",
                            "Psoriatic skin plaques (silvery scales on extensor surfaces), enthesitis"
                        ]
                    }
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
                ],
                clinicalExamNotes: [
                    {
                        title: "Thyroid Examination — Full Procedure (Macleod\'s)",
                        points: [
                            "── GENERAL ASSESSMENT ──",
                            "Observe body weight, behaviour, speech: agitation/pressure of speech → hyperthyroidism | apathy/slow speech/husky voice → hypothyroidism",
                            "Hoarse voice → vocal cord paralysis → thyroid malignancy (recurrent laryngeal nerve involvement)",
                            "── HANDS ──",
                            "Tremor: fine tremor of outstretched hands → hyperthyroidism (sympathetic overactivity). Lay a sheet of paper over fingers to detect it",
                            "Palmar erythema, onycholysis (nails lifted from nail bed) → hyperthyroidism",
                            "Thyroid acropachy: soft tissue swelling + periosteal hypertrophy of distal phalanges (like clubbing) → Graves\' disease only",
                            "Vitiligo: patchy depigmentation → autoimmune (Graves\' disease)",
                            "Dry coarse skin → hypothyroidism",
                            "── PULSE ──",
                            "Tachycardia or AF → hyperthyroidism | Bradycardia → hypothyroidism",
                            "── NECK — THYROID INSPECTION ──",
                            "PROCEDURE: Inspect neck from front with patient\'s neck slightly extended. Inspect from the side. Give patient a glass of water to sip and observe",
                            "Thyroid moves UP on swallowing (moves with trachea) — distinguishes thyroid from other neck swellings",
                            "── THYROID PALPATION ──",
                            "PROCEDURE: Stand BEHIND patient. Place both hands gently on front of neck with index fingers just touching. Patient\'s neck slightly FLEXED (relaxes sternocleidomastoids). Ask patient to swallow again — feel gland move upward",
                            "Assess: size (enlarged = goitre), shape (diffuse/nodular), consistency (soft/firm/hard), tenderness, any thrill",
                            "Palpate for cervical lymphadenopathy from behind",
                            "Percuss manubrium: dullness → retrosternal extension of goitre",
                            "Auscultate over thyroid with diaphragm: thyroid bruit (systolic) → increased vascularity → Graves\' disease",
                            "── EYES (Graves\' ophthalmopathy) ──",
                            "PROCEDURE: Look for periorbital puffiness, lid retraction (white sclera visible ABOVE iris in primary gaze), exophthalmos (proptosis — look from above and behind patient)",
                            "Lid lag test: ask patient to follow finger moving downward slowly. Lid lags behind eyeball = lid lag (hyperthyroidism)",
                            "Assess eye movements (CN III, IV, VI) — upgaze restriction common in Graves\' ophthalmopathy",
                            "── LOWER LIMBS ──",
                            "Pretibial myxoedema: raised, pink/brown, indurated (woody) skin over anterior shins → Graves\' disease ONLY (not hypothyroidism despite name)",
                            "Ankle reflexes: brisk/exaggerated → hyperthyroidism | Slow relaxation phase (hung-up) → hypothyroidism. Test with knee flexed, foot dangling",
                            "Proximal muscle weakness: difficulty rising from chair without using arms → both hyper and hypothyroidism"
                        ]
                    },
                    {
                        title: "Disease-wise Endocrine Findings (Macleod\'s)",
                        points: [
                            "── HYPERTHYROIDISM ──",
                            "Inspection: restless, agitated, thin (weight loss), sweating, warm moist hands, fine tremor, onycholysis, AF",
                            "Thyroid: diffuse smooth goitre (Graves\') or nodular goitre. Thyroid bruit in Graves\'",
                            "Eyes: exophthalmos, lid retraction, lid lag, ophthalmopathy (Graves\' only)",
                            "Reflexes: brisk. Proximal myopathy. AF on pulse. Pretibial myxoedema (Graves\' only)",
                            "── HYPOTHYROIDISM ──",
                            "Inspection: slow, apathetic, obese (weight gain), cold dry skin, coarse hair/eyebrows (loss of outer 1/3), periorbital puffiness (myxoedema), hoarse voice",
                            "Pulse: bradycardia. BP: diastolic hypertension. Delayed relaxation of ankle reflexes",
                            "Goitre: may or may not be present. Carpal tunnel syndrome (tingling hands)",
                            "── DIABETES MELLITUS ──",
                            "Inspection: may be overweight (T2DM) or thin (T1DM). Lipodystrophy at insulin injection sites",
                            "Hands: finger-prick marks, limited joint mobility (prayer sign — cannot appose palms flat)",
                            "Feet: peripheral neuropathy (glove/stocking loss of sensation, absent ankle jerks), peripheral vascular disease (absent pulses, ulcers, gangrene), diabetic foot ulcers (painless, punched-out, over pressure areas)",
                            "Eyes: fundoscopy → diabetic retinopathy (microaneurysms, haemorrhages, exudates, new vessels)",
                            "── CUSHING\'S SYNDROME ──",
                            "Central obesity, moon face, buffalo hump (fat pad between shoulders), supraclavicular fat pads",
                            "Purple striae (>1 cm wide) on abdomen/thighs, easy bruising, thin skin, proximal myopathy",
                            "Hypertension, hyperglycaemia, osteoporosis (vertebral fractures), hirsutism in women",
                            "── ACROMEGALY ──",
                            "Large hands (cannot remove ring), prominent jaw (prognathism), wide-spaced teeth, large tongue (macroglossia), brow prominence, large nose",
                            "Hyperhidrosis (excessive sweating), carpal tunnel syndrome, bitemporal hemianopia (pituitary tumour pressing on optic chiasm)"
                        ]
                    }
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
                    "Are you taking any drugs? Have you been exposed to chemicals or radiation? (aplastic anemia)",
                    "Do you have any bone pain or joint pain? (myeloma, leukaemia)",
                    "Have you noticed night sweats, weight loss or fever? (lymphoma, leukaemia)"
                ],
                clinicalExamNotes: [
                    {
                        title: "Haematological Examination — Sequence & Key Signs (Macleod\'s)",
                        points: [
                            "SEQUENCE: General inspection → Hands → Face (eyes, mouth) → Lymph nodes (neck, axilla, groin) → Abdomen (spleen, liver) → Bones",
                            "── GENERAL INSPECTION ──",
                            "Pallor: anaemia — most reliably detected in lower palpebral conjunctiva, palmar creases, nail beds",
                            "Jaundice: haemolytic anaemia (lemon-yellow tinge) — excessive RBC breakdown",
                            "Bruising (ecchymosis): thrombocytopenia, clotting factor deficiency (haemophilia)",
                            "Petechiae: pinpoint non-blanching red spots on skin — platelet disorder or vasculitis. Press with glass — does not blanch (unlike erythema)",
                            "Purpura: larger non-blanching spots (>2mm) — thrombocytopenia, vasculitis, DIC",
                            "── HANDS ──",
                            "Koilonychia (spoon-shaped nails): iron deficiency anaemia",
                            "Leuconychia (white nails): hypoalbuminaemia (in liver disease with haematological involvement)",
                            "Palmar crease pallor: significant anaemia when creases are paler than examiner\'s own",
                            "Bone tenderness over metacarpals (gentle squeeze): myeloma, leukaemia",
                            "── FACE AND MOUTH ──",
                            "Conjunctival pallor: lower lid pulled down — pale conjunctiva = anaemia",
                            "Scleral jaundice: haemolytic anaemia, hepatic involvement",
                            "Angular stomatitis (cracking at corners of mouth): iron/folate/B12 deficiency",
                            "Glossitis (smooth red tongue): iron, folate, B12 deficiency",
                            "Mouth ulcers: neutropenia (chemotherapy, aplastic anaemia)",
                            "Gum hypertrophy: leukaemic infiltration (AML especially)",
                            "Facial plethora/ruddiness: polycythaemia rubra vera"
                        ]
                    },
                    {
                        title: "Lymph Nodes & Spleen Examination (Macleod\'s)",
                        points: [
                            "── LYMPH NODE EXAMINATION ──",
                            "Palpate all lymph node groups systematically: cervical (from behind) → axillary → epitrochlear → inguinal",
                            "CERVICAL: Examine from BEHIND with patient sitting forward. Palpate: submental → submandibular → pre-auricular → post-auricular → occipital → anterior cervical chain → posterior cervical chain → supraclavicular (especially left — Virchow\'s node = Troisier\'s sign for abdominal malignancy)",
                            "AXILLARY: Support patient\'s arm to relax pectoral muscles. Palpate apex of axilla then all 4 walls (anterior/posterior/medial/lateral)",
                            "INGUINAL: Palpate horizontal group (along inguinal ligament) and vertical group (along long saphenous vein)",
                            "EPITROCHLEAR: Feel just above medial epicondyle of humerus — enlarged in lymphoma, sarcoidosis, secondary syphilis",
                            "── LYMPH NODE CHARACTERISTICS ──",
                            "Size: >1 cm in adults is significant (>0.5 cm in epitrochlear area)",
                            "Consistency: soft/rubbery → lymphoma | hard/stony → metastatic cancer | tender/fluctuant → infection/abscess",
                            "Fixity: fixed to skin or deep structures → malignancy | mobile = usually benign",
                            "Distribution: localised → infection/local tumour | generalised → lymphoma, leukaemia, viral infection (EBV/HIV)",
                            "── SPLEEN EXAMINATION ──",
                            "PROCEDURE: Patient supine. Start palpating from RIGHT ILIAC FOSSA and move towards left hypochondrium with each breath (spleen moves DOWN and towards RIF on inspiration)",
                            "Use RIGHT HAND flat, fingers pointing towards left costal margin. Ask patient to breathe in deeply — feel for leading edge of spleen",
                            "If not felt lying flat: roll patient onto RIGHT SIDE (right lateral position) — brings spleen forward",
                            "CANNOT GET ABOVE a spleen (unlike kidney). Does NOT ballotte. Dull on percussion. Has a NOTCH on medial border (cannot always be felt)",
                            "Percussion: percuss from resonant area (left lateral chest) towards left hypochondrium — dullness = spleen",
                            "Measure splenomegaly: in cm below left costal margin in mid-clavicular line",
                            "── CAUSES OF SPLENOMEGALY ──",
                            "Mild (just palpable to 5 cm): infections (EBV/malaria/typhoid/SBE), haematological (ITP, haemolytic anaemia, early CML)",
                            "Moderate (5–10 cm): lymphoma, leukaemia (CLL), portal hypertension (CLD)",
                            "Massive (>10 cm, crosses midline): CML, myelofibrosis, malaria (tropical splenomegaly), leishmaniasis (kala-azar)"
                        ]
                    },
                    {
                        title: "Disease-wise Haematological Findings (Macleod\'s)",
                        points: [
                            "── IRON DEFICIENCY ANAEMIA ──",
                            "Pallor (conjunctiva, palms), koilonychia (spoon nails), angular stomatitis, glossitis",
                            "Brittle hair, dysphagia (Plummer-Vinson syndrome = post-cricoid web + IDA + glossitis)",
                            "Causes: chronic blood loss (GIT, menorrhagia), poor diet, malabsorption",
                            "── MEGALOBLASTIC ANAEMIA (B12/Folate) ──",
                            "Pallor + lemon-yellow jaundice (haemolysis component), glossitis, angular stomatitis",
                            "B12 deficiency: subacute combined degeneration — posterior column (proprioception loss, romberg positive) + lateral column (UMN signs)",
                            "── HAEMOLYTIC ANAEMIA ──",
                            "Pallor + jaundice (lemon-yellow/unconjugated) + splenomegaly",
                            "Chronic: gallstones (pigmented), leg ulcers (sickle cell). No bilirubin in urine (unconjugated)",
                            "── LEUKAEMIA ──",
                            "Acute (ALL/AML): pallor (anaemia) + petechiae/purpura (thrombocytopenia) + fever (neutropenia/infection) + bone pain + hepatosplenomegaly + lymphadenopathy. Gum hypertrophy (AML-M5)",
                            "Chronic (CML): massive splenomegaly (hallmark), hepatomegaly, anaemia, weight loss, night sweats. WBC >50,000 on FBC",
                            "Chronic (CLL): generalised lymphadenopathy (soft, rubbery, mobile) + splenomegaly + hepatomegaly + anaemia. Older patients",
                            "── LYMPHOMA ──",
                            "Hodgkin\'s: painless rubbery lymphadenopathy (cervical most common), B symptoms (fever >38°C, drenching night sweats, >10% weight loss), alcohol-induced lymph node pain (pathognomonic), splenomegaly",
                            "Non-Hodgkin\'s: more generalised lymphadenopathy, extranodal disease common",
                            "── THROMBOCYTOPENIA (ITP) ──",
                            "Petechiae and purpura (non-blanching), easy bruising, mucosal bleeding (gum, epistaxis)",
                            "Splenomegaly (mild). No lymphadenopathy. Normal haemoglobin (unless bleeding)"
                        ]
                    }
                ]
            },
            "Reproductive System": {
                icon: "👫",
                questions: [
                    "── FOR MALE PATIENTS ──",
                    "[Male] Do you have any difficulty, pain or burning on passing urine? Any discharge from the penis?",
                    "[Male] Have you noticed any swelling, lump or pain in your testes or scrotum?",
                    "[Male] Do you have any ulcer, rash or sore on your genitals?",
                    "[Male] Have you had any problems with sexual function or erectile dysfunction?",
                    "[Male] Have you had any sexually transmitted infections in the past?",
                    "── FOR FEMALE PATIENTS ──",
                    "[Female] When was your last menstrual period? (LMP)",
                    "[Female] Are your periods regular? How many days does bleeding last? How heavy? Any pain? (dysmenorrhoea)",
                    "[Female] Do you have any bleeding between periods or after sexual intercourse? (intermenstrual / postcoital bleeding)",
                    "[Female] Do you have any vaginal discharge? What colour, smell or amount?",
                    "[Female] Do you have any pain during sexual intercourse? (dyspareunia)",
                    "[Female] Have you ever been pregnant? How many times? Any miscarriage or abortion?",
                    "[Female] During past pregnancy, did you suffer from high blood pressure or diabetes?",
                    "[Female] In previous delivery, did you suffer from prolonged bleeding?",
                    "[Female] Do you feel any lump in your breast? How long? Getting larger? Painful or painless? Any discharge, itching or skin change?",
                    "[Female] Are you currently using any contraception?"
                ],
                clinicalExamNotes: [
                    {
                        title: "Male Reproductive Examination — Procedure (Macleod\'s)",
                        points: [
                            "Always explain the examination, ensure privacy, and offer a chaperone",
                            "── PENIS ──",
                            "Inspect the glans and prepuce: retract foreskin gently (if present) to inspect the meatus — check position (normally at tip), look for ulcers, discharge, warts, phimosis",
                            "Urethral discharge: milky/purulent → gonorrhoea | clear → chlamydia/non-specific urethritis",
                            "Ulcers: painless indurated ulcer → syphilitic chancre | painful ulcer(s) → herpes simplex",
                            "── SCROTUM & TESTES ──",
                            "PROCEDURE: Inspect scrotum for swelling, asymmetry, skin changes. Then palpate each testis separately between thumb and first two fingers",
                            "Assess: size (normal 4×3 cm), shape, consistency, tenderness, and whether you can get above the swelling",
                            "Transillumination: shine torch behind scrotal swelling — transilluminates (glows) = fluid (hydrocoele) | does not transilluminate = solid mass",
                            "Can you get above it? If NO → inguinal hernia extending into scrotum. If YES → scrotal swelling",
                            "Epididymis: palpate posteriorly on each testis — tender epididymis → epididymo-orchitis",
                            "── SCROTAL SWELLINGS — DIFFERENTIAL ──",
                            "Hydrocoele: transilluminates, non-tender, smooth, fluctuant, can get above it",
                            "Epididymal cyst: transilluminates, separate from testis (above and behind), non-tender",
                            "Varicocoele: bag of worms feel, more prominent on standing, usually left-sided (left gonadal vein → left renal vein → longer course). Sudden left varicocoele in older man → renal cell carcinoma blocking left renal vein",
                            "Testicular torsion: ACUTE severe pain, tender, high-riding testis, absent cremasteric reflex → EMERGENCY",
                            "Testicular tumour: hard, painless, irregular testicular mass — young man. Most common malignancy in men aged 20–35",
                            "Inguinal hernia: cannot get above it, impulse on coughing, may be reducible"
                        ]
                    },
                    {
                        title: "Female Reproductive Examination — Procedure (Macleod\'s)",
                        points: [
                            "Always explain the examination, ensure privacy, and a female chaperone must be present",
                            "── OBSTETRIC / ABDOMINAL EXAMINATION IN PREGNANCY ──",
                            "Position: Patient supine, knees slightly flexed, abdomen exposed from symphysis pubis to xiphisternum. In late pregnancy: 15° left lateral tilt to avoid vena cava compression",
                            "Inspection: linea nigra (dark midline abdominal discolouration), striae gravidarum (stretch marks), Caesarean scars, visible fetal movements",
                            "── FUNDAL HEIGHT ──",
                            "PROCEDURE: Measure from pubic symphysis to uterine fundus using tape measure (blank side facing you to avoid bias). SFH in cm ≈ weeks of gestation after 20 weeks",
                            "At 20 weeks: fundus at umbilicus | At 36 weeks: fundus at xiphisternum",
                            "── LEOPOLD MANOEUVRES (Fetal palpation) ──",
                            "Step 1 — Fundal palpation: Face patient\'s head. Both hands on fundus — identify fetal pole (head = hard round | breech = soft irregular)",
                            "Step 2 — Lateral palpation: Hands down both sides of uterus — firm smooth side = fetal back | knobbly side = limbs",
                            "Step 3 — Pelvic palpation: Face patient\'s feet. Hands on lower uterus — identify presenting part (head = hard, round, ballottable)",
                            "Engagement: head engaged when only 2/5 or less palpable abdominally",
                            "── BREAST EXAMINATION ──",
                            "PROCEDURE: Patient sitting upright then lying at 45°. Inspect for: asymmetry, skin changes (peau d\'orange, erythema, dimpling), nipple inversion or discharge",
                            "Palpate with flat of fingers in concentric circles or quadrants. Examine ALL breast tissue including axillary tail",
                            "If lump found: size, shape, consistency, tenderness, fixity to skin or chest wall, nipple discharge, axillary lymph nodes",
                            "Peau d\'orange (skin dimpling like orange peel): lymphatic obstruction → inflammatory breast carcinoma",
                            "── MENSTRUAL ASSESSMENT ──",
                            "Normal cycle: 21–35 days, lasting 2–7 days, 20–80 mL blood loss",
                            "Menorrhagia: heavy periods (>80 mL) → fibroids, endometriosis, PCOS, hypothyroidism, anticoagulants",
                            "Amenorrhoea: primary (never menstruated by 16) | secondary (stopped for >3 months) → pregnancy, PCOS, hyperprolactinaemia, premature ovarian failure, anorexia"
                        ]
                    }
                ]
            }
        }
    }
};
