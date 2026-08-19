// === Module 14717: toggle ===

// Module 14717 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setFontSize from "setFontSize" /* 13813 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import "createToggle";

require = fn;
let createToggle = {
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
    const obj = { animateAvatarDeco };
    return obj.setYouBarAnimations(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/YouBarAvatarDecoAccessibilitySetting.tsx");

export default createToggle;