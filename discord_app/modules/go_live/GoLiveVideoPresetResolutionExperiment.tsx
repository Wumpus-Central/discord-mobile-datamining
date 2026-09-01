// discord_app/modules/go_live/GoLiveVideoPresetResolutionExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import RESOLUTION_720 from "StreamSettingsConstants.tsx";
import importDefaultResult from "../experiments/apex/ApexExperiment.tsx";

const ApplicationStreamResolutions = RESOLUTION_720.ApplicationStreamResolutions;
let obj = { videoPresetResolutionMax: ApplicationStreamResolutions.RESOLUTION_1440 };
obj = { name: "2026-02-go-live-video-preset-resolution", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.videoPresetResolutionMax = ApplicationStreamResolutions.RESOLUTION_1080;
obj[1] = obj1;
obj[3] = obj;
const importDefaultResultResult = importDefaultResult(obj);
const result = set.fileFinishedImporting("modules/go_live/GoLiveVideoPresetResolutionExperiment.tsx");

export default importDefaultResultResult;
