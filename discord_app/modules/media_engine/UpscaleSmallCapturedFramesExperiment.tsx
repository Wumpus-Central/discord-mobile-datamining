// === Module 13115: apexExperiment ===

// Module 13115 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { minCaptureWidth: 130, minCaptureHeight: 130 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-upscale-small-captured-frames", kind: "user", defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 }, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/UpscaleSmallCapturedFramesExperiment.tsx");

export const UpscaleSmallCapturedFramesExperiment = apexExperiment;