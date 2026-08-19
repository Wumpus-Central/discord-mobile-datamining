// === Module 14468: apexExperiment ===

// Module 14468 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { enableFastAdRecheck: false }, 3: { enableFastAdRecheck: true }, 4: { enableFastAdRecheck: true }, 5: { enableFastAdRecheck: true } };
obj[5] = { enableFastAdRecheck: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-ad-recheck-interval-experiment", kind: "user", defaultConfig: { enableFastAdRecheck: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/quests/experiments/AdRecheckIntervalExperiment.tsx");

export default apexExperiment;