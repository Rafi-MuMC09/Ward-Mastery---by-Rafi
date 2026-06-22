// ============================================================================
// PEDIATRICS (IMCI) — Study / Reference Module
// Source: Integrated Management of Childhood Illness (IMCI) Student's
// Handbook – 2023, Government of the People's Republic of Bangladesh
// (NNHP & IMCI program, MNC&AH, DGHS, HSD, MoHFW)
//
// This module is for STUDY/REFERENCE ONLY. It is completely separate from
// the Medicine DDx engine — no scoring, no diagnosis logic, no linkage to
// DDX_DB / DISEASE_LIB / MGMT_MAP. Pure read-only reference content.
// ============================================================================

const PEDIATRICS_DATA = {

    // ========================================================================
    // YOUNG INFANT — 0 DAY UP TO 2 MONTH
    // ========================================================================
    youngInfant: {
        label: "👶 Young Infant (0 Day – 2 Month)",
        sections: [
            {
                title: "Very Severe Disease — Signs to Check",
                icon: "🚨",
                points: [
                    "Stopped feeding well — takes <50% of previous feeding; earliest and most important sign of infection in young infants",
                    "Convulsion(s) — during present illness or convulsing now",
                    "Fast breathing — cut-off is 60 breaths/min or more (count twice if first count is borderline, since breathing is often irregular)",
                    "Severe chest indrawing — very deep and easily visible (mild indrawing can be normal in young infants due to soft chest wall)",
                    "Fever or low body temperature — Fever ≥99.5°F (37.5°C) or feels hot; Hypothermia <95.9°F (35.5°C) or feels cool",
                    "Movement only when stimulated, or no movement at all — observe spontaneous movement first; if absent, gently stimulate",
                    "Redness of umbilicus or draining pus — sign of umbilical infection",
                    "Skin pustules — red spots or blisters containing pus, examine entire body"
                ]
            },
            {
                title: "Clinical Feature → Probable Disease (reference table)",
                icon: "🔗",
                points: [
                    "Convulsion(s) → Meningitis, Encephalitis, Hypoglycaemia, Hypocalcaemia",
                    "Stopped feeding well → Septicaemia, Meningitis, Pneumonia and other serious illness",
                    "Fast breathing & severe chest indrawing → Pneumonia, Heart failure",
                    "Less movement → Septicaemia, Severe dehydration",
                    "Lethargy / Unconscious → Septicaemia, Meningitis, Severe dehydration"
                ]
            },
            {
                title: "Classification — Very Severe Disease / Local Infection",
                icon: "🏷️",
                points: [
                    "VERY SEVERE DISEASE — if ANY of: stopped feeding well, convulsions, fast breathing (≥60/min), severe chest indrawing, fever/hypothermia, or movement only on stimulation/no movement",
                    "LOCAL BACTERIAL INFECTION — if umbilicus red/draining pus, OR skin pustules present (none of the very severe signs)",
                    "SEVERE DISEASE OR LOCAL INFECTION UNLIKELY — if none of the above signs are present",
                    "Note: a young infant with cough/difficult breathing but no severe chest indrawing or fast breathing needs no treatment — give home-care advice (frequent breastfeeding, clear nose, keep warm)"
                ]
            },
            {
                title: "Jaundice — Classification",
                icon: "🟡",
                points: [
                    "SEVERE JAUNDICE — jaundice appearing within 24 hours of age (any age), OR yellow palms and soles at any age",
                    "JAUNDICE — jaundice appearing AFTER 24 hours of age, AND palms/soles are NOT yellow",
                    "NO JAUNDICE — no jaundice present",
                    "Clinical pearl: jaundice in the first 24 hours of life is always considered severe/pathological — never treated as 'physiological' in IMCI"
                ]
            },
            {
                title: "Diarrhoea — Dehydration Classification",
                icon: "💧",
                points: [
                    "Assessment is similar to older children, EXCEPT 'drinking poorly' is not used (offering a drink to assess thirst is unreliable in young infants)",
                    "SEVERE DEHYDRATION — two or more of: movement only when stimulated/no movement at all, sunken eyes, skin pinch goes back very slowly (>2 sec)",
                    "SOME DEHYDRATION — two or more of: restless/irritable, sunken eyes, skin pinch goes back slowly",
                    "NO DEHYDRATION — not enough signs to classify as some or severe dehydration"
                ]
            },
            {
                title: "Feeding Problems & Low Weight",
                icon: "🍼",
                points: [
                    "Assess: breastfeeding frequency (including night feeds), other foods/fluids given, frequency/method of other feeds, feeding pattern during illness",
                    "Signs of GOOD positioning — whole body supported, body close to mother, straight head/body, facing breast with nose opposite nipple",
                    "Signs of GOOD attachment — chin touching breast, mouth wide open, lower lip turned outward, more areola visible above than below the mouth",
                    "VERY LOW WEIGHT FOR AGE — weight <2 kg in infants less than 7 days old",
                    "FEEDING PROBLEM OR LOW WEIGHT — if any of: not well attached, not suckling effectively, <8 breastfeeds in 24h, receives other foods/drinks, low weight for age, or thrush (oral ulcers/white patches)",
                    "NO FEEDING PROBLEM — not low weight for age and no other signs of inadequate feeding",
                    "Low weight for age is read off the WHO weight-for-age growth chart (Birth to 2 month) — below the -2 z-score line = low weight for age"
                ]
            },
            {
                title: "Immunization Status (0–2 Month)",
                icon: "💉",
                points: [
                    "At birth — BCG should be given",
                    "Check mother's immunization status and Vitamin A status; give TT vaccine and Vitamin A if needed",
                    "At 6 weeks — Penta 1, OPV 1, PCV 1 and fIPV 1 should be given",
                    "One extra dose of OPV may be given within 14 days after birth",
                    "Illness is NOT a contraindication to immunization"
                ]
            }
        ]
    },

    // ========================================================================
    // CHILD — 2 MONTH UP TO 5 YEAR
    // ========================================================================
    child: {
        label: "🧒 Child (2 Month – 5 Year)",
        sections: [
            {
                title: "General Danger Signs",
                icon: "🚨",
                points: [
                    "Not able to drink or breastfeed — observe directly rather than relying solely on mother's statement",
                    "Vomits everything — vomits whatever is offered (food, drink, medicine); cannot take oral medication or rehydration fluids",
                    "Convulsion(s) — during present illness, or convulsing now",
                    "Lethargic or unconscious — lethargic = responds a little to stimuli but takes no notice of surroundings; unconscious = no response to any stimuli",
                    "Any general danger sign present → CLASSIFY as VERY SEVERE DISEASE — needs urgent attention and referral",
                    "A child with general danger signs may have meningitis, encephalitis, septicaemia, dengue shock syndrome, severe pneumonia or cerebral malaria"
                ]
            },
            {
                title: "Cough or Difficult Breathing — Key Clinical Signs",
                icon: "🫁",
                points: [
                    "Respiratory rate — most sensitive & specific single sign of pneumonia; cut-off DECREASES with increasing age:",
                    "  • 2 month – 12 month: ≥50 breaths/min = fast breathing",
                    "  • 12 month – 5 year: ≥40 breaths/min = fast breathing",
                    "Chest indrawing — inward movement of the LOWER chest wall on inspiration (more specific than intercostal indrawing); must be consistently present in a calm child",
                    "Note: crying, blocked nose, or breastfeeding can cause temporary chest indrawing — reassess after the child settles",
                    "Stridor — harsh inspiratory sound from upper airway obstruction; stridor in a calm child is an acute emergency",
                    "Wheeze — musical expiratory sound; associated with asthma/bronchiolitis; if present with fast breathing/chest indrawing, give trial of rapid-acting salbutamol (up to 3 doses, 20 min apart) and reassess",
                    "Oxygen saturation (SpO2) <90% — indicates hypoxia, needs oxygen + urgent referral"
                ]
            },
            {
                title: "Classification — Cough or Difficult Breathing",
                icon: "🏷️",
                points: [
                    "SEVERE PNEUMONIA OR VERY SEVERE DISEASE — any general danger sign, OR stridor in a calm child, OR SpO2 <90%",
                    "PNEUMONIA — chest indrawing OR fast breathing (without any danger sign)",
                    "NO PNEUMONIA: COUGH OR COLD — none of the above signs present",
                    "Note: chronic cough (>14 days) or recurrent wheezing needs further assessment/referral to exclude TB, asthma, whooping cough"
                ]
            },
            {
                title: "Diarrhoea — Clinical Assessment of Dehydration",
                icon: "💧",
                points: [
                    "General condition — lethargic/unconscious (danger sign) or restless/irritable (cannot be consoled/calmed)",
                    "Sunken eyes — less reliable in a visibly wasted/marasmic child (eyes may look sunken anyway); ask mother about recent onset if uncertain",
                    "Reaction to drink — not able to drink (cannot take fluid/swallow) vs drinks eagerly/thirsty (wants more)",
                    "Skin pinch (elasticity) — pinch skin of abdomen midway between umbilicus and flank, lengthwise (up-down, not across), hold 1 second, release:",
                    "  • Goes back very slowly (>2 sec) = severe dehydration sign",
                    "  • Goes back slowly (<2 sec) = some dehydration sign",
                    "  • Goes back immediately = no dehydration sign",
                    "Note: in an overweight child or a child with oedema, skin may go back immediately even if dehydrated"
                ]
            },
            {
                title: "Classification — Dehydration",
                icon: "🏷️",
                points: [
                    "SEVERE DEHYDRATION — two or more of: lethargic/unconscious, sunken eyes, not able to drink/drinking poorly, skin pinch goes back very slowly (≈≥10% body weight fluid deficit)",
                    "SOME DEHYDRATION — two or more of: restless/irritable, sunken eyes, drinks eagerly/thirsty, skin pinch goes back slowly (≈5–10% fluid deficit)",
                    "NO DEHYDRATION — not enough signs for some/severe dehydration (<5% fluid deficit)",
                    "Note: if one severe sign + one some-dehydration sign are present together → classify as SOME DEHYDRATION"
                ]
            },
            {
                title: "Persistent Diarrhoea & Dysentery",
                icon: "🦠",
                points: [
                    "Persistent diarrhoea = diarrhoea (with or without blood) lasting ≥14 days; almost never occurs in exclusively breastfed infants",
                    "SEVERE PERSISTENT DIARRHOEA — persistent diarrhoea WITH any degree of dehydration",
                    "PERSISTENT DIARRHOEA — persistent diarrhoea WITHOUT dehydration",
                    "DYSENTERY — blood in the stool reported by mother/caregiver (~10% of diarrhoeal episodes, up to 15% of diarrhoeal deaths)",
                    "Dysentery is more severe in malnourished/non-breastfed children and those with recent measles",
                    "Note: blood in stool can also occur in rectal polyp and intussusception — not just dysentery"
                ]
            },
            {
                title: "Fever — Clinical Assessment",
                icon: "🌡️",
                points: [
                    "Fever defined as axillary temperature >99.5°F, or feels hot, or history of fever from mother",
                    "Stiff neck — sign of meningitis; in conscious child ask to bend neck/look down; in unconscious child gently flex head forward",
                    "Runny nose — usually common cold",
                    "Duration of fever — most viral fevers resolve within 7 days; fever present every day for >7 days suggests more severe disease (e.g. typhoid)",
                    "First step: determine if child is from a HIGH, LOW, or NO malaria risk area (travel history to risk area within last 30 days counts too)"
                ]
            },
            {
                title: "Classification — Fever (Malaria Risk Area)",
                icon: "🏷️",
                points: [
                    "VERY SEVERE FEBRILE DISEASE — any general danger sign OR stiff neck (regardless of malaria risk area)",
                    "MALARIA — RDT/Blood Slide POSITIVE, no danger sign, no stiff neck (in high/low risk area)",
                    "FEVER – NO MALARIA — RDT/BSE NEGATIVE, no danger sign/stiff neck; check other causes of fever (diarrhoea, dysentery, respiratory/ear infection)",
                    "FEVER (no malaria risk area) — fever present, but no danger sign or stiff neck",
                    "Fever lasting >7 days → refer for further assessment regardless of classification"
                ]
            },
            {
                title: "Measles — Classification",
                icon: "🔴",
                points: [
                    "Detection: fever + generalized maculopapular rash + at least one of (red eyes, runny nose, cough); ask about measles in last 3 months too",
                    "SEVERE COMPLICATED MEASLES — any danger sign, OR clouding of cornea, OR deep/extensive mouth ulcers",
                    "MEASLES WITH EYE OR MOUTH COMPLICATIONS — pus draining from eye (conjunctivitis) and/or non-deep mouth ulcers",
                    "MEASLES — measles now or in last 3 months, no complications",
                    "Other measles complications (pneumonia, stridor, diarrhoea, malnutrition) are classified under their own respective labels"
                ]
            },
            {
                title: "Ear Problems",
                icon: "👂",
                points: [
                    "Tender swelling behind the ear — most serious complication (mastoid bone infection)",
                    "Ear pain — early sign of acute ear infection; child becomes irritable, rubs ear",
                    "Ear discharge (pus) — check duration: <14 days vs ≥14 days",
                    "MASTOIDITIS — tender swelling behind the ear",
                    "ACUTE EAR INFECTION — ear pain OR discharge reported for <14 days",
                    "CHRONIC EAR INFECTION — discharge reported for ≥14 days",
                    "NO EAR INFECTION — no ear pain and no discharge",
                    "Ear infections are a major cause of deafness in low-income settings and can lead to meningitis as a complication"
                ]
            },
            {
                title: "Malnutrition — Clinical Assessment",
                icon: "⚖️",
                points: [
                    "Oedema of both feet — sign of possible COMPLICATED SEVERE ACUTE MALNUTRITION (also consider nephrotic syndrome, but referral needed regardless)",
                    "Weight-for-Height/Length (WFH/L) z-score — read off WHO growth charts; the 0 line is the median, other lines are z-score/SD deviations",
                    "MUAC (Mid-Upper Arm Circumference) — measured at midpoint between olecranon and acromion on left arm:",
                    "  • <115 mm = Severe Acute Malnutrition (SAM)",
                    "  • 115–125 mm = Moderate Acute Malnutrition (MAM)",
                    "  • ≥125 mm = No Acute Malnutrition"
                ]
            },
            {
                title: "Classification — Malnutrition",
                icon: "🏷️",
                points: [
                    "COMPLICATED SEVERE ACUTE MALNUTRITION — oedema of both feet, OR WFH/L <-3 z-score, OR MUAC <115mm WITH any of: medical complication, not able to finish offered food, or breastfeeding problem",
                    "UNCOMPLICATED SEVERE ACUTE MALNUTRITION — WFH/L <-3 z-score OR MUAC <115mm, AND no medical complication AND able to finish offered food",
                    "MODERATE ACUTE MALNUTRITION (MAM) — WFH/L between -3 and -2 z-score, OR MUAC 115–125mm",
                    "NO ACUTE MALNUTRITION — WFH/L ≥-2 z-score, OR MUAC ≥125mm",
                    "Children <2 years have higher risk of feeding problems/malnutrition — always assess feeding in this age group"
                ]
            },
            {
                title: "Anaemia — Clinical Assessment & Classification",
                icon: "🩸",
                points: [
                    "Palmar pallor — compare colour of child's palm against examiner's own palm (do not over-stretch fingers backward)",
                    "Some palmar pallor — palm looks pale",
                    "Severe palmar pallor — palm looks very pale, almost white",
                    "SEVERE ANAEMIA — severe palmar pallor",
                    "ANAEMIA — some palmar pallor (also assess for feeding problems)",
                    "NO ANAEMIA — no palmar pallor"
                ]
            }
        ]
    }
};
