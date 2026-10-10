// === Module 11088: UserSettingsVoiceUtils ===

// Module 11088 (UserSettingsVoiceUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5243 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 11089 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;

require = fn;
const Constants = fn(1085);
({ AnalyticsPages: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const NoiseSuppressionOpt = { NONE: "NONE", STANDARD: "STANDARD", KRISP: "KRISP" };
const ReactCompilerGating = fn(558);
function getSelectedNoiseSuppressionOption() {
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  const noiseSuppression = obj.getNoiseSuppression();
  const noiseCancellation = obj.getNoiseCancellation();
  if (noiseCancellation) {
    obj2.getNoiseCancellationDeferredToSystem(obj) ? tmp3.NONE : tmp3.KRISP;
  } else {
    return noiseSuppression ? tmp3.STANDARD : tmp3.NONE;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceUtils.tsx");

export const handleAutomaticGainControlChange = function handleAutomaticGainControlChange(arg0) {
  const result = AudioActionCreatorsDefault.setAutomaticGainControl(arg0, { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO });
};
export const handleEchoCancellationChange = function handleEchoCancellationChange(arg0) {
  AudioActionCreatorsDefault.setEchoCancellation(arg0, { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO });
};
export const handleNoiseSuppressionChange = function handleNoiseSuppressionChange(arg0) {
  ({ KRISP, STANDARD } = obj);
  obj = AudioActionCreatorsDefault;
  obj.setNoiseCancellation(arg0 === KRISP, { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO });
  AudioActionCreatorsDefault.setNoiseSuppression(arg0 === STANDARD, { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO });
};
export { NoiseSuppressionOpt };
export { getSelectedNoiseSuppressionOption };
export const useSelectedNoiseSuppressionOption = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedNoiseSuppressionOption() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      const noiseSuppression = MediaEngineStore.getNoiseSuppression();
      const noiseCancellation = MediaEngineStore.getNoiseCancellation();
      if (noiseCancellation) {
        obj.getNoiseCancellationDeferredToSystem(MediaEngineStore) ? NoiseSuppressionOpt.NONE : NoiseSuppressionOpt.KRISP;
      } else {
        return noiseSuppression ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE;
      }
      obj = NoiseCancellationUtils;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useSelectedNoiseSuppressionOption() {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => {
    const noiseSuppression = MediaEngineStore.getNoiseSuppression();
    const noiseCancellation = MediaEngineStore.getNoiseCancellation();
    if (noiseCancellation) {
      obj.getNoiseCancellationDeferredToSystem(MediaEngineStore) ? NoiseSuppressionOpt.NONE : NoiseSuppressionOpt.KRISP;
    } else {
      return noiseSuppression ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE;
    }
    obj = NoiseCancellationUtils;
  });
});