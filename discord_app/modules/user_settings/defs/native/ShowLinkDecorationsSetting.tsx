// === Module 17714: ShowLinkDecorationsSetting ===

// Module 17714 (ShowLinkDecorationsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16573 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;

require = fn;
function useShowLinkDecorationsSettingValue() {
  items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = AccessibilityActionCreators.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
const SettingBuilders = fn(11685);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OLZFB8);
  },
  parent: fn(8503).MobileUserSettings.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default toggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };