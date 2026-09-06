// discord_app/modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import AccessibilityActionCreators from "../../../a11y/AccessibilityActionCreators.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function useShowLinkDecorationsSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = AccessibilityActionCreators.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OLZFB8);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default SettingBuilders;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };
