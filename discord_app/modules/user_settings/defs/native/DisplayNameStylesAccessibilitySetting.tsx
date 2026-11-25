// === Module 16970: DisplayNameStylesAccessibilitySetting ===

// Module 16970 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import _modDef3302 from "module_3302" /* 3302 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15789 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;

require = fn;
function useValue() {
  items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11914);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3302["2gFUEw"]);
  },
  parent: fn(9513).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };