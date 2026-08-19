// discord_app/modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-10-video-frame-rate-validation", kind: "user", defaultConfig: { enableFrameRateValidation: false }, variations: { 0: { enableFrameRateValidation: false }, 1: { enableFrameRateValidation: true } } });
const result = obj132.fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export const getVideoFrameRateValidationExperimentConfig = function getVideoFrameRateValidationExperimentConfig(location) {
  return config.getConfig({ location: location.location });
};