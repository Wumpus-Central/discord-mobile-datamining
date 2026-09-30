// === Module 15162: DisplayNameStylesAccessibilitySetting ===

// Module 15162 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import _modDef2877 from "module_2877" /* 2877 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14199 */;
import AccessibilityStore from "AccessibilityStore" /* 4855 */;

require = fn;
function useValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11211);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2877["2gFUEw"]);
  },
  parent: fn(7612).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };