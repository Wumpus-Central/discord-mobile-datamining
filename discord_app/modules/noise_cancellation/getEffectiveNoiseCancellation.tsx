// === Module 12559: set ===

// Module 12559 (set)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import getWindowsAudioEffectsExperimentConfig from "getWindowsAudioEffectsExperimentConfig" /* 12560 */;

const deep_noise_suppression = "deep_noise_suppression";
const set = new Set(["voice_isolation", "wide_spectrum"]);
const result = obj132.fileFinishedImporting("modules/noise_cancellation/getEffectiveNoiseCancellation.tsx");

export default function getEffectiveNoiseCancellation(arg0, arg1) {
  if (!obj.isIOS()) {
    let tmpResult = obj1322;
    if (!tmpResult.isMac()) {
      let tmp3 = arg0;
      if (arg0) {
        let tmp5 = null == arg1;
        if (!tmp5) {
          tmp5 = "" === arg1;
        }
        if (!tmp5) {
          tmpResult = obj1322;
          tmp5 = !tmpResult.isWindows();
        }
        if (!tmp5) {
          tmp5 = arg1 !== deep_noise_suppression;
        }
        if (!tmp5) {
          tmp5 = !getWindowsAudioEffectsExperimentConfig.getWindowsAudioEffectsExperimentConfig({ location: "setNoiseCancellation" }).preferSystemEffects;
          const tmpResult1 = getWindowsAudioEffectsExperimentConfig;
        }
        if (tmp5) {
          tmp5 = arg0;
        }
        tmp3 = tmp5;
      }
    }
    return tmp3;
  }
  const hasItem = set.has(arg1);
  let tmp8 = !hasItem;
  if (!hasItem) {
    tmp8 = arg0;
  }
  tmp3 = tmp8;
  obj = obj1322;
};
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";