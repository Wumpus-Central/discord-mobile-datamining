// === Module 14263: GoLiveHdrExperiment ===

// Module 14263 (GoLiveHdrExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { Never: "never", Always: "always", PermittedDevicesOnly: "permittedDevicesOnly" };
const obj2 = { name: "2026-02-go-live-hdr", kind: "user", defaultConfig: { hdrCaptureMode: obj.Never }, variations: null };
const obj3 = { 1: null, 2: { hdrCaptureMode: obj.Always } };
obj3[2] = { hdrCaptureMode: obj.PermittedDevicesOnly };
obj2.variations = obj3;
const config = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/media_engine/GoLiveHdrExperiment.tsx");

export const HdrCaptureMode = obj;
export const getGoLiveHdrConfig = function getGoLiveHdrConfig(location) {
  return config.getConfig({ location: location.location });
};