// === Module 17643: EnableReducedMotionSetting ===

// Module 17643 (EnableReducedMotionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16502 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

require = fn;
const SettingBuilders = fn(11728);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.e3TR1b);
  },
  parent: fn(8573).MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSettingValue() {
    items = [AccessibilityStore];
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