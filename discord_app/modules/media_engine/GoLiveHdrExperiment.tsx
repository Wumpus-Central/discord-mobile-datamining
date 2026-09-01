// === Module 13488: HdrCaptureMode ===

// Module 13488 (HdrCaptureMode)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

let obj = { Never: "never", Always: "always", PermittedDevicesOnly: "permittedDevicesOnly" };
obj = { hdrCaptureMode: obj.Never };
obj = { 1: null, 2: obj1 };
obj[2] = { hdrCaptureMode: obj.PermittedDevicesOnly };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-02-go-live-hdr", kind: "user", defaultConfig: obj, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/GoLiveHdrExperiment.tsx");

export const HdrCaptureMode = obj;
export const getGoLiveHdrConfig = function getGoLiveHdrConfig(location) {
  return config.getConfig({ location: location.location });
};