// === Module 10014: handleAutomaticGainControlChange ===

// Module 10014 (handleAutomaticGainControlChange)
import initialize from "initialize" /* 589 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9720 */;
import closure_3 from "_detectH265HardwareDecode" /* 4497 */;
import ME from "ME" /* 676 */;

require = arg1;
({ AnalyticsPages: c4, AnalyticsSections: c5 } = ME);
let obj = { NONE: "NONE", STANDARD: "STANDARD", KRISP: "KRISP" };
let result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceUtils.tsx");

export const handleAutomaticGainControlChange = function handleAutomaticGainControlChange(arg0) {
  obj = trackDeviceChangedDefault;
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  const result = obj.setAutomaticGainControl(arg0, obj);
};
export const handleEchoCancellationChange = function handleEchoCancellationChange(arg0) {
  obj = trackDeviceChangedDefault;
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  obj.setEchoCancellation(arg0, obj);
};
export const handleNoiseSuppressionChange = function handleNoiseSuppressionChange(arg0) {
  ({ KRISP, STANDARD } = obj);
  obj = trackDeviceChangedDefault;
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  obj.setNoiseCancellation(arg0 === KRISP, obj);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  trackDeviceChangedDefault.setNoiseSuppression(arg0 === STANDARD, obj);
};
export const NoiseSuppressionOpt = obj;
export const getSelectedNoiseSuppressionOption = function getSelectedNoiseSuppressionOption(closure_3) {
  obj = closure_3;
  if (closure_3 === undefined) {
    obj = closure_3;
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
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => {
    const noiseSuppression = store.getNoiseSuppression();
    const noiseCancellation = store.getNoiseCancellation();
    if (noiseCancellation) {
      obj.getNoiseCancellationDeferredToSystem(store) ? tmp3.NONE : tmp3.KRISP;
    } else {
      return noiseSuppression ? tmp3.STANDARD : tmp3.NONE;
    }
  });
};