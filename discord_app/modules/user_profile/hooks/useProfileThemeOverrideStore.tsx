// discord_app/modules/user_profile/hooks/useProfileThemeOverrideStore.tsx
import Constants from "../../../Constants.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import UserProfileGradientUtils from "../UserProfileGradientUtils.tsx";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

const ThemeTypes = Constants.ThemeTypes;
let tmp2 = module_560.create()((arg0) => {
  closure_0 = arg0;
  return {
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride(themeOverride) {
      return closure_0({ themeOverride });
    },
    setSavedClientTheme(savedClientTheme) {
      return closure_0({ savedClientTheme });
    }
  };
});
let closure_4 = tmp2;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileThemeOverrideStore.tsx");

export const useProfileThemeOverrideStore = tmp2;
export const useEffectiveThemeOverride = function useEffectiveThemeOverride() {
  const tmp = closure_4((themeOverride) => themeOverride.themeOverride);
  const tmp3 = useThemeDefault();
  if (null == tmp) {
    return null;
  } else {
    if ("nitro" === tmp.mode) {
      const themeColors = tmp.themeColors;
      let first;
      if (themeColors != null) {
        first = themeColors[0];
      }
      if (first == null) {
        first = null;
      }
      const themeColors2 = tmp.themeColors;
      let tmp7;
      if (themeColors2 != null) {
        tmp7 = themeColors2[1];
      }
      if (tmp7 == null) {
        tmp7 = null;
      }
      let tmp8 = tmp3;
      if (null != first) {
        tmp8 = tmp3;
        if (null != tmp7) {
          let obj = UserProfileGradientUtils;
          let profileTheme = obj.getProfileTheme(first);
          if (profileTheme == null) {
            profileTheme = tmp3;
          }
          tmp8 = profileTheme;
        }
      }
      let themeType = tmp8;
      let tmp4 = tmp7;
      let tmp5 = first;
    } else {
      themeType = tmp.themeType;
      if (themeType == null) {
        themeType = tmp3;
      }
      tmp4 = null;
      tmp5 = null;
    }
    if (themeType !== ThemeTypes.DARK) {
      let isThemeLightResult = themeType === ThemeTypes.DARK;
      if (isThemeLightResult) {
        isThemeLightResult = shared.isThemeLight(tmp3);
      }
      let DARKER = themeType;
      if (isThemeLightResult) {
        DARKER = ThemeTypes.DARKER;
      }
    } else {
      shared;
      DARKER = tmp3;
    }
    obj = { theme: DARKER, primaryColor: tmp5, secondaryColor: tmp4 };
    return obj;
  }
};
export const useIsBannerDisabledByOverride = function useIsBannerDisabledByOverride() {
  const tmp = closure_4((themeOverride) => themeOverride.themeOverride);
  let tmp2 = null != tmp;
  if (tmp2) {
    let tmp3 = "non-nitro" === tmp.mode;
    if (!tmp3) {
      tmp3 = true === tmp.disableBanner;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
export const useHasNonNitroThemeOverride = function useHasNonNitroThemeOverride() {
  const tmp = closure_4((themeOverride) => themeOverride.themeOverride);
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = "non-nitro" === tmp.mode;
  }
  return tmp2;
};