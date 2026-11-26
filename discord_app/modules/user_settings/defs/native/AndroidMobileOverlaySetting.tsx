// === Module 16865: AndroidMobileOverlaySetting ===

// Module 16865 (AndroidMobileOverlaySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 10415 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 10389 */;

require = fn;
const SettingBuilders = fn(11962);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9CSZJm"]);
  },
  parent: fn(9555).MobileUserSettings.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    items = [MobileVoiceOverlayStore];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wfoivk);
  },
  usePredicate: fn(10389).isMobileOverlaySupported
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default toggle;