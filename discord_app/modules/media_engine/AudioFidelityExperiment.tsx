// === Module 13117: getAudioFidelityExperimentConfig ===

// Module 13117 (getAudioFidelityExperimentConfig)
import obj132 from "obj132" /* 2 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { 1: null, 2: { capSampleRate: true, capChannelCount: false, condition: "krisp" }, 3: { capSampleRate: true, capChannelCount: false, condition: "noiseSuppression" }, 4: { capSampleRate: true, capChannelCount: false, condition: "echoCancellation" }, 5: { capSampleRate: true, capChannelCount: false, condition: "any" }, 6: { capSampleRate: true, capChannelCount: true, condition: "krisp" }, 7: { capSampleRate: true, capChannelCount: true, condition: "noiseSuppression" }, 8: { capSampleRate: true, capChannelCount: true, condition: "echoCancellation" } };
obj[8] = { capSampleRate: true, capChannelCount: true, condition: "any" };
let closure_2 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-audio-fidelity", defaultConfig: { capSampleRate: false, capChannelCount: false, condition: "none" }, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/AudioFidelityExperiment.tsx");

export const getAudioFidelityExperimentConfig = function getAudioFidelityExperimentConfig(location) {
  return store.getConfig({ location: location.location });
};
export const getVoiceFidelityCaps = function getVoiceFidelityCaps(location, krispEnabled) {
  let echoCancellationEnabled = krispEnabled.krispEnabled;
  if (!echoCancellationEnabled) {
    echoCancellationEnabled = krispEnabled.noiseSuppressionEnabled;
  }
  if (!echoCancellationEnabled) {
    echoCancellationEnabled = krispEnabled.echoCancellationEnabled;
  }
  if (echoCancellationEnabled) {
    let obj = { location: null };
    obj[0] = location.location;
    const config = store.getConfig(obj);
    const condition = config.condition;
    if ("krisp" === condition) {
      let flag = krispEnabled.krispEnabled;
    } else if ("noiseSuppression" === condition) {
      flag = krispEnabled.noiseSuppressionEnabled;
    } else if ("echoCancellation" === condition) {
      flag = krispEnabled.echoCancellationEnabled;
    } else if ("any" === condition) {
      flag = krispEnabled.krispEnabled || krispEnabled.noiseSuppressionEnabled || krispEnabled.echoCancellationEnabled;
    } else {
      flag = false;
      if ("none" !== condition) {
        isDiscordFrontendDevelopment.assertNever(condition);
      }
    }
    if (flag) {
      let num = 0;
      if (config.capSampleRate) {
        num = 32000;
      }
      obj = { maxSampleRateHz: null, maxChannelCount: null };
      obj[0] = num;
      let num2 = 0;
      if (config.capChannelCount) {
        num2 = 1;
      }
      obj[1] = num2;
    } else {
      obj = { maxSampleRateHz: 0, maxChannelCount: 0 };
    }
    return obj;
  } else {
    return { maxSampleRateHz: 0, maxChannelCount: 0 };
  }
};