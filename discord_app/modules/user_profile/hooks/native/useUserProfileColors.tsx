// discord_app/modules/user_profile/hooks/native/useUserProfileColors.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import useProfileThemeValues from "../../useProfileThemeValues.native.tsx";
import closure_3 from "../../../a11y/AccessibilityStore.tsx";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = function useUserProfileColors(arg0) {
  ({ theme, primaryColor, secondaryColor } = arg0);
  const tmp3 = useThemeDefault();
  let obj = useProfileThemeValues;
  const profileThemeValues = obj.useProfileThemeValues(theme);
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  const tmp7 = useIsMobileVisualRefreshExperimentEnabledDefault("useUserProfileColors");
  obj = { gradientFallbackBackground: null, gradientSecondaryBackground: null, containerBackground: null, containerBorderColor: null, avatarBackground: null, statusBackground: null };
  const obj2 = initialize;
  obj[0] = map.useToken(ThemesDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp3);
  const obj4 = map;
  obj[1] = map.useToken(ThemesDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp3);
  const obj5 = map;
  const colors = ThemesDefault.colors;
  obj[2] = map.useToken(tmp7 ? colors.CARD_MUTED_BG : colors.USER_PROFILE_CONTAINER_BACKGROUND, tmp3);
  let tmp4Result = tmp4(4165);
  obj[3] = tmp4Result.useToken(ThemesDefault.colors.BORDER_MUTED, tmp3);
  tmp4Result = tmp4(4165);
  obj[4] = tmp4Result.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOWER, tmp3);
  const obj6 = map;
  obj[5] = map.useToken(ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, tmp3);
  const tmp4Result1 = map;
  let containerBackground = map.useToken(tmp(712).colors.BACKGROUND_MOD_NORMAL, theme);
  let containerBackground2 = tmp(712).unsafe_rawColors.OPACITY_WHITE_24;
  if (theme === ThemeTypes.LIGHT) {
    if (tmp7) {
      containerBackground2 = obj.containerBackground;
    }
    containerBackground = containerBackground2;
  } else if (tmp7) {
    containerBackground = obj.containerBackground;
  }
  if (null != primaryColor) {
    if (null != secondaryColor) {
      if (null != profileThemeValues) {
        ({ overlay, sectionBox, overlaySyncedWithUserTheme } = profileThemeValues);
        let tmp8 = overlay;
        if (stateFromStores) {
          tmp8 = overlaySyncedWithUserTheme;
        }
        const result = tmp4(8535).calculateOverlayedColor(primaryColor, tmp8);
        obj = {};
        const merged = Object.assign(obj);
        obj.containerBackground = containerBackground;
        const tmp4Result3 = tmp4(8535);
        const tmp4Result4 = tmp4(688);
        obj.gradientSecondaryBackground = tmp4Result4.int2hex(tmp4(8535).calculateOverlayedColor(secondaryColor, overlay));
        const tmp4Result5 = tmp4(8535);
        obj.avatarBackground = tmp4(688).int2hex(result);
        const tmp4Result6 = tmp4(688);
        const tmp4Result7 = tmp4(688);
        obj.statusBackground = tmp4Result7.int2hex(tmp4(8535).calculateOverlayedColor(result, sectionBox));
        return obj;
      }
    }
  }
  return obj;
};