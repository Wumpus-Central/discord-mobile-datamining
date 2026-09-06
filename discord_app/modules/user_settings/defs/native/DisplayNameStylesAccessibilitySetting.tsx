// === Module 15407: DisplayNameStylesAccessibilitySetting ===

// Module 15407 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import _modDef2786 from "module_2786" /* 2786 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14437 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
function useValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2786["2gFUEw"]);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default SettingBuilders;
export { useValue };
export { onValueChange };