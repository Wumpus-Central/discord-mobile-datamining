// === Module 15366: LightModeThemeSetting ===

// Module 15366 (LightModeThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 15367 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
const SystemTheme = fn(1186).SystemTheme;
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.NoFvjZ);
  },
  parent: fn(8049).MobileUserSettings.APPEARANCE,
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
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default SettingBuilders;