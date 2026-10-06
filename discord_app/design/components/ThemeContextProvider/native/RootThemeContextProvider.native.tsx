// === Module 9771: ThemeContextProvider/RootThemeContextProvider ===

// Module 9771 (ThemeContextProvider/RootThemeContextProvider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1096 */;
import native from "native" /* 4595 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let contrast;
  let density;
  let disableAdaptiveTheme;
  let enabledExperiments;
  let flags;
  let gradient;
  let primaryColor;
  let reduceAdaptiveTheme;
  let saturation;
  let secondaryColor;
  let theme;
  const obj = react2;
  const cResult = obj.c(15);
  ({ children, theme, primaryColor, secondaryColor, gradient, flags, contrast, saturation, enabledExperiments, density, disableAdaptiveTheme, reduceAdaptiveTheme } = arg0);
  if (undefined === theme) {
    theme = ThemeTypes.DARK;
  }
  let tmp5 = null;
  if (undefined !== primaryColor) {
    tmp5 = primaryColor;
  }
  let tmp6 = null;
  if (undefined !== secondaryColor) {
    tmp6 = secondaryColor;
  }
  let tmp7 = null;
  if (undefined !== gradient) {
    tmp7 = gradient;
  }
  let num = 0;
  if (undefined !== flags) {
    num = flags;
  }
  let num2 = 1;
  if (undefined !== contrast) {
    num2 = contrast;
  }
  let num3 = 1;
  if (undefined !== saturation) {
    num3 = saturation;
  }
  let str = "compact";
  if (undefined !== density) {
    str = density;
  }
  if (cResult[0] === num2) {
    if (cResult[1] === str) {
      if (cResult[2] === (undefined !== disableAdaptiveTheme && disableAdaptiveTheme)) {
        if (cResult[3] === enabledExperiments) {
          if (cResult[4] === num) {
            if (cResult[5] === tmp7) {
              if (cResult[6] === tmp5) {
                if (cResult[7] === (undefined !== reduceAdaptiveTheme && reduceAdaptiveTheme)) {
                  if (cResult[8] === num3) {
                    if (cResult[9] === tmp6) {
                      let tmp10;
                      if (cResult[10] === theme) {
                        tmp10 = cResult[11];
                      }
                      if (cResult[12] === children) {
                        let tmp12;
                        if (cResult[13] === tmp10) {
                          tmp12 = cResult[14];
                        }
                        return tmp12;
                      }
                      const tmp14 = jsx(native.ThemeContext.Provider, { value: tmp10, children });
                      cResult[12] = children;
                      cResult[13] = tmp10;
                      cResult[14] = tmp14;
                      tmp12 = tmp14;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const tmpResult = native;
  const themedContext = tmpResult.createThemedContext({ theme, primaryColor: tmp5, secondaryColor: tmp6, gradient: tmp7, flags: num, contrast: num2, saturation: num3, enabledExperiments, density: str, disableAdaptiveTheme: tmp8, reduceAdaptiveTheme: tmp9 });
  cResult[0] = num2;
  cResult[1] = str;
  cResult[2] = undefined !== disableAdaptiveTheme && disableAdaptiveTheme;
  cResult[3] = enabledExperiments;
  cResult[4] = num;
  cResult[5] = tmp7;
  cResult[6] = tmp5;
  cResult[7] = undefined !== reduceAdaptiveTheme && reduceAdaptiveTheme;
  cResult[8] = num3;
  cResult[9] = tmp6;
  cResult[10] = theme;
  cResult[11] = themedContext;
  tmp10 = themedContext;
}) : ((theme) => {
  let gradient;
  let DARK = theme.theme;
  const children = theme.children;
  if (DARK === undefined) {
    DARK = gradient.DARK;
  }
  let primaryColor = theme.primaryColor;
  if (primaryColor === undefined) {
    primaryColor = null;
  }
  let secondaryColor = theme.secondaryColor;
  if (secondaryColor === undefined) {
    secondaryColor = null;
  }
  gradient = theme.gradient;
  if (gradient === undefined) {
    gradient = null;
  }
  let num = theme.flags;
  if (num === undefined) {
    num = 0;
  }
  let num2 = theme.contrast;
  if (num2 === undefined) {
    num2 = 1;
  }
  let num3 = theme.saturation;
  if (num3 === undefined) {
    num3 = 1;
  }
  const enabledExperiments = theme.enabledExperiments;
  let str = theme.density;
  if (str === undefined) {
    str = "compact";
  }
  let flag = theme.disableAdaptiveTheme;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = theme.reduceAdaptiveTheme;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [DARK, primaryColor, secondaryColor, gradient, num, num2, num3, enabledExperiments, str, flag, flag2];
  const value = secondaryColor.useMemo(() => {
    const obj = native;
    const obj2 = { theme: DARK, primaryColor, secondaryColor, gradient, flags: num, contrast: num2, saturation: num3, enabledExperiments, density: str, disableAdaptiveTheme: flag, reduceAdaptiveTheme: flag2 };
    return obj.createThemedContext(obj2);
  }, items);
  return num(DARK(primaryColor[5]).ThemeContext.Provider, { value, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = native;
  const themeContext = obj2.useThemeContext();
  if (cResult[0] !== themeContext) {
    const obj3 = { primaryColor: null, secondaryColor: null, gradient: null };
    const createThemedContext = native.createThemedContext;
    native;
    const merged = Object.assign(themeContext);
    const themedContext = createThemedContext(obj3);
    cResult[0] = themeContext;
    cResult[1] = themedContext;
    tmp5 = themedContext;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children.children) {
    let tmp12;
    if (cResult[3] === tmp5) {
      tmp12 = cResult[4];
    }
    return tmp12;
  }
  const tmp13 = jsx(native.ThemeContext.Provider, { value: tmp5, children: children.children });
  cResult[2] = children.children;
  cResult[3] = tmp5;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : ((children) => {
  let themeContext;
  let obj = themeContext(4595);
  themeContext = obj.useThemeContext();
  const items = [themeContext];
  const memo = react.useMemo(() => {
    const obj = { primaryColor: null, secondaryColor: null, gradient: null };
    const createThemedContext = native.createThemedContext;
    native;
    const merged = Object.assign(themeContext);
    return createThemedContext(obj);
  }, items);
  return jsx(themeContext(4595).ThemeContext.Provider, { value: memo, children: children.children });
});
const result = size.fileFinishedImporting("design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = tmp2;
export const DisableCustomTheme = tmp3;