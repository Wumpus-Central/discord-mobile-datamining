import { useMemo } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = function useProfileThemeValues(theme) {
  const _require = theme;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = _require(647).useStateFromStores(items, () => saturation.saturation);
  const tmp2 = stateFromStores(1348)("useProfileThemeValues");
  const dependencyMap = tmp2;
  const items1 = [theme, stateFromStores, tmp2];
  return useMemo(() => {
    if (null == theme) {
      return null;
    } else {
      let obj = { theme: null, saturation: null };
      obj[0] = tmp;
      obj[1] = stateFromStores;
      obj = { overlaySyncedWithUserTheme: null, overlay: null, sectionBox: null, dividerOpacity: null, rolePillBackgroundColor: null };
      const internal3 = stateFromStores(tmp2[4]).internal;
      obj[0] = internal3.resolveSemanticColor(tmp, stateFromStores(tmp2[4]).colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj);
      const internal4 = stateFromStores(tmp2[4]).internal;
      obj[1] = internal4.resolveSemanticColor(tmp, stateFromStores(tmp2[4]).colors.PROFILE_GRADIENT_OVERLAY, obj);
      if (tmp === obj4.getThemes().LIGHT) {
        let OPACITY_WHITE_24 = tmp4(tmp5[4]).unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = tmp4(tmp5[4]).internal;
        const colors = tmp4(tmp5[4]).colors;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(tmp, tmp2 ? colors.BACKGROUND_MOD_SUBTLE : colors.BACKGROUND_MOD_NORMAL, obj);
      }
      obj[2] = OPACITY_WHITE_24;
      obj4 = theme(tmp2[5]);
      const tmp6 = theme;
      let num = 0.12;
      if (tmp === tmp6Result.getThemes().DARK) {
        num = 0.24;
      }
      obj[3] = num;
      const internal2 = tmp4(tmp5[4]).internal;
      obj[4] = internal2.resolveSemanticColor(tmp, stateFromStores(tmp2[4]).colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj);
      return obj;
    }
  }, items1);
};