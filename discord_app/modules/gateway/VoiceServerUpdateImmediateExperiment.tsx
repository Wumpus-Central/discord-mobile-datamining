// === Module 13455: VoiceServerUpdateImmediateExperiment ===

// Module 13455 (VoiceServerUpdateImmediateExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-voice-server-update-immediate-mobile", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
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