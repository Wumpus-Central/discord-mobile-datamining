// === Module 16530: HideCoveredChannelsExperiment ===

// Module 16530 (HideCoveredChannelsExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-04-hide-covered-channels", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/HideCoveredChannelsExperiment.tsx");

export default apexExperiment;