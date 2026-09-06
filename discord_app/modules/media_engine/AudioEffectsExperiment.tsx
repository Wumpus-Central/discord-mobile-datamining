// === Module 14069: apexExperiment ===

// Module 14069 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

let obj = { probeAudioEffects: false };
obj = { name: "2026-03-audio-effects-probe", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.probeAudioEffects = true;
obj[1] = obj1;
obj[3] = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = set.fileFinishedImporting("modules/media_engine/AudioEffectsExperiment.tsx");

export default apexExperiment;