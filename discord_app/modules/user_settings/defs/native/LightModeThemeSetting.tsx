// === Module 16710: LightModeThemeSetting ===

// Module 16710 (LightModeThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 16711 */;
import ThemeStore from "ThemeStore" /* 1191 */;

require = fn;
const SystemTheme = fn(1194).SystemTheme;
const SettingBuilders = fn(11937);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.NoFvjZ);
  },
  parent: fn(8712).MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: {
    route: fn(1071).UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceLightModeThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default route;