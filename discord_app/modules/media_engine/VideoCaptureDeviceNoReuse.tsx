// discord_app/modules/media_engine/VideoCaptureDeviceNoReuse.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-03-video-capture-device-no-reuse",
  kind: "user",
  defaultConfig: { overrideDeviceReuse: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { overrideDeviceReuse: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;
