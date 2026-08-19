// === Module 13185: apexExperiment ===

// Module 13185 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { overrideDeviceReuse: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-video-capture-device-no-reuse", kind: "user", defaultConfig: { overrideDeviceReuse: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;