// discord_app/modules/media_uploads/experiments/IosJpegliExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2025-11-enhanced-jpeg-encoding-on-ios",
  kind: "user",
  defaultConfig: { useJpegliEncoder: false },
  variations: { 0: { useJpegliEncoder: false }, 1: { useJpegliEncoder: true } },
});
const result = set.fileFinishedImporting("modules/media_uploads/experiments/IosJpegliExperiment.tsx");

export const getIosJpegliConfig = function getIosJpegliConfig(location) {
  return config.getConfig({ location: location.location });
};
