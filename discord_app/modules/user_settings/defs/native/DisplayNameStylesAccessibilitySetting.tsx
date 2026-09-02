// === Module 15234: useValue ===

// Module 15234 (useValue)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2758 */;
import setFontSize from "setFontSize" /* 14315 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import createToggle from "createToggle" /* 11288 */;

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