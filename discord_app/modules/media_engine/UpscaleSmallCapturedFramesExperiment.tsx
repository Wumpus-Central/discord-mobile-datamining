// === Module 14096: UpscaleSmallCapturedFramesExperiment ===

// Module 14096 (UpscaleSmallCapturedFramesExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-upscale-small-captured-frames", kind: "user", defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 }, variations: null };
const obj2 = { 1: null };
obj2[1] = { minCaptureWidth: 130, minCaptureHeight: 130 };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/UpscaleSmallCapturedFramesExperiment.tsx");

export const UpscaleSmallCapturedFramesExperiment = apexExperiment;