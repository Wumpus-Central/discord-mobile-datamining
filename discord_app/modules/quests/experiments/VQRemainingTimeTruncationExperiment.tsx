// === Module 10706: apexExperiment ===

// Module 10706 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { truncateMoreThanSeconds: 30 } };
obj[2] = { truncateMoreThanSeconds: 60 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-vq-remaining-time-truncation", kind: "user", defaultConfig: { truncateMoreThanSeconds: null }, variations: obj });
const result = obj132.fileFinishedImporting("modules/quests/experiments/VQRemainingTimeTruncationExperiment.tsx");

export default apexExperiment;