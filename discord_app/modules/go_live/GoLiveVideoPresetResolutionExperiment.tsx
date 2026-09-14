// === Module 10084: GoLiveVideoPresetResolutionExperiment ===

// Module 10084 (GoLiveVideoPresetResolutionExperiment)
import StreamSettingsConstants from "StreamSettingsConstants" /* 4683 */;
import ApexExperiment from "apex/ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const ApplicationStreamResolutions = StreamSettingsConstants.ApplicationStreamResolutions;
const obj = { videoPresetResolutionMax: ApplicationStreamResolutions.RESOLUTION_1440 };
const obj2 = { name: "2026-02-go-live-video-preset-resolution", kind: "user", defaultConfig: obj, variations: null };
const obj3 = { 1: null };
const obj4 = {};
const merged = Object.assign(obj);
obj4.videoPresetResolutionMax = ApplicationStreamResolutions.RESOLUTION_1080;
obj3[1] = obj4;
obj2.variations = obj3;
const result = size.fileFinishedImporting("modules/go_live/GoLiveVideoPresetResolutionExperiment.tsx");

export default ApexExperiment(obj2);