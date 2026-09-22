// === Module 13917: VoiceServerUpdateImmediateExperiment ===

// Module 13917 (VoiceServerUpdateImmediateExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-voice-server-update-immediate-mobile", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/VoiceServerUpdateImmediateExperiment.tsx");

export const isVoiceServerUpdateImmediateEnabled = function isVoiceServerUpdateImmediateEnabled(GatewaySocketDispatcher) {
  let flag;
  if (config != null) {
    const obj2 = { location: GatewaySocketDispatcher };
    flag = config.getConfig(obj2).enabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};