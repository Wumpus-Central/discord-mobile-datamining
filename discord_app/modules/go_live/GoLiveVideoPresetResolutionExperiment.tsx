// discord_app/modules/go_live/GoLiveVideoPresetResolutionExperiment.tsx
import StreamSettingsConstants from "StreamSettingsConstants.tsx";
import ApexExperiment from "../experiments/apex/ApexExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
