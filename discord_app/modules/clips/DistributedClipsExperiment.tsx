// === Module 13993: apexExperiment ===

// Module 13993 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enableDistributedClips: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-05-distributed-clips", defaultConfig: { enableDistributedClips: false }, variations: obj });
const result = set.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;