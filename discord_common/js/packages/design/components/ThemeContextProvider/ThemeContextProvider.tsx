// === Module 4799: ThemeContextProvider ===

// Module 4799 (ThemeContextProvider)
import c from "c" /* 576 */;
import ThemeContext from "ThemeContext" /* 4791 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextProvider.tsx");

export const ThemeContextProvider = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemeContextProvider(arg0) {
  const cResult = c.c(15);
  ({ children, theme, primaryColor, secondaryColor, gradient, flags, contrast, saturation, enabledExperiments, density, disableAdaptiveTheme, reduceAdaptiveTheme } = arg0);
  const context = noop.useContext(ThemeContext.ThemeContext);
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
                      if (cResult[10] === density) {
                        let tmp5 = cResult[11];
                      }
                      if (cResult[12] === children) {
                        if (cResult[13] === tmp5) {
                          let tmp7 = cResult[14];
                        }
                        return tmp7;
                      }
                      const obj2 = { value: tmp5, children };
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
  const themedContext = ThemeContext.createThemedContext({ theme, primaryColor, secondaryColor, gradient, flags, contrast, saturation, enabledExperiments, density, disableAdaptiveTheme, reduceAdaptiveTheme });
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
  const tmpResult = ThemeContext;
}) : (function ThemeContextProvider(children) {
  let theme = children.theme;
  let primaryColor = children.primaryColor;
  let secondaryColor = children.secondaryColor;
  let gradient = children.gradient;
  let flags = children.flags;
  let contrast = children.contrast;
  let saturation = children.saturation;
  let enabledExperiments = children.enabledExperiments;
  let density = children.density;
  let disableAdaptiveTheme = children.disableAdaptiveTheme;
  let reduceAdaptiveTheme = children.reduceAdaptiveTheme;
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
  value = secondaryColor.useMemo(() => {
    if (theme == null) {
      theme = context.theme;
    }
    const obj2 = { theme, primaryColor: null, secondaryColor: null, gradient: null, flags: null, contrast: null, saturation: null, enabledExperiments: null, density: null, disableAdaptiveTheme: null, reduceAdaptiveTheme: null };
    if (primaryColor == null) {
      primaryColor = context.primaryColor;
    }
    obj2.primaryColor = primaryColor;
    if (secondaryColor == null) {
      secondaryColor = context.secondaryColor;
    }
    obj2.secondaryColor = secondaryColor;
    if (gradient == null) {
      gradient = context.gradient;
    }
    obj2.gradient = gradient;
    if (flags == null) {
      flags = context.flags;
    }
    obj2.flags = flags;
    if (contrast == null) {
      contrast = context.contrast;
    }
    obj2.contrast = contrast;
    if (saturation == null) {
      saturation = context.saturation;
    }
    obj2.saturation = saturation;
    if (enabledExperiments == null) {
      enabledExperiments = context.enabledExperiments;
    }
    obj2.enabledExperiments = enabledExperiments;
    if (density == null) {
      density = context.density;
    }
    obj2.density = density;
    if (disableAdaptiveTheme == null) {
      disableAdaptiveTheme = context.disableAdaptiveTheme;
    }
    obj2.disableAdaptiveTheme = disableAdaptiveTheme;
    if (reduceAdaptiveTheme == null) {
      reduceAdaptiveTheme = context.reduceAdaptiveTheme;
    }
    obj2.reduceAdaptiveTheme = reduceAdaptiveTheme;
    return ThemeContext.createThemedContext(obj2);
  }, items);
  return gradient(theme(primaryColor[4]).ThemeContext.Provider, { value, children: children.children });
});