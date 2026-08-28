// === Module 14941: toggle ===

// Module 14941 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setFontSize from "setFontSize" /* 14025 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;
import createToggle from "createToggle" /* 11006 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["34XN2f"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => obj.animateYouBarAvatarDeco);
  },
  onValueChange(animateAvatarDeco) {
    let obj = setFontSize;
    obj = { animateAvatarDeco };
    return obj.setYouBarAnimations(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/YouBarAvatarDecoAccessibilitySetting.tsx");

export default createToggle;