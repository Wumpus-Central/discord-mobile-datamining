// === Module 13179: getIOSAudioInterruptExperimentConfig ===

// Module 13179 (getIOSAudioInterruptExperimentConfig)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-03-ios-audio-interrupt-handling", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/IOSAudioInterruptExperiment.tsx");

export const getIOSAudioInterruptExperimentConfig = function getIOSAudioInterruptExperimentConfig(handleConnectionOpen) {
  return config.getConfig({ location: handleConnectionOpen });
};