// === Module 15090: route ===

// Module 15090 (route)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "handleThemeChange" /* 1301 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Ksh3ik);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    const items = [closure_2];
    return !initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing: require("useAppearanceSettingTrailing").useAppearanceSettingTrailing,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_THEME_PICKER,
  getComponent() {
    return require(15091) /* ThemeTypes */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default createToggle;