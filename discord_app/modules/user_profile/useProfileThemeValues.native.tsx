// === Module 5983: useProfileThemeValues ===

// Module 5983 (useProfileThemeValues)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;

const useMemo = noop.useMemo;
const result = set.fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = function useProfileThemeValues(theme) {
  const _require = theme;
  const items = [closure_4];
  const stateFromStores = _require(644).useStateFromStores(items, () => saturation.saturation);
  const items1 = [theme, stateFromStores];
  return useMemo(() => {
    if (null == theme) {
      return null;
    } else {
      let obj = { theme: null, saturation: null };
      obj[0] = tmp;
      obj[1] = stateFromStores;
      obj = { overlaySyncedWithUserTheme: null, overlay: null, sectionBox: null, dividerOpacity: null, rolePillBackgroundColor: null };
      const internal3 = stateFromStores(closure_1_2[3]).internal;
      obj[0] = internal3.resolveSemanticColor(tmp, stateFromStores(closure_1_2[3]).colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj);
      const internal4 = stateFromStores(closure_1_2[3]).internal;
      obj[1] = internal4.resolveSemanticColor(tmp, stateFromStores(closure_1_2[3]).colors.PROFILE_GRADIENT_OVERLAY, obj);
      if (tmp === obj4.getThemes().LIGHT) {
        let OPACITY_WHITE_24 = tmp3(tmp4[3]).unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = tmp3(tmp4[3]).internal;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(tmp, tmp3(tmp4[3]).colors.BACKGROUND_MOD_SUBTLE, obj);
      }
      obj[2] = OPACITY_WHITE_24;
      obj4 = theme(closure_1_2[4]);
      const tmp5 = theme;
      let num = 0.12;
      if (tmp === tmp5Result.getThemes().DARK) {
        num = 0.24;
      }
      obj[3] = num;
      const internal2 = tmp3(tmp4[3]).internal;
      obj[4] = internal2.resolveSemanticColor(tmp, stateFromStores(closure_1_2[3]).colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj);
      return obj;
    }
  }, items1);
};