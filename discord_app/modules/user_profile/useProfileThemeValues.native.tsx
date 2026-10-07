// === Module 6690: useProfileThemeValues ===

// Module 6690 (useProfileThemeValues)
import _mod19 from "module_19" /* 19 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import shims from "shims" /* 586 */;
import nativeDefault from "native" /* 587 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = ReactCompilerGating.isReactCompilerEnabled() ? ((theme) => {
  const cResult = c.c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return saturation.saturation;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
  if (null == theme) {
    return null;
  } else {
    if (cResult[2] === theme) {
      if (cResult[3] === stateFromStores) {
        let tmp8 = cResult[4];
        let tmp9 = cResult[5];
        let tmp10 = cResult[6];
        let tmp11 = cResult[7];
        let tmp12 = cResult[8];
      }
      if (cResult[9] === tmp8) {
        if (cResult[10] === tmp9) {
          if (cResult[11] === tmp10) {
            if (cResult[12] === tmp11) {
            }
          }
        }
      }
      const obj2 = { overlaySyncedWithUserTheme: tmp8, overlay: tmp9, sectionBox: tmp10, dividerOpacity: tmp11, rolePillBackgroundColor: tmp12 };
      cResult[9] = tmp8;
      cResult[10] = tmp9;
      cResult[11] = tmp10;
      cResult[12] = tmp11;
      cResult[13] = tmp12;
      cResult[14] = obj2;
    }
    const obj3 = { theme, saturation: stateFromStores };
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj3);
    const internal2 = nativeDefault.internal;
    const semanticColor1 = internal2.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY, obj3);
    if (theme === tmpResult3.getThemes().LIGHT) {
      let OPACITY_WHITE_24 = nativeDefault.unsafe_rawColors.OPACITY_WHITE_24;
    } else {
      const internal3 = nativeDefault.internal;
      OPACITY_WHITE_24 = internal3.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_MOD_SUBTLE, obj3);
    }
    tmpResult3 = shims;
    let num3 = 0.12;
    if (theme === tmpResult4.getThemes().DARK) {
      num3 = 0.24;
    }
    const internal4 = nativeDefault.internal;
    const semanticColor2 = internal4.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj3);
    cResult[2] = theme;
    cResult[3] = stateFromStores;
    cResult[4] = semanticColor;
    cResult[5] = semanticColor1;
    cResult[6] = OPACITY_WHITE_24;
    cResult[7] = num3;
    cResult[8] = semanticColor2;
    tmp11 = num3;
    tmp12 = semanticColor2;
    tmp10 = OPACITY_WHITE_24;
    tmp9 = semanticColor1;
    tmp8 = semanticColor;
    tmpResult4 = shims;
  }
  const tmpResult = useStateFromStores;
}) : ((theme) => {
  _require = theme;
  const items = [AccessibilityStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => saturation.saturation);
  const items1 = [theme, stateFromStores];
  return useMemo(() => {
    if (null == theme) {
      return null;
    } else {
      const obj = { theme, saturation: stateFromStores };
      const obj2 = { overlaySyncedWithUserTheme: null, overlay: null, sectionBox: null, dividerOpacity: null, rolePillBackgroundColor: null };
      const internal3 = nativeDefault.internal;
      obj2.overlaySyncedWithUserTheme = internal3.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj);
      const internal4 = nativeDefault.internal;
      obj2.overlay = internal4.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY, obj);
      if (theme === obj4.getThemes().LIGHT) {
        let OPACITY_WHITE_24 = nativeDefault.unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = nativeDefault.internal;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_MOD_SUBTLE, obj);
      }
      obj2.sectionBox = OPACITY_WHITE_24;
      obj4 = shims;
      let num = 0.12;
      if (theme === tmp5Result.getThemes().DARK) {
        num = 0.24;
      }
      obj2.dividerOpacity = num;
      const internal2 = nativeDefault.internal;
      obj2.rolePillBackgroundColor = internal2.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj);
      return obj2;
    }
  }, items1);
});