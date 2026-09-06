// discord_app/modules/media_engine/AudioFidelityExperiment.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-08-audio-fidelity",
  defaultConfig: { capSampleRate: false, capChannelCount: false, condition: "none" },
  variations: null,
};
obj = {
  1: null,
  2: { capSampleRate: true, capChannelCount: false, condition: "krisp" },
  3: { capSampleRate: true, capChannelCount: false, condition: "noiseSuppression" },
  4: { capSampleRate: true, capChannelCount: false, condition: "echoCancellation" },
  5: { capSampleRate: true, capChannelCount: false, condition: "any" },
  6: { capSampleRate: true, capChannelCount: true, condition: "krisp" },
  7: { capSampleRate: true, capChannelCount: true, condition: "noiseSuppression" },
  8: { capSampleRate: true, capChannelCount: true, condition: "echoCancellation" },
};
obj[8] = { capSampleRate: true, capChannelCount: true, condition: "any" };
obj.variations = obj;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AudioFidelityExperiment.tsx");

export const getAudioFidelityExperimentConfig = function getAudioFidelityExperimentConfig(location) {
  return closure_2.getConfig({ location: location.location });
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
    let obj = { location: location.location };
    const config = closure_2.getConfig(obj);
    const condition = config.condition;
    if ("krisp" === condition) {
      let flag = krispEnabled.krispEnabled;
    } else if ("noiseSuppression" === condition) {
      flag = krispEnabled.noiseSuppressionEnabled;
    } else if ("echoCancellation" === condition) {
      flag = krispEnabled.echoCancellationEnabled;
    } else if ("any" === condition) {
      flag = krispEnabled.krispEnabled || krispEnabled.noiseSuppressionEnabled || krispEnabled.echoCancellationEnabled;
      const tmp6 =
        krispEnabled.krispEnabled || krispEnabled.noiseSuppressionEnabled || krispEnabled.echoCancellationEnabled;
    } else {
      flag = false;
      if ("none" !== condition) {
        GlobalUtils.assertNever(condition);
      }
    }
    if (flag) {
      let num = 0;
      if (config.capSampleRate) {
        num = 32000;
      }
      obj = { maxSampleRateHz: num, maxChannelCount: null };
      let num2 = 0;
      if (config.capChannelCount) {
        num2 = 1;
      }
      obj.maxChannelCount = num2;
    } else {
      obj = { maxSampleRateHz: 0, maxChannelCount: 0 };
    }
    return obj;
  } else {
    return { maxSampleRateHz: 0, maxChannelCount: 0 };
  }
};
