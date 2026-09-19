// === Module 14270: WGCDirtyRegionsAllExperiment ===

// Module 14270 (WGCDirtyRegionsAllExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-02-wgc-dirty-regions-all", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WGCDirtyRegionsAllExperiment.tsx");

export const WGCDirtyRegionsAllExperiment = apexExperiment;