// === Module 14724: toggle ===

// Module 14724 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setFontSize from "setFontSize" /* 13813 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["St+DJK"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSyncSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => "auto" === obj.rawPrefersReducedMotion);
  },
  onValueChange: function onReducedMotionSyncSettingValueChange(arg0) {
    const obj = setFontSize;
    let str = "auto";
    if (!arg0) {
      str = obj.systemPrefersReducedMotion;
    }
    const result = obj.setPrefersReducedMotion(str);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx");

export default createToggle;