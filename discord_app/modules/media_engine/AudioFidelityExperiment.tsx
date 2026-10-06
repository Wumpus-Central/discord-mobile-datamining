// === Module 13844: AudioFidelityExperiment ===

// Module 13844 (AudioFidelityExperiment)
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-08-audio-fidelity", defaultConfig: { capSampleRate: false, capChannelCount: false, condition: "none" }, variations: obj2 };
obj2 = { 1: null, 2: { capSampleRate: true, capChannelCount: false, condition: "krisp" }, 3: { capSampleRate: true, capChannelCount: false, condition: "noiseSuppression" }, 4: { capSampleRate: true, capChannelCount: false, condition: "echoCancellation" }, 5: { capSampleRate: true, capChannelCount: false, condition: "any" }, 6: { capSampleRate: true, capChannelCount: true, condition: "krisp" }, 7: { capSampleRate: true, capChannelCount: true, condition: "noiseSuppression" }, 8: { capSampleRate: true, capChannelCount: true, condition: "echoCancellation" } };
obj2[8] = { capSampleRate: true, capChannelCount: true, condition: "any" };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AudioFidelityExperiment.tsx");

export const getAudioFidelityExperimentConfig = function getAudioFidelityExperimentConfig(location) {
  const obj = { location: location.location };
  return closure_2.getConfig(obj);
};
export const getVoiceFidelityCaps = function getVoiceFidelityCaps(location, krispEnabled) {
  let num2;
  let echoCancellationEnabled = krispEnabled.krispEnabled;
  const _location = location.location;
  if (!echoCancellationEnabled) {
    echoCancellationEnabled = krispEnabled.noiseSuppressionEnabled;
  }
  if (!echoCancellationEnabled) {
    echoCancellationEnabled = krispEnabled.echoCancellationEnabled;
  }
  if (echoCancellationEnabled) {
    let flag;
    let obj4;
    const obj = { location: _location };
    const config = closure_2.getConfig(obj);
    const condition = config.condition;
    if ("krisp" === condition) {
      flag = krispEnabled.krispEnabled;
    } else if ("noiseSuppression" === condition) {
      flag = krispEnabled.noiseSuppressionEnabled;
    } else if ("echoCancellation" === condition) {
      flag = krispEnabled.echoCancellationEnabled;
    } else if ("any" === condition) {
      flag = krispEnabled.krispEnabled || krispEnabled.noiseSuppressionEnabled || krispEnabled.echoCancellationEnabled;
    } else {
      flag = false;
      if ("none" !== condition) {
        const obj2 = GlobalUtils;
        obj2.assertNever(condition);
      }
    }
    if (flag) {
      let num = 0;
      if (config.capSampleRate) {
        num = 32000;
      }
      const obj3 = { maxSampleRateHz: num, maxChannelCount: num2 };
      num2 = 0;
      if (config.capChannelCount) {
        num2 = 1;
      }
      obj4 = obj3;
    } else {
      obj4 = { maxSampleRateHz: 0, maxChannelCount: 0 };
    }
    return obj4;
  } else {
    return { maxSampleRateHz: 0, maxChannelCount: 0 };
  }
};