// === Module 10974: ThemeContextProvider/RootThemeContextProvider ===

// Module 10974 (ThemeContextProvider/RootThemeContextProvider)
import c from "c" /* 576 */;
import native from "native" /* 4787 */;
import noop from "module_19" /* 19 */;

require = fn;
const ThemeTypes = fn(1096).ThemeTypes;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function RootThemeContextProvider(arg0) {
  const cResult = c.c(15);
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
      if (cResult[2] === tmp8) {
        if (cResult[3] === enabledExperiments) {
          if (cResult[4] === num) {
            if (cResult[5] === tmp7) {
              if (cResult[6] === tmp5) {
                if (cResult[7] === tmp9) {
                  if (cResult[8] === num3) {
                    if (cResult[9] === tmp6) {
                      if (cResult[10] === theme) {
                        let tmp10 = cResult[11];
                      }
                      if (cResult[12] === children) {
                        if (cResult[13] === tmp10) {
                          let tmp12 = cResult[14];
                        }
                        return tmp12;
                      }
                      const obj2 = { value: tmp10, children };
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
  const themedContext = native.createThemedContext({ theme, primaryColor: tmp5, secondaryColor: tmp6, gradient: tmp7, flags: num, contrast: num2, saturation: num3, enabledExperiments, density: str, disableAdaptiveTheme: tmp8, reduceAdaptiveTheme: tmp9 });
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
  const tmpResult = native;
}) : (function RootThemeContextProvider(children) {
  let DARK = children.theme;
  if (DARK === undefined) {
    DARK = gradient.DARK;
  }
  let primaryColor = children.primaryColor;
  if (primaryColor === undefined) {
    primaryColor = null;
  }
  let secondaryColor = children.secondaryColor;
  if (secondaryColor === undefined) {
    secondaryColor = null;
  }
  gradient = children.gradient;
  if (gradient === undefined) {
    gradient = null;
  }
  let num = children.flags;
  if (num === undefined) {
    num = 0;
  }
  let num2 = children.contrast;
  if (num2 === undefined) {
    num2 = 1;
  }
  let num3 = children.saturation;
  if (num3 === undefined) {
    num3 = 1;
  }
  const enabledExperiments = children.enabledExperiments;
  let str = children.density;
  if (str === undefined) {
    str = "compact";
  }
  let flag = children.disableAdaptiveTheme;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = children.reduceAdaptiveTheme;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [DARK, primaryColor, secondaryColor, gradient, num, num2, num3, enabledExperiments, str, flag, flag2];
  value = secondaryColor.useMemo(() => native.createThemedContext({ theme: DARK, primaryColor, secondaryColor, gradient, flags: num, contrast: num2, saturation: num3, enabledExperiments, density: str, disableAdaptiveTheme: flag, reduceAdaptiveTheme: flag2 }), items);
  return num(DARK(primaryColor[5]).ThemeContext.Provider, { value, children: children.children });
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = tmp2;
export const DisableCustomTheme = ReactCompilerGating.isReactCompilerEnabled() ? (function DisableCustomTheme(children) {
  const cResult = c.c(5);
  const themeContext = native.useThemeContext();
  if (cResult[0] !== themeContext) {
    const obj3 = {};
    const merged = Object.assign(themeContext);
    obj3.primaryColor = null;
    obj3.secondaryColor = null;
    obj3.gradient = null;
    const themedContext = native.createThemedContext(obj3);
    cResult[0] = themeContext;
    cResult[1] = themedContext;
    let tmp5 = themedContext;
    const tmpResult = native;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children.children) {
    if (cResult[3] === tmp5) {
      let tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(native.ThemeContext.Provider, { value: tmp5, children: children.children });
  cResult[2] = children.children;
  cResult[3] = tmp5;
  cResult[4] = tmp12;
  tmp11 = tmp12;
  const obj4 = { value: tmp5, children: children.children };
}) : (function DisableCustomTheme(children) {
  themeContext = themeContext(4787).useThemeContext();
  const items = [themeContext];
  const memo = noop.useMemo(() => {
    const obj2 = {};
    const merged = Object.assign(themeContext);
    obj2.primaryColor = null;
    obj2.secondaryColor = null;
    obj2.gradient = null;
    return native.createThemedContext(obj2);
  }, items);
  return jsx(themeContext(4787).ThemeContext.Provider, { value: memo, children: children.children });
});