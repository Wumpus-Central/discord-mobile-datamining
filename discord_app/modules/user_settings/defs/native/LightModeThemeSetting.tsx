// === Module 15400: LightModeThemeSetting ===

// Module 15400 (LightModeThemeSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 15401 */;
import ThemeStore from "ThemeStore" /* 1205 */;

require = fn;
const SystemTheme = fn(1208).SystemTheme;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11262);
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
    return intl.string(util.t.NoFvjZ);
  },
  parent: fn(7966).MobileUserSettings.APPEARANCE,
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
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: {
    route: fn(1085).UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceLightModeThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default route;