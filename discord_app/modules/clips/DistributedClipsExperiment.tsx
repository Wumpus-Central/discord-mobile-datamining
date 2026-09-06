// === Module 13993: DistributedClipsExperiment ===

// Module 13993 (DistributedClipsExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-05-distributed-clips", defaultConfig: { enableDistributedClips: false }, variations: null };
obj = { 1: null };
obj[1] = { enableDistributedClips: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;