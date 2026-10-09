// === Module 8338: useProfileThemeOverrideStore ===

// Module 8338 (useProfileThemeOverrideStore)
import c from "c" /* 576 */;
import Constants from "Constants" /* 1085 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 8339 */;
import module_570 from "module_570" /* 570 */;
import "ReactCompilerGating";
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
let tmp2 = module_570.create()((arg0) => {
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEffectiveThemeOverride() {
  const cResult = c.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(themeOverride) {
      return themeOverride.themeOverride;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = closure_4(first);
  const tmp6 = useThemeDefault();
  if (null == tmp5) {
    return null;
  } else if ("nitro" === tmp5.mode) {
    const themeColors = tmp5.themeColors;
    let first1;
    if (themeColors != null) {
      first1 = themeColors[0];
    }
    if (first1 == null) {
      first1 = null;
    }
    const themeColors2 = tmp5.themeColors;
    let tmp10;
    if (themeColors2 != null) {
      tmp10 = themeColors2[1];
    }
    if (tmp10 == null) {
      tmp10 = null;
    }
    if (cResult[1] === tmp6) {
      if (cResult[2] === first1) {
      }
    }
    let tmp12 = tmp6;
    if (null != first1) {
      tmp12 = tmp6;
      if (null != tmp10) {
        let profileTheme = UserProfileGradientUtils.getProfileTheme(first1);
        if (profileTheme == null) {
          profileTheme = tmp6;
        }
        tmp12 = profileTheme;
        const tmpResult = UserProfileGradientUtils;
      }
    }
    cResult[1] = tmp6;
    cResult[2] = first1;
    cResult[3] = tmp10;
    cResult[4] = tmp12;
  } else {
    let themeType = tmp5.themeType;
    if (themeType == null) {
      themeType = tmp6;
    }
    if (themeType !== ThemeTypes.ASH) {
      let isThemeLightResult = themeType === ThemeTypes.ASH;
      if (isThemeLightResult) {
        isThemeLightResult = shared.isThemeLight(tmp6);
        const tmpResult3 = shared;
      }
      let DARK = themeType;
      if (isThemeLightResult) {
        DARK = ThemeTypes.DARK;
      }
    } else {
      shared;
      DARK = tmp6;
    }
    if (cResult[5] === null) {
      if (cResult[6] === null) {
        if (cResult[7] === DARK) {
          let tmp19 = cResult[8];
        }
        return tmp19;
      }
    }
    const obj2 = { theme: DARK, primaryColor: null, secondaryColor: null };
    cResult[5] = null;
    cResult[6] = null;
    cResult[7] = DARK;
    cResult[8] = obj2;
    tmp19 = obj2;
  }
}) : (function useEffectiveThemeOverride() {
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
          let profileTheme = UserProfileGradientUtils.getProfileTheme(first);
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
    if (themeType !== ThemeTypes.ASH) {
      let isThemeLightResult = themeType === ThemeTypes.ASH;
      if (isThemeLightResult) {
        isThemeLightResult = shared.isThemeLight(tmp3);
      }
      let DARK = themeType;
      if (isThemeLightResult) {
        DARK = ThemeTypes.DARK;
      }
    } else {
      shared;
      DARK = tmp3;
    }
    const obj4 = { theme: DARK, primaryColor: tmp5, secondaryColor: tmp4 };
    return obj4;
  }
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsBannerDisabledByOverride() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(themeOverride) {
      return themeOverride.themeOverride;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp3 = closure_4(first);
  let tmp4 = null != tmp3;
  if (tmp4) {
    let tmp5 = "non-nitro" === tmp3.mode;
    if (!tmp5) {
      tmp5 = true === tmp3.disableBanner;
    }
    tmp4 = tmp5;
  }
  return tmp4;
}) : (function useIsBannerDisabledByOverride() {
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
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileThemeOverrideStore.tsx");

export const useProfileThemeOverrideStore = tmp2;
export const useEffectiveThemeOverride = tmp3;
export const useIsBannerDisabledByOverride = tmp4;
export const useHasNonNitroThemeOverride = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasNonNitroThemeOverride() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(themeOverride) {
      return themeOverride.themeOverride;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp3 = closure_4(first);
  let tmp4 = null != tmp3;
  if (tmp4) {
    tmp4 = "non-nitro" === tmp3.mode;
  }
  return tmp4;
}) : (function useHasNonNitroThemeOverride() {
  const tmp = closure_4((themeOverride) => themeOverride.themeOverride);
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = "non-nitro" === tmp.mode;
  }
  return tmp2;
});