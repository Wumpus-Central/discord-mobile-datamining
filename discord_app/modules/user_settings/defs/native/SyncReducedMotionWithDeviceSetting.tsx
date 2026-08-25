// === Module 14818: toggle ===

// Module 14818 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setFontSize from "setFontSize" /* 13906 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
createToggle = {
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
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx");

export default createToggle;