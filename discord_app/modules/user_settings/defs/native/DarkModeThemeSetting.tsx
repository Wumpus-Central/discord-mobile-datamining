// === Module 16366: DarkModeThemeSetting ===

// Module 16366 (DarkModeThemeSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 16364 */;
import ThemeStore from "ThemeStore" /* 1207 */;

require = fn;
const SystemTheme = fn(1210).SystemTheme;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11084);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSyncedModePickerVisible() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function n() {
      return sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useSyncedModePickerVisible() {
  const items = [ThemeStore];
  return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["EgvHH/"]);
  },
  parent: fn(8260).MobileUserSettings.APPEARANCE,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function useSyncedModePickerVisible() {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ThemeStore];
      const fn = function n() {
        return sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (function useSyncedModePickerVisible() {
    const items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  }),
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: {
    route: fn(1087).UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceDarkModeThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default route;