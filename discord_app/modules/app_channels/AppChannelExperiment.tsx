// === Module 9734: AppChannelExperiment ===

// Module 9734 (AppChannelExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "guild", name: "2026-07-app-channels", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/app_channels/AppChannelExperiment.tsx");

export default apexExperiment;