// === Module 14079: VoiceGatewayProtocolVersionExperiment ===

// Module 14079 (VoiceGatewayProtocolVersionExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-04-voice-gateway-protocol-version", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceGatewayProtocolVersionExperiment.tsx");

export default apexExperiment;
export const getVoiceGatewayProtocolVersion = function getVoiceGatewayProtocolVersion(supportsSfuUpdate) {
  let num = 9;
  if (supportsSfuUpdate.supportsSfuUpdate) {
    const obj = { location: tmp };
    num = 9;
    if (apexExperiment.getConfig(obj).enabled) {
      num = 10;
    }
  }
  return num;
};