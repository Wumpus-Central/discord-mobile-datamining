// === Module 15496: EnableReducedMotionSetting ===

// Module 15496 (EnableReducedMotionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14514 */;
import AccessibilityStore from "AccessibilityStore" /* 4597 */;

require = fn;
fn(11540);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.e3TR1b);
  },
  parent: fn(8027).MobileUserSettings.ACCESSIBILITY,
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
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableReducedMotionSetting.tsx");

export default SettingBuilders;