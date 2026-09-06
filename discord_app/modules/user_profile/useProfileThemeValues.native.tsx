// === Module 7184: useProfileThemeValues ===

// Module 7184 (useProfileThemeValues)
import _mod19 from "module_19" /* 19 */;
import shims from "shims" /* 575 */;
import nativeDefault from "native" /* 576 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = function useProfileThemeValues(theme) {
  _require = theme;
  const items = [AccessibilityStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => saturation.saturation);
  const items1 = [theme, stateFromStores];
  return useMemo(() => {
    if (null == theme) {
      return null;
    } else {
      let obj = { theme, saturation: stateFromStores };
      obj = { overlaySyncedWithUserTheme: null, overlay: null, sectionBox: null, dividerOpacity: null, rolePillBackgroundColor: null };
      const internal3 = nativeDefault.internal;
      obj.overlaySyncedWithUserTheme = internal3.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj);
      const internal4 = nativeDefault.internal;
      obj.overlay = internal4.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY, obj);
      if (theme === obj4.getThemes().LIGHT) {
        let OPACITY_WHITE_24 = nativeDefault.unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = nativeDefault.internal;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_MOD_SUBTLE, obj);
      }
      obj.sectionBox = OPACITY_WHITE_24;
      obj4 = shims;
      let num = 0.12;
      if (theme === tmp5Result.getThemes().DARK) {
        num = 0.24;
      }
      obj.dividerOpacity = num;
      const internal2 = nativeDefault.internal;
      obj.rolePillBackgroundColor = internal2.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj);
      return obj;
    }
  }, items1);
};