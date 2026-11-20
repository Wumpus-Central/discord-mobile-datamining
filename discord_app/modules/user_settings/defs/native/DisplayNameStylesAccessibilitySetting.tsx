// === Module 16692: DisplayNameStylesAccessibilitySetting ===

// Module 16692 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import _modDef3149 from "module_3149" /* 3149 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15524 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;

require = fn;
function useValue() {
  items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11817);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3149["2gFUEw"]);
  },
  parent: fn(8592).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };