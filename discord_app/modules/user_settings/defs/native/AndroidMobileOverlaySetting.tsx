// === Module 15315: AndroidMobileOverlaySetting ===

// Module 15315 (AndroidMobileOverlaySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 10081 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 10070 */;

require = fn;
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9CSZJm"]);
  },
  parent: fn(8049).MobileUserSettings.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [MobileVoiceOverlayStore];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wfoivk);
  },
  usePredicate: fn(10070).isMobileOverlaySupported
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default SettingBuilders;