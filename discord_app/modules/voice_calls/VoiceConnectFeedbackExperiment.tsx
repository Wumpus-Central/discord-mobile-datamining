// === Module 16583: VoiceConnectFeedbackExperiment ===

// Module 16583 (VoiceConnectFeedbackExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1454 */;

const obj = { kind: "user", name: "2026-09-voice-connect-feedback", defaultConfig: { rtcConnectionJoinSounds: false, showSelfConnectingUI: false }, variations: null };
const obj2 = { 1: null, 2: { rtcConnectionJoinSounds: true, showSelfConnectingUI: false } };
obj2[2] = { rtcConnectionJoinSounds: true, showSelfConnectingUI: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceConnectFeedbackExperiment.tsx");

export default apex_ApexExperimentDefault(obj);