// === Module 5856: useProfileThemeValues ===

// Module 5856 (useProfileThemeValues)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;

const useMemo = noop.useMemo;
const result = set.fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = function useProfileThemeValues(theme) {
  const _require = theme;
  const items = [closure_4];
  const stateFromStores = _require(647).useStateFromStores(items, () => saturation.saturation);
  const tmp2 = stateFromStores(1367)("useProfileThemeValues");
  dependencyMap = tmp2;
  const items1 = [theme, stateFromStores, tmp2];
  return useMemo(() => {
    if (null == theme) {
      return null;
    } else {
      let obj = { theme: null, saturation: null };
      obj[0] = tmp;
      obj[1] = stateFromStores;
      obj = { overlaySyncedWithUserTheme: null, overlay: null, sectionBox: null, dividerOpacity: null, rolePillBackgroundColor: null };
      const internal3 = stateFromStores(712).internal;
      obj[0] = internal3.resolveSemanticColor(tmp, stateFromStores(712).colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj);
      const internal4 = stateFromStores(712).internal;
      obj[1] = internal4.resolveSemanticColor(tmp, stateFromStores(712).colors.PROFILE_GRADIENT_OVERLAY, obj);
      if (tmp === obj4.getThemes().LIGHT) {
        let OPACITY_WHITE_24 = tmp4(712).unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = tmp4(712).internal;
        const colors = tmp4(712).colors;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(tmp, dependencyMap ? colors.BACKGROUND_MOD_SUBTLE : colors.BACKGROUND_MOD_NORMAL, obj);
      }
      obj[2] = OPACITY_WHITE_24;
      obj4 = theme(711);
      const tmp6 = theme;
      let num = 0.12;
      if (tmp === tmp6Result.getThemes().DARK) {
        num = 0.24;
      }
      obj[3] = num;
      const internal2 = tmp4(712).internal;
      obj[4] = internal2.resolveSemanticColor(tmp, stateFromStores(712).colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj);
      return obj;
    }
  }, items1);
};