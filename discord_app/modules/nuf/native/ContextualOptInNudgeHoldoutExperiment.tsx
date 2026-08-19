// === Module 14789: apexExperiment ===

// Module 14789 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-contextual-opt-in-nudge-holdout", kind: "user", defaultConfig: { inHoldout: false }, variations: { 0: { inHoldout: false }, 1: { inHoldout: true } } });
const result = obj132.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;