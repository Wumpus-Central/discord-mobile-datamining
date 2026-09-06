// discord_app/modules/user_profile/hooks/native/useUserProfileColors.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import useProfileThemeValues from "../../useProfileThemeValues.native.tsx";
import closure_3 from "../../../a11y/AccessibilityStore.tsx";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = function useUserProfileColors(theme) {
  ({ primaryColor, secondaryColor } = theme);
  const tmp2 = useThemeDefault();
  let obj = useProfileThemeValues;
  const profileThemeValues = obj.useProfileThemeValues(theme.theme);
  const items = [closure_3];
  obj = {
    gradientFallbackBackground: null,
    gradientSecondaryBackground: null,
    containerBackground: null,
    containerBorderColor: null,
    avatarBackground: null,
    statusBackground: null,
  };
  const stateFromStores = initialize.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  const obj2 = initialize;
  obj[0] = map.useToken(ThemesDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2);
  const obj4 = map;
  obj[1] = map.useToken(ThemesDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2);
  const obj5 = map;
  obj[2] = map.useToken(ThemesDefault.colors.CARD_MUTED_BG, tmp2);
  const obj6 = map;
  obj[3] = map.useToken(ThemesDefault.colors.BORDER_MUTED, tmp2);
  const obj7 = map;
  obj[4] = map.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOWER, tmp2);
  const obj8 = map;
  obj[5] = map.useToken(ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, tmp2);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      if (null != profileThemeValues) {
        ({ overlay, sectionBox, overlaySyncedWithUserTheme } = profileThemeValues);
        let tmp3Result = tmp3(8229);
        let tmp7 = overlay;
        if (stateFromStores) {
          tmp7 = overlaySyncedWithUserTheme;
        }
        const result = tmp3Result.calculateOverlayedColor(primaryColor, tmp7);
        obj = {};
        const merged = Object.assign(obj);
        obj.containerBackground = tmp6;
        tmp3Result = tmp3(1091);
        obj.gradientSecondaryBackground = tmp3Result.int2hex(
          tmp3(8229).calculateOverlayedColor(secondaryColor, overlay),
        );
        const tmp3Result1 = tmp3(8229);
        obj.avatarBackground = tmp3(1091).int2hex(result);
        const tmp3Result2 = tmp3(1091);
        const tmp3Result3 = tmp3(1091);
        obj.statusBackground = tmp3Result3.int2hex(tmp3(8229).calculateOverlayedColor(result, sectionBox));
        return obj;
      }
    }
  }
  return obj;
};
