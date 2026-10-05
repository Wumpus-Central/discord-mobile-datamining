// === Module 13884: AudioEffectsExperiment ===

// Module 13884 (AudioEffectsExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj3;
const obj = { probeAudioEffects: false };
const obj2 = { name: "2026-03-audio-effects-probe", kind: "user", defaultConfig: obj, variations: obj3 };
obj3 = { 1: null };
const createApexExperiment = ApexExperiment.createApexExperiment;
const obj4 = { probeAudioEffects: true };
const merged = Object.assign(obj);
obj3[1] = obj4;
const apexExperiment = createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/media_engine/AudioEffectsExperiment.tsx");

export default apexExperiment;