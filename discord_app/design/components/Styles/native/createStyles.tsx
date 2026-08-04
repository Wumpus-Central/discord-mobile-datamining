import _slicedToArray from "_slicedToArray";
import { processColor } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import set from "maybeApplyNoTextColorForLightCustomTheme";

const require = arg1;
function createCacheKey(context) {
  const items = [...arguments];
  return items.join("");
}
function parseThemedStyles(obj, enabledExperiments) {
  let contrast;
  let saturation;
  let theme;
  ({ theme, saturation, contrast } = enabledExperiments);
  obj = {};
  for (const key10022 in arg0) {
    let tmp20 = key10022;
    let obj6 = arg0[key10022];
    let hasOwnPropertyResult;
    if (obj6 != null) {
      let tmp2 = closure_8;
      hasOwnPropertyResult = obj6.hasOwnProperty(closure_8);
    }
    let obj2 = obj6;
    if (hasOwnPropertyResult) {
      let tmp4 = closure_8;
      obj2 = obj6[closure_8](arg1);
    }
    let hasOwnPropertyResult1;
    if (obj2 != null) {
      hasOwnPropertyResult1 = obj2.hasOwnProperty("resolve");
    }
    if (hasOwnPropertyResult1) {
      obj = { theme: null, isAndroid: null, enabledExperiments: null, density: null };
      obj[0] = theme;
      let tmp18 = require;
      let tmp19 = dependencyMap;
      let obj5 = require(500) /* set */;
      obj[1] = obj5.isAndroid();
      enabledExperiments = arg1.enabledExperiments;
      if (enabledExperiments == null) {
        enabledExperiments = [];
      }
      obj[2] = enabledExperiments;
      let str4 = arg1.density;
      if (str4 == null) {
        str4 = "compact";
      }
      obj[3] = str4;
      obj[key10022] = obj2.resolve(obj);
      continue;
    } else {
      let tmp6 = importDefault;
      let tmp7 = dependencyMap;
      let internal = importDefault(712).internal;
      if (internal.isSemanticColor(obj2)) {
        let tmp16 = require;
        let obj3 = require(3990) /* getSemanticColorContextFromThemeContext */;
        let semanticColorContextFromThemeContext = obj3.getSemanticColorContextFromThemeContext(arg1);
        let internal4 = tmp6(712).internal;
        obj[key10022] = internal4.resolveSemanticColor(theme, obj2, semanticColorContextFromThemeContext);
        continue;
      } else {
        if (tmp) {
          let tmp8 = obj2;
          if (typeof obj2 !== "_iter") {
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
                let internal2 = tmp6(712).internal;
                result = internal2.adjustColorSaturation(obj2, saturation, str);
              }
              let adjustColorContrastResult = result;
              if (1 !== contrast) {
                let internal3 = tmp6(712).internal;
                let tmp11 = internal3;
                let tmp12 = result;
                let tmp13 = contrast;
                let tmp14 = str;
                let tmp15 = theme;
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
let set = new Set(["backgroundColor", "borderBottomColor", "borderColor", "borderEndColor", "borderLeftColor", "borderRightColor", "borderStartColor", "borderTopColor", "color", "outlineColor", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "elevation", "textDecorationColor", "textShadowColor", "tintColor"]);
let closure_8 = Symbol.for("dynamicToken");
let closure_10 = ["light", "darker", "midnight"];
let closure_11 = { code: "function createStylesTsx1(){const{resolvedStyles,withTiming,interpolateColor,themeIndex,stops,timingStandard}=this.__closure;const result={};for(const propertyName in resolvedStyles){const value=resolvedStyles[propertyName];if(Array.isArray(value)){result[propertyName]=withTiming(interpolateColor(themeIndex.get(),stops,value),timingStandard);}else{result[propertyName]=value;}}return result;}" };
let result = set.fileFinishedImporting("design/components/Styles/native/createStyles.tsx");

export const experimental_createToken = function experimental_createToken(arg0) {
  let closure_0 = arg0;
  return { [closure_8]: (arg0) => callback(arg0) };
};
export const createStyles = function createStyles(createCacheKey) {
  let closure_0 = createCacheKey;
  const map = new Map();
  let closure_2 = typeof createCacheKey === "find";
  return () => {
    let items = [...arguments];
    let themeContext;
    let obj;
    obj = createCacheKey(table[4]);
    themeContext = obj.useThemeContext();
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items, 0)] = themeContext.key;
    const tmp2 = outer1_7();
    const value = themeContext.get(tmp2);
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
      Object.defineProperties(obj, Object.fromEntries(keys.map((arg0) => {
        let closure_0 = arg0;
        let items = [
          arg0,
          {
            configurable: true,
            enumerable: true,
            get() {
              if (obj) {
                const items = [];
                HermesBuiltin.arraySpread(closure_0, 0);
                let applyResult = HermesBuiltin.apply(items, undefined);
              } else {
                applyResult = tmp2;
              }
              const tmpResult = outer3_9(applyResult[closure_0], outer1_1);
              Object.defineProperty(outer1_2, closure_0, { value: tmpResult, enumerable: true });
              return tmpResult;
            }
          }
        ];
        return items;
      })));
      const result = obj2.set(tmp2, obj);
      return obj;
    }
    obj2 = themeContext;
  };
};
export const createLegacyClassComponentStyles = function createLegacyClassComponentStyles(createCacheKey) {
  let closure_0 = createCacheKey;
  const map = new Map();
  return (key) => {
    const createCacheKey = key;
    const FALLBACK_THEME_CONTEXT_VALUE = createCacheKey(outer1_2[4]).FALLBACK_THEME_CONTEXT_VALUE;
    const value = obj.get(key.key);
    if (null != value) {
      return value;
    } else {
      obj = {};
      const _Object = Object;
      const keys = Object.keys(createCacheKey);
      const _Object2 = Object;
      const _Object3 = Object;
      Object.defineProperties(obj, Object.fromEntries(keys.map((arg0) => {
        let closure_0 = arg0;
        const items = [
          arg0,
          {
            configurable: true,
            enumerable: true,
            get() {
              const tmp = outer3_9(table[table], table);
              Object.defineProperty(outer1_1, table, { value: tmp, enumerable: true });
              return tmp;
            }
          }
        ];
        return items;
      })));
      const result = obj.set(key.key, obj);
      return obj;
    }
  };
};
export const useLegacyClassComponentStyles = function useLegacyClassComponentStyles(createCacheKey) {
  return createCacheKey(require(3997) /* ManaContext */.useThemeContext());
};
export const createStyleProperties = function createStyleProperties(createCacheKey) {
  let closure_0 = createCacheKey;
  const map = new Map();
  return () => {
    const items = [...arguments];
    const themeContext = createCacheKey(outer1_2[4]).useThemeContext();
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items, 0)] = themeContext.key;
    const tmp2 = outer1_7();
    const value = map.get(tmp2);
    if (null != value) {
      return value;
    } else {
      let applyResult = createCacheKey;
      if (typeof createCacheKey !== "three_button_mouse") {
        const items2 = [];
        HermesBuiltin.arraySpread(items, 0);
        applyResult = HermesBuiltin.apply(items2, undefined);
      }
      const tmp4Result = outer1_9(applyResult, themeContext);
      const result = obj2.set(tmp2, tmp4Result);
      return tmp4Result;
    }
    const obj = createCacheKey(outer1_2[4]);
    obj2 = map;
  };
};
export const processColorOrThrow = function processColorOrThrow(arg0) {
  const tmp = processColor(arg0);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unable to parse color: \"" + arg0 + "\"");
    throw error;
  } else {
    return tmp;
  }
};
export const createNativeStyleProperties = function createNativeStyleProperties(createCacheKey) {
  let closure_0 = createCacheKey;
  const map = new Map();
  return (theme) => {
    const substr = [...arguments].slice();
    let obj = createCacheKey(outer1_2[11]);
    let customBackgroundGradient = obj.getCustomBackgroundGradient();
    if (customBackgroundGradient == null) {
      customBackgroundGradient = outer1_6.gradientPreset;
    }
    if (customBackgroundGradient == null) {
      customBackgroundGradient = null;
    }
    if (null == customBackgroundGradient) {
      const items = [];
      let tmp2Result = tmp2(tmp3[12]);
      if (tmp2Result.isMobileVisualRefreshEnabled("createFakeThemedContext")) {
        items.push("mobile-visual-refresh");
      }
      let tmp8;
      if (items.length > 0) {
        tmp8 = items;
      }
      obj = {};
      const merged = Object.assign(tmp2(tmp3[4]).FALLBACK_THEME_CONTEXT_VALUE);
      obj.flags = 0;
      obj.saturation = outer1_5.saturation;
      obj.theme = theme;
      obj.enabledExperiments = tmp8;
      obj.gradient = customBackgroundGradient;
      const _JSON = JSON;
      obj = {};
      const json = JSON.stringify(obj);
      const merged1 = Object.assign(obj);
      obj.key = json;
      const items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(substr, 0);
      items1[arraySpreadResult] = obj.key;
      const applyResult = HermesBuiltin.apply(items1, undefined);
      const value = map.get(applyResult);
      if (null != value) {
        return value;
      } else {
        let applyResult1 = createCacheKey;
        if (typeof createCacheKey !== "three_button_mouse") {
          const items2 = [];
          arraySpreadResult = HermesBuiltin.arraySpread(substr, 0);
          applyResult1 = HermesBuiltin.apply(items2, undefined);
        }
        const tmp34Result = outer1_9(applyResult1, obj);
        for (const key10073 in tmp34Result) {
          let tmp41 = key10073;
          let tmp42 = tmp34Result[key10073];
          let tmp43 = outer1_4;
          let tmp44 = outer1_4(tmp42);
          if (null == tmp44) {
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str4 = "\"";
            let str5 = "Unable to parse color: \"";
            let tmp28 = new.target;
            let tmp29 = new.target;
            let error = new Error("Unable to parse color: \"" + tmp42 + "\"");
            let tmp31 = error;
            throw error;
          } else {
            tmp34Result[key10073] = tmp44;
            continue;
          }
        }
        const result = map.set(applyResult, tmp34Result);
        return tmp34Result;
      }
    } else {
      tmp2Result = tmp2(tmp3[4]);
      if ("light" === customBackgroundGradient.theme) {
        let MOBILE_DARK_GRADIENT_THEME_ENABLED = tmp2(tmp3[4]).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
      } else {
        MOBILE_DARK_GRADIENT_THEME_ENABLED = tmp2(tmp3[4]).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED;
      }
      tmp2Result.setThemeFlag(0, MOBILE_DARK_GRADIENT_THEME_ENABLED);
    }
  };
};
export const createAnimatedThemedStyles = function createAnimatedThemedStyles(createCacheKey, items) {
  let arr = items;
  if (items === undefined) {
    arr = closure_10;
  }
  let _slicedToArray;
  let map;
  items = [];
  let obj = {};
  for (const key10007 in arg0) {
    let tmp3 = key10007;
    let tmp4 = arg0[key10007];
    let tmp5 = items;
    let tmp6 = obj;
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
  _slicedToArray = arr.map((arg0, arg1) => arg1);
  map = new Map();
  return (themeIndex) => {
    let callback;
    let closure_0 = themeIndex;
    obj = arr(obj[4]);
    const themeContext = obj.useThemeContext();
    const value = map.get(themeContext.key);
    const items = value;
    let tmp3 = value;
    if (null == value) {
      let enabledExperiments = themeContext.enabledExperiments;
      if (enabledExperiments == null) {
        enabledExperiments = [];
      }
      obj = { enabledExperiments: null, saturation: null, contrast: null };
      obj[0] = enabledExperiments;
      let num2 = 1;
      if (null == themeContext.primaryColor) {
        let num3 = themeContext.saturation;
        if (num3 == null) {
          num3 = 1;
        }
        num2 = num3;
      }
      obj[1] = num2;
      let num4 = 1;
      if (null == themeContext.primaryColor) {
        let num5 = themeContext.contrast;
        if (num5 == null) {
          num5 = 1;
        }
        num4 = num5;
      }
      obj[2] = num4;
      obj = {};
      const merged = Object.assign(obj);
      class S {
        constructor() {
          obj = {};
          for (const key10005 in closure_4) {
            tmp6 = key10005;
            tmp7 = closure_4;
            tmp8 = closure_4[key10005];
            _Array = Array;
            if (Array.isArray(tmp8)) {
              tmp = closure_0;
              tmp2 = outer2_2;
              obj2 = closure_0(outer2_2[9]);
              obj3 = closure_0(outer2_2[8]);
              tmp3 = closure_0;
              tmp4 = outer1_3;
              interpolateColorResult = obj3.interpolateColor(closure_0.get(), outer1_3, tmp8);
              obj[key10005] = obj2.withTiming(interpolateColorResult, closure_0(outer2_2[10]).timingStandard);
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
        const themeIndex = arg0;
        closure_1[_slicedToArray] = themeIndex.map((theme) => {
          const internal = items(obj[6]).internal;
          return internal.resolveSemanticColor(theme, closure_0, outer1_2);
        });
      }
      const tmp9 = items[Symbol.iterator]();
      while (tmp9 !== undefined) {
        let tmp13 = callback;
        let tmp14 = callback(tmp11, 2);
        callback = tmp14[0];
        let _loopResult = _loop(tmp14[1]);
        continue;
      }
      const result = map.set(themeContext.key, obj);
      tmp3 = obj;
      let tmp7 = items;
    }
    class S {
      constructor() {
        obj = {};
        for (const key10005 in closure_4) {
          tmp6 = key10005;
          tmp7 = closure_4;
          tmp8 = closure_4[key10005];
          _Array = Array;
          if (Array.isArray(tmp8)) {
            tmp = closure_0;
            tmp2 = outer2_2;
            obj2 = closure_0(outer2_2[9]);
            obj3 = closure_0(outer2_2[8]);
            tmp3 = closure_0;
            tmp4 = outer1_3;
            interpolateColorResult = obj3.interpolateColor(closure_0.get(), outer1_3, tmp8);
            obj[key10005] = obj2.withTiming(interpolateColorResult, closure_0(outer2_2[10]).timingStandard);
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
    S.__closure = { resolvedStyles: tmp3, withTiming: arr(obj[9]).withTiming, interpolateColor: arr(obj[8]).interpolateColor, themeIndex, stops: callback, timingStandard: arr(obj[10]).timingStandard };
    S.__workletHash = 6815805628278;
    S.__initData = outer1_11;
    return obj4.useAnimatedStyle(S);
  };
};