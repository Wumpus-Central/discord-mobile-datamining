// === Module 9717: apexExperiment ===

// Module 9717 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "guild", name: "2026-07-app-channels", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/app_channels/AppChannelExperiment.tsx");

export default apexExperiment;