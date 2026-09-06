// discord_app/modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2786 from "../../../display_name_styles/intl/DisplayNameStyles.messages.js";
import AccessibilityActionCreators from "../../../a11y/AccessibilityActionCreators.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

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
  onValueChange,
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default SettingBuilders;
export { useValue };
export { onValueChange };
