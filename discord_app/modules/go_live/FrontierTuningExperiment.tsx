// discord_app/modules/go_live/FrontierTuningExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import RESOLUTION_720 from "StreamSettingsConstants.tsx";
import importDefaultResult from "../experiments/apex/ApexExperiment.tsx";

let obj = { maxBitrate: null, maxResolution: null, maxFPS: null, maskReportedQuality: false };
obj = {};
({ ApplicationStreamFPS, ApplicationStreamResolutions } = RESOLUTION_720);
const merged = Object.assign(obj);
obj.maxResolution = ApplicationStreamResolutions.RESOLUTION_1080;
obj.maxFPS = ApplicationStreamFPS.FPS_30;
obj = { name: "2026-05-frontier-tuning", kind: "guild", defaultConfig: obj, variations: null };
const obj1 = { 1: null, 2: null, 3: null, 4: null };
const obj2 = {};
const merged1 = Object.assign(obj);
obj2.maxBitrate = 3500000;
obj2.maskReportedQuality = true;
obj1[1] = obj2;
const obj3 = {};
const merged2 = Object.assign(obj);
obj3.maxBitrate = 5000000;
obj3.maskReportedQuality = true;
obj1[2] = obj3;
const obj4 = {};
const merged3 = Object.assign(obj);
obj4.maxBitrate = 3500000;
obj1[3] = obj4;
const obj5 = {};
const merged4 = Object.assign(obj);
obj5.maxBitrate = 5000000;
obj1[4] = obj5;
obj[3] = obj1;
const importDefaultResultResult = importDefaultResult(obj);
const result = set.fileFinishedImporting("modules/go_live/FrontierTuningExperiment.tsx");

export default importDefaultResultResult;
