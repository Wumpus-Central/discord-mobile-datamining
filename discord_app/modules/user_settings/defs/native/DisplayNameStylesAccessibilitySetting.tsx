// === Module 16815: DisplayNameStylesAccessibilitySetting ===

// Module 16815 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import _modDef3248 from "module_3248" /* 3248 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15647 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;

require = fn;
function useValue() {
  items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11937);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3248["2gFUEw"]);
  },
  parent: fn(8712).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };