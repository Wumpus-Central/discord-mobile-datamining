// === Module 16814: AndroidMobileOverlaySetting ===

// Module 16814 (AndroidMobileOverlaySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 10370 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 10347 */;

require = fn;
const SettingBuilders = fn(11914);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9CSZJm"]);
  },
  parent: fn(9513).MobileUserSettings.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    items = [MobileVoiceOverlayStore];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wfoivk);
  },
  usePredicate: fn(10347).isMobileOverlaySupported
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default toggle;