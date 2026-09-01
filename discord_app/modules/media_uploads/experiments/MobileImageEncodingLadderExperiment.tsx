// discord_app/modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-01-image-optimized-encoding-ladder",
  kind: "user",
  defaultConfig: { useImageEncodingLadder: false },
  variations: { 0: { useImageEncodingLadder: false }, 1: { useImageEncodingLadder: true } },
});
const result = set.fileFinishedImporting("modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx");

export const getMobileImageEncodingLadderConfig = function getMobileImageEncodingLadderConfig(location) {
  return config.getConfig({ location: location.location });
};
