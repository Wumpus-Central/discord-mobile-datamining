// discord_app/modules/media_engine/GoLiveHdrExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { Never: "never", Always: "always", PermittedDevicesOnly: "permittedDevicesOnly" };
obj = { name: "2026-02-go-live-hdr", kind: "user", defaultConfig: { hdrCaptureMode: obj.Never }, variations: null };
obj = { 1: null, 2: { hdrCaptureMode: obj.Always } };
obj[2] = { hdrCaptureMode: obj.PermittedDevicesOnly };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/GoLiveHdrExperiment.tsx");

export const HdrCaptureMode = obj;
export const getGoLiveHdrConfig = function getGoLiveHdrConfig(location) {
  return config.getConfig({ location: location.location });
};
