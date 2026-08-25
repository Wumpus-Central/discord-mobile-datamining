// === Module 13283: apexExperiment ===

// Module 13283 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { bitrate: 3500000, enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-server-ladder", kind: "user", defaultConfig: { bitrate: 9000000, enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/ServerLadderExperiment.tsx");

export const ServerLadderExperiment = apexExperiment;