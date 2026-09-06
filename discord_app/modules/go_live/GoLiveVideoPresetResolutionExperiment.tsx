// === Module 9954: GoLiveVideoPresetResolutionExperiment ===

// Module 9954 (GoLiveVideoPresetResolutionExperiment)
import StreamSettingsConstants from "StreamSettingsConstants" /* 4607 */;
import ApexExperiment from "apex/ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const ApplicationStreamResolutions = StreamSettingsConstants.ApplicationStreamResolutions;
let obj = { videoPresetResolutionMax: ApplicationStreamResolutions.RESOLUTION_1440 };
obj = { name: "2026-02-go-live-video-preset-resolution", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.videoPresetResolutionMax = ApplicationStreamResolutions.RESOLUTION_1080;
obj[1] = obj1;
obj.variations = obj;
const result = size.fileFinishedImporting("modules/go_live/GoLiveVideoPresetResolutionExperiment.tsx");

export default ApexExperiment(obj);