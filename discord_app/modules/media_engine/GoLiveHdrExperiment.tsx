// discord_app/modules/media_engine/GoLiveHdrExperiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ApexExperiment from "../experiments/apex/index.tsx";

let obj = { Never: "never", Always: "always", PermittedDevicesOnly: "permittedDevicesOnly" };
obj = { 1: null, 2: obj1 };
obj[2] = { hdrCaptureMode: obj.PermittedDevicesOnly };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-02-go-live-hdr", kind: "user", defaultConfig: obj, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/GoLiveHdrExperiment.tsx");

export const HdrCaptureMode = obj;
export const getGoLiveHdrConfig = function getGoLiveHdrConfig(location) {
  return config.getConfig({ location: location.location });
};