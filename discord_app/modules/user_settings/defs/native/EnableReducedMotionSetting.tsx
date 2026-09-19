// === Module 15682: EnableReducedMotionSetting ===

// Module 15682 (EnableReducedMotionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14711 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

require = fn;
const SettingBuilders = fn(11723);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.e3TR1b);
  },
  parent: fn(8232).MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSettingValue() {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  },
  onValueChange: function onReducedMotionSettingValueChange(arg0) {
    let str = "no-preference";
    if (arg0) {
      str = "reduce";
    }
    const result = AccessibilityActionCreators.setPrefersReducedMotion(str);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableReducedMotionSetting.tsx");

export default toggle;