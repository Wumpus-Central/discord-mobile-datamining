// discord_app/design/components/Styles/native/createStyles.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import SemanticColorContext from "../../../tokens/native/SemanticColorContext.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import MobileThemesUtils from "../../../../modules/client_themes/native/MobileThemesUtils.tsx";
import timing from "../../../animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import AccessibilityStore from "../../../../modules/a11y/AccessibilityStore.tsx";
import ClientThemesBackgroundStore from "../../../../modules/client_themes/ClientThemesBackgroundStore.tsx";

require = fn;
function createCacheKey() {
  const items = [...arguments];
  return items.join("");
}
function parseThemedStyles(obj, enabledExperiments) {
  ({ theme, saturation, contrast } = enabledExperiments);
  obj = {};
  for (const key10022 in arg0) {
    let obj6 = arg0[key10022];
    let hasOwnPropertyResult;
    if (obj6 != null) {
      hasOwnPropertyResult = obj6.hasOwnProperty(closure_8);
    }
    let obj2 = obj6;
    if (hasOwnPropertyResult) {
      obj2 = obj6[closure_8](arg1);
    }
    let hasOwnPropertyResult1;
    if (obj2 != null) {
      hasOwnPropertyResult1 = obj2.hasOwnProperty("resolve");
    }
    if (hasOwnPropertyResult1) {
      obj = { theme, isAndroid: null, enabledExperiments: null, density: null };
      let obj5 = PlatformUtils;
      obj.isAndroid = obj5.isAndroid();
      enabledExperiments = arg1.enabledExperiments;
      if (enabledExperiments == null) {
        enabledExperiments = [];
      }
      obj.enabledExperiments = enabledExperiments;
      let str4 = arg1.density;
      if (str4 == null) {
        str4 = "compact";
      }
      obj.density = str4;
      obj[key10022] = obj2.resolve(obj);
      continue;
    } else {
      let tmp6 = importDefault;
      let internal = nativeDefault.internal;
      if (internal.isSemanticColor(obj2)) {
        let obj3 = SemanticColorContext;
        let semanticColorContextFromThemeContext = obj3.getSemanticColorContextFromThemeContext(arg1);
        let internal4 = tmp6(576).internal;
        obj[key10022] = internal4.resolveSemanticColor(theme, obj2, semanticColorContextFromThemeContext);
        continue;
      } else {
        if (tmp) {
          let tmp8 = obj2;
          if (typeof obj2 === "string") {
            tmp8 = obj2;
            if ("#" === obj2[0]) {
              let str = "background";
              if ("backgroundColor" !== key10022) {
                let str2 = "border";
                if ("borderColor" !== key10022) {
                  let str3 = "generic";
                  if ("color" === key10022) {
                    str3 = "text";
                  }
                  str2 = str3;
                }
                str = str2;
              }
              let result = obj2;
              if (tmp) {
                let internal2 = tmp6(576).internal;
                result = internal2.adjustColorSaturation(obj2, saturation, str);
              }
              let adjustColorContrastResult = result;
              if (1 !== contrast) {
                let internal3 = tmp6(576).internal;
                adjustColorContrastResult = internal3.adjustColorContrast(result, contrast, str, theme);
              }
              tmp8 = adjustColorContrastResult;
            }
          }
        } else {
          tmp8 = obj2;
        }
        obj[key10022] = tmp8;
        continue;
      }
      continue;
    }
    continue;
  }
  return obj;
}
const processColor = fn(17).processColor;
new Set([
  "backgroundColor",
  "borderBottomColor",
  "borderColor",
  "borderEndColor",
  "borderLeftColor",
  "borderRightColor",
  "borderStartColor",
  "borderTopColor",
  "color",
  "outlineColor",
  "shadowColor",
  "shadowOffset",
  "shadowOpacity",
  "shadowRadius",
  "elevation",
  "textDecorationColor",
  "textShadowColor",
  "tintColor",
]);
let closure_8 = Symbol.for("dynamicToken");
let closure_10 = ["light", "darker", "midnight"];
let closure_11 = {
  code: "function createStylesTsx1(){const{resolvedStyles,withTiming,interpolateColor,themeIndex,stops,timingStandard}=this.__closure;const result={};for(const propertyName in resolvedStyles){const value=resolvedStyles[propertyName];if(Array.isArray(value)){result[propertyName]=withTiming(interpolateColor(themeIndex.get(),stops,value),timingStandard);}else{result[propertyName]=value;}}return result;}",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Styles/native/createStyles.tsx");

export const experimental_createToken = function experimental_createToken(arg0) {
  closure_0 = arg0;
  return { [closure_1_8]: (arg0) => closure_0(arg0) };
};
export const createStyles = function createStyles(createStyles) {
  const map = new Map();
  closure_2 = typeof createStyles === "function";
  return () => {
    let items = [...arguments];
    let obj = createStyles(closure_2[4]);
    const themeContext = obj.useThemeContext();
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items, 0)] = themeContext.key;
    const tmp2 = createCacheKey();
    value = themeContext.get(tmp2);
    if (null != value) {
      return value;
    } else {
      obj = {};
      const _Object3 = Object;
      if (obj) {
        const items2 = [];
        HermesBuiltin.arraySpread(items, 0);
        keys = keys(HermesBuiltin.apply(items2, undefined));
      } else {
        keys = keys(tmp13);
      }
      const _Object = Object;
      const _Object2 = Object;
      Object.defineProperties(
        obj,
        Object.fromEntries(
          keys.map((item) => {
            closure_0 = item;
            items = [
              item,
              {
                configurable: true,
                enumerable: true,
                get() {
                  if (closure_2) {
                    items = [];
                    HermesBuiltin.arraySpread(items, 0);
                    let applyResult = HermesBuiltin.apply(items, undefined);
                  } else {
                    applyResult = tmp2;
                  }
                  const tmpResult = parseThemedStyles(applyResult[closure_0], themeContext);
                  Object.defineProperty(obj, closure_0, { value: tmpResult, enumerable: true });
                  return tmpResult;
                },
              },
            ];
            return items;
          }),
        ),
      );
      const result = obj2.set(tmp2, obj);
      return obj;
    }
    obj2 = themeContext;
  };
};
export const createLegacyClassComponentStyles = function createLegacyClassComponentStyles(createStyles) {
  const map = new Map();
  return (key) => {
    createStyles = key;
    const FALLBACK_THEME_CONTEXT_VALUE = createStyles(dependencyMap[4]).FALLBACK_THEME_CONTEXT_VALUE;
    value = obj.get(key.key);
    if (null != value) {
      return value;
    } else {
      obj = {};
      const _Object = Object;
      const keys = Object.keys(createStyles);
      const _Object2 = Object;
      const _Object3 = Object;
      Object.defineProperties(
        obj,
        Object.fromEntries(
          keys.map((item) => {
            const items = [
              item,
              {
                configurable: true,
                enumerable: true,
                get() {
                  const tmp = parseThemedStyles(item[item], item);
                  Object.defineProperty(obj, item, { value: tmp, enumerable: true });
                  return tmp;
                },
              },
            ];
            return items;
          }),
        ),
      );
      const result = obj.set(key.key, obj);
      return obj;
    }
  };
};
export const useLegacyClassComponentStyles = function useLegacyClassComponentStyles(createStyles) {
  return createStyles(native.useThemeContext());
};
export const createStyleProperties = function createStyleProperties(createStyles) {
  closure_0 = createStyles;
  const map = new Map();
  return () => {
    const items = [...arguments];
    const themeContext = native.useThemeContext();
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items, 0)] = themeContext.key;
    const tmp2 = createCacheKey();
    value = map.get(tmp2);
    if (null != value) {
      return value;
    } else {
      let applyResult = closure_0;
      if (typeof closure_0 === "function") {
        const items2 = [];
        HermesBuiltin.arraySpread(items, 0);
        applyResult = HermesBuiltin.apply(items2, undefined);
      }
      const tmp4Result = parseThemedStyles(applyResult, themeContext);
      const result = obj2.set(tmp2, tmp4Result);
      return tmp4Result;
    }
    obj2 = map;
  };
};
export const processColorOrThrow = function processColorOrThrow(arg0) {
  const tmp = processColor(arg0);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error('Unable to parse color: "' + arg0 + '"');
    throw error;
  } else {
    return tmp;
  }
};
export const createNativeStyleProperties = function createNativeStyleProperties(createStyles) {
  closure_0 = createStyles;
  const map = new Map();
  return (theme) => {
    const substr = [...arguments].slice();
    let obj = MobileThemesUtils;
    let customBackgroundGradient = obj.getCustomBackgroundGradient();
    if (customBackgroundGradient == null) {
      customBackgroundGradient = ClientThemesBackgroundStore.gradientPreset;
    }
    if (customBackgroundGradient == null) {
      customBackgroundGradient = null;
    }
    if (null == customBackgroundGradient) {
      obj = {};
      const merged = Object.assign(tmp2(4271).FALLBACK_THEME_CONTEXT_VALUE);
      obj.flags = 0;
      obj.saturation = AccessibilityStore.saturation;
      obj.theme = theme;
      obj.enabledExperiments = ["mobile-visual-refresh"];
      obj.gradient = customBackgroundGradient;
      const _JSON = JSON;
      obj = {};
      const json = JSON.stringify(obj);
      const merged1 = Object.assign(obj);
      obj.key = json;
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(substr, 0);
      items[arraySpreadResult] = obj.key;
      const applyResult = HermesBuiltin.apply(items, undefined);
      value = map.get(applyResult);
      if (null != value) {
        return value;
      } else {
        let applyResult1 = closure_0;
        if (typeof closure_0 === "function") {
          const items1 = [];
          arraySpreadResult = HermesBuiltin.arraySpread(substr, 0);
          applyResult1 = HermesBuiltin.apply(items1, undefined);
        }
        const tmp32Result = parseThemedStyles(applyResult1, obj);
        for (const key10062 in tmp32Result) {
          let tmp40 = tmp32Result[key10062];
          let tmp42 = processColor(tmp40);
          if (null == tmp42) {
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str2 = '"';
            let str3 = 'Unable to parse color: "';
            let tmp26 = new.target;
            let tmp27 = new.target;
            let error = new Error('Unable to parse color: "' + tmp40 + '"');
            throw error;
          } else {
            tmp32Result[key10062] = tmp42;
            continue;
          }
        }
        const result = map.set(applyResult, tmp32Result);
        return tmp32Result;
      }
    } else {
      if ("light" === customBackgroundGradient.theme) {
        let MOBILE_DARK_GRADIENT_THEME_ENABLED = tmp2(4271).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
      } else {
        MOBILE_DARK_GRADIENT_THEME_ENABLED = tmp2(4271).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED;
      }
      tmp2(4271).setThemeFlag(0, MOBILE_DARK_GRADIENT_THEME_ENABLED);
      const tmp2Result = tmp2(4271);
    }
  };
};
export const createAnimatedThemedStyles = function createAnimatedThemedStyles(createStyles, items) {
  let arr = items;
  if (items === undefined) {
    arr = closure_10;
  }
  let stops;
  let map;
  items = [];
  let obj = {};
  for (const key10007 in arg0) {
    let tmp4 = arg0[key10007];
    let internal = items(obj[6]).internal;
    if (internal.isSemanticColor(tmp4)) {
      let items1 = [key10007, tmp4];
      arr = items.push(items1);
      continue;
    } else {
      obj[key10007] = tmp4;
      continue;
    }
    continue;
  }
  stops = arr.map((item, index) => index);
  map = new Map();
  return (themeIndex) => {
    obj = arr(obj[4]);
    const themeContext = obj.useThemeContext();
    value = obj.get(themeContext.key);
    items = value;
    let tmp3 = value;
    if (null == value) {
      let enabledExperiments = themeContext.enabledExperiments;
      if (enabledExperiments == null) {
        enabledExperiments = [];
      }
      obj = { enabledExperiments, saturation: null, contrast: null };
      let num2 = 1;
      if (null == themeContext.primaryColor) {
        let num3 = themeContext.saturation;
        if (num3 == null) {
          num3 = 1;
        }
        num2 = num3;
      }
      obj.saturation = num2;
      let num4 = 1;
      if (null == themeContext.primaryColor) {
        let num5 = themeContext.contrast;
        if (num5 == null) {
          num5 = 1;
        }
        num4 = num5;
      }
      obj.contrast = num4;
      obj = {};
      const merged = Object.assign(obj);
      class T {
        constructor() {
          obj = {};
          for (const key10005 in closure_4) {
            tmp6 = key10005;
            tmp7 = closure_4;
            tmp8 = closure_4[key10005];
            _Array = Array;
            if (Array.isArray(tmp8)) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj2 = closure_0(closure_2[9]);
              obj3 = closure_0(closure_2[8]);
              tmp3 = closure_0;
              tmp4 = closure_3;
              interpolateColorResult = obj3.interpolateColor(closure_0.get(), closure_3, tmp8);
              obj[key10005] = obj2.withTiming(interpolateColorResult, closure_0(closure_2[10]).timingStandard);
              continue;
            } else {
              obj[key10005] = tmp8;
              continue;
            }
            continue;
          }
          return obj;
        }
      }
      function _loop(arg0) {
        themeIndex = arg0;
        closure_1[closure_3] = themeIndex.map((item) => {
          const internal = nativeDefault.internal;
          return internal.resolveSemanticColor(item, closure_0, obj);
        });
      }
      const tmp9 = items[Symbol.iterator]();
      while (tmp9 !== undefined) {
        let tmp14 = stops(tmp11, 2);
        stops = tmp14[0];
        let _loopResult = _loop(tmp14[1]);
        continue;
      }
      const result = obj.set(themeContext.key, obj);
      tmp3 = obj;
    }
    obj = tmp3;
    class T {
      constructor() {
        obj = {};
        for (const key10005 in closure_4) {
          tmp6 = key10005;
          tmp7 = closure_4;
          tmp8 = closure_4[key10005];
          _Array = Array;
          if (Array.isArray(tmp8)) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj2 = closure_0(closure_2[9]);
            obj3 = closure_0(closure_2[8]);
            tmp3 = closure_0;
            tmp4 = closure_3;
            interpolateColorResult = obj3.interpolateColor(closure_0.get(), closure_3, tmp8);
            obj[key10005] = obj2.withTiming(interpolateColorResult, closure_0(closure_2[10]).timingStandard);
            continue;
          } else {
            obj[key10005] = tmp8;
            continue;
          }
          continue;
        }
        return obj;
      }
    }
    const obj4 = arr(obj[8]);
    T.__closure = {
      resolvedStyles: tmp3,
      withTiming: arr(obj[9]).withTiming,
      interpolateColor: arr(obj[8]).interpolateColor,
      themeIndex,
      stops,
      timingStandard: arr(obj[10]).timingStandard,
    };
    T.__workletHash = 6815805628278;
    T.__initData = __initData;
    return obj4.useAnimatedStyle(T);
  };
};
