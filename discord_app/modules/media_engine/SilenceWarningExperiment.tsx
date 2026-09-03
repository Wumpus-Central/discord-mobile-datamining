// === Module 13801: apexExperiment ===

// Module 13801 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

let obj = { resetSilenceWarningOnDeviceChange: false, resetSilenceWarningAfterNMinutes: "PX_16", enableHardwareSilenceWarning: true };
obj = { name: "2026-02-silence-warning-aggression", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null, 2: null, 3: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.resetSilenceWarningOnDeviceChange = true;
obj[1] = obj1;
const obj2 = {};
const merged1 = Object.assign(obj);
obj2.resetSilenceWarningAfterNMinutes = 10;
obj[2] = obj2;
const obj3 = {};
const merged2 = Object.assign(obj);
obj3.enableHardwareSilenceWarning = true;
obj[3] = obj3;
obj[3] = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = set.fileFinishedImporting("modules/media_engine/SilenceWarningExperiment.tsx");

export default apexExperiment;