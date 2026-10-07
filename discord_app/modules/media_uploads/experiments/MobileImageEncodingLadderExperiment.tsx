// discord_app/modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  name: "2026-01-image-optimized-encoding-ladder",
  kind: "user",
  defaultConfig: { useImageEncodingLadder: false },
  variations: { 0: { useImageEncodingLadder: false }, 1: { useImageEncodingLadder: true } },
});
const result = size.fileFinishedImporting("modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx");

export const getMobileImageEncodingLadderConfig = function getMobileImageEncodingLadderConfig(location) {
  return config.getConfig({ location: location.location });
};
