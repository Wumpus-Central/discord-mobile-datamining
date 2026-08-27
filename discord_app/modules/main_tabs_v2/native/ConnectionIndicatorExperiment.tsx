// === Module 13253: apexExperiment ===

// Module 13253 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { timeoutMs: 10000, hidden: false }, 3: { timeoutMs: 15000, hidden: false }, 4: { timeoutMs: 20000, hidden: false } };
obj[4] = { timeoutMs: 10000, hidden: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-12-connection-indicator", kind: "user", defaultConfig: { timeoutMs: "HermesInternal", hidden: null }, variations: obj });
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionIndicatorExperiment.tsx");

export default apexExperiment;