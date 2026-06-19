// Systemic Examination Map
// Disease name → array of clinical examination notes

const SYSEXAM_MAP = {
  "Bronchial Asthma": [
    "Inspection: bilateral symmetrical chest, hyperinflated during attack",
    "Trachea: central",
    "Percussion: bilateral hyperresonance during attack",
    "Auscultation: prolonged expiration, bilateral expiratory wheeze (polyphonic)",
    "Vocal resonance: normal or reduced",
    "Peak flow: <50% predicted during moderate attack",
    "Between attacks: chest may be completely normal"
  ],
  "Chronic Bronchitis": [
    "Inspection: barrel chest, use of accessory muscles",
    "Trachea: central",
    "Percussion: normal or hyperresonant",
    "Auscultation: bilateral coarse crepitations + rhonchi, prolonged expiration",
    "Vocal resonance: normal",
    "Signs of cor pulmonale: raised JVP, bilateral pitting oedema, loud P2"
  ],
  "COPD": [
    "Inspection: barrel chest (AP diameter increased), pursed-lip breathing, use of accessory muscles",
    "Trachea: central, tracheal descent on inspiration",
    "Chest expansion: bilaterally reduced",
    "Percussion: bilateral hyperresonance, obliteration of cardiac/hepatic dullness",
    "Auscultation: vesicular breath sounds bilaterally reduced, scattered rhonchi",
    "Vocal resonance: bilaterally reduced"
  ],
  "Bronchiectasis": [
    "Inspection: chest deformity possible, Harrison's sulcus if childhood onset",
    "Trachea: may be deviated toward affected side (fibrosis/collapse)",
    "Percussion: dull over affected area (if collapse/consolidation)",
    "Auscultation: coarse crepitations ± rhonchi over affected lobe (typically lower lobe)",
    "Vocal resonance: increased over consolidation, reduced over collapse",
    "Signs of cor pulmonale in advanced disease"
  ],
  "Pleural Effusion (Tubercular)": [
    "Inspection: reduced movement on affected side",
    "Trachea: deviated AWAY from affected side (if large effusion)",
    "Chest expansion: reduced on affected side",
    "Percussion: STONY DULL over effusion (pathognomonic)",
    "Auscultation: breath sounds ABSENT over effusion; bronchial breathing at upper border (compressed lung)",
    "Vocal resonance: reduced/absent over effusion; aegophony at upper border",
    "Tactile vocal fremitus: absent over effusion"
  ],
  "Pulmonary Tuberculosis": [
    "Inspection: reduced chest movement on affected side (usually upper zone)",
    "Trachea: deviated toward affected side if upper lobe fibrosis/collapse",
    "Percussion: dull over affected area (upper lobe commonly)",
    "Auscultation: bronchial breathing or amphoric breathing over cavity; post-tussive crepitations",
    "Vocal resonance: increased (bronchophony/whispering pectoriloquy) over affected area",
    "Crackles: coarse, post-tussive in upper lobe"
  ],
  "Lung Abscess": [
    "Inspection: reduced movement on affected side",
    "Trachea: may deviate toward lesion",
    "Percussion: dull over abscess; if large cavity — amphoric note",
    "Auscultation: bronchial or amphoric breathing over cavity; coarse crepitations around it",
    "Vocal resonance: increased over cavity (whispering pectoriloquy)",
    "Signs of systemic infection: tachycardia, fever"
  ],
  "Bronchial Carcinoma": [
    "Inspection: reduced movement on affected side; chest wall collapse if obstructive",
    "Trachea: deviated toward affected side (collapse) or away (effusion/mediastinal mass)",
    "Percussion: dull over consolidation/collapse/effusion; hyperresonant if obstructive emphysema",
    "Auscultation: absent or reduced breath sounds; wheeze if partial obstruction; fixed monophonic wheeze",
    "Vocal resonance: absent over effusion; increased over consolidation",
    "SVC obstruction signs: facial oedema, distended neck veins, non-pulsatile"
  ],
  "Consolidation (Pneumonia)": [
    "Inspection: reduced movement on affected side",
    "Trachea: central (consolidation doesn't shift trachea)",
    "Percussion: DULL over affected lobe",
    "Auscultation: BRONCHIAL BREATHING over consolidation; coarse crepitations",
    "Vocal resonance: INCREASED (bronchophony, whispering pectoriloquy) — key sign",
    "Tactile vocal fremitus: increased over consolidation",
    "Pleural rub may be present at periphery"
  ],
  "Pneumothorax": [
    "Inspection: reduced movement on affected side; may see distended neck veins (tension)",
    "Trachea: deviated AWAY from affected side (tension PTX — emergency)",
    "Chest expansion: reduced on affected side",
    "Percussion: HYPERRESONANT on affected side",
    "Auscultation: breath sounds ABSENT on affected side",
    "Vocal resonance: absent on affected side",
    "Tactile vocal fremitus: absent on affected side"
  ],
  "Superior Vena Cava Obstruction": [
    "Inspection: facial oedema, suffused conjunctiva, dilated neck veins (non-pulsatile), dilated superficial chest veins",
    "Pemberton's sign: positive (raising both arms causes facial plethora/cyanosis)",
    "Trachea: may be deviated by mediastinal mass",
    "Percussion: dull over mediastinum if mass present",
    "Auscultation: reduced breath sounds if associated effusion/collapse",
    "Venous flow direction: downward on abdominal wall (reversed if IVC obstruction)"
  ],
  "Diffuse Parenchymal Lung Disease (DPLD)": [
    "Inspection: bilateral reduced chest movement; tachypnoea",
    "Trachea: central",
    "Percussion: normal or slightly reduced at bases",
    "Auscultation: FINE END-INSPIRATORY CREPITATIONS bilateral basal (velcro crackles in IPF)",
    "Vocal resonance: normal or reduced",
    "Signs of pulmonary hypertension: loud P2, right ventricular heave",
    "Clubbing: present in IPF, asbestosis, CTD-ILD"
  ],
  "Cystic Fibrosis": [
    "Inspection: barrel chest, Harrison's sulcus, use of accessory muscles",
    "Trachea: central or deviated (fibrosis/collapse)",
    "Percussion: hyperresonant (air trapping) or dull over collapsed areas",
    "Auscultation: bilateral coarse crepitations and rhonchi; wheeze",
    "Signs of cor pulmonale: raised JVP, pedal oedema in advanced disease",
    "Abdomen: hepatomegaly (biliary cirrhosis); meconium ileus equivalent in adults"
  ],
  "Mitral Stenosis": [
    "Pulse: low volume, irregular (AF common), tapping apex",
    "JVP: raised if RHF developed; prominent 'a' wave (if sinus rhythm)",
    "Apex beat: tapping, non-displaced (undisplaced in pure MS)",
    "Left parasternal heave: present (RV hypertrophy)",
    "Palpable P2: present at pulmonary area",
    "Auscultation: loud S1 (if valve mobile), opening snap after S2, mid-diastolic rumbling murmur (best heard in left lateral position with bell at apex)",
    "Pulmonary area: loud P2; Graham-Steell murmur (EDM) if pulmonary hypertension"
  ],
  "Mitral Regurgitation": [
    "Pulse: normal volume, may be irregular (AF)",
    "Apex beat: displaced laterally and downward (volume overload); hyperdynamic",
    "Left parasternal heave: absent unless pulmonary hypertension",
    "Auscultation: PANSYSTOLIC MURMUR at apex, radiating to axilla; soft/absent S1",
    "S3 gallop: present (volume overload)",
    "Pulmonary area: soft P2 unless pulmonary hypertension develops"
  ],
  "Mixed Mitral Stenosis + Regurgitation": [
    "Pulse: irregular (AF common), may be of normal volume",
    "Apex beat: displaced (regurgitation dominant) or tapping (stenosis dominant)",
    "Left parasternal heave: present (RV hypertrophy)",
    "Auscultation: loud S1 + opening snap (stenosis component); pansystolic murmur to axilla (regurgitation component); mid-diastolic murmur",
    "Dominant lesion determines clinical picture",
    "Pulmonary hypertension signs: loud P2, peripheral oedema"
  ],
  "Aortic Stenosis": [
    "Pulse: SLOW RISING (plateau pulse), low volume, anacrotic — pathognomonic",
    "Blood pressure: narrow pulse pressure",
    "Apex beat: SUSTAINED/HEAVING, not displaced (concentric hypertrophy)",
    "Systolic thrill at aortic area and carotid",
    "Auscultation: EJECTION SYSTOLIC MURMUR at aortic area, radiating to carotids; soft A2 or absent A2; S4 gallop",
    "Signs of severity: soft A2, reverse splitting S2, S4, LV failure"
  ],
  "Aortic Regurgitation": [
    "Pulse: COLLAPSING/WATER-HAMMER pulse — pathognomonic; high volume, rapidly rising and falling",
    "Wide pulse pressure (systolic BP high, diastolic low)",
    "Corrigan's sign: visible carotid pulsation in neck",
    "De Musset's sign: head nodding with heartbeat",
    "Apex beat: displaced laterally and downward; hyperdynamic/thrusting",
    "Auscultation: EARLY DIASTOLIC MURMUR at left sternal edge (sitting forward, held expiration); Austin Flint murmur at apex (functional MS)",
    "Traube's sign: pistol-shot femorals; Duroziez's sign: to-and-fro murmur over femoral artery"
  ],
  "Congestive Cardiac Failure": [
    "Pulse: tachycardia, low volume; alternating pulse (pulsus alternans) in severe LVF",
    "JVP: raised, with hepatojugular reflux positive",
    "Apex beat: displaced laterally (dilated cardiomyopathy); heaving",
    "Auscultation: S3 gallop (key sign of LVF); soft S1; functional MR murmur possible",
    "Lungs: bilateral basal fine crepitations (pulmonary oedema)",
    "Abdomen: tender hepatomegaly; ascites in severe RHF",
    "Legs: bilateral pitting pedal oedema"
  ],
  "Hypertension": [
    "Pulse: full volume, regular; radio-radial and radio-femoral delay (coarctation)",
    "Apex beat: sustained/heaving (LV hypertrophy), may be displaced",
    "Auscultation: aortic area — soft ejection systolic murmur (aortic sclerosis); loud A2",
    "S4 gallop: LV hypertrophy",
    "Fundoscopy: AV nipping, flame haemorrhages, papilloedema (grade III/IV)",
    "Signs of target organ damage: carotid bruit (stroke), renal bruit (renal artery stenosis)"
  ],
  "Subacute Bacterial Endocarditis": [
    "Fundoscopy: Roth spots (oval retinal haemorrhages with pale centre)",
    "Hands: Osler's nodes (painful, tender nodules on finger pulps); Janeway lesions (painless erythematous macules on palms/soles)",
    "Splinter haemorrhages: under nails",
    "Heart: murmur — new or changing; signs of underlying valve disease",
    "Abdomen: splenomegaly (common); hepatomegaly",
    "Embolic signs: focal neurological deficit, haematuria, renal angle tenderness"
  ],
  "Rheumatic Fever": [
    "Joints: migratory polyarthritis — hot, red, swollen, tender large joints",
    "Heart: pancarditis — tachycardia out of proportion, new murmur (MR most common), pericardial rub, CCF",
    "Skin: erythema marginatum (evanescent pink rash with pale centre on trunk)",
    "Subcutaneous nodules: firm, painless, over bony prominences",
    "Chorea (Sydenham's): involuntary irregular movements, emotional lability"
  ],
  "Eisenmenger's Syndrome": [
    "Central cyanosis: present from Eisenmenger reversal",
    "Clubbing: present (due to chronic hypoxaemia)",
    "Pulse: low volume",
    "JVP: raised (RHF)",
    "Left parasternal heave: prominent (RV hypertrophy)",
    "Auscultation: loud palpable P2; pulmonary EDM (pulmonary regurgitation); original shunt murmur may DISAPPEAR",
    "Peripheral oedema and hepatomegaly in advanced RHF"
  ],
  "Tetralogy of Fallot": [
    "Central cyanosis: present from birth or early childhood",
    "Clubbing: marked, in all 4 limbs",
    "Squatting: characteristic position to relieve cyanotic spell",
    "Left parasternal heave: RV hypertrophy",
    "Auscultation: single S2 (absent P2); ejection systolic murmur at pulmonary area (infundibular stenosis); NO thrill usually",
    "Tet spells: episodes of worsening cyanosis + unconsciousness"
  ],
  "Ventricular Septal Defect": [
    "Pulse: normal or increased volume (small VSD normal)",
    "Apex beat: hyperdynamic, may be displaced (large VSD)",
    "Systolic thrill: at lower left sternal edge (3rd/4th ICS) — palpable",
    "Auscultation: PANSYSTOLIC MURMUR at lower left sternal edge, harsh, radiating to right sternal edge",
    "P2: loud if pulmonary hypertension develops",
    "Signs of heart failure if large VSD in infant"
  ],
  "Atrial Septal Defect": [
    "Pulse: normal volume",
    "Apex beat: normal or RV parasternal heave",
    "Left parasternal heave: prominent (RV volume overload)",
    "Auscultation: FIXED WIDE SPLITTING OF S2 — pathognomonic; soft pulmonary ejection systolic murmur (flow murmur across pulmonary valve); tricuspid mid-diastolic flow murmur if large shunt",
    "Signs of Eisenmenger's if reversed shunt"
  ],
  "Patent Ductus Arteriosus": [
    "Pulse: COLLAPSING pulse (wide pulse pressure — diastolic runoff)",
    "Apex beat: hyperdynamic, displaced",
    "Continuous machinery murmur: at left infraclavicular area / 2nd ICS; peaks at S2",
    "Thrill: at pulmonary area",
    "Loud P2 if pulmonary hypertension (Eisenmenger's PDA)"
  ],
  "Hypertrophic Cardiomyopathy": [
    "Pulse: JERKY pulse — pathognomonic (spike and dome pattern)",
    "Apex beat: double impulse (bifid apex beat)",
    "Left parasternal heave: may be present",
    "Auscultation: EJECTION SYSTOLIC MURMUR at lower left sternal edge (LVOT obstruction); increases with Valsalva and standing, decreases with squatting",
    "S4 gallop: present (stiff LV)",
    "No radiation to carotids (unlike AS)"
  ],
  "Duodenal Ulcer with Pyloric Stenosis": [
    "Inspection: visible gastric peristalsis (left to right) in epigastrium",
    "Succession splash: present (>3h after food/drink) — pathognomonic",
    "Epigastric distension and fullness",
    "Dehydration signs: dry tongue, reduced skin turgor, sunken eyes",
    "No hepatosplenomegaly"
  ],
  "Carcinoma of the Stomach": [
    "Epigastric mass: firm, irregular, nodular, may be tender",
    "Hepatomegaly: hard, nodular (metastases)",
    "Virchow's node: left supraclavicular lymph node enlargement (Troisier's sign)",
    "Sister Mary Joseph nodule: periumbilical metastatic nodule",
    "Ascites: malignant; shifting dullness positive",
    "Cachexia and pallor: prominent"
  ],
  "Carcinoma Head of Pancreas": [
    "Jaundice: deep progressive obstructive jaundice",
    "Courvoisier's sign: PALPABLE, NON-TENDER gallbladder + jaundice = malignant obstruction (Courvoisier's law)",
    "Epigastric mass: may be palpable if large tumour",
    "Hepatomegaly: may be present",
    "Ascites: late sign (peritoneal spread)",
    "Migratory thrombophlebitis (Trousseau's sign)"
  ],
  "Inflammatory Bowel Disease (Crohn's/UC)": [
    "Abdomen: right iliac fossa mass/tenderness (Crohn's); generalised or left-sided tenderness (UC)",
    "Perianal disease: skin tags, fistulas, abscesses (Crohn's specific)",
    "Extraintestinal: uveitis (red eye), erythema nodosum (painful pretibial nodules), pyoderma gangrenosum, arthropathy, clubbing",
    "Toxic megacolon signs: distension, absent bowel sounds, tenderness (emergency)",
    "Nutritional status: wasting, pallor, hypoalbuminaemia signs"
  ],
  "Ileocecal Tuberculosis": [
    "Right iliac fossa: doughy/firm mass (matted loops of bowel and lymph nodes)",
    "RIF tenderness: localised",
    "Ascites: possible (peritoneal TB)",
    "Hyperperistalsis sounds if obstruction developing",
    "Signs of TB elsewhere: pleural effusion, lymphadenopathy, apical crepitations"
  ],
  "Carcinoma of Colon": [
    "Mass: firm, irregular, in the line of the colon (RIF for caecum/ascending, left iliac for descending)",
    "Liver: hard nodular hepatomegaly if metastases",
    "Ascites: malignant if peritoneal spread",
    "Rectal examination: mass felt in low rectal cancer; blood on glove",
    "Pallor: iron deficiency anaemia from chronic bleeding"
  ],
  "Obstructive Jaundice": [
    "Jaundice: deep yellow-green (cholestatic); scratch marks",
    "Gallbladder: palpable if malignant obstruction (Courvoisier's sign)",
    "Liver: enlarged if intrahepatic cause or metastases",
    "Spleen: enlarged if portal hypertension",
    "Urine: dark (bilirubin); stools: pale/clay-coloured",
    "No stigmata of chronic liver disease (in pure obstructive)"
  ],
  "Acute Viral Hepatitis": [
    "Liver: tender hepatomegaly, smooth edge",
    "Jaundice: moderate",
    "Spleen: mild splenomegaly in 20%",
    "No stigmata of chronic liver disease",
    "Lymphadenopathy: cervical (especially EBV hepatitis)",
    "No ascites, no encephalopathy in uncomplicated acute hepatitis"
  ],
  "Chronic Liver Disease (Cirrhosis)": [
    "Hands: leuconychia, clubbing, palmar erythema, Dupuytren's contracture, flapping tremor (asterixis)",
    "Face/chest: jaundice, spider naevi (>5 significant), parotid enlargement, gynecomastia, loss of axillary hair",
    "Abdomen: caput medusae, dilated abdominal veins (flow AWAY from umbilicus = portal hypertension)",
    "Liver: small and shrunken (end-stage) or enlarged (early); firm, irregular edge",
    "Spleen: enlarged (portal hypertension)",
    "Ascites: shifting dullness, fluid thrill (if tense)",
    "Legs: bilateral pitting oedema; testicular atrophy"
  ],
  "Liver Abscess (Amoebic)": [
    "Liver: enlarged, tender, smooth; tenderness over right lobe",
    "Right hypochondrial pain: worse on palpation and deep breathing",
    "Intercostal tenderness: over right lower ribs (overlying abscess)",
    "Right basal chest signs: dull to percussion, reduced breath sounds (sympathetic effusion/elevation of diaphragm)",
    "No jaundice in uncomplicated amoebic abscess",
    "No signs of portal hypertension"
  ],
  "Primary Biliary Cirrhosis": [
    "Jaundice: may be present; deep and chronic",
    "Xanthelasma: periorbital; xanthomata on tendons/extensors (hypercholesterolaemia)",
    "Scratch marks: severe pruritus",
    "Hepatomegaly: smooth, firm",
    "Splenomegaly: portal hypertension",
    "Pigmentation: bronze/slate-grey skin discolouration",
    "Bone tenderness: metabolic bone disease (osteomalacia/osteoporosis)"
  ],
  "Hepatoma (Hepatocellular Carcinoma)": [
    "Liver: HARD, NODULAR, IRREGULAR hepatomegaly; hepatic bruit may be audible",
    "Ascites: rapidly developing; may be haemorrhagic",
    "Splenomegaly: portal hypertension",
    "Jaundice: develops late",
    "Stigmata of cirrhosis: spider naevi, palmar erythema (underlying cirrhosis)",
    "Paraneoplastic features: hypoglycaemia, erythrocytosis, hypercalcaemia"
  ],
  "Hemochromatosis": [
    "Skin: BRONZE/SLATE-GREY pigmentation (melanin + iron); generalised",
    "Liver: enlarged, smooth, firm (cirrhosis eventually)",
    "Spleen: enlarged (portal hypertension)",
    "Testicular atrophy: hypogonadism",
    "Arthropathy: 2nd and 3rd MCP joints characteristically (chondrocalcinosis)",
    "Signs of diabetes: peripheral neuropathy, retinopathy",
    "Cardiomegaly: restrictive/dilated cardiomyopathy from iron deposits"
  ],
  "Budd-Chiari Syndrome": [
    "Liver: tender hepatomegaly (acute) or firm and enlarged (chronic)",
    "Ascites: MASSIVE, disproportionate to degree of jaundice",
    "Splenomegaly: portal hypertension",
    "Caudate lobe hypertrophy: palpable in epigastrium (separate hepatic vein drainage)",
    "Prominent abdominal wall veins: hepatic outflow obstruction pattern (flow UPWARD below umbilicus)",
    "Pedal oedema: if IVC also occluded"
  ],
  "Nephrotic Syndrome": [
    "Oedema: bilateral pitting, starts periorbitally (morning) and pedal (evening); generalised (anasarca)",
    "Ascites: present in severe hypoalbuminaemia",
    "Pleural effusion: bilateral dullness at bases",
    "Blood pressure: may be normal or elevated",
    "Pallor: anaemia of chronic disease",
    "Urine: frothy (proteinuria); no haematuria in pure NS"
  ],
  "Post-Streptococcal Glomerulonephritis": [
    "Oedema: facial (periorbital predominant), pedal; less severe than nephrotic",
    "Hypertension: significant; may cause hypertensive encephalopathy",
    "Urine: dark/smoky (haematuria — 'coca-cola urine')",
    "Kidneys: may be tender on bimanual palpation",
    "Signs of recent streptococcal infection: pharyngitis, skin infection (impetigo)",
    "Oliguria: reduced urine output"
  ],
  "Polycystic Kidney Disease": [
    "Kidneys: BILATERAL ballottable renal masses; firm, irregular, bosselated surface",
    "Liver: hepatomegaly if polycystic liver disease",
    "Blood pressure: elevated (renovascular hypertension)",
    "Berry aneurysm: neurological signs if SAH complication",
    "Bilateral flank fullness visible on inspection",
    "Cannot get above the mass (kidneys); not moving with respiration as much as liver"
  ],
  "Chronic Kidney Disease (Diabetic Nephropathy)": [
    "Pallor: anaemia of CKD (erythropoietin deficiency)",
    "Skin: sallow/yellowish tinge (uraemic pigmentation); scratch marks (pruritus)",
    "Uraemic frost: rare, white deposits on skin in severe uraemia",
    "Blood pressure: elevated",
    "Kidneys: small (end-stage); not palpable",
    "Pericardial rub: uraemic pericarditis",
    "Features of diabetes: peripheral neuropathy (glove-stocking), retinopathy, arteriovenous fistula"
  ],
  "Hypertension with CKD": [
    "Blood pressure: severely elevated",
    "Fundoscopy: hypertensive retinopathy (AV nipping, haemorrhages, papilloedema)",
    "Kidneys: small, not palpable (bilateral renal artery stenosis/CKD)",
    "Renal bruit: auscultate over renal angles (renal artery stenosis)",
    "Signs of CKD: pallor, sallow skin, pedal oedema, uraemic features"
  ],
  "Lupus Nephritis": [
    "Oedema: pedal/periorbital (nephrotic range proteinuria)",
    "Hypertension: common",
    "Features of SLE: malar rash, discoid rash, oral ulcers, joint swelling, alopecia",
    "Kidneys: not palpable (normal size or slightly enlarged in acute)",
    "Urine: frothy (protein) ± haematuria",
    "Fundoscopy: cytoid bodies (cotton wool spots from retinal vasculitis)"
  ],
  "Pyrexia of Unknown Origin in Hemodialysis": [
    "AV fistula: check for thrill/bruit; signs of infection at fistula site",
    "Tunnelled catheter site: erythema, discharge, tenderness",
    "Fever: intermittent, often during or after dialysis session",
    "Signs of SBE: new murmur (Staph aureus endocarditis)",
    "Splenomegaly: if chronic infection/portal hypertension",
    "Signs of underlying cause: abscess, osteomyelitis, infected graft"
  ],
  "Systemic Lupus Erythematosus (SLE)": [
    "Face: MALAR RASH (butterfly rash over cheeks/nose, spares nasolabial folds) — pathognomonic",
    "Skin: discoid rash, photosensitivity, painless oral ulcers, alopecia",
    "Joints: non-erosive polyarthritis (Jaccoud's arthropathy — deformity without erosion)",
    "Hands: Raynaud's phenomenon; tendon rupture deformities",
    "Serositis: pleuritic chest pain, pericardial rub",
    "Lymphadenopathy: generalised; splenomegaly",
    "Neurological: seizures, psychosis, mononeuritis multiplex"
  ],
  "Rheumatoid Arthritis": [
    "Hands: SYMMETRICAL DEFORMING POLYARTHRITIS of MCP + PIP joints; DIP spared",
    "Deformities: ulnar deviation at MCP, swan-neck deformity, boutonniere deformity, Z-thumb",
    "Wrist: restricted movement, subluxation",
    "Rheumatoid nodules: firm, non-tender, over olecranon, Achilles, sacrum",
    "Other joints: elbows, shoulders, knees, feet (MTP joints — pain on squeezing)",
    "Systemic: pallor (anaemia), lymphadenopathy, splenomegaly (Felty's syndrome)",
    "Cervical spine: C1-C2 instability (atlantoaxial subluxation) — check flexion carefully"
  ],
  "Dermatomyositis": [
    "Skin: HELIOTROPE RASH (violaceous rash around eyes with oedema) — pathognomonic",
    "Gottron's papules: raised erythematous papules over MCP/PIP joints dorsum",
    "V-sign: erythema over upper chest/neck; shawl sign: over shoulders/upper back",
    "Muscle: PROXIMAL MUSCLE WEAKNESS (can't rise from chair/comb hair); tender",
    "Mechanic's hands: roughened, cracked skin on lateral fingers",
    "Calcinosis cutis: subcutaneous calcium deposits (especially juvenile DM)"
  ],
  "Ankylosing Spondylitis": [
    "Posture: QUESTION MARK POSTURE — loss of lumbar lordosis, exaggerated kyphosis, forward stoop",
    "Schober's test: <5cm increase (restricted lumbar flexion) — positive",
    "Chest expansion: reduced (<5 cm) due to costocervical involvement",
    "Sacroiliac tenderness: direct pressure over SI joints",
    "Occiput to wall distance: increased (cervical involvement)",
    "Hip involvement: restricted movements bilaterally",
    "Eyes: acute anterior uveitis (iritis) — red eye"
  ],
  "Systemic Sclerosis (Scleroderma)": [
    "Face: BEAK NOSE, microstomia (small aperture), perioral puckering, loss of facial expression, telangiectasia",
    "Hands: SCLERODACTYLY (tight, shiny, thickened skin on fingers), Raynaud's phenomenon, digital ulcers/pitting, calcinosis",
    "Skin: indurated, bound-down, non-pinchable skin; proximal to MCPs in limited; truncal in diffuse",
    "Nails: periungual telangiectasia; dilated nailfold capillaries",
    "Lungs: bilateral basal fine crepitations (ILD), pulmonary hypertension signs",
    "GIT: dysphagia (oesophageal dysmotility)"
  ],
  "Juvenile Idiopathic Arthritis": [
    "Joints: polyarticular or oligoarticular involvement; warm, swollen, tender; morning stiffness",
    "Growth: short stature; leg length discrepancy; micrognathia",
    "Systemic JIA (Still's disease): SALMON-PINK EVANESCENT rash; high spiking fever; lymphadenopathy; hepatosplenomegaly",
    "Eyes: uveitis (often asymptomatic — screen with slit lamp)",
    "ANA positive: high risk of uveitis in oligoarticular"
  ],
  "Hemophilic Arthritis": [
    "Joints: HEMARTHROSIS — swollen, warm, tense joint (commonest: knee, elbow, ankle)",
    "Chronic: joint deformity, fixed flexion contracture, muscle wasting around joint",
    "Synovial hypertrophy: boggy, non-tender joint swelling between bleeds (target joint)",
    "Leg: equinus deformity (Achilles tightening); valgus knee",
    "Muscle: haematoma formation in iliopsoas (groin pain + hip flexion)"
  ],
  "Parkinsonism": [
    "Gait: SHUFFLING, festinant gait (accelerating small steps), reduced arm swing",
    "Tremor: PILL-ROLLING RESTING TREMOR (4-6 Hz), disappears with action",
    "Rigidity: COGWHEEL RIGIDITY (both arms); lead-pipe rigidity",
    "Bradykinesia: slow fine movements; micrographia (small writing)",
    "Posture: stooped, flexed neck and trunk; festination",
    "Face: MASK-LIKE FACE (hypomimia), reduced blinking, drooling",
    "Speech: hypophonic, monotonous"
  ],
  "Motor Neuron Disease": [
    "UMN + LMN MIXED SIGNS IN SAME LIMB — pathognomonic",
    "Upper limbs: wasting + weakness (LMN); hyperreflexia (UMN) in same limb",
    "Tongue: wasted, fasciculating (bulbar LMN involvement)",
    "Speech: dysarthria (spastic or flaccid); dysphagia",
    "Fasciculations: visible in tongue, limbs — LMN degeneration",
    "Reflexes: brisk despite wasting (combined UMN+LMN)",
    "No sensory loss, no cerebellar signs, no eye movement abnormality — important negatives"
  ],
  "Multiple Sclerosis": [
    "Disseminated in space and time — lesions in multiple CNS locations",
    "Eyes: optic atrophy (pallor of optic disc), RAPD, internuclear ophthalmoplegia (INO — medial longitudinal fasciculus)",
    "Limbs: spastic paraparesis; UMN pattern weakness; brisk reflexes; extensor plantars",
    "Cerebellar: ataxia, nystagmus, intention tremor, dysarthria (Charcot's triad with tremor+nystagmus+scanning speech)",
    "Bladder: urgency, frequency, retention",
    "Lhermitte's sign: electric shock down spine on neck flexion (cervical cord involvement)"
  ],
  "Cerebrovascular Accident (Stroke)": [
    "Sudden onset focal neurological deficit",
    "MCA territory (most common): contralateral hemiplegia + hemisensory loss; expressive/receptive dysphasia (dominant hemisphere); homonymous hemianopia",
    "UMN pattern weakness: pyramidal distribution (flexors weak in arm, extensors weak in leg)",
    "Face: contralateral facial weakness (lower face in UMN); deviation of tongue away from lesion",
    "Reflexes: brisk on affected side; Babinski positive",
    "Neglect/inattention: non-dominant hemisphere parietal lesion"
  ],
  "Friedreich's Ataxia": [
    "Gait: BROAD-BASED CEREBELLAR + SENSORY ATAXIA; worse in dark (Romberg's positive)",
    "Feet: PES CAVUS (high arched feet) + HAMMER TOES — pathognomonic",
    "Spine: KYPHOSCOLIOSIS",
    "Limbs: absent deep tendon reflexes (DTR); positive Babinski (UMN); distal sensory loss",
    "Cerebellar signs: dysdiadochokinesia, dysmetria, nystagmus",
    "Cardiomegaly: hypertrophic cardiomyopathy (50%)"
  ],
  "Peripheral Neuropathy (Diabetic)": [
    "Glove-stocking sensory loss: all modalities reduced distally",
    "Vibration sense: lost at toes first; use 128 Hz tuning fork",
    "Reflexes: absent ankle jerks first; then knee jerks",
    "Weakness: distal, symmetrical; foot drop if severe",
    "Trophic changes: dry skin, hair loss on legs, Charcot's joint (neuropathic arthropathy)",
    "Foot: ulceration on pressure areas; deformities",
    "Autonomic: postural hypotension, gastroparesis, erectile dysfunction"
  ],
  "Guillain-Barré Syndrome": [
    "Weakness: ASCENDING, symmetrical, flaccid; starts distally, progresses proximally",
    "Reflexes: AREFLEXIA — universal, early, hallmark sign",
    "Respiratory: monitor FVC; diaphragm weakness (can't count to 20 in one breath)",
    "Cranial nerves: bilateral facial weakness (CN VII); bulbar palsy; ophthalmoplegia (Miller-Fisher variant)",
    "Autonomic: BP fluctuation, tachycardia, urinary retention",
    "Sensory: mild distal sensory loss or paraesthesia; pain common early"
  ],
  "Chronic Inflammatory Demyelinating Polyneuropathy": [
    "Weakness: proximal + distal, symmetrical, progressive (>8 weeks distinguishes from GBS)",
    "Reflexes: AREFLEXIA or hyporeflexia",
    "Sensory: large fibre loss (vibration, proprioception prominent); glove-stocking pattern",
    "Gait: ataxic (sensory) + weak",
    "Cranial nerves: rarely involved (unlike GBS)",
    "Nerve hypertrophy: palpable thickened nerves (great auricular, ulnar at elbow, common peroneal)"
  ],
  "Myasthenia Gravis": [
    "FATIGABLE weakness — hallmark; weakness worsens with repeated movement",
    "Ptosis: bilateral, asymmetric; worsens on sustained upgaze (Simpson's test positive)",
    "Diplopia: variable, worse at end of day (EOM weakness)",
    "Facial weakness: inability to bury eyelashes; snarl smile",
    "Bulbar: nasal speech, dysphagia, choking",
    "Limb: proximal weakness; no wasting; normal reflexes",
    "Thymus: look for thymoma (10%); hyperplasia in younger patients"
  ],
  "Spastic Paraplegia (Cord Compression)": [
    "Both legs: UMN pattern weakness (extensors weak, flexors preserved); spasticity",
    "Reflexes: brisk in both legs; clonus (ankle, patellar)",
    "Plantars: BILATERAL EXTENSOR (Babinski positive) — key sign",
    "Sensory level: determine dermatomal level of sensory loss (light touch + pin-prick)",
    "Vibration/proprioception: posterior column loss if dorsal compression",
    "Bladder/bowel: retention or incontinence (autonomic involvement)",
    "Spine: gibbus, tenderness at level of compression; look for tuberculosis kyphus"
  ],
  "Transverse Myelitis": [
    "Acute onset bilateral leg weakness: UMN pattern below lesion level",
    "Sensory level: sharp dermatomal cutoff; all modalities lost below",
    "Bladder: acute urinary retention",
    "Plantars: extensor bilaterally",
    "Reflexes: initially ABSENT (spinal shock) then brisk",
    "Spine: no bone tenderness (unlike cord compression)"
  ],
  "Myopathy": [
    "PROXIMAL MUSCLE WEAKNESS: difficulty rising from chair, climbing stairs, combing hair",
    "Gait: WADDLING gait (Trendelenburg due to hip abductor weakness)",
    "Gowers' sign: positive in DMD (uses hands to climb up own legs from floor)",
    "Reflexes: normal or mildly reduced (compare with neuropathy — areflexic)",
    "Sensory: NORMAL (pure motor disorder)",
    "Wasting: proximal muscle groups; pseudohypertrophy of calves (DMD)",
    "No fasciculations (unlike MND)"
  ],
  "Wilson's Disease": [
    "Eyes: KAYSER-FLEISCHER RINGS — golden-brown ring at corneal periphery (Descemet's membrane); slit-lamp exam required",
    "Liver: hepatomegaly, jaundice, signs of cirrhosis (spider naevi, ascites)",
    "Neurological: dysarthria, dysdiadochokinesia, tremor (wing-beating/postural), dystonia, bradykinesia",
    "Psychiatric: personality change, psychosis",
    "Hands: tremor; note copper deposition in lunula of nails (azure lunulae)"
  ],
  "Intracranial Space Occupying Lesion": [
    "Papilloedema: bilateral disc swelling (raised ICP) — fundoscopy essential",
    "Focal deficits: depend on lesion site (hemiplegia = frontal/parietal; aphasia = dominant temporal; ataxia = cerebellar)",
    "CN III palsy: down-and-out eye, ptosis, dilated pupil (uncal herniation)",
    "Cushing's triad: hypertension + bradycardia + irregular breathing = impending herniation",
    "Frontal lobe: personality change, primitive reflexes (grasp, palmomental)",
    "Pituitary/chiasmal: bitemporal hemianopia"
  ],
  "Hypothyroidism (Myxedema)": [
    "Face: PUFFY FACE with periorbital oedema, loss of outer 1/3 of eyebrows, pale/yellowish complexion",
    "Skin: dry, rough, scaly; non-pitting oedema (myxoedema) over shin and dorsum of foot",
    "Hair: dry, brittle, diffuse alopecia",
    "Voice: HOARSE, deep, slow speech",
    "Reflexes: SLOW RELAXATION (hung-up reflexes) — pathognomonic",
    "Heart: bradycardia; distant heart sounds (pericardial effusion)",
    "Tongue: macroglossia; carpal tunnel syndrome signs"
  ],
  "Graves' Disease (Hyperthyroidism)": [
    "Eyes: EXOPHTHALMOS (proptosis); lid retraction (sclera visible above iris); lid lag; chemosis; ophthalmoplegia",
    "Thyroid: DIFFUSELY ENLARGED, soft/firm; BRUIT over thyroid (increased vascularity)",
    "Skin: warm, moist, fine skin; pretibial myxoedema (raised violaceous plaques on shin — Graves' specific)",
    "Hands: fine tremor; thyroid acropachy (clubbing in Graves' specifically)",
    "Heart: tachycardia; AF; hyperdynamic circulation",
    "Reflexes: brisk, hyperreflexia"
  ],
  "Cushing's Syndrome": [
    "Face: MOON FACE (round, plethoric, red)",
    "Body: CENTRAL OBESITY with buffalo hump (interscapular fat pad), supraclavicular fat pads; thin limbs (proximal myopathy)",
    "Skin: PURPLE STRIAE (wide >1cm, abdominal/thigh); easy bruising; thin skin; acne",
    "Hypertension: significant",
    "Proximal myopathy: weak thighs; cannot rise from squat",
    "Hirsutism and acne: androgen excess",
    "Osteoporosis: vertebral collapse, kyphosis, height loss"
  ],
  "Addison's Disease": [
    "Skin: GENERALISED HYPERPIGMENTATION (buccal mucosa, palmar creases, pressure points, scars) — pathognomonic",
    "Postural hypotension: significant drop in BP on standing",
    "Weight loss, cachexia, wasting",
    "Vitiligo: associated autoimmune depigmentation patches",
    "Body hair: decreased axillary/pubic hair (androgen deficiency in women)",
    "Buccal pigmentation: gum/cheek/lip dark patches"
  ],
  "Hypopituitarism (Sheehan's Syndrome)": [
    "Skin: pale, smooth, waxy; loss of body hair (axillary, pubic)",
    "Breast: atrophy; failure of lactation post-partum",
    "Hypothyroid features: if TSH deficiency (bradycardia, hoarse voice, dry skin)",
    "Adrenal features: postural hypotension, weakness (ACTH deficiency)",
    "GH deficiency: central adiposity, thin skin, reduced muscle mass",
    "No hyperpigmentation (unlike Addison's — ACTH absent so no MSH excess)"
  ],
  "Acromegaly": [
    "Face: COARSE FEATURES; enlarged jaw (prognathism), wide nose, thickened lips, brow bossing",
    "Hands: LARGE, SPADE-LIKE HANDS; soft-tissue swelling; carpal tunnel signs",
    "Feet: large shoe size increase",
    "Teeth: widely spaced; malocclusion",
    "Skin: thick, oily, sweaty; skin tags",
    "Visual fields: BITEMPORAL HEMIANOPIA (pituitary macroadenoma pressing chiasm)",
    "Goitre: 30%; cardiomegaly"
  ],
  "Diabetes Mellitus": [
    "Peripheral neuropathy: glove-stocking sensory loss; absent ankle jerks",
    "Feet: Charcot's joint, ulcers on pressure points, deformities",
    "Fundoscopy: background retinopathy (microaneurysms, dot haemorrhages, hard exudates); proliferative retinopathy (new vessels)",
    "Renal: hypertension; no oedema (unless nephropathy)",
    "Arteriopathy: absent foot pulses, claudication, cold feet",
    "Lipodystrophy: at injection sites; lipoatrophy or lipohypertrophy",
    "Cataracts: snowflake (juvenile DM) or senile (accelerated)"
  ],
  "Obesity": [
    "BMI >30 kg/m²; waist circumference: >102 cm (male), >88 cm (female)",
    "Distribution: central/android (apple) vs peripheral/gynoid (pear)",
    "Acanthosis nigricans: dark velvety skin in axillae/neck (insulin resistance)",
    "Hypertension: common; measure BP with large cuff",
    "Varicose veins; skin intertrigo (fungal infection in skin folds)",
    "Pickwickian features: somnolence, snoring (OSA); cyanosis"
  ],
  "Short Stature": [
    "Height: <3rd centile or >2SD below mean for age",
    "Proportionate vs disproportionate: measure upper/lower segment ratio; arm span",
    "Dysmorphic features: Turner's syndrome (webbed neck, shield chest, wide carrying angle), achondroplasia (rhizomelic shortening, trident hand)",
    "Hypothyroid features: if GH or TSH deficiency",
    "Bone age: assess on X-ray (advanced = constitutional delay, delayed = endocrine/chronic disease)",
    "Secondary sexual characteristics: delayed puberty assessment"
  ],
  "Anemia (Iron Deficiency)": [
    "Pallor: conjunctival, palmar, nail beds — assess in natural light",
    "Nails: KOILONYCHIA (spoon-shaped nails) — pathognomonic for iron deficiency",
    "Tongue: atrophic glossitis (smooth, red, depapillated tongue)",
    "Angular cheilosis: cracks at corners of mouth",
    "Plummer-Vinson syndrome: iron deficiency + dysphagia + post-cricoid web",
    "Tachycardia; flow murmur; bounding pulse (hyperdynamic circulation)",
    "Spleen: mild splenomegaly in severe/chronic cases"
  ],
  "Aplastic Anemia": [
    "Pallor: severe, generalised (pancytopenia)",
    "Bleeding: purpuric rash, ecchymoses, mucosal bleeding (thrombocytopenia)",
    "Infections: fever, mouth ulcers (neutropenia)",
    "NO hepatosplenomegaly — distinguishes from leukaemia",
    "NO lymphadenopathy",
    "Bone tenderness: absent (unlike leukaemia — important negative)"
  ],
  "Chronic Myeloid Leukemia (CML)": [
    "Spleen: MASSIVE SPLENOMEGALY — can cross midline and reach RIF; firm, non-tender, notched edge",
    "Liver: hepatomegaly (moderate)",
    "Sternal tenderness: bone marrow expansion (press on sternum)",
    "Pallor: moderate anaemia",
    "NO significant lymphadenopathy (unlike CLL)",
    "Gout: hyperuricaemia from cell turnover"
  ],
  "Chronic Lymphatic Leukemia (CLL)": [
    "Lymphadenopathy: GENERALISED, SYMMETRICAL, non-tender, rubbery lymph nodes — characteristic",
    "Spleen: moderate splenomegaly",
    "Liver: hepatomegaly",
    "Pallor: anaemia (AIHA or bone marrow infiltration)",
    "Purpura: thrombocytopenia",
    "NO sternal tenderness (unlike CML)",
    "Recurrent infections: hypogammaglobulinaemia"
  ],
  "Lymphoma (Hodgkin's / Non-Hodgkin's)": [
    "Lymphadenopathy: rubbery, non-tender, discrete enlarged nodes; cervical most common in Hodgkin's",
    "Mediastinal widening signs: SVC obstruction; tracheal compression (stridor)",
    "Splenomegaly: moderate",
    "Hepatomegaly: if hepatic involvement",
    "Pel-Ebstein fever: cyclical fever pattern (Hodgkin's specific)",
    "Alcohol-induced pain at nodal sites (Hodgkin's pathognomonic)",
    "B symptoms: drenching night sweats, weight loss >10%, fever"
  ],
  "Hereditary Hemolytic Anemia": [
    "Pallor: moderate (chronic haemolysis compensated by increased erythropoiesis)",
    "Jaundice: mild, fluctuating, UNCONJUGATED (haemolysis)",
    "Splenomegaly: significant (extramedullary haematopoiesis + red cell sequestration)",
    "Gallstones: pigment stones from chronic haemolysis (RUQ tenderness)",
    "Skeletal deformities: frontal bossing, maxillary hyperplasia (thalassaemia — hair-on-end on X-ray)",
    "Leg ulcers: sickle cell disease",
    "Growth retardation in children; delayed puberty"
  ],
  "Idiopathic Thrombocytopenic Purpura (ITP)": [
    "Purpuric rash: NON-PALPABLE, petechiae and ecchymoses; over dependent areas and bony prominences",
    "Mucosal bleeding: gum bleeding, epistaxis, menorrhagia",
    "NO splenomegaly (distinguishes from hypersplenism)",
    "NO hepatomegaly, NO lymphadenopathy",
    "Wet purpura: blood-filled blisters in mouth = severe (platelet <10)",
    "Fundoscopy: retinal haemorrhages if platelet very low"
  ],
  "Hemophilia": [
    "Joints: HEMARTHROSIS — swollen, warm, tender, held in flexion; knee most common",
    "Chronic: fixed flexion deformity; wasted muscles around joint; crepitus",
    "Muscles: haematoma — iliopsoas (groin/hip pain), calf, forearm",
    "Bruising: deep, large haematomas (not just surface)",
    "Pseudotumour: expanding haematoma in bone/soft tissue",
    "No purpura (platelet function normal — unlike ITP)"
  ],
  "Psoriasis": [
    "Skin: ERYTHEMATOUS PLAQUES with SILVERY-WHITE SCALES on extensor surfaces (elbows, knees, scalp, sacrum)",
    "Auspitz sign: removal of scale causes pinpoint bleeding (dilated papillary capillaries)",
    "Nail changes: pitting (most common), onycholysis, subungual hyperkeratosis, oil-drop sign",
    "Koebner phenomenon: psoriasis at sites of trauma",
    "Scalp: well-demarcated scaly plaques; doesn't cross hairline",
    "Joints: psoriatic arthritis — DIP involvement, pencil-in-cup deformity, dactylitis (sausage digit)"
  ],
  "Exfoliative Dermatitis (Erythroderma)": [
    "Skin: GENERALISED ERYTHEMA and SCALING involving >90% body surface area",
    "Oedema: pitting pedal oedema (protein loss, low albumin)",
    "Temperature: may be hypothermic (heat loss through skin) or febrile (infection)",
    "Lymphadenopathy: dermatopathic lymphadenopathy (reactive to skin inflammation)",
    "Hair/nails: diffuse hair loss (telogen effluvium); nail dystrophy",
    "Sézary cells: leukaemic T cells if Sézary syndrome"
  ],
  "Leprosy (Lepromatous)": [
    "Skin: MULTIPLE, BILATERAL, SYMMETRICAL macules/patches; poorly defined borders; hypopigmented or erythematous",
    "Sensory loss: REDUCED/ABSENT SENSATION over lesions (test fine touch, temperature, pain)",
    "Thickened nerves: great auricular nerve, ulnar at elbow, common peroneal at knee — palpable thickening",
    "Leonine facies: thickened, corrugated facial skin; loss of eyebrows (madarosis), loss of eyelashes",
    "Nasal: collapsed nasal bridge (saddle nose deformity)",
    "Hands: claw hand (ulnar+median); wrist drop (radial); foot drop (peroneal)"
  ],
  "Pemphigus Vulgaris": [
    "Blisters: FLACCID, THIN-WALLED BULLAE that rupture easily; widespread erosions",
    "Nikolsky's sign: POSITIVE — gentle lateral pressure on skin causes blistering/skin separation",
    "Oral ulcers: often first manifestation; painful, slow-healing erosions",
    "Distribution: trunk, scalp, face, oral mucosa",
    "Tzanck smear: acantholytic cells (round, free-floating epidermal cells)",
    "No scar formation (heals without scarring in contrast to cicatricial pemphigoid)"
  ],
  "Kala-Azar (Visceral Leishmaniasis)": [
    "Spleen: MASSIVE SPLENOMEGALY — Hackett grade 4-5; firm, non-tender; most prominent feature",
    "Liver: moderate hepatomegaly",
    "Skin: HYPERPIGMENTATION of face, hands, feet (kala-azar = black fever in Hindi)",
    "Pallor: severe (pancytopenia)",
    "Lymphadenopathy: may be present (Sudan strain)",
    "Wasting: severe protein-energy malnutrition",
    "No jaundice, no purpura typically"
  ],
  "Pyrexia of Unknown Origin (PUO)": [
    "Systematic head-to-toe examination is the key",
    "Lymph nodes: generalised or localised LAP (lymphoma, TB, HIV, SBE)",
    "Liver: hepatomegaly (hepatic abscess, hepatoma, TB)",
    "Spleen: splenomegaly (malaria, kala-azar, SBE, lymphoma, typhoid)",
    "Heart: murmurs (SBE); pericardial rub (connective tissue disease)",
    "Joints: synovitis (connective tissue disease, reactive arthritis)",
    "Fundoscopy: Roth spots (SBE); choroidal granuloma (TB); cytoid bodies (SLE)"
  ],
  "Pyrexia of Unknown Origin (HIV/AIDS)": [
    "Oral: ORAL CANDIDIASIS (white plaques on tongue/buccal mucosa); hairy leukoplakia (lateral tongue — EBV)",
    "Lymphadenopathy: generalised (PGL — persistent generalised lymphadenopathy)",
    "Skin: Kaposi's sarcoma (violaceous plaques/nodules on skin/palate); molluscum contagiosum (widespread)",
    "Fundoscopy: CMV retinitis (pizza-pie appearance — haemorrhage + exudate)",
    "Chest: signs of PCP (bilateral crackles, hypoxia disproportionate to signs)",
    "Wasting: severe weight loss, muscle wasting",
    "Neurological: dementia, peripheral neuropathy, cryptococcal meningitis signs"
  ],
  "Takayasu's Disease (Pulseless Disease)": [
    "ABSENT PULSES: radial, brachial (one or both upper limbs) — pathognomonic",
    "Blood pressure: asymmetrical between arms (>10 mmHg difference); use LOWER LIMB BP for true measurement",
    "Vascular bruits: carotid, subclavian, renal, aortic — auscultate all major vessels",
    "Carotid tenderness: acute phase (carotidynia)",
    "Blood pressure: hypertension if renal artery involved",
    "Fundoscopy: hypertensive changes; Takayasu retinopathy (arteriovenous anastomoses)",
    "Eyes: visual disturbance from carotid/vertebral involvement"
  ],
  "Diarrheal Diseases": [
    "Inspection: dehydration assessment — sunken eyes, dry lips, reduced skin turgor",
    "Abdomen: diffuse tenderness or periumbilical cramping; hyperactive/increased bowel sounds",
    "PR examination: blood on glove (dysentery); tenesmus on history",
    "Vital signs: tachycardia and hypotension in severe dehydration; fever if infective",
    "Skin turgor: 'tenting' = >10% dehydration",
    "Fontanelle: sunken in infants",
    "Mucous membranes: dry tongue; no saliva"
  ],
  "Enteric Fever (Typhoid)": [
    "Fever: continuous stepwise rising pattern; relative bradycardia (Faget's sign)",
    "Rose spots: faint salmon-pink maculopapular spots on upper abdomen and chest — blanch on pressure (30–40%)",
    "Abdomen: mild diffuse tenderness; hepatosplenomegaly (2nd–3rd week); distension (ileus)",
    "Tongue: white furred 'typhoid tongue' with red tip and edges",
    "Spleen: soft, mildly enlarged, not tender (2nd week onwards)",
    "Liver: mildly enlarged and tender",
    "CNS: delirium, confusion in severe typhoid (typhoid encephalopathy)"
  ],
  "Dengue Fever": [
    "Fever: high, flushed appearance; biphasic (saddle-back) pattern",
    "Skin: macular erythema initially; followed by maculopapular rash starting on trunk (day 3–5)",
    "Petechiae: scattered; positive tourniquet test (Rumpel-Leede sign) — ≥10 petechiae/inch²",
    "Lymphadenopathy: posterior cervical and inguinal — tender",
    "Abdomen: hepatomegaly (tender); ascites in DHF (dullness on flanks)",
    "Eyes: injected conjunctiva; retro-orbital tenderness on eye movement",
    "Signs of plasma leakage (DHF): pleural effusion (basal dullness), ascites, oedema"
  ],
  "Influenza (Seasonal Flu)": [
    "General: acutely unwell, flushed, diaphoretic, prostrated",
    "Temperature: high fever 38–40°C; rigors in severe cases",
    "Pharynx: erythematous; mild; no exudate (unlike strep throat)",
    "Respiratory: clear lungs in uncomplicated flu; crackles if secondary pneumonia",
    "Tachycardia: proportionate to fever",
    "Cervical lymphadenopathy: mild, tender",
    "No rash; no splenomegaly (distinguishes from EBV/glandular fever)"
  ],
  "Malaria": [
    "Fever: paroxysmal — rigor (violent shaking) then drenching sweat then exhaustion",
    "Pallor: conjunctival, palmar — haemolytic anaemia",
    "Jaundice: scleral icterus — haemolytic + hepatic component",
    "Splenomegaly: smooth, soft, non-tender; becomes massive in chronic/hyperreactive malaria",
    "Hepatomegaly: tender; moderate",
    "Cerebral malaria: reduced GCS, seizures, focal deficit, papilloedema, retinal haemorrhages on fundoscopy",
    "Blackwater fever: dark/brown urine (haemoglobinuria) — severe falciparum complication"
  ],
  "Cholera": [
    "Dehydration: severe and rapid — most striking feature",
    "Eyes: deeply sunken, expressionless facies",
    "Skin: doughy, tents easily, 'washerwoman's hands' (shrivelled from fluid loss)",
    "Mucous membranes: completely dry",
    "Vital signs: tachycardia; thready pulse; hypotension; cold extremities",
    "Abdomen: distended; hyperactive bowel sounds; minimal tenderness",
    "No fever typically — distinguishes from dysentery; no blood/pus in stool"
  ],
  "Viral Hepatitis (A, E & B)": [
    "Jaundice: icteric sclera first, then skin; yellow-orange tinge",
    "Liver: tender hepatomegaly — smooth, soft edge; may extend 3–5 cm below costal margin",
    "Spleen: mild splenomegaly in 15–20%",
    "Lymphadenopathy: mild posterior cervical (especially EBV-related hepatitis)",
    "Skin: scratch marks if cholestatic pruritus",
    "No stigmata of chronic liver disease (spider naevi, caput medusae, leukonychia) — acute illness",
    "Urine: dark (bilirubinuria); stool: pale (cholestatic)"
  ],
  "Peptic Ulcer Disease": [
    "Epigastric tenderness: localised, well-defined on deep palpation; point tenderness at epigastrium",
    "Guarding and rigidity: absent in uncomplicated; PRESENT if perforation — board-like abdomen",
    "Succussion splash: positive if pyloric stenosis (audible when patient moved side to side)",
    "Bowel sounds: increased if obstruction developing; absent in perforation with peritonitis",
    "No organomegaly in uncomplicated PUD",
    "Pallor: anaemia from chronic GI blood loss",
    "Rectal examination: melaena on glove (black tarry stool = upper GI bleed)"
  ],
  "Gastroesophageal Reflux Disease (GERD)": [
    "No specific systemic signs — diagnosis is clinical based on symptoms",
    "Epigastric tenderness: mild, on deep palpation; not striking",
    "Dental erosions: visible on teeth (chronic acid exposure) — ask dentist",
    "Oropharynx: posterior pharyngeal erythema (laryngopharyngeal reflux)",
    "Chest: clear; wheeze if aspiration pneumonitis",
    "Obesity: often present (BMI elevated); central obesity noted",
    "No lymphadenopathy, no organomegaly, no jaundice"
  ],
  "Non-Alcoholic Fatty Liver Disease (NAFLD)": [
    "Hepatomegaly: smooth, non-tender, firm edge — may extend 3–5 cm; sometimes only detectable on USS",
    "Central obesity: waist circumference >102 cm (male), >88 cm (female)",
    "Acanthosis nigricans: velvety dark pigmentation in axillae and neck (insulin resistance)",
    "Blood pressure: elevated — metabolic syndrome association",
    "No signs of portal hypertension in early NAFLD",
    "Advanced NASH-cirrhosis: spider naevi, palmar erythema, splenomegaly, ascites (shifting dullness)",
    "Xanthelasma or xanthomata: dyslipidaemia association"
  ],
  "Hypertension in Pregnancy": [
    "Blood pressure: ≥140/90 on two readings; measure after 5 min rest, sitting; use correct cuff size",
    "Oedema: facial (periorbital), hand (ring tightness), pitting pedal — pre-eclampsia features",
    "Reflexes: hyperreflexia (brisk knee jerks); ankle clonus ≥3 beats = impending eclampsia",
    "Fundoscopy: hypertensive retinopathy (AV nipping, flame haemorrhages, papilloedema)",
    "Epigastric tenderness: right upper quadrant — HELLP syndrome (liver capsule distension)",
    "Fetal: symphysis-fundal height for gestational age; fetal heart rate on Doppler",
    "Urine dipstick: ≥2+ protein = significant proteinuria; send PCR/24h collection to quantify"
  ]

};
