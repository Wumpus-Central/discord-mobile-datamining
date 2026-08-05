// discord_app/modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { setFontSize } from "../../../a11y/AccessibilityActionCreators.tsx";
import { messagesProxy } from "../../../display_name_styles/intl/DisplayNameStyles.messages.js";

const require = arg1;
function useValue() {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  return initialize /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = setFontSize /* setFontSize */.setDisplayNameStylesEnabled(enabled);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy["2gFUEw"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue,
  onValueChange,
  usePredicate() {
    return true;
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default createToggle;
export { useValue };
export { onValueChange };