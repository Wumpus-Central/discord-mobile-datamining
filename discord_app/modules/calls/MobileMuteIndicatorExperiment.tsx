// === Module 17051: MobileMuteIndicatorExperiment ===

// Module 17051 (MobileMuteIndicatorExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

let obj = { kind: "user", name: "2026-02-mobile-mute-indicator", defaultConfig: { enableMuteWarning: false }, variations: null };
obj = { 1: null };
obj[1] = { enableMuteWarning: true };
obj.variations = obj;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/MobileMuteIndicatorExperiment.tsx");

export default apex_ApexExperimentDefault(obj);