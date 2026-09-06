// === Module 13999: GoLiveHdrExperiment ===

// Module 13999 (GoLiveHdrExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

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