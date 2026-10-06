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
    const self = this;
    const self2 = this;
    const error = new Error("Invalid theme: " + theme);
    throw error;
  }
}
const Themes = ThemeTypes._private.Themes;
const SemanticColors = _mod589._private.SemanticColors;
const SemanticColorExperiments = _mod590._private.SemanticColorExperiments;
const RawColors = _mod591._private.RawColors;
const Modules = _mod592._private.Modules;
const Shadows = _mod593._private.Shadows;
let closure_6 = Symbol("semanticColor");
const set = new Set(Object.values(Themes));
let obj = {
  themes: ThemeTypes.ThemeTypes,
  colors: mapValuesDefault(SemanticColors, (arg0, arg1) => ({ [closure_1_6]: arg1 })),
  unsafe_rawColors: RawColors,
  shadows: mapValuesDefault(Shadows, (arg0) => {
    function resolve(isAndroid) {
      return f81659(closure_0[isAndroid.theme].nativeStyles, isAndroid.isAndroid);
    }
    let closure_0 = arg0;
    const f81655 = (shadowOffset, arg1) => {
      shadowOffset = undefined;
      if (!arg1) {
        shadowOffset = shadowOffset.shadowOffset;
      }
      return shadowOffset;
    };
    const f81656 = (shadowColorAndroid, arg1) =>
      arg1 ? shadowColorAndroid.shadowColorAndroid : shadowColorAndroid.shadowColor;
    const f81657 = (shadowOpacity) => shadowOpacity.shadowOpacity;
    const f81658 = (shadowRadius) => shadowRadius.shadowRadius;
    const f81659 = (elevation) => elevation.elevation;
    return {
      shadowOffset: { resolve },
      shadowColor: { resolve },
      shadowOpacity: { resolve },
      shadowRadius: { resolve },
      elevation: { resolve },
    };
  }),
  radii: Radius.Radius,
  modules: mapValuesDefault(Modules, (arg0) =>
    mapValuesDefault(arg0, (arg0) => {
      let resolve = arg0;
      let obj = {
        resolve(arg0) {
          let density;
          let enabledExperiments;
          ({ enabledExperiments, density } = arg0);
          resolve = resolve.resolve;
          if (enabledExperiments == null) {
            enabledExperiments = [];
          }
          const obj = { enabledExperiments, density };
          if (density == null) {
            density = "compact";
          }
          return resolve(obj);
        },
      };
      return obj;
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
    resolveSemanticColor(theme, TEXT_FEEDBACK_CRITICAL, semanticColorContextFromThemeContext) {
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
          if (null != SemanticColorExperiments[TEXT_FEEDBACK_CRITICAL[closure_6]]) {
            const enabledExperiments = semanticColorContextFromThemeContext.enabledExperiments;
            for (const item10035 of enabledExperiments) {
              let tmp12;
              if (tmp8 != null) {
                let tmp14 = tmp8[tmp11];
                if (tmp14 != null) {
                  tmp12 = tmp14[theme];
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
        let hexResult;
        if ("userProfileThemes" in SemanticColors[TEXT_FEEDBACK_CRITICAL[closure_6]]) {
          theme = undefined;
          const userProfileThemes = tmp3.userProfileThemes;
          if (semanticColorContextFromThemeContext != null) {
            const gradient = semanticColorContextFromThemeContext.gradient;
            if (gradient != null) {
              theme = gradient.theme;
            }
          }
          let tmp41 = null;
          if (null != theme) {
            tmp41 = userProfileThemes[theme];
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
          const obj6 = transforms;
          result = obj6.transformColorForReducedSaturation(result, category, num3);
        }
        if (1 !== num2) {
          const obj7 = transforms;
          result = obj7.transformColorContrast(result, category, theme, num2);
        }
        if (1 === opacity) {
          hexResult = result;
        } else {
          const obj8 = _modDef683(result);
          const alphaResult = obj8.alpha(opacity);
          hexResult = alphaResult.hex();
        }
        return hexResult;
      }
      let gradient1;
      if (semanticColorContextFromThemeContext != null) {
        gradient1 = semanticColorContextFromThemeContext.gradient;
      }
      if (null != gradient1) {
        let gradient2 = null;
        if ("gradient" in SemanticColors[TEXT_FEEDBACK_CRITICAL[closure_6]]) {
          gradient2 = tmp3.gradient;
        }
        let tmp22 = gradient2;
        let enabledExperiments3;
        if (semanticColorContextFromThemeContext != null) {
          enabledExperiments3 = semanticColorContextFromThemeContext.enabledExperiments;
        }
        if (null != enabledExperiments3) {
          if (semanticColorContextFromThemeContext.enabledExperiments.length > 0) {
            if (null != SemanticColorExperiments[TEXT_FEEDBACK_CRITICAL[closure_6]]) {
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
          let tmp38;
          const tmp61 = _modDef683;
          if (tmp36.color in RawColors) {
            tmp38 = tmp62[tmp36.color];
          } else if (semanticColorContextFromThemeContext != null) {
            tmp38 = semanticColorContextFromThemeContext.gradient.colors[tmp36.color];
          }
          const tmp61Result = tmp61(tmp38);
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
      const obj = transforms;
      return obj.transformColorForReducedSaturation(result, generic, saturation);
    },
    adjustColorContrast(result, contrast, category, theme) {
      const transformColorContrast = transforms.transformColorContrast;
      if (set.has(theme)) {
        return transformColorContrast(result, category, theme, contrast);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Invalid theme: " + theme);
        throw error;
      }
    },
  },
};
let result = size.fileFinishedImporting("../discord_common/js/packages/tokens/native.tsx");

export default obj;
export const Theme = ThemeTypes.ThemeTypes;
export const RawColor = RawColors;
export const SemanticColor = SemanticColors;
export const Shadow = Shadows;
