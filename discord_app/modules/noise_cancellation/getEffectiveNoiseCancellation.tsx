// === Module 9688: getEffectiveNoiseCancellation ===

// Module 9688 (getEffectiveNoiseCancellation)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import WindowsEffectsExperiment from "WindowsEffectsExperiment" /* 9689 */;
import size from "module_2" /* 2 */;

const deep_noise_suppression = "deep_noise_suppression";
const set = new Set(["voice_isolation", "wide_spectrum"]);
const result = size.fileFinishedImporting("modules/noise_cancellation/getEffectiveNoiseCancellation.tsx");

export default function getEffectiveNoiseCancellation(noiseCancellation, systemMicrophoneMode) {
  const obj = PlatformUtils;
  if (!obj.isIOS()) {
    let tmp3;
    const tmpResult = PlatformUtils;
    if (!tmpResult.isMac()) {
      tmp3 = noiseCancellation;
      if (tmp3) {
        let tmp5 = null == systemMicrophoneMode || "" === systemMicrophoneMode;
        if (!tmp5) {
          const tmpResult3 = PlatformUtils;
          tmp5 = !tmpResult3.isWindows();
        }
        if (!tmp5) {
          tmp5 = systemMicrophoneMode !== deep_noise_suppression;
        }
        if (!tmp5) {
          const tmpResult4 = WindowsEffectsExperiment;
          tmp5 = !tmpResult4.getWindowsAudioEffectsExperimentConfig({ location: "setNoiseCancellation" }).preferSystemEffects;
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
  tmp3 = !hasItem && noiseCancellation;
};
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";