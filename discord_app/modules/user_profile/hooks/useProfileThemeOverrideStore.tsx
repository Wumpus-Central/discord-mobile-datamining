// === Module 8228: useProfileThemeOverrideStore ===

// Module 8228 (useProfileThemeOverrideStore)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import useThemeDefault from "useTheme" /* 4495 */;
import getProfileTheme from "getProfileTheme" /* 8229 */;
import keys from "keys" /* 560 */;

const ThemeTypes = ME.ThemeTypes;
let tmp2 = keys.create()((arg0) => {
  closure_0 = arg0;
  return {
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride(themeOverride) {
      return callback({ themeOverride });
    },
    setSavedClientTheme(savedClientTheme) {
      return callback({ savedClientTheme });
    }
  };
});
let closure_4 = tmp2;
const result = set.fileFinishedImporting("modules/user_profile/hooks/useProfileThemeOverrideStore.tsx");

export const useProfileThemeOverrideStore = tmp2;
export const useEffectiveThemeOverride = function useEffectiveThemeOverride() {
  const tmp = callback((themeOverride) => themeOverride.themeOverride);
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
          let obj = getProfileTheme;
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
      let isThemeLightResult = themeType === tmp11.DARK;
      if (isThemeLightResult) {
        isThemeLightResult = AccessibilityAnnouncer.isThemeLight(tmp3);
        const obj3 = AccessibilityAnnouncer;
      }
      let DARKER = themeType;
      if (isThemeLightResult) {
        DARKER = tmp11.DARKER;
      }
    } else {
      DARKER = tmp3;
      const obj2 = AccessibilityAnnouncer;
    }
    obj = { theme: null, primaryColor: null, secondaryColor: null };
    obj[0] = DARKER;
    obj[1] = tmp5;
    obj[2] = tmp4;
    return obj;
  }
};
export const useIsBannerDisabledByOverride = function useIsBannerDisabledByOverride() {
  const tmp = callback((themeOverride) => themeOverride.themeOverride);
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
  const tmp = callback((themeOverride) => themeOverride.themeOverride);
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = "non-nitro" === tmp.mode;
  }
  return tmp2;
};