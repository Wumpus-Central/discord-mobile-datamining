// discord_app/modules/user_settings/defs/native/DarkModeThemeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import useSyncedModeThemeName from "useSyncedModeThemeName.tsx";
import ThemeStore from "../../ThemeStore.tsx";

require = fn;
const SystemTheme = fn(1194).SystemTheme;
const SettingBuilders = fn(11914);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["EgvHH/"]);
  },
  parent: fn(9513).MobileUserSettings.APPEARANCE,
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
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default route;
