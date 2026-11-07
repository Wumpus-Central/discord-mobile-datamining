// === Module 17555: AndroidMobileOverlaySetting ===

// Module 17555 (AndroidMobileOverlaySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 12120 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 12107 */;

require = fn;
const SettingBuilders = fn(11685);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9CSZJm"]);
  },
  parent: fn(8503).MobileUserSettings.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    items = [MobileVoiceOverlayStore];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wfoivk);
  },
  usePredicate: fn(12107).isMobileOverlaySupported
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default toggle;