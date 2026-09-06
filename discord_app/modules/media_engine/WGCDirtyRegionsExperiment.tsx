// === Module 14004: WGCDirtyRegionsExperiment ===

// Module 14004 (WGCDirtyRegionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-02-wgc-dirty-regions", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WGCDirtyRegionsExperiment.tsx");

export const WGCDirtyRegionsExperiment = apexExperiment;