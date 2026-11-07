// === Module 17711: DisplayNameStylesAccessibilitySetting ===

// Module 17711 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import _modDef3056 from "module_3056" /* 3056 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16573 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;

require = fn;
function useValue() {
  items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11685);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3056["2gFUEw"]);
  },
  parent: fn(8503).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };