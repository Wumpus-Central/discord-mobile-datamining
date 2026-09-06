// === Module 9993: UserSettingsVoiceUtils ===

// Module 9993 (UserSettingsVoiceUtils)
import initialize from "initialize" /* 504 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const Constants = fn(1074);
({ AnalyticsPages: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const NoiseSuppressionOpt = { NONE: "NONE", STANDARD: "STANDARD", KRISP: "KRISP" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceUtils.tsx");

export const handleAutomaticGainControlChange = function handleAutomaticGainControlChange(arg0) {
  const obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  const result = obj.setAutomaticGainControl(arg0, obj);
};
export const handleEchoCancellationChange = function handleEchoCancellationChange(arg0) {
  const obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  obj.setEchoCancellation(arg0, obj);
};
export const handleNoiseSuppressionChange = function handleNoiseSuppressionChange(arg0) {
  ({ KRISP, STANDARD } = obj);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  obj.setNoiseCancellation(arg0 === KRISP, obj);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  AudioActionCreatorsDefault.setNoiseSuppression(arg0 === STANDARD, obj);
};
export { NoiseSuppressionOpt };
export const getSelectedNoiseSuppressionOption = function getSelectedNoiseSuppressionOption(MediaEngineStore) {
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
      obj.getNoiseCancellationDeferredToSystem(MediaEngineStore) ? tmp3.NONE : tmp3.KRISP;
    } else {
      return noiseSuppression ? tmp3.STANDARD : tmp3.NONE;
    }
  });
};