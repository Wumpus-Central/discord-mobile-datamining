// discord_app/modules/media_engine/AudioEffectsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { probeAudioEffects: false };
obj = { name: "2026-03-audio-effects-probe", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.probeAudioEffects = true;
obj[1] = obj1;
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AudioEffectsExperiment.tsx");

export default apexExperiment;
