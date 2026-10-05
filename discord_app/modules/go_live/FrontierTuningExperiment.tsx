// discord_app/modules/go_live/FrontierTuningExperiment.tsx
import StreamSettingsConstants from "StreamSettingsConstants.tsx";
import ApexExperiment from "../experiments/apex/ApexExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

let ApplicationStreamFPS;
let ApplicationStreamResolutions;
let obj4;
const obj = { maxBitrate: null, maxResolution: null, maxFPS: null, maskReportedQuality: false };
const obj2 = { maxResolution: ApplicationStreamResolutions.RESOLUTION_1080, maxFPS: ApplicationStreamFPS.FPS_30 };
({ ApplicationStreamFPS, ApplicationStreamResolutions } = StreamSettingsConstants);
const merged = Object.assign(obj);
const obj3 = { name: "2026-05-frontier-tuning", kind: "guild", defaultConfig: obj, variations: obj4 };
obj4 = { 1: null, 2: null, 3: null, 4: null };
const obj5 = { maxBitrate: 3500000, maskReportedQuality: true };
const merged1 = Object.assign(obj2);
obj4[1] = obj5;
const obj6 = { maxBitrate: 5000000, maskReportedQuality: true };
const merged2 = Object.assign(obj2);
obj4[2] = obj6;
const obj7 = { maxBitrate: 3500000 };
const merged3 = Object.assign(obj2);
obj4[3] = obj7;
const obj8 = { maxBitrate: 5000000 };
const merged4 = Object.assign(obj2);
obj4[4] = obj8;
const importDefaultResultResult = ApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/go_live/FrontierTuningExperiment.tsx");

export default importDefaultResultResult;
