// === Module 14077: VideoCaptureDeviceNoReuse ===

// Module 14077 (VideoCaptureDeviceNoReuse)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-03-video-capture-device-no-reuse", kind: "user", defaultConfig: { overrideDeviceReuse: false }, variations: null };
obj = { 1: null };
obj[1] = { overrideDeviceReuse: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;