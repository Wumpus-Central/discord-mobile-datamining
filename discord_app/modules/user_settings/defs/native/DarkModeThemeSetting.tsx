// === Module 17927: DarkModeThemeSetting ===

// Module 17927 (DarkModeThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 17925 */;
import ThemeStore from "ThemeStore" /* 1192 */;

require = fn;
const SystemTheme = fn(1195).SystemTheme;
const SettingBuilders = fn(12406);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["EgvHH/"]);
  },
  parent: fn(9202).MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: {
    route: fn(1072).UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceDarkModeThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default route;