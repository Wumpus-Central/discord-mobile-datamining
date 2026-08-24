// === Module 14611: route ===

// Module 14611 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import closure_3 from "handleThemeChange" /* 1302 */;
import createToggle from "createToggle" /* 10669 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Ksh3ik);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    const tmp = useIsMobileVisualRefreshExperimentEnabledDefault("AppearanceThemePickerSetting");
    const items = [closure_3];
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = !obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return tmp2;
  },
  useTrailing: require("useAppearanceSettingTrailing").useAppearanceSettingTrailing,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_THEME_PICKER,
  getComponent() {
    return require(14612) /* ThemeTypes */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default createToggle;