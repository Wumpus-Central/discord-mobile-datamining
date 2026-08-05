// discord_app/modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";

const require = arg1;
function useShowLinkDecorationsSettingValue() {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => obj.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = require("../../../a11y/AccessibilityActionCreators.tsx") /* setFontSize */.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.OLZFB8);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default createToggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };