// === Module 13985: MobileRTCV2Experiment ===

// Module 13985 (MobileRTCV2Experiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-10-mobile-rtc-v2", defaultConfig: { enabled: false, animateSpeakerLevels: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true, animateSpeakerLevels: false } };
obj2[2] = { enabled: true, animateSpeakerLevels: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/MobileRTCV2Experiment.tsx");

export function useShouldAnimateSpeakerLevels(VoicePanelDock) {
  return closure_0.useConfig({ location: VoicePanelDock }).animateSpeakerLevels;
}
export function useIsMobileRTCV2Enabled(ChannelSafeAreaBottom) {
  return closure_0.useConfig({ location: ChannelSafeAreaBottom }).enabled;
}