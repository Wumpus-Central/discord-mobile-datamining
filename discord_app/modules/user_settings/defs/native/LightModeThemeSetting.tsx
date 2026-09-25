// === Module 14824: LightModeThemeSetting ===

// Module 14824 (LightModeThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 14825 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
const SystemTheme = fn(1185).SystemTheme;
const SettingBuilders = fn(10993);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.NoFvjZ);
  },
  parent: fn(7412).MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    const items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: {
    route: fn(1074).UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceLightModeThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default route;