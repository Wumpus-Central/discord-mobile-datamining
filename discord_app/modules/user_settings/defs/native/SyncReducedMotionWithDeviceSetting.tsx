// === Module 15416: SyncReducedMotionWithDeviceSetting ===

// Module 15416 (SyncReducedMotionWithDeviceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14437 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["St+DJK"]);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSyncSettingValue() {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => "auto" === AccessibilityStore.rawPrefersReducedMotion);
  },
  onValueChange: function onReducedMotionSyncSettingValueChange(arg0) {
    let str = "auto";
    if (!arg0) {
      str = AccessibilityStore.systemPrefersReducedMotion;
    }
    const result = AccessibilityActionCreators.setPrefersReducedMotion(str);
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx");

export default SettingBuilders;