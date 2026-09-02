// === Module 13716: apexExperiment ===

// Module 13716 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-wgc-dirty-regions-all", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/WGCDirtyRegionsAllExperiment.tsx");

export const WGCDirtyRegionsAllExperiment = apexExperiment;