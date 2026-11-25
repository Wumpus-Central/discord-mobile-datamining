// === Module 16980: SyncReducedMotionWithDeviceSetting ===

// Module 16980 (SyncReducedMotionWithDeviceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15789 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;

require = fn;
const SettingBuilders = fn(11914);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["St+DJK"]);
  },
  parent: fn(9513).MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSyncSettingValue() {
    items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => "auto" === AccessibilityStore.rawPrefersReducedMotion);
  },
  onValueChange: function onReducedMotionSyncSettingValueChange(arg0) {
    let str = "auto";
    if (!arg0) {
      str = AccessibilityStore.systemPrefersReducedMotion;
    }
    const result = AccessibilityActionCreators.setPrefersReducedMotion(str);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx");

export default toggle;