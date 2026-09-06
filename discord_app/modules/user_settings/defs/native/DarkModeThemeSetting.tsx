// === Module 15306: DarkModeThemeSetting ===

// Module 15306 (DarkModeThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 15304 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
const SystemTheme = fn(1186).SystemTheme;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["EgvHH/"]);
  },
  parent: fn(7975).MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    const items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: {
    route: fn(1074).UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceDarkModeThemePickerScreen").default;
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default SettingBuilders;