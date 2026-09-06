// === Module 15117: AdRecheckIntervalExperiment ===

// Module 15117 (AdRecheckIntervalExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-07-ad-recheck-interval-experiment", kind: "user", defaultConfig: { enableFastAdRecheck: false }, variations: null };
obj = { 1: null, 2: { enableFastAdRecheck: false }, 3: { enableFastAdRecheck: true }, 4: { enableFastAdRecheck: true }, 5: { enableFastAdRecheck: true } };
obj[5] = { enableFastAdRecheck: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/AdRecheckIntervalExperiment.tsx");

export default apexExperiment;