// discord_app/modules/media_engine/UpscaleSmallCapturedFramesExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-06-upscale-small-captured-frames",
  kind: "user",
  defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
  variations: null,
};
obj = { 1: null };
obj[1] = { minCaptureWidth: 130, minCaptureHeight: 130 };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/UpscaleSmallCapturedFramesExperiment.tsx");

export const UpscaleSmallCapturedFramesExperiment = apexExperiment;
