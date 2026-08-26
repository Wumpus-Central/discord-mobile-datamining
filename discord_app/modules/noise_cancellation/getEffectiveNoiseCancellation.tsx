// === Module 11021: set ===

// Module 11021 (set)
import set from "set" /* 2 */;

const deep_noise_suppression = "deep_noise_suppression";
let set = new Set(["voice_isolation", "wide_spectrum"]);
const result = set.fileFinishedImporting("modules/noise_cancellation/getEffectiveNoiseCancellation.tsx");

export default function getEffectiveNoiseCancellation(arg0, arg1) {
  if (!obj.isIOS()) {
    let tmpResult = tmp(500);
    if (!tmpResult.isMac()) {
      let tmp3 = arg0;
      if (arg0) {
        let tmp5 = null == arg1;
        if (!tmp5) {
          tmp5 = "" === arg1;
        }
        if (!tmp5) {
          tmpResult = tmp(500);
          tmp5 = !tmpResult.isWindows();
        }
        if (!tmp5) {
          tmp5 = arg1 !== deep_noise_suppression;
        }
        if (!tmp5) {
          tmp5 = !tmp(11022).getWindowsAudioEffectsExperimentConfig({ location: "setNoiseCancellation" }).preferSystemEffects;
          const tmpResult1 = tmp(11022);
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
};
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";