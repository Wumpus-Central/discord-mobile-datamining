// === Module 15524: DisplayNameStylesAccessibilitySetting ===

// Module 15524 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import _modDef2787 from "module_2787" /* 2787 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14561 */;
import AccessibilityStore from "AccessibilityStore" /* 4632 */;

require = fn;
function useValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11622);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2787["2gFUEw"]);
  },
  parent: fn(8111).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };