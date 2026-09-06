// discord_app/modules/user_profile/hooks/native/useUserProfileColors.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import useProfileThemeValues from "../../useProfileThemeValues.native.tsx";
import UserProfileGradientUtils from "../../UserProfileGradientUtils.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

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
  obj = {
    gradientFallbackBackground: null,
    gradientSecondaryBackground: null,
    containerBackground: null,
    containerBorderColor: null,
    avatarBackground: null,
    statusBackground: null,
  };
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
        obj.gradientSecondaryBackground = tmp3Result.int2hex(
          UserProfileGradientUtils.calculateOverlayedColor(secondaryColor, overlay),
        );
        const tmp3Result1 = UserProfileGradientUtils;
        obj.avatarBackground = utils_ColorUtils.int2hex(result);
        const tmp3Result2 = utils_ColorUtils;
        const tmp3Result3 = utils_ColorUtils;
        obj.statusBackground = tmp3Result3.int2hex(
          UserProfileGradientUtils.calculateOverlayedColor(result, sectionBox),
        );
        return obj;
      }
    }
  }
  return obj;
};
