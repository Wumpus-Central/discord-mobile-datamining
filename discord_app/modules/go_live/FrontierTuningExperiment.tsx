// discord_app/modules/go_live/FrontierTuningExperiment.tsx
import StreamSettingsConstants from "StreamSettingsConstants.tsx";
import ApexExperiment from "../experiments/apex/ApexExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = { maxBitrate: null, maxResolution: null, maxFPS: null, maskReportedQuality: false };
const obj2 = {};
({ ApplicationStreamFPS, ApplicationStreamResolutions } = StreamSettingsConstants);
const merged = Object.assign(obj);
obj2.maxResolution = ApplicationStreamResolutions.RESOLUTION_1080;
obj2.maxFPS = ApplicationStreamFPS.FPS_30;
const obj3 = { name: "2026-05-frontier-tuning", kind: "guild", defaultConfig: obj, variations: null };
const obj4 = { 1: null, 2: null, 3: null, 4: null };
const obj5 = {};
const merged1 = Object.assign(obj2);
obj5.maxBitrate = 3500000;
obj5.maskReportedQuality = true;
obj4[1] = obj5;
const obj6 = {};
const merged2 = Object.assign(obj2);
obj6.maxBitrate = 5000000;
obj6.maskReportedQuality = true;
obj4[2] = obj6;
const obj7 = {};
const merged3 = Object.assign(obj2);
obj7.maxBitrate = 3500000;
obj4[3] = obj7;
const obj8 = {};
const merged4 = Object.assign(obj2);
obj8.maxBitrate = 5000000;
obj4[4] = obj8;
obj3.variations = obj4;
const result = size.fileFinishedImporting("modules/go_live/FrontierTuningExperiment.tsx");

export default ApexExperiment(obj3);
