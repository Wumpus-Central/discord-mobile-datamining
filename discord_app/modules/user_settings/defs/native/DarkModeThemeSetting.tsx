// === Module 14835: route ===

// Module 14835 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 14833 */;
import closure_3 from "handleThemeChange" /* 1302 */;
import { SystemTheme } from "SystemThemeState" /* 1305 */;
import createToggle from "createToggle" /* 11006 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["EgvHH/"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    let stateFromStores = useIsMobileVisualRefreshExperimentEnabledDefault("DarkModeThemeSetting");
    const items = [closure_3];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
  getComponent() {
    return require(14836) /* SettingsAppearanceDarkModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default createToggle;