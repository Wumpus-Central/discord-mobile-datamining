// === Module 16759: DisplayNameStylesAccessibilitySetting ===

// Module 16759 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import _modDef2928 from "module_2928" /* 2928 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15682 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;

require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useValue() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return AccessibilityStore.displayNameStylesEnabled;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
});
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11205);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2928["2gFUEw"]);
  },
  parent: fn(8332).MobileUserSettings.ACCESSIBILITY,
  useValue: tmp2,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export const useValue = tmp2;
export { onValueChange };