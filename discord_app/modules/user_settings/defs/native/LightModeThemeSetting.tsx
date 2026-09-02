// === Module 15128: route ===

// Module 15128 (route)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 15129 */;
import closure_2 from "handleThemeChange" /* 1301 */;
import { SystemTheme } from "SystemThemeState" /* 1304 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.NoFvjZ);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
  getComponent() {
    return require(15130) /* SettingsAppearanceLightModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default createToggle;