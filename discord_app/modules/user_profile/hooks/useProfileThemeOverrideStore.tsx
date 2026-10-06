// === Module 7911: useProfileThemeOverrideStore ===

// Module 7911 (useProfileThemeOverrideStore)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 7912 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
let tmp2 = module_570.create()((arg0) => {
  let closure_0 = arg0;
  let obj = {
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride(themeOverride) {
      const obj = { themeOverride };
      return closure_0(obj);
    },
    setSavedClientTheme(savedClientTheme) {
      const obj = { savedClientTheme };
      return closure_0(obj);
    }
  };
  return obj;
});
let closure_4 = tmp2;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(themeOverride) {
      return themeOverride.themeOverride;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = closure_4(first);
  const tmp6 = useThemeDefault();
  if (null == tmp5) {
    return null;
  } else {
    let themeType;
    let tmp7;
    let tmp8;
    let DARK;
    if ("nitro" === tmp5.mode) {
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
          let tmp11;
          if (cResult[3] === tmp10) {
            tmp11 = cResult[4];
          }
          themeType = tmp11;
          tmp7 = tmp10;
          tmp8 = first1;
        }
      }
      let tmp12 = tmp6;
      if (null != first1) {
        tmp12 = tmp6;
        if (null != tmp10) {
          const tmpResult = UserProfileGradientUtils;
          let profileTheme = tmpResult.getProfileTheme(first1);
          if (profileTheme == null) {
            profileTheme = tmp6;
          }
          tmp12 = profileTheme;
        }
      }
      cResult[1] = tmp6;
      cResult[2] = first1;
      cResult[3] = tmp10;
      cResult[4] = tmp12;
      tmp11 = tmp12;
    } else {
      themeType = tmp5.themeType;
      if (themeType == null) {
        themeType = tmp6;
      }
      tmp7 = null;
      tmp8 = null;
    }
    if (themeType !== ThemeTypes.ASH) {
      let isThemeLightResult = themeType === ThemeTypes.ASH;
      if (isThemeLightResult) {
        const tmpResult3 = shared;
        isThemeLightResult = tmpResult3.isThemeLight(tmp6);
      }
      DARK = themeType;
      if (isThemeLightResult) {
        DARK = ThemeTypes.DARK;
      }
    } else {
      shared;
      DARK = tmp6;
    }
    if (cResult[5] === tmp8) {
      if (cResult[6] === tmp7) {
        let tmp16;
        if (cResult[7] === DARK) {
          tmp16 = cResult[8];
        }
        return tmp16;
      }
    }
    const obj2 = { theme: DARK, primaryColor: tmp8, secondaryColor: tmp7 };
    cResult[5] = tmp8;
    cResult[6] = tmp7;
    cResult[7] = DARK;
    cResult[8] = obj2;
    tmp16 = obj2;
  }
}) : (() => {
  const tmp = closure_4((themeOverride) => themeOverride.themeOverride);
  const tmp3 = useThemeDefault();
  if (null == tmp) {
    return null;
  } else {
    let themeType;
    let tmp4;
    let tmp5;
    let DARK;
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
          const obj = UserProfileGradientUtils;
          let profileTheme = obj.getProfileTheme(first);
          if (profileTheme == null) {
            profileTheme = tmp3;
          }
          tmp8 = profileTheme;
        }
      }
      themeType = tmp8;
      tmp4 = tmp7;
      tmp5 = first;
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
        const obj3 = shared;
        isThemeLightResult = obj3.isThemeLight(tmp3);
      }
      DARK = themeType;
      if (isThemeLightResult) {
        DARK = ThemeTypes.DARK;
      }
    } else {
      shared;
      DARK = tmp3;
    }
    return { theme: DARK, primaryColor: tmp5, secondaryColor: tmp4 };
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(themeOverride) {
      return themeOverride.themeOverride;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp3 = closure_4(first);
  let tmp4 = null != tmp3;
  if (tmp4) {
    tmp4 = "non-nitro" === tmp3.mode || true === tmp3.disableBanner;
    const tmp5 = "non-nitro" === tmp3.mode || true === tmp3.disableBanner;
  }
  return tmp4;
}) : (() => {
  const tmp = closure_4((themeOverride) => themeOverride.themeOverride);
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = "non-nitro" === tmp.mode || true === tmp.disableBanner;
    const tmp3 = "non-nitro" === tmp.mode || true === tmp.disableBanner;
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(themeOverride) {
      return themeOverride.themeOverride;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp3 = closure_4(first);
  return null != tmp3 && "non-nitro" === tmp3.mode;
}) : (() => {
  const tmp = closure_4((themeOverride) => themeOverride.themeOverride);
  return null != tmp && "non-nitro" === tmp.mode;
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileThemeOverrideStore.tsx");

export const useProfileThemeOverrideStore = tmp2;
export const useEffectiveThemeOverride = tmp3;
export const useIsBannerDisabledByOverride = tmp4;
export const useHasNonNitroThemeOverride = tmp5;