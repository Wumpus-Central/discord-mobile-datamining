// === Module 5114: getVideoFrameRateValidationExperimentConfig ===

// Module 5114 (getVideoFrameRateValidationExperimentConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-10-video-frame-rate-validation", kind: "user", defaultConfig: { enableFrameRateValidation: false }, variations: { 0: { enableFrameRateValidation: false }, 1: { enableFrameRateValidation: true } } });
const result = set.fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export const getVideoFrameRateValidationExperimentConfig = function getVideoFrameRateValidationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};