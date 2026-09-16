// === Module 14108: PTTEducationExperiment ===

// Module 14108 (PTTEducationExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { showPTTJoinTooltip: false, showPTTIconIndicator: false, showPTTNoKeybindWarning: false, showPTTSpeakingIndicator: false };
const obj2 = { name: "2025-12-09-ptt-education", kind: "user", defaultConfig: obj, variations: null };
const obj3 = { 1: null, 2: null };
const obj4 = {};
const merged = Object.assign(obj);
obj4.showPTTJoinTooltip = true;
obj4.showPTTNoKeybindWarning = true;
obj4.showPTTSpeakingIndicator = true;
obj3[1] = obj4;
const obj5 = {};
const merged1 = Object.assign(obj);
obj5.showPTTIconIndicator = true;
obj3[2] = obj5;
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/voice_calls/PTTEducationExperiment.tsx");

export default apexExperiment;