// === Module 15683: SyncReducedMotionWithDeviceSetting ===

// Module 15683 (SyncReducedMotionWithDeviceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14711 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

require = fn;
const SettingBuilders = fn(11723);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["St+DJK"]);
  },
  parent: fn(8232).MobileUserSettings.ACCESSIBILITY,
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx");

export default toggle;