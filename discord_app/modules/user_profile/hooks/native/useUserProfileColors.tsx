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
  const profileThemeValues = useProfileThemeValues.useProfileThemeValues(theme.theme);
  const items = [AccessibilityStore];
  const obj3 = {
    gradientFallbackBackground: null,
    gradientSecondaryBackground: null,
    containerBackground: null,
    containerBorderColor: null,
    avatarBackground: null,
    statusBackground: null,
  };
  const stateFromStores = initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  obj3.gradientFallbackBackground = useToken.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2);
  obj3.gradientSecondaryBackground = useToken.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2);
  obj3.containerBackground = useToken.useToken(nativeDefault.colors.CARD_MUTED_BG, tmp2);
  obj3.containerBorderColor = useToken.useToken(nativeDefault.colors.BORDER_MUTED, tmp2);
  obj3.avatarBackground = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp2);
  obj3.statusBackground = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tmp2);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      if (null != profileThemeValues) {
        ({ overlay, sectionBox, overlaySyncedWithUserTheme } = profileThemeValues);
        let tmp7 = overlay;
        if (stateFromStores) {
          tmp7 = overlaySyncedWithUserTheme;
        }
        const result = UserProfileGradientUtils.calculateOverlayedColor(primaryColor, tmp7);
        const obj10 = {};
        const merged = Object.assign(obj3);
        obj10.containerBackground = tmp6;
        const tmp3Result = UserProfileGradientUtils;
        const tmp3Result6 = utils_ColorUtils;
        obj10.gradientSecondaryBackground = tmp3Result6.int2hex(
          UserProfileGradientUtils.calculateOverlayedColor(secondaryColor, overlay),
        );
        const tmp3Result7 = UserProfileGradientUtils;
        obj10.avatarBackground = utils_ColorUtils.int2hex(result);
        const tmp3Result8 = utils_ColorUtils;
        const tmp3Result9 = utils_ColorUtils;
        obj10.statusBackground = tmp3Result9.int2hex(
          UserProfileGradientUtils.calculateOverlayedColor(result, sectionBox),
        );
        return obj10;
      }
    }
  }
  return obj3;
};
