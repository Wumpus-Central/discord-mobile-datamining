// === Module 8238: useUserProfileColors ===

// Module 8238 (useUserProfileColors)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import useToken from "useToken" /* 4262 */;
import useThemeDefault from "useTheme" /* 4495 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7184 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 8229 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const ThemeTypes = fn(1085).ThemeTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = function useUserProfileColors(theme) {
  ({ primaryColor, secondaryColor } = theme);
  const tmp2 = useThemeDefault();
  let obj = useProfileThemeValues;
  const profileThemeValues = obj.useProfileThemeValues(theme.theme);
  const items = [AccessibilityStore];
  obj = { gradientFallbackBackground: null, gradientSecondaryBackground: null, containerBackground: null, containerBorderColor: null, avatarBackground: null, statusBackground: null };
  const stateFromStores = initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  obj.gradientFallbackBackground = useToken.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2);
  obj.gradientSecondaryBackground = useToken.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2);
  obj.containerBackground = useToken.useToken(nativeDefault.colors.CARD_MUTED_BG, tmp2);
  obj.containerBorderColor = useToken.useToken(nativeDefault.colors.BORDER_MUTED, tmp2);
  obj.avatarBackground = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp2);
  obj.statusBackground = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tmp2);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      if (null != profileThemeValues) {
        ({ overlay, sectionBox, overlaySyncedWithUserTheme } = profileThemeValues);
        let tmp3Result = UserProfileGradientUtils;
        let tmp7 = overlay;
        if (stateFromStores) {
          tmp7 = overlaySyncedWithUserTheme;
        }
        const result = tmp3Result.calculateOverlayedColor(primaryColor, tmp7);
        obj = {};
        const merged = Object.assign(obj);
        obj.containerBackground = tmp6;
        tmp3Result = utils_ColorUtils;
        obj.gradientSecondaryBackground = tmp3Result.int2hex(UserProfileGradientUtils.calculateOverlayedColor(secondaryColor, overlay));
        const tmp3Result1 = UserProfileGradientUtils;
        obj.avatarBackground = utils_ColorUtils.int2hex(result);
        const tmp3Result2 = utils_ColorUtils;
        const tmp3Result3 = utils_ColorUtils;
        obj.statusBackground = tmp3Result3.int2hex(UserProfileGradientUtils.calculateOverlayedColor(result, sectionBox));
        return obj;
      }
    }
  }
  return obj;
};