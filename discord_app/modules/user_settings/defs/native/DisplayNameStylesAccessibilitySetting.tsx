// === Module 14888: useValue ===

// Module 14888 (useValue)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2727 */;
import setFontSize from "setFontSize" /* 13979 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
import createToggle from "createToggle" /* 10584 */;

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