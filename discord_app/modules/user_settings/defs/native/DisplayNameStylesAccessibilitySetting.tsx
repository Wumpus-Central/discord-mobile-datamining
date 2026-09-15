// discord_app/modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2787 from "../../../display_name_styles/intl/DisplayNameStyles.messages.js";
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
const SettingBuilders = fn(11606);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2787["2gFUEw"]);
  },
  parent: fn(8082).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };
