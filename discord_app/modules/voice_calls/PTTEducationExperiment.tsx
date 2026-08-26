// === Module 13377: apexExperiment ===

// Module 13377 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { showPTTJoinTooltip: false, showPTTIconIndicator: false, showPTTNoKeybindWarning: false, showPTTSpeakingIndicator: false };
obj = { name: "2025-12-09-ptt-education", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null, 2: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.showPTTJoinTooltip = true;
obj1.showPTTNoKeybindWarning = true;
obj1.showPTTSpeakingIndicator = true;
obj[1] = obj1;
const obj2 = {};
const merged1 = Object.assign(obj);
obj2.showPTTIconIndicator = true;
obj[2] = obj2;
obj[3] = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = set.fileFinishedImporting("modules/voice_calls/PTTEducationExperiment.tsx");

export default apexExperiment;