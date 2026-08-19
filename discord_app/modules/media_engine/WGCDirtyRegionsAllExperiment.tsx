// === Module 13112: apexExperiment ===

// Module 13112 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-wgc-dirty-regions-all", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/WGCDirtyRegionsAllExperiment.tsx");

export const WGCDirtyRegionsAllExperiment = apexExperiment;