// discord_app/modules/user_settings/defs/native/SyncProfileColorsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useProfileColorsSettingValue() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function o() {
          return AccessibilityStore.syncProfileThemeWithUserTheme;
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
  : function useProfileColorsSettingValue() {
      const items = [AccessibilityStore];
      return initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sSY+mD"]);
  },
  parent: fn(7974).MobileUserSettings.ACCESSIBILITY,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useProfileColorsSettingValue() {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          const fn = function o() {
            return AccessibilityStore.syncProfileThemeWithUserTheme;
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
    : function useProfileColorsSettingValue() {
        const items = [AccessibilityStore];
        return initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
      },
  onValueChange: fn(14616).toggleSyncProfileThemeWithUserTheme,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default toggle;
