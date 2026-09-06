// discord_common/js/packages/tokens/native.tsx
import ThemeTypes from "themes/generated/generated-definitions.tsx";
import _mod578 from "colors/generated/native/generated-definitions.tsx";
import _mod579 from "colors/generated/native/experiment-definitions.tsx";
import _mod580 from "colors/generated/raw-color-definitions.tsx";
import _mod581 from "modules/generated/generated-definitions.tsx";
import _mod582 from "shadows/generated/shared/generated-definitions.tsx";
import mapValuesDefault from "../../../../_runtime/00583_mapValues.js";
import Radius from "radii/generated/generated-definitions.tsx";
import Layout from "layout/generated/generated-definitions.tsx";
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import transforms from "transforms.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Themes = ThemeTypes._private.Themes;
const SemanticColors = _mod578._private.SemanticColors;
const SemanticColorExperiments = _mod579._private.SemanticColorExperiments;
const RawColors = _mod580._private.RawColors;
const Shadows = _mod582._private.Shadows;
let closure_7 = Symbol("semanticColor");
let result = size.fileFinishedImporting("../discord_common/js/packages/tokens/native.tsx");

export default {
  themes: Themes,
  colors: mapValuesDefault(SemanticColors, (arg0, arg1) => ({ [closure_1_7]: arg1 })),
  unsafe_rawColors: RawColors,
  shadows: mapValuesDefault(Shadows, (arg0) => {
    let f70617 = (shadowOffset, arg1) => {
      shadowOffset = undefined;
      if (!arg1) {
        shadowOffset = shadowOffset.shadowOffset;
      }
      return shadowOffset;
    };
    f70617 = (shadowColorAndroid, arg1) =>
      arg1 ? shadowColorAndroid.shadowColorAndroid : shadowColorAndroid.shadowColor;
    f70617 = (shadowOpacity) => shadowOpacity.shadowOpacity;
    f70617 = (shadowRadius) => shadowRadius.shadowRadius;
    f70617 = (elevation) => elevation.elevation;
    return {
      shadowOffset: {
        resolve(isAndroid) {
          return f70617(require[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        },
      },
      shadowColor: {
        resolve(isAndroid) {
          return f70617(require[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        },
      },
      shadowOpacity: {
        resolve(isAndroid) {
          return f70617(require[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        },
      },
      shadowRadius: {
        resolve(isAndroid) {
          return f70617(require[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        },
      },
      elevation: {
        resolve(isAndroid) {
          return f70617(require[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        },
      },
    };
  }),
  radii: Radius.Radius,
  modules: mapValuesDefault(_mod581._private.Modules, (arg0) =>
    mapValuesDefault(arg0, (arg0) => {
      closure_0 = arg0;
      return {
        resolve(arg0) {
          ({ enabledExperiments, density } = arg0);
          if (enabledExperiments == null) {
            enabledExperiments = [];
          }
          const obj = { enabledExperiments, density: null };
          if (density == null) {
            density = "compact";
          }
          obj.density = density;
          return closure_0.resolve(obj);
        },
      };
    }),
  ),
  space: Layout.SpacePx,
  internal: {
    isSemanticColor(backgroundColor) {
      let tmp = typeof backgroundColor === "object";
      if (typeof backgroundColor === "object") {
        tmp = null !== backgroundColor;
      }
      if (tmp) {
        tmp = closure_7 in backgroundColor;
      }
      return tmp;
    },
    getSemanticColorName(BACKGROUND_BASE_LOW) {
      return BACKGROUND_BASE_LOW[closure_7];
    },
    resolveSemanticColor(theme, TEXT_FEEDBACK_CRITICAL, semanticColorContextFromThemeContext) {
      let tmp = (function sanitizeTheme(theme) {
        let tmp = theme;
        if (typeof theme === "string") {
          const formatted = theme.toUpperCase();
          if (formatted in Themes) {
            tmp = Themes[formatted];
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Invalid theme: " + theme);
            throw error;
          }
        }
        return tmp;
      })(theme);
      const category = tmp3.category;
      let result = RawColors[tmp4.raw];
      let opacity = tmp4.opacity;
      let enabledExperiments;
      if (semanticColorContextFromThemeContext != null) {
        enabledExperiments = semanticColorContextFromThemeContext.enabledExperiments;
      }
      if (null != enabledExperiments) {
        if (semanticColorContextFromThemeContext.enabledExperiments.length > 0) {
          if (null != SemanticColorExperiments[TEXT_FEEDBACK_CRITICAL[closure_7]]) {
            enabledExperiments = semanticColorContextFromThemeContext.enabledExperiments;
            for (const item10035 of enabledExperiments) {
              let tmp12;
              if (tmp8 != null) {
                let tmp14 = tmp8[tmp11];
                if (tmp14 != null) {
                  tmp12 = tmp14[tmp];
                }
              }
              if (null != tmp12) {
                result = RawColors[tmp12.raw];
                opacity = tmp12.opacity;
                obj.return();
                break;
              }
              break;
            }
          }
        }
      }
      let isProfileTheme;
      if (semanticColorContextFromThemeContext != null) {
        isProfileTheme = semanticColorContextFromThemeContext.isProfileTheme;
      }
      if (isProfileTheme) {
        if ("userProfileThemes" in tmp3) {
          theme = undefined;
          if (semanticColorContextFromThemeContext != null) {
            let gradient = semanticColorContextFromThemeContext.gradient;
            if (gradient != null) {
              theme = gradient.theme;
            }
          }
          let tmp41 = null;
          if (null != theme) {
            tmp41 = tmp3.userProfileThemes[theme];
          }
          if (null != tmp41) {
            result = RawColors[tmp41.raw];
            opacity = tmp41.opacity;
          }
        }
        let num2;
        if (semanticColorContextFromThemeContext != null) {
          num2 = semanticColorContextFromThemeContext.contrast;
        }
        if (num2 == null) {
          num2 = 1;
        }
        let num3;
        if (semanticColorContextFromThemeContext != null) {
          num3 = semanticColorContextFromThemeContext.saturation;
        }
        if (num3 == null) {
          num3 = 1;
        }
        if (num3 < 1) {
          result = transforms.transformColorForReducedSaturation(result, category, num3);
        }
        if (1 !== num2) {
          const obj7 = transforms;
          result = obj7.transformColorContrast(result, category, tmp, num2);
        }
        if (1 === opacity) {
          let hexResult = result;
        } else {
          const obj8 = _modDef672(result);
          hexResult = _modDef672(result).alpha(opacity).hex();
          const alphaResult = _modDef672(result).alpha(opacity);
        }
        return hexResult;
      }
      gradient = undefined;
      if (semanticColorContextFromThemeContext != null) {
        gradient = semanticColorContextFromThemeContext.gradient;
      }
      if (null != gradient) {
        let gradient1 = null;
        if ("gradient" in tmp3) {
          gradient1 = tmp3.gradient;
        }
        let tmp22 = gradient1;
        let enabledExperiments1;
        if (semanticColorContextFromThemeContext != null) {
          enabledExperiments1 = semanticColorContextFromThemeContext.enabledExperiments;
        }
        if (null != enabledExperiments1) {
          if (semanticColorContextFromThemeContext.enabledExperiments.length > 0) {
            if (null != SemanticColorExperiments[TEXT_FEEDBACK_CRITICAL[closure_7]]) {
              const enabledExperiments2 = semanticColorContextFromThemeContext.enabledExperiments;
              for (const item10067 of enabledExperiments2) {
                let gradient2;
                if (tmp26 != null) {
                  let tmp32 = tmp26[tmp29];
                  if (tmp32 != null) {
                    gradient2 = tmp32.gradient;
                  }
                }
                if (null != gradient2) {
                  tmp22 = gradient2;
                  obj2.return();
                  break;
                }
                break;
              }
            }
          }
        }
        let tmp36;
        if (tmp22 != null) {
          let theme1;
          if (semanticColorContextFromThemeContext != null) {
            theme1 = semanticColorContextFromThemeContext.gradient.theme;
          }
          tmp36 = tmp22[theme1];
        }
        if (null != tmp36) {
          if (tmp36.color in RawColors) {
            let tmp38 = tmp62[tmp36.color];
          } else if (semanticColorContextFromThemeContext != null) {
            tmp38 = semanticColorContextFromThemeContext.gradient.colors[tmp36.color];
          }
          const tmp61Result = _modDef672(tmp38);
          let result1 = tmp61Result;
          if ("saturation" in tmp36) {
            result1 = tmp61Result.set("hsl.s", tmp36.saturation);
          }
          let result2 = result1;
          if ("lightness" in tmp36) {
            result2 = result1.set("hsl.l", tmp36.lightness);
          }
          result = result2.hex();
          let num = 1;
          if ("opacity" in tmp36) {
            num = tmp36.opacity;
          }
          opacity = num;
        }
      }
    },
    adjustColorSaturation(result, saturation, generic) {
      return transforms.transformColorForReducedSaturation(result, generic, saturation);
    },
    adjustColorContrast(result, contrast, category, theme) {
      return transforms.transformColorContrast(result, category, theme, contrast);
    },
  },
};
export const Theme = Themes;
export const RawColor = RawColors;
export const SemanticColor = SemanticColors;
export const Shadow = Shadows;
