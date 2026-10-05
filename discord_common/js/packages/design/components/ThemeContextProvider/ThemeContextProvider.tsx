// === Module 4601: ThemeContextProvider ===

// Module 4601 (ThemeContextProvider)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ThemeContext from "ThemeContext" /* 4593 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
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
  const context = react.useContext(ThemeContext.ThemeContext);
  const FALLBACK_THEME_CONTEXT_VALUE = ThemeContext.FALLBACK_THEME_CONTEXT_VALUE;
  if (theme == null) {
    theme = context.theme;
  }
  if (primaryColor == null) {
    primaryColor = context.primaryColor;
  }
  if (secondaryColor == null) {
    secondaryColor = context.secondaryColor;
  }
  if (gradient == null) {
    gradient = context.gradient;
  }
  if (flags == null) {
    flags = context.flags;
  }
  if (contrast == null) {
    contrast = context.contrast;
  }
  if (saturation == null) {
    saturation = context.saturation;
  }
  if (enabledExperiments == null) {
    enabledExperiments = context.enabledExperiments;
  }
  if (density == null) {
    density = context.density;
  }
  if (disableAdaptiveTheme == null) {
    disableAdaptiveTheme = context.disableAdaptiveTheme;
  }
  if (reduceAdaptiveTheme == null) {
    reduceAdaptiveTheme = context.reduceAdaptiveTheme;
  }
  if (cResult[0] === theme) {
    if (cResult[1] === disableAdaptiveTheme) {
      if (cResult[2] === reduceAdaptiveTheme) {
        if (cResult[3] === primaryColor) {
          if (cResult[4] === secondaryColor) {
            if (cResult[5] === gradient) {
              if (cResult[6] === flags) {
                if (cResult[7] === contrast) {
                  if (cResult[8] === saturation) {
                    if (cResult[9] === enabledExperiments) {
                      let tmp5;
                      if (cResult[10] === density) {
                        tmp5 = cResult[11];
                      }
                      if (cResult[12] === children) {
                        let tmp7;
                        if (cResult[13] === tmp5) {
                          tmp7 = cResult[14];
                        }
                        return tmp7;
                      }
                      const tmp9 = jsx(ThemeContext.ThemeContext.Provider, { value: tmp5, children });
                      cResult[12] = children;
                      cResult[13] = tmp5;
                      cResult[14] = tmp9;
                      tmp7 = tmp9;
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
  const tmpResult = ThemeContext;
  const themedContext = tmpResult.createThemedContext({ theme, primaryColor, secondaryColor, gradient, flags, contrast, saturation, enabledExperiments, density, disableAdaptiveTheme, reduceAdaptiveTheme });
  cResult[0] = theme;
  cResult[1] = disableAdaptiveTheme;
  cResult[2] = reduceAdaptiveTheme;
  cResult[3] = primaryColor;
  cResult[4] = secondaryColor;
  cResult[5] = gradient;
  cResult[6] = flags;
  cResult[7] = contrast;
  cResult[8] = saturation;
  cResult[9] = enabledExperiments;
  cResult[10] = density;
  cResult[11] = themedContext;
  tmp5 = themedContext;
}) : ((theme) => {
  theme = theme.theme;
  let primaryColor = theme.primaryColor;
  let secondaryColor = theme.secondaryColor;
  let gradient = theme.gradient;
  let flags = theme.flags;
  let contrast = theme.contrast;
  let saturation = theme.saturation;
  let enabledExperiments = theme.enabledExperiments;
  let density = theme.density;
  let disableAdaptiveTheme = theme.disableAdaptiveTheme;
  let reduceAdaptiveTheme = theme.reduceAdaptiveTheme;
  const children = theme.children;
  const context = secondaryColor.useContext(theme(primaryColor[4]).ThemeContext);
  const FALLBACK_THEME_CONTEXT_VALUE = theme(primaryColor[4]).FALLBACK_THEME_CONTEXT_VALUE;
  const items = [theme, , , , , , , , , , , , , , , , , , , , , ];
  ({ theme: arr[1], primaryColor: arr[2], secondaryColor: arr[3], gradient: arr[4], flags: arr[5], contrast: arr[6], saturation: arr[7], enabledExperiments: arr[8], density: arr[9], disableAdaptiveTheme: arr[10], reduceAdaptiveTheme: arr[11] } = context);
  items[12] = primaryColor;
  items[13] = secondaryColor;
  items[14] = gradient;
  items[15] = flags;
  items[16] = contrast;
  items[17] = saturation;
  items[18] = enabledExperiments;
  items[19] = density;
  items[20] = disableAdaptiveTheme;
  items[21] = reduceAdaptiveTheme;
  const value = secondaryColor.useMemo(() => {
    const createThemedContext = ThemeContext.createThemedContext;
    ThemeContext;
    if (theme == null) {
      theme = context.theme;
    }
    const obj = { theme, primaryColor, secondaryColor, gradient, flags, contrast, saturation, enabledExperiments, density, disableAdaptiveTheme, reduceAdaptiveTheme };
    if (primaryColor == null) {
      primaryColor = context.primaryColor;
    }
    if (secondaryColor == null) {
      secondaryColor = context.secondaryColor;
    }
    if (gradient == null) {
      gradient = context.gradient;
    }
    if (flags == null) {
      flags = context.flags;
    }
    if (contrast == null) {
      contrast = context.contrast;
    }
    if (saturation == null) {
      saturation = context.saturation;
    }
    if (enabledExperiments == null) {
      enabledExperiments = context.enabledExperiments;
    }
    if (density == null) {
      density = context.density;
    }
    if (disableAdaptiveTheme == null) {
      disableAdaptiveTheme = context.disableAdaptiveTheme;
    }
    if (reduceAdaptiveTheme == null) {
      reduceAdaptiveTheme = context.reduceAdaptiveTheme;
    }
    return createThemedContext(obj);
  }, items);
  return gradient(theme(primaryColor[4]).ThemeContext.Provider, { value, children });
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextProvider.tsx");

export const ThemeContextProvider = tmp2;