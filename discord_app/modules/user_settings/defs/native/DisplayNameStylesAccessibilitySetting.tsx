// discord_app/modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
function useValue() {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = require("../../../a11y/AccessibilityActionCreators.tsx") /* setFontSize */.setDisplayNameStylesEnabled(enabled);
}
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../display_name_styles/intl/DisplayNameStyles.messages.js")["2gFUEw"]);
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