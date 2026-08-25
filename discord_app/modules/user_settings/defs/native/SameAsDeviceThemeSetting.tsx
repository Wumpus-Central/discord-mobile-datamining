// === Module 14746: toggle ===

// Module 14746 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import handleSaveTheme from "handleSaveTheme" /* 14626 */;
import closure_3 from "handleThemeChange" /* 1302 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.c445ix);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate() {
    return useIsMobileVisualRefreshExperimentEnabledDefault("SameAsDeviceThemeSetting");
  },
  useValue: function useSameAsDeviceThemeValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  onValueChange: function onSameAsDeviceThemeValueChange(arg0) {
    const obj = handleSaveTheme;
    if (arg0) {
      const result = obj.enableSameAsDeviceTheme();
    } else {
      const result1 = obj.disableSameAsDeviceTheme();
    }
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+tBsvs"]);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx");

export default createToggle;