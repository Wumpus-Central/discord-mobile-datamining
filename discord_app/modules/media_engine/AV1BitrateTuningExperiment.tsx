// === Module 12892: apexExperiment ===

// Module 12892 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { bitrate: 3000000 } };
obj[2] = { bitrate: 2500000 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-av1-bitrate-tuning", kind: "user", defaultConfig: { bitrate: 3500000 }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/AV1BitrateTuningExperiment.tsx");

export const AV1StreamBitrateReductionExperiment = apexExperiment;