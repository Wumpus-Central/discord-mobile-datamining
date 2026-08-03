// === Module 10870: ? ===

// Module 10870
import { ApplicationStreamResolutions } from "RESOLUTION_720";
import importDefaultResult from "getUnitId";

let obj = { videoPresetResolutionMax: ApplicationStreamResolutions.RESOLUTION_1440 };
obj = { name: "2026-02-go-live-video-preset-resolution", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.videoPresetResolutionMax = ApplicationStreamResolutions.RESOLUTION_1080;
obj[1] = obj1;
obj[3] = obj;
const importDefaultResultResult = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/go_live/GoLiveVideoPresetResolutionExperiment.tsx");

export default importDefaultResultResult;