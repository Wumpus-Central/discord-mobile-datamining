// === Module 15013: NoiseSuppressionSetting ===

// Module 15013 (NoiseSuppressionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 9644 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;

require = fn;
const SettingBuilders = fn(11215);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.t8Qhib);
  },
  parent: fn(7590).MobileUserSettings.VOICE,
  useValue: function useNoiseSuppressionSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => noiseSuppression.getNoiseSuppression());
  },
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const NoiseSuppressionOpt = UserSettingsVoiceUtils.NoiseSuppressionOpt;
    const result = UserSettingsVoiceUtils.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: function useHasNoiseSuppressionSetting() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default toggle;