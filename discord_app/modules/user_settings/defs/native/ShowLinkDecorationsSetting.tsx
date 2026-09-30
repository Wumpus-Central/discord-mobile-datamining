// === Module 15165: ShowLinkDecorationsSetting ===

// Module 15165 (ShowLinkDecorationsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14199 */;
import AccessibilityStore from "AccessibilityStore" /* 4855 */;

require = fn;
function useShowLinkDecorationsSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = AccessibilityActionCreators.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
const SettingBuilders = fn(11211);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OLZFB8);
  },
  parent: fn(7612).MobileUserSettings.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default toggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };