// === Module 10250: UserSettingsVoiceUtils ===

// Module 10250 (UserSettingsVoiceUtils)
import initialize from "initialize" /* 504 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9911 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 10251 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const Constants = fn(1074);
({ AnalyticsPages: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const NoiseSuppressionOpt = { NONE: "NONE", STANDARD: "STANDARD", KRISP: "KRISP" };
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
export const getSelectedNoiseSuppressionOption = function getSelectedNoiseSuppressionOption() {
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
};
export const useSelectedNoiseSuppressionOption = function useSelectedNoiseSuppressionOption() {
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
};