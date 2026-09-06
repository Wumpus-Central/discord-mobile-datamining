// === Module 13813: ServerLadderExperiment ===

// Module 13813 (ServerLadderExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-06-server-ladder", kind: "user", defaultConfig: { bitrate: 9000000, enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { bitrate: 3500000, enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/ServerLadderExperiment.tsx");

export const ServerLadderExperiment = apexExperiment;