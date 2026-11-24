// === Module 16747: DarkModeThemeSetting ===

// Module 16747 (DarkModeThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 16745 */;
import ThemeStore from "ThemeStore" /* 1191 */;

require = fn;
const SystemTheme = fn(1194).SystemTheme;
const SettingBuilders = fn(11815);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["EgvHH/"]);
  },
  parent: fn(9414).MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: {
    route: fn(1071).UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceDarkModeThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default route;