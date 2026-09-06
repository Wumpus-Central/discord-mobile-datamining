// === Module 17121: DefaultAudioRouteExperiment ===

// Module 17121 (DefaultAudioRouteExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-02-default-audio-route", kind: "user", defaultConfig: { defaultSpeakerForGuildCall: false, defaultSpeakerForDMCall: false }, variations: null };
obj = { 1: null, 2: { defaultSpeakerForGuildCall: true, defaultSpeakerForDMCall: false } };
obj[2] = { defaultSpeakerForGuildCall: true, defaultSpeakerForDMCall: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/DefaultAudioRouteExperiment.tsx");

export default apexExperiment;