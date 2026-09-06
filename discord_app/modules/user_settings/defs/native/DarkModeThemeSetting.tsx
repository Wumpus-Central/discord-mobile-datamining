// discord_app/modules/user_settings/defs/native/DarkModeThemeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import useSyncedModeThemeName from "useSyncedModeThemeName.tsx";
import ThemeStore from "../../ThemeStore.tsx";

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
    },
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default SettingBuilders;
