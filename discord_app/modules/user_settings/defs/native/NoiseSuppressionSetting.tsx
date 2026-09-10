// === Module 15337: NoiseSuppressionSetting ===

// Module 15337 (NoiseSuppressionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 10063 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
fn(11540);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.t8Qhib);
  },
  parent: fn(8027).MobileUserSettings.VOICE,
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
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default SettingBuilders;