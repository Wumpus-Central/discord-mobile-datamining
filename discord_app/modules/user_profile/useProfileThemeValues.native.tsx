// discord_app/modules/user_profile/useProfileThemeValues.native.tsx
import _mod19 from "../../../_runtime/metro/00019__.js";
import shims from "../../../discord_common/js/packages/tokens/shims.native.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = function useProfileThemeValues(theme) {
  _require = theme;
  const items = [AccessibilityStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => saturation.saturation);
  const items1 = [theme, stateFromStores];
  return useMemo(() => {
    if (null == closure_0) {
      return null;
    } else {
      let obj = { theme: tmp, saturation: stateFromStores };
      obj = {
        overlaySyncedWithUserTheme: null,
        overlay: null,
        sectionBox: null,
        dividerOpacity: null,
        rolePillBackgroundColor: null,
      };
      const internal3 = nativeDefault.internal;
      obj.overlaySyncedWithUserTheme = internal3.resolveSemanticColor(
        tmp,
        nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME,
        obj,
      );
      const internal4 = nativeDefault.internal;
      obj.overlay = internal4.resolveSemanticColor(tmp, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY, obj);
      if (tmp === obj4.getThemes().LIGHT) {
        let OPACITY_WHITE_24 = tmp3(576).unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = tmp3(576).internal;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(tmp, tmp3(576).colors.BACKGROUND_MOD_SUBTLE, obj);
      }
      obj.sectionBox = OPACITY_WHITE_24;
      obj4 = shims;
      let num = 0.12;
      if (tmp === tmp5Result.getThemes().DARK) {
        num = 0.24;
      }
      obj.dividerOpacity = num;
      const internal2 = tmp3(576).internal;
      obj.rolePillBackgroundColor = internal2.resolveSemanticColor(
        tmp,
        nativeDefault.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND,
        obj,
      );
      return obj;
    }
  }, items1);
};
