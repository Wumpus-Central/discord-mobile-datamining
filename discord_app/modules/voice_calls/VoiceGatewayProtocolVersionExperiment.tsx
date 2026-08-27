// === Module 13377: apexExperiment ===

// Module 13377 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-voice-gateway-protocol-version", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/voice_calls/VoiceGatewayProtocolVersionExperiment.tsx");

export default apexExperiment;
export const getVoiceGatewayProtocolVersion = function getVoiceGatewayProtocolVersion(supportsSfuUpdate) {
  let num = 9;
  if (supportsSfuUpdate.supportsSfuUpdate) {
    const obj = { location: null };
    obj[0] = tmp;
    num = 9;
    if (apexExperiment.getConfig(obj).enabled) {
      num = 10;
    }
  }
  return num;
};