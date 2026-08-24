// === Module 712: Themes ===

// Module 712 (Themes)
import set from "set" /* 2 */;
import nDefault from "n" /* 689 */;
import items from "items" /* 713 */;
import _private from "_private" /* 714 */;
import _private2 from "_private" /* 715 */;
import _private3 from "_private" /* 716 */;
import _private4 from "_private" /* 717 */;
import _private5 from "_private" /* 718 */;
import mapValuesDefault from "mapValues" /* 719 */;
import Radius from "Radius" /* 806 */;
import Layout from "Layout" /* 807 */;
import interpolate from "interpolate" /* 808 */;

const Themes = items._private.Themes;
const SemanticColors = _private._private.SemanticColors;
const SemanticColorExperiments = _private2._private.SemanticColorExperiments;
const RawColors = _private3._private.RawColors;
const Shadows = _private5._private.Shadows;
let closure_7 = Symbol("semanticColor");
obj = {
  themes: Themes,
  colors: mapValuesDefault(SemanticColors, (arg0, arg1) => ({ [closure_7]: arg1 })),
  unsafe_rawColors: RawColors,
  shadows: mapValuesDefault(Shadows, (arg0) => {
    let f68688 = arg0;
    f68688 = (shadowOffset) => {
      shadowOffset = undefined;
      if (!arg1) {
        shadowOffset = shadowOffset.shadowOffset;
      }
      return shadowOffset;
    };
    let shadowOffset = {
      resolve(isAndroid) {
        return f68688(f68688[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
      }
    };
    f68688 = (shadowColorAndroid) => arg1 ? shadowColorAndroid.shadowColorAndroid : shadowColorAndroid.shadowColor;
    const shadowColor = {
      resolve(isAndroid) {
        return f68688(f68688[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
      }
    };
    f68688 = (shadowOpacity) => shadowOpacity.shadowOpacity;
    f68688 = (shadowRadius) => shadowRadius.shadowRadius;
    f68688 = (elevation) => elevation.elevation;
    return {
      shadowOffset,
      shadowColor,
      shadowOpacity: {
        resolve(isAndroid) {
          return f68688(f68688[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        }
      },
      shadowRadius: {
        resolve(isAndroid) {
          return f68688(f68688[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        }
      },
      elevation: {
        resolve(isAndroid) {
          return f68688(f68688[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
        }
      }
    };
  }),
  radii: Radius.Radius,
  modules: mapValuesDefault(_private4._private.Modules, (arg0) => mapValuesDefault(arg0, (arg0) => {
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
        obj[1] = density;
        return closure_0.resolve(obj);
      }
    };
  })),
  space: Layout.SpacePx,
  internal: obj
};
obj = {
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
        if (formatted in table) {
          tmp = table[formatted];
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("Invalid theme: " + theme);
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
        if (null != SemanticColorExperiments[TEXT_FEEDBACK_CRITICAL[tmp2]]) {
          enabledExperiments = semanticColorContextFromThemeContext.enabledExperiments;
          for (const item10035 of enabledExperiments) {
            let tmp12;
            if (tmp8 != null) {
              let tmp13 = item10035;
              let tmp14 = tmp8[tmp11];
              if (tmp14 != null) {
                tmp12 = tmp14[tmp];
              }
            }
            let tmp15 = tmp12;
            if (null != tmp12) {
              let tmp16 = RawColors;
              let tmp17 = RawColors;
              result = RawColors[tmp12.raw];
              opacity = tmp12.opacity;
              let tmp18 = obj;
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
        result = interpolate.transformColorForReducedSaturation(result, category, num3);
        const obj6 = interpolate;
      }
      if (1 !== num2) {
        const obj7 = interpolate;
        result = obj7.transformColorContrast(result, category, tmp, num2);
      }
      if (1 === opacity) {
        let hexResult = result;
      } else {
        const obj8 = nDefault(result);
        hexResult = nDefault(result).alpha(opacity).hex();
        const alphaResult = nDefault(result).alpha(opacity);
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
                let tmp31 = item10067;
                let tmp32 = tmp26[tmp29];
                if (tmp32 != null) {
                  gradient2 = tmp32.gradient;
                }
              }
              let tmp33 = gradient2;
              if (null != gradient2) {
                tmp22 = gradient2;
                let tmp34 = obj2;
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
        const tmp61Result = nDefault(tmp38);
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
        const tmp61 = nDefault;
      }
    }
  },
  adjustColorSaturation(result, saturation, generic) {
    return interpolate.transformColorForReducedSaturation(result, generic, saturation);
  },
  adjustColorContrast(result, contrast, category, theme) {
    return interpolate.transformColorContrast(result, category, theme, contrast);
  }
};
let result = set.fileFinishedImporting("../discord_common/js/packages/tokens/native.tsx");

export default obj;
export const Theme = Themes;
export const RawColor = RawColors;
export const SemanticColor = SemanticColors;
export const Shadow = Shadows;