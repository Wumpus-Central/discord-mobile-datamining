// === Module 17542: LightModeThemeSetting ===

// Module 17542 (LightModeThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 17543 */;
import ThemeStore from "ThemeStore" /* 1192 */;

require = fn;
const SystemTheme = fn(1195).SystemTheme;
const SettingBuilders = fn(11729);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.NoFvjZ);
  },
  parent: fn(8573).MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: {
    route: fn(1072).UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceLightModeThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default route;