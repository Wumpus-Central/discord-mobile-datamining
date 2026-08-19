// === Module 8979: useUserProfileColors ===

// Module 8979 (useUserProfileColors)
import initialize from "initialize" /* 589 */;
import int2hslRaw from "int2hslRaw" /* 688 */;
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import map from "map" /* 4097 */;
import useThemeDefault from "useTheme" /* 4310 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7161 */;
import getProfileTheme from "getProfileTheme" /* 8422 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { ThemeTypes } from "sum" /* 505 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = function useUserProfileColors(arg0) {
  ({ theme, primaryColor, secondaryColor } = arg0);
  const tmp3 = useThemeDefault();
  let obj = useProfileThemeValues;
  const profileThemeValues = obj.useProfileThemeValues(theme);
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  const tmp7 = useIsMobileVisualRefreshExperimentEnabledDefault("useUserProfileColors");
  obj = { gradientFallbackBackground: null, gradientSecondaryBackground: null, containerBackground: null, containerBorderColor: null, avatarBackground: null, statusBackground: null };
  obj[0] = map.useToken(ThemesDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp3);
  obj[1] = map.useToken(ThemesDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp3);
  const colors = ThemesDefault.colors;
  obj[2] = map.useToken(tmp7 ? colors.CARD_MUTED_BG : colors.USER_PROFILE_CONTAINER_BACKGROUND, tmp3);
  let tmp4Result = map;
  obj[3] = tmp4Result.useToken(ThemesDefault.colors.BORDER_MUTED, tmp3);
  tmp4Result = map;
  obj[4] = tmp4Result.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOWER, tmp3);
  obj[5] = map.useToken(ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, tmp3);
  const tmp4Result1 = map;
  let containerBackground = map.useToken(ThemesDefault.colors.BACKGROUND_MOD_NORMAL, theme);
  let containerBackground2 = ThemesDefault.unsafe_rawColors.OPACITY_WHITE_24;
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
        const result = getProfileTheme.calculateOverlayedColor(primaryColor, tmp8);
        obj = {};
        const merged = Object.assign(obj);
        obj.containerBackground = containerBackground;
        const tmp4Result3 = getProfileTheme;
        const tmp4Result4 = int2hslRaw;
        obj.gradientSecondaryBackground = tmp4Result4.int2hex(getProfileTheme.calculateOverlayedColor(secondaryColor, overlay));
        const tmp4Result5 = getProfileTheme;
        obj.avatarBackground = int2hslRaw.int2hex(result);
        const tmp4Result6 = int2hslRaw;
        const tmp4Result7 = int2hslRaw;
        obj.statusBackground = tmp4Result7.int2hex(getProfileTheme.calculateOverlayedColor(result, sectionBox));
        return obj;
      }
    }
  }
  return obj;
};