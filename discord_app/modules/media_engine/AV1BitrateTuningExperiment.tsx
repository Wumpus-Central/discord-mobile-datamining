// === Module 13814: AV1BitrateTuningExperiment ===

// Module 13814 (AV1BitrateTuningExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-05-av1-bitrate-tuning", kind: "user", defaultConfig: { bitrate: 3500000 }, variations: null };
obj = { 1: null, 2: { bitrate: 3000000 } };
obj[2] = { bitrate: 2500000 };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AV1BitrateTuningExperiment.tsx");

export const AV1StreamBitrateReductionExperiment = apexExperiment;