// === Module 13342: SingleCpuCopyExperiment ===

// Module 13342 (SingleCpuCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-single-cpu-copy", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/SingleCpuCopyExperiment.tsx");

export const SingleCpuCopyExperiment = apexExperiment;