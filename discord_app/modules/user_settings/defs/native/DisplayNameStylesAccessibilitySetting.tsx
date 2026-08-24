// discord_app/modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../display_name_styles/intl/DisplayNameStyles.messages.js";
import setFontSize from "../../../a11y/AccessibilityActionCreators.tsx";
import closure_3 from "../../../a11y/AccessibilityStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
function useValue() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => obj.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = setFontSize.setDisplayNameStylesEnabled(enabled);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["2gFUEw"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default createToggle;
export { useValue };
export { onValueChange };