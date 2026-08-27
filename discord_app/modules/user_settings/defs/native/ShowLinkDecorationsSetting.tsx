// === Module 14956: useShowLinkDecorationsSettingValue ===

// Module 14956 (useShowLinkDecorationsSettingValue)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setFontSize from "setFontSize" /* 14006 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import createToggle from "createToggle" /* 10988 */;

require = arg1;
function useShowLinkDecorationsSettingValue() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => obj.alwaysShowLinkDecorations);
}
function onShowLinkDecorationsValueChange(alwaysShowLinkDecorations) {
  const result = setFontSize.setAlwaysShowLinkDecorations(alwaysShowLinkDecorations);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OLZFB8);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: useShowLinkDecorationsSettingValue,
  onValueChange: onShowLinkDecorationsValueChange
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ShowLinkDecorationsSetting.tsx");

export default createToggle;
export { useShowLinkDecorationsSettingValue };
export { onShowLinkDecorationsValueChange };