// === Module 13733: VoiceServerUpdateImmediateExperiment ===

// Module 13733 (VoiceServerUpdateImmediateExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-voice-server-update-immediate-mobile", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/VoiceServerUpdateImmediateExperiment.tsx");

export const isVoiceServerUpdateImmediateEnabled = function isVoiceServerUpdateImmediateEnabled(GatewaySocketDispatcher) {
  let obj = closure_0;
  let flag;
  if (closure_0 != null) {
    obj = { location: GatewaySocketDispatcher };
    flag = obj.getConfig(obj).enabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};