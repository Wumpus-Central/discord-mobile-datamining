// discord_app/modules/user_settings/defs/native/DarkModeThemeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import useSyncedModeThemeName from "useSyncedModeThemeName.tsx";
import ThemeStore from "../../ThemeStore.tsx";

require = fn;
const SystemTheme = fn(1208).SystemTheme;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10663);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSyncedModePickerVisible() {
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
    }
  : function useSyncedModePickerVisible() {
      const items = [ThemeStore];
      return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    };
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["EgvHH/"]);
  },
  parent: fn(7992).MobileUserSettings.APPEARANCE,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? function useSyncedModePickerVisible() {
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
      }
    : function useSyncedModePickerVisible() {
        const items = [ThemeStore];
        return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
      },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: {
    route: fn(1085).UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceDarkModeThemePickerScreen").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default route;
