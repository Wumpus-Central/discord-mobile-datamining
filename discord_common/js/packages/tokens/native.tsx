// discord_common/js/packages/tokens/native.tsx
import ThemeTypes from "themes/generated/generated-definitions.tsx";
import _mod589 from "colors/generated/native/generated-definitions.tsx";
import _mod590 from "colors/generated/native/experiment-definitions.tsx";
import _mod591 from "colors/generated/raw-color-definitions.tsx";
import _mod592 from "modules/generated/generated-definitions.tsx";
import _mod593 from "shadows/generated/shared/generated-definitions.tsx";
import mapValuesDefault from "../../../../_runtime/00594_mapValues.js";
import Radius from "radii/generated/generated-definitions.tsx";
import Layout from "layout/generated/generated-definitions.tsx";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import transforms from "transforms.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function sanitizeTheme(theme) {
  if (set.has(theme)) {
    return theme;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid theme: " + theme);
    throw error;
  }
}
const SemanticColors = _mod589._private.SemanticColors;
const SemanticColorExperiments = _mod590._private.SemanticColorExperiments;
const RawColors = _mod591._private.RawColors;
const Shadows = _mod593._private.Shadows;
let closure_6 = Symbol("semanticColor");
const set = new Set(Object.values(ThemeTypes._private.Themes));
function clamp01(arg0) {
  return Math.min(1, Math.max(0, arg0));
}
let result = size.fileFinishedImporting("../discord_common/js/packages/tokens/native.tsx");

