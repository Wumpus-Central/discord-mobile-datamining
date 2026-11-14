// === Module 6228: SpatialAudioForVoiceExperiment ===

// Module 6228 (SpatialAudioForVoiceExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-05-spatial-audio-for-voice", kind: "user", defaultConfig: { enabled: false, defaultOn: false, positioningModel: "" }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, defaultOn: true, positioningModel: "" } };
obj2[2] = { enabled: true, defaultOn: true, positioningModel: "conversation" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_panel/SpatialAudioForVoiceExperiment.tsx");

export default apexExperiment;