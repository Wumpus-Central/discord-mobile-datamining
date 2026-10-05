// discord_app/modules/media_uploads/experiments/IosJpegliExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2025-11-enhanced-jpeg-encoding-on-ios",
  kind: "user",
  defaultConfig: { useJpegliEncoder: false },
  variations: { 0: { useJpegliEncoder: false }, 1: { useJpegliEncoder: true } },
};
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/IosJpegliExperiment.tsx");

export const getIosJpegliConfig = function getIosJpegliConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