export default {
  themes: ThemeTypes.ThemeTypes,
  colors: mapValuesDefault(SemanticColors, (arg0, arg1) => ({ [closure_1_6]: arg1 })),
  unsafe_rawColors: RawColors,
  shadows: mapValuesDefault(Shadows, (arg0) => {
    let f86055 = (shadowOffset, arg1) => {
      shadowOffset = undefined;
      if (!arg1) {
        shadowOffset = shadowOffset.shadowOffset;
      }
      return shadowOffset;
    };
    f86055 = (shadowColorAndroid, arg1) =>
      arg1 ? shadowColorAndroid.shadowColorAndroid : shadowColorAndroid.shadowColor;
    f86055 = (shadowOpacity) => shadowOpacity.shadowOpacity;
    f86055 = (shadowRadius) => shadowRadius.shadowRadius;
    f86055 = (elevation) => elevation.elevation;
    return {
      shadowOffset: {
        resolve(isAndroid) {
          return f86055(require[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        },
      },
      shadowColor: {
        resolve(isAndroid) {
          return f86055(require[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        },
      },
      shadowOpacity: {
        resolve(isAndroid) {
          return f86055(require[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        },
      },
      shadowRadius: {
        resolve(isAndroid) {
          return f86055(require[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        },
      },
      elevation: {
        resolve(isAndroid) {
          return f86055(require[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        },
      },
    };
  }),
  radii: Radius.Radius,
  modules: mapValuesDefault(_mod592._private.Modules, (arg0) =>
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
    isSemanticColor(BACKGROUND_BASE_LOW) {
      let tmp = typeof BACKGROUND_BASE_LOW === "object";
      if (typeof BACKGROUND_BASE_LOW === "object") {
        tmp = null !== BACKGROUND_BASE_LOW;
      }
      if (tmp) {
        tmp = closure_6 in BACKGROUND_BASE_LOW;
      }
      return tmp;
    },
    getSemanticColorName(BACKGROUND_BASE_LOW) {
      return BACKGROUND_BASE_LOW[closure_6];
    },
    resolveSemanticColor(theme, BACKGROUND_SURFACE_HIGH, semanticColorContextFromThemeContext) {
      sanitizeTheme(theme);
      const category = tmp3.category;
      let result = RawColors[tmp4.raw];
      let opacity = tmp4.opacity;
      let enabledExperiments1;
      if (semanticColorContextFromThemeContext != null) {
        enabledExperiments1 = semanticColorContextFromThemeContext.enabledExperiments;
      }
      if (null != enabledExperiments1) {
        if (semanticColorContextFromThemeContext.enabledExperiments.length > 0) {
          if (null != SemanticColorExperiments[BACKGROUND_SURFACE_HIGH[closure_6]]) {
            const enabledExperiments = semanticColorContextFromThemeContext.enabledExperiments;
            for (const item10035 of enabledExperiments) {
              let tmp12;
              if (tmp8 != null) {
                let tmp14 = tmp8[tmp11];
                if (tmp14 != null) {
                  tmp12 = tmp14[arg0];
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
            const gradient = semanticColorContextFromThemeContext.gradient;
            if (gradient != null) {
              theme = gradient.theme;
            }
          }
          let tmp56 = null;
          if (null != theme) {
            tmp56 = tmp3.userProfileThemes[theme];
          }
          if (null != tmp56) {
            result = RawColors[tmp56.raw];
            opacity = tmp56.opacity;
          }
        }
        let num6;
        if (semanticColorContextFromThemeContext != null) {
          num6 = semanticColorContextFromThemeContext.contrast;
        }
        if (num6 == null) {
          num6 = 1;
        }
        let num7;
        if (semanticColorContextFromThemeContext != null) {
          num7 = semanticColorContextFromThemeContext.saturation;
        }
        if (num7 == null) {
          num7 = 1;
        }
        if (num7 < 1) {
          result = transforms.transformColorForReducedSaturation(result, category, num7);
        }
        if (1 !== num6) {
          const obj7 = transforms;
          result = obj7.transformColorContrast(result, category, theme, num6);
        }
        if (1 === opacity) {
          let hexResult = result;
        } else {
          const obj8 = _modDef683(result);
          hexResult = _modDef683(result).alpha(opacity).hex();
          const alphaResult = _modDef683(result).alpha(opacity);
        }
        return hexResult;
      }
      let gradient1;
      if (semanticColorContextFromThemeContext != null) {
        gradient1 = semanticColorContextFromThemeContext.gradient;
      }
      if (null != gradient1) {
        let gradient2 = null;
        if ("gradient" in tmp3) {
          gradient2 = tmp3.gradient;
        }
        let tmp22 = gradient2;
        let enabledExperiments3;
        if (semanticColorContextFromThemeContext != null) {
          enabledExperiments3 = semanticColorContextFromThemeContext.enabledExperiments;
        }
        if (null != enabledExperiments3) {
          if (semanticColorContextFromThemeContext.enabledExperiments.length > 0) {
            if (null != SemanticColorExperiments[BACKGROUND_SURFACE_HIGH[closure_6]]) {
              const enabledExperiments2 = semanticColorContextFromThemeContext.enabledExperiments;
              for (const item10067 of enabledExperiments2) {
                let gradient3;
                if (tmp26 != null) {
                  let tmp32 = tmp26[tmp29];
                  if (tmp32 != null) {
                    gradient3 = tmp32.gradient;
                  }
                }
                if (null != gradient3) {
                  tmp22 = gradient3;
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
          let num2 = 1;
          if (!semanticColorContextFromThemeContext.isProfileTheme) {
            let num = semanticColorContextFromThemeContext.gradient.unsupported_overlayOpacityMultiplier;
            if (num == null) {
              num = 1;
            }
            num2 = num;
          }
          const _Number = Number;
          let num3 = 1;
          if (Number.isFinite(num2)) {
            num3 = clamp01(num2);
          }
          if (tmp36.color in RawColors) {
            let tmp47 = RawColors[tmp36.color];
          } else if (semanticColorContextFromThemeContext != null) {
            tmp47 = semanticColorContextFromThemeContext.gradient.colors[tmp36.color];
          }
          const tmp46Result = _modDef683(tmp47);
          let result1 = tmp46Result;
          if ("saturation" in tmp36) {
            result1 = tmp46Result.set("hsl.s", tmp36.saturation);
          }
          let result2 = result1;
          if ("lightness" in tmp36) {
            const lightness = tmp36.lightness;
            let tmp50 = lightness;
            if (1 !== num3) {
              tmp50 = lightness;
              if (!tmp43) {
                tmp50 = lightness;
                if (typeof lightness === "number") {
                  tmp50 = lightness;
                  if (!("opacity" in tmp36)) {
                    tmp50 = lightness;
                    if (tmp49 ? lightness < 0.5 : lightness > 0.5) {
                      value = result1.get("hsl.l");
                      tmp50 = clamp01(value + (lightness - value) * num3);
                    }
                  }
                }
              }
            }
            result2 = result1.set("hsl.l", tmp50);
          }
          result = result2.hex();
          let num5 = 1;
          if ("opacity" in tmp36) {
            num5 = tmp36.opacity;
          }
          opacity = num5;
          let tmp53 = 1 !== num3;
          if (tmp53) {
            let str9 = "WHITE_500";
            if (tmp49) {
              str9 = "BLACK_500";
            }
            tmp53 = tmp36.color === str9;
          }
          if (tmp53) {
            tmp53 = "opacity" in tmp36;
          }
          if (tmp53) {
            tmp53 = !("lightness" in tmp36);
          }
          if (tmp53) {
            opacity = clamp01(tmp36.opacity * num3);
          }
        }
      }
    },
    adjustColorSaturation(result, saturation, generic) {
      return transforms.transformColorForReducedSaturation(result, generic, saturation);
    },
    adjustColorContrast(result, contrast, category, theme) {
      const obj = transforms;
      if (set.has(theme)) {
        return obj.transformColorContrast(result, category, theme, contrast);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Invalid theme: " + theme);
        throw error;
      }
    },
  },
};
export const Theme = ThemeTypes.ThemeTypes;
export const RawColor = RawColors;
export const SemanticColor = SemanticColors;
export const Shadow = Shadows;
