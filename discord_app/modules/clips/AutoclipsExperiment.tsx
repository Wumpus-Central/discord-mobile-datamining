// === Module 20291: AutoclipsExperiment ===

// Module 20291 (AutoclipsExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-09-autoclips", defaultConfig: { enabled: false, marketingEnabled: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, marketingEnabled: false } };
obj2[2] = { enabled: true, marketingEnabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/AutoclipsExperiment.tsx");

export default apexExperiment;