// discord_app/modules/user_settings/voice/native/UserSettingsVoiceUtils.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ AnalyticsPages: c4, AnalyticsSections: c5 } = ME);
let obj = { NONE: "NONE", STANDARD: "STANDARD", KRISP: "KRISP" };
let result = require("trackDeviceChanged").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceUtils.tsx");

export const handleAutomaticGainControlChange = function handleAutomaticGainControlChange(arg0) {
  let obj = require("../../../../actions/AudioActionCreators.tsx");
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  const result = obj.setAutomaticGainControl(arg0, obj);
};
export const handleEchoCancellationChange = function handleEchoCancellationChange(arg0) {
  let obj = require("../../../../actions/AudioActionCreators.tsx");
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  obj.setEchoCancellation(arg0, obj);
};
export const handleNoiseSuppressionChange = function handleNoiseSuppressionChange(arg0) {
  let KRISP;
  let STANDARD;
  ({ KRISP, STANDARD } = obj);
  obj = require("../../../../actions/AudioActionCreators.tsx");
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  obj.setNoiseCancellation(arg0 === KRISP, obj);
  obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_VOICE_AND_VIDEO };
  require("../../../../actions/AudioActionCreators.tsx").setNoiseSuppression(arg0 === STANDARD, obj);
};
export const NoiseSuppressionOpt = obj;
export const getSelectedNoiseSuppressionOption = function getSelectedNoiseSuppressionOption(_detectH265HardwareDecode) {
  let obj = _detectH265HardwareDecode;
  if (_detectH265HardwareDecode === undefined) {
    obj = _detectH265HardwareDecode;
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
  const items = [_detectH265HardwareDecode];
  return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => {
    const noiseSuppression = store.getNoiseSuppression();
    const noiseCancellation = store.getNoiseCancellation();
    if (noiseCancellation) {
      obj.getNoiseCancellationDeferredToSystem(store) ? tmp3.NONE : tmp3.KRISP;
    } else {
      return noiseSuppression ? tmp3.STANDARD : tmp3.NONE;
    }
  });
};