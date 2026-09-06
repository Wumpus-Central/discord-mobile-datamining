// === Module 10189: apexExperiment ===

// Module 10189 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-compress-logs", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/debug/CompressLogsExperiment.tsx");

export default apexExperiment;