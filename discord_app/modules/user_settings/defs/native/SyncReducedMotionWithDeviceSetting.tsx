// === Module 15234: SyncReducedMotionWithDeviceSetting ===

// Module 15234 (SyncReducedMotionWithDeviceSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14275 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return "auto" === AccessibilityStore.rawPrefersReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => "auto" === AccessibilityStore.rawPrefersReducedMotion);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["St+DJK"]);
  },
  parent: fn(7634).MobileUserSettings.ACCESSIBILITY,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function o() {
        return "auto" === AccessibilityStore.rawPrefersReducedMotion;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => "auto" === AccessibilityStore.rawPrefersReducedMotion);
  }),
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