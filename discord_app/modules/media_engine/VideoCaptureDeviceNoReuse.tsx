// discord_app/modules/media_engine/VideoCaptureDeviceNoReuse.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  name: "2026-03-video-capture-device-no-reuse",
  kind: "user",
  defaultConfig: { overrideDeviceReuse: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { overrideDeviceReuse: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;
