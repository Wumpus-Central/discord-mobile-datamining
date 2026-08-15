// discord_app/modules/user_profile/hooks/native/useUserProfileColors.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { ThemeTypes } from "sum";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { useTheme } from "../../../../hooks/useTheme.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { useProfileThemeValues } from "../../useProfileThemeValues.native.tsx";

const require = arg1;
let result = require("useTheme").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = function useUserProfileColors(arg0) {
  let overlay;
  let overlaySyncedWithUserTheme;
  let primaryColor;
  let secondaryColor;
  let sectionBox;
  let theme;
  ({ theme, primaryColor, secondaryColor } = arg0);
  const tmp3 = useTheme();
  let obj = useProfileThemeValues;
  const profileThemeValues = obj.useProfileThemeValues(theme);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = initialize.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  const tmp7 = useIsMobileVisualRefreshExperimentEnabled("useUserProfileColors");
  obj = { gradientFallbackBackground: null, gradientSecondaryBackground: null, containerBackground: null, containerBorderColor: null, avatarBackground: null, statusBackground: null };
  const obj2 = initialize;
  obj[0] = map.useToken(Themes.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp3);
  const obj4 = map;
  obj[1] = map.useToken(Themes.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp3);
  const obj5 = map;
  const colors = Themes.colors;
  obj[2] = map.useToken(tmp7 ? colors.CARD_MUTED_BG : colors.USER_PROFILE_CONTAINER_BACKGROUND, tmp3);
  let tmp4Result = tmp4(4097);
  obj[3] = tmp4Result.useToken(Themes.colors.BORDER_MUTED, tmp3);
  tmp4Result = tmp4(4097);
  obj[4] = tmp4Result.useToken(Themes.colors.BACKGROUND_BASE_LOWER, tmp3);
  const obj6 = map;
  obj[5] = map.useToken(Themes.colors.BACKGROUND_SURFACE_HIGH, tmp3);
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
        const result = tmp4(8422).calculateOverlayedColor(primaryColor, tmp8);
        obj = {};
        const merged = Object.assign(obj);
        obj.containerBackground = containerBackground;
        const tmp4Result3 = tmp4(8422);
        const tmp4Result4 = tmp4(688);
        obj.gradientSecondaryBackground = tmp4Result4.int2hex(tmp4(8422).calculateOverlayedColor(secondaryColor, overlay));
        const tmp4Result5 = tmp4(8422);
        obj.avatarBackground = tmp4(688).int2hex(result);
        const tmp4Result6 = tmp4(688);
        const tmp4Result7 = tmp4(688);
        obj.statusBackground = tmp4Result7.int2hex(tmp4(8422).calculateOverlayedColor(result, sectionBox));
        return obj;
      }
    }
  }
  return obj;
};