// discord_app/modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import ThemeStore from "../../ThemeStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ThemeStore];
        const fn = function s() {
          return sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return !initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [ThemeStore];
      return !initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    };
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Ksh3ik);
  },
  parent: fn(7634).MobileUserSettings.APPEARANCE,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ThemeStore];
          const fn = function s() {
            return sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        return !initialize.useStateFromStores(tmp4, tmp5);
      }
    : () => {
        const items = [ThemeStore];
        return !initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
      },
  useTrailing: fn(15079).useAppearanceSettingTrailing,
  screen: {
    route: fn(1085).UserSettingsSections.APPEARANCE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceThemePickerScreen").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default route;
