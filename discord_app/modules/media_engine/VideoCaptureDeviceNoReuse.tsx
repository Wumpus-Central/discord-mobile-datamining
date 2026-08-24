// discord_app/modules/media_engine/VideoCaptureDeviceNoReuse.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { overrideDeviceReuse: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-video-capture-device-no-reuse", kind: "user", defaultConfig: { overrideDeviceReuse: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;