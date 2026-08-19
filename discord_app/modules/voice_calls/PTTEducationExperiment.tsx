// === Module 13109: apexExperiment ===

// Module 13109 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { showPTTJoinTooltip: false, showPTTIconIndicator: false, showPTTNoKeybindWarning: false, showPTTSpeakingIndicator: false };
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
const result = obj132.fileFinishedImporting("modules/voice_calls/PTTEducationExperiment.tsx");

export default apexExperiment;