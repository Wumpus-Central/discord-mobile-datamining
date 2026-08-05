// discord_app/modules/user_profile/hooks/native/useUserProfileColors.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { ThemeTypes } from "sum";

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
  const tmp3 = require("../../../../hooks/useTheme.tsx")();
  let obj = require("../../useProfileThemeValues.native.tsx") /* useProfileThemeValues */;
  const profileThemeValues = obj.useProfileThemeValues(theme);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  const tmp7 = require("../../../themes/experiments/MobileVisualRefreshExperiment.tsx")("useUserProfileColors");
  obj = { gradientFallbackBackground: null, gradientSecondaryBackground: null, containerBackground: null, containerBorderColor: null, avatarBackground: null, statusBackground: null };
  const obj2 = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  obj[0] = require("../../../../design/tokens/native/useToken.tsx") /* map */.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp3);
  const obj4 = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  obj[1] = require("../../../../design/tokens/native/useToken.tsx") /* map */.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp3);
  const obj5 = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  const colors = require("../../../../../discord_common/js/packages/tokens/native.tsx").colors;
  obj[2] = require("../../../../design/tokens/native/useToken.tsx") /* map */.useToken(tmp7 ? colors.CARD_MUTED_BG : colors.USER_PROFILE_CONTAINER_BACKGROUND, tmp3);
  let tmp4Result = tmp4(3989);
  obj[3] = tmp4Result.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BORDER_MUTED, tmp3);
  tmp4Result = tmp4(3989);
  obj[4] = tmp4Result.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BASE_LOWER, tmp3);
  const obj6 = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  obj[5] = require("../../../../design/tokens/native/useToken.tsx") /* map */.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_SURFACE_HIGH, tmp3);
  const tmp4Result1 = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  let containerBackground = require("../../../../design/tokens/native/useToken.tsx") /* map */.useToken(tmp(712).colors.BACKGROUND_MOD_NORMAL, theme);
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
        const result = tmp4(8123).calculateOverlayedColor(primaryColor, tmp8);
        obj = {};
        const merged = Object.assign(obj);
        obj.containerBackground = containerBackground;
        const tmp4Result3 = tmp4(8123);
        const tmp4Result4 = tmp4(688);
        obj.gradientSecondaryBackground = tmp4Result4.int2hex(tmp4(8123).calculateOverlayedColor(secondaryColor, overlay));
        const tmp4Result5 = tmp4(8123);
        obj.avatarBackground = tmp4(688).int2hex(result);
        const tmp4Result6 = tmp4(688);
        const tmp4Result7 = tmp4(688);
        obj.statusBackground = tmp4Result7.int2hex(tmp4(8123).calculateOverlayedColor(result, sectionBox));
        return obj;
      }
    }
  }
  return obj;
};