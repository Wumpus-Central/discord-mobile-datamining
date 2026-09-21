// === Module 14343: SilenceWarningExperiment ===

// Module 14343 (SilenceWarningExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { resetSilenceWarningOnDeviceChange: false, resetSilenceWarningAfterNMinutes: "PX_16", enableHardwareSilenceWarning: true };
const obj2 = { name: "2026-02-silence-warning-aggression", kind: "user", defaultConfig: obj, variations: null };
const obj3 = { 1: null, 2: null, 3: null };
const obj4 = {};
const merged = Object.assign(obj);
obj4.resetSilenceWarningOnDeviceChange = true;
obj3[1] = obj4;
const obj5 = {};
const merged1 = Object.assign(obj);
obj5.resetSilenceWarningAfterNMinutes = 10;
obj3[2] = obj5;
const obj6 = {};
const merged2 = Object.assign(obj);
obj6.enableHardwareSilenceWarning = true;
obj3[3] = obj6;
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/media_engine/SilenceWarningExperiment.tsx");

export default apexExperiment;