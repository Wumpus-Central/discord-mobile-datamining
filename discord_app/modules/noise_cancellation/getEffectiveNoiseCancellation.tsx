// === Module 9995: getEffectiveNoiseCancellation ===

// Module 9995 (getEffectiveNoiseCancellation)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import WindowsEffectsExperiment from "WindowsEffectsExperiment" /* 9996 */;
import size from "module_2" /* 2 */;

const deep_noise_suppression = "deep_noise_suppression";
const set = new Set(["voice_isolation", "wide_spectrum"]);
const result = size.fileFinishedImporting("modules/noise_cancellation/getEffectiveNoiseCancellation.tsx");

export default function getEffectiveNoiseCancellation(noiseCancellation, systemMicrophoneMode) {
  if (!obj.isIOS()) {
    let tmpResult = PlatformUtils;
    if (!tmpResult.isMac()) {
      let tmp3 = noiseCancellation;
      if (noiseCancellation) {
        let tmp5 = null == systemMicrophoneMode;
        if (!tmp5) {
          tmp5 = "" === systemMicrophoneMode;
        }
        if (!tmp5) {
          tmpResult = PlatformUtils;
          tmp5 = !tmpResult.isWindows();
        }
        if (!tmp5) {
          tmp5 = systemMicrophoneMode !== deep_noise_suppression;
        }
        if (!tmp5) {
          tmp5 = !WindowsEffectsExperiment.getWindowsAudioEffectsExperimentConfig({ location: "setNoiseCancellation" }).preferSystemEffects;
          const tmpResult1 = WindowsEffectsExperiment;
        }
        if (tmp5) {
          tmp5 = noiseCancellation;
        }
        tmp3 = tmp5;
      }
    }
    return tmp3;
  }
  const hasItem = set.has(systemMicrophoneMode);
  let tmp8 = !hasItem;
  if (!hasItem) {
    tmp8 = noiseCancellation;
  }
  tmp3 = tmp8;
  obj = PlatformUtils;
};
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";