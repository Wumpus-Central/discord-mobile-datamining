// === Module 13687: ConnectionIndicatorExperiment ===

// Module 13687 (ConnectionIndicatorExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-12-connection-indicator", kind: "user", defaultConfig: { timeoutMs: "HermesInternal", hidden: null }, variations: null };
obj = { 1: null, 2: { timeoutMs: 10000, hidden: false }, 3: { timeoutMs: 15000, hidden: false }, 4: { timeoutMs: 20000, hidden: false } };
obj[4] = { timeoutMs: 10000, hidden: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionIndicatorExperiment.tsx");

export default apexExperiment;