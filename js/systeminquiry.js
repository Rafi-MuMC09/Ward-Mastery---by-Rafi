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
    }
};
