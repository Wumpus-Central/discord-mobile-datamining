// === Module 14206: MobileRTCV2Experiment ===

// Module 14206 (MobileRTCV2Experiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-10-mobile-rtc-v2", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/MobileRTCV2Experiment.tsx");

export function useIsMobileRTCV2Enabled(ChannelSafeAreaBottom) {
  return closure_0.useConfig({ location: ChannelSafeAreaBottom }).enabled;
}