// === Module 15005: AndroidMobileOverlaySetting ===

// Module 15005 (AndroidMobileOverlaySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 9648 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 9636 */;

require = fn;
const SettingBuilders = fn(11211);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9CSZJm"]);
  },
  parent: fn(7612).MobileUserSettings.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [MobileVoiceOverlayStore];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wfoivk);
  },
  usePredicate: fn(9636).isMobileOverlaySupported
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default toggle;