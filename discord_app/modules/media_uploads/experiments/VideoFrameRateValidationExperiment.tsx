// discord_app/modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2025-10-video-frame-rate-validation",
  kind: "user",
  defaultConfig: { enableFrameRateValidation: false },
  variations: { 0: { enableFrameRateValidation: false }, 1: { enableFrameRateValidation: true } },
};
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/VideoFrameRateValidationExperiment.tsx");

export const getVideoFrameRateValidationExperimentConfig = function getVideoFrameRateValidationExperimentConfig(
  location,
) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
