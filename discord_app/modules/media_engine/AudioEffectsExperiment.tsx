// === Module 14332: AudioEffectsExperiment ===

// Module 14332 (AudioEffectsExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { probeAudioEffects: false };
const obj2 = { name: "2026-03-audio-effects-probe", kind: "user", defaultConfig: obj, variations: null };
const obj3 = { 1: null };
const obj4 = {};
const merged = Object.assign(obj);
obj4.probeAudioEffects = true;
obj3[1] = obj4;
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/media_engine/AudioEffectsExperiment.tsx");

export default apexExperiment;