// === Module 15473: ShowLinkDecorationsSetting ===

// Module 15473 (ShowLinkDecorationsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14490 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;

require = fn;
function useShowLinkDecorationsSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = AccessibilityActionCreators.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OLZFB8);
  },
  parent: fn(8049).MobileUserSettings.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default SettingBuilders;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };