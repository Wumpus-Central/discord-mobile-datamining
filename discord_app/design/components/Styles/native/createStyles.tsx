// === Module 4890: createStyles ===

// Module 4890 (createStyles)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import SemanticColorContext from "SemanticColorContext" /* 4581 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import MobileThemesUtils from "MobileThemesUtils" /* 4788 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4697 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, map;

function createCacheKey() {
  items = [...arguments];
  return items.join("");
}
function parseThemedStyles(applyResult, enabledExperiments) {
  let contrast;
  let saturation;
  let theme;
  ({ theme, saturation, contrast } = enabledExperiments);
  const obj = {};
  for (const key10022 in applyResult) {
    let obj6 = applyResult[key10022];
    let hasOwnPropertyResult;
    if (obj6 != null) {
      hasOwnPropertyResult = obj6.hasOwnProperty(closure_8);
    }
    let obj2 = obj6;
    if (hasOwnPropertyResult) {
      obj2 = obj6[closure_8](enabledExperiments);
    }
    let hasOwnPropertyResult1;
    if (obj2 != null) {
      hasOwnPropertyResult1 = obj2.hasOwnProperty("resolve");
    }
    if (hasOwnPropertyResult1) {
      let obj4 = { theme, isAndroid: obj5.isAndroid(), enabledExperiments, density: str4 };
      let resolve = obj2.resolve;
      let obj5 = PlatformUtils;
      enabledExperiments = enabledExperiments.enabledExperiments ?? [];
      let str4 = enabledExperiments.density ?? "compact";
      obj[key10022] = resolve(obj4);
      continue;
    } else {
      let internal = nativeDefault.internal;
      if (internal.isSemanticColor(obj2)) {
        let obj3 = SemanticColorContext;
        let semanticColorContextFromThemeContext = obj3.getSemanticColorContextFromThemeContext(enabledExperiments);
        let internal4 = nativeDefault.internal;
        obj[key10022] = internal4.resolveSemanticColor(theme, obj2, semanticColorContextFromThemeContext);
        continue;
      } else {
        let tmp8;
        if (tmp) {
          tmp8 = obj2;
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
                let internal2 = nativeDefault.internal;
                result = internal2.adjustColorSaturation(obj2, saturation, str);
              }
              let adjustColorContrastResult = result;
              if (1 !== contrast) {
                let internal3 = nativeDefault.internal;
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
const processColor = react_native.processColor;
new Set(["backgroundColor", "borderBottomColor", "borderColor", "borderEndColor", "borderLeftColor", "borderRightColor", "borderStartColor", "borderTopColor", "color", "outlineColor", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "elevation", "textDecorationColor", "textShadowColor", "tintColor"]);
let closure_8 = Symbol.for("dynamicToken");
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((fn) => {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = native;
  const themeContext = obj2.useThemeContext();
  if (cResult[0] === themeContext) {
    let tmp3;
    if (cResult[1] === fn) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = fn(themeContext);
  cResult[0] = themeContext;
  cResult[1] = fn;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((fn) => {
  const obj = native;
  return fn(obj.useThemeContext());
});
function processColorOrThrow(arg0) {
  const tmp = processColor(arg0);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unable to parse color: \"" + arg0 + "\"");
    throw error;
  } else {
    return tmp;
  }
}
let items = [nativeDefault.themes.LIGHT, nativeDefault.themes.DARK, nativeDefault.themes.ONYX];
let closure_11 = { code: "function createStylesTsx1(){const{resolvedStyles,withTiming,interpolateColor,themeIndex,stops,timingStandard}=this.__closure;const result={};for(const propertyName_0 in resolvedStyles){const value=resolvedStyles[propertyName_0];if(Array.isArray(value)){result[propertyName_0]=withTiming(interpolateColor(themeIndex.get(),stops,value),timingStandard);}else{result[propertyName_0]=value;}}return result;}" };
let closure_12 = { code: "function createStylesTsx2(){const{resolvedStyles,withTiming,interpolateColor,themeIndex,stops,timingStandard}=this.__closure;const result={};for(const propertyName_0 in resolvedStyles){const value=resolvedStyles[propertyName_0];if(Array.isArray(value)){result[propertyName_0]=withTiming(interpolateColor(themeIndex.get(),stops,value),timingStandard);}else{result[propertyName_0]=value;}}return result;}" };
let result = size.fileFinishedImporting("design/components/Styles/native/createStyles.tsx");

export const experimental_createToken = function experimental_createToken(arg0) {
  let closure_0 = arg0;
  return { [closure_1_8]: (arg0) => closure_0(arg0) };
};
export const createStyles = function createStyles(rect) {
  let closure_2;
  _require = rect;
  map = new Map();
  dependencyMap = typeof rect === "function";
  let obj = require("ReactCompilerGating");
  return obj.isReactCompilerEnabled() ? (() => {
    items = [...arguments];
    let obj4;
    items = undefined;
    const obj = rect(closure_2[5]);
    const cResult = obj.c(4);
    const obj2 = rect(closure_2[6]);
    const themeContext = obj2.useThemeContext();
    if (cResult[0] === items) {
      let tmp5;
      let tmp4;
      if (cResult[1] === themeContext) {
        obj4 = cResult[2];
        tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (tmp5 !== Symbol.for("react.early_return_sentinel")) {
        tmp4 = tmp5;
      }
      return tmp4;
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items1, items, 0)] = themeContext.key;
    const forResult = Symbol.for("react.early_return_sentinel");
    const tmp7 = createCacheKey();
    const value = items.get(tmp7);
    let tmp9 = value;
    let tmp10;
    const obj3 = items;
    if (null == value) {
      let keys1;
      obj4 = {};
      const _Object = Object;
      if (themeContext) {
        const items2 = [];
        HermesBuiltin.arraySpread(items2, items, 0);
        keys1 = keys(HermesBuiltin.apply(tmp12, items2, undefined));
      } else {
        keys1 = keys(tmp12);
      }
      const _Object2 = Object;
      const _Object3 = Object;
      Object.defineProperties(obj4, Object.fromEntries(keys1.map((item) => {
        let closure_0 = item;
        items = [
          item,
          {
            configurable: true,
            enumerable: true,
            get() {
              let applyResult;
              if (closure_2) {
                items = [];
                HermesBuiltin.arraySpread(items, items, 0);
                applyResult = HermesBuiltin.apply(rect, items, undefined);
              } else {
                applyResult = rect;
              }
              const tmp2Result = parseThemedStyles(applyResult[rect], themeContext);
              Object.defineProperty(obj4, rect, { value: tmp2Result, enumerable: true });
              return tmp2Result;
            }
          }
        ];
        return items;
      })));
      const result = obj3.set(tmp7, obj4);
      tmp9 = forResult;
      tmp10 = obj4;
    }
    cResult[0] = items;
    cResult[1] = themeContext;
    cResult[2] = tmp10;
    cResult[3] = tmp9;
    tmp5 = tmp9;
    tmp4 = tmp10;
  }) : (() => {
    items = [...arguments];
    let obj3;
    const obj = rect(closure_2[6]);
    const themeContext = obj.useThemeContext();
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items1, items, 0)] = themeContext.key;
    const tmp3 = createCacheKey();
    const value = themeContext.get(tmp3);
    const obj2 = themeContext;
    if (null != value) {
      return value;
    } else {
      let keys1;
      obj3 = {};
      const _Object3 = Object;
      if (obj3) {
        const items2 = [];
        HermesBuiltin.arraySpread(items2, items, 0);
        keys1 = keys(HermesBuiltin.apply(tmp14, items2, undefined));
      } else {
        keys1 = keys(tmp14);
      }
      const _Object = Object;
      const _Object2 = Object;
      Object.defineProperties(obj3, Object.fromEntries(keys1.map((item) => {
        let closure_0 = item;
        items = [
          item,
          {
            configurable: true,
            enumerable: true,
            get() {
              let applyResult;
              if (closure_2) {
                items = [];
                HermesBuiltin.arraySpread(items, items, 0);
                applyResult = HermesBuiltin.apply(rect, items, undefined);
              } else {
                applyResult = rect;
              }
              const tmp2Result = parseThemedStyles(applyResult[rect], themeContext);
              Object.defineProperty(obj3, rect, { value: tmp2Result, enumerable: true });
              return tmp2Result;
            }
          }
        ];
        return items;
      })));
      const result = obj2.set(tmp3, obj3);
      return obj3;
    }
  });
};
export const createLegacyClassComponentStyles = function createLegacyClassComponentStyles(arg0) {
  let closure_0 = arg0;
  map = new Map();
  return (key) => {
    let obj2;
    closure_0 = key;
    const FALLBACK_THEME_CONTEXT_VALUE = closure_0(dependencyMap[6]).FALLBACK_THEME_CONTEXT_VALUE;
    const value = obj2.get(key.key);
    const obj = obj2;
    if (null != value) {
      return value;
    } else {
      obj2 = {};
      const _Object = Object;
      const keys = Object.keys(closure_0);
      const _Object2 = Object;
      const _Object3 = Object;
      Object.defineProperties(obj2, Object.fromEntries(keys.map((item) => {
        items = [
          item,
          {
            configurable: true,
            enumerable: true,
            get() {
              const tmp = parseThemedStyles(item[item], item);
              Object.defineProperty(obj2, item, { value: tmp, enumerable: true });
              return tmp;
            }
          }
        ];
        return items;
      })));
      const result = obj.set(key.key, obj2);
      return obj2;
    }
  };
};
export const useLegacyClassComponentStyles = tmp3;
export const createStyleProperties = function createStyleProperties(getButtonColorTokens) {
  let closure_2;
  _require = getButtonColorTokens;
  map = new Map();
  dependencyMap = typeof getButtonColorTokens === "function";
  let obj = require("ReactCompilerGating");
  return obj.isReactCompilerEnabled() ? (() => {
    items = [...arguments];
    const obj = react;
    const cResult = obj.c(4);
    const obj2 = native;
    const themeContext = obj2.useThemeContext();
    if (cResult[0] === items) {
      let tmp4;
      let tmp5;
      if (cResult[1] === themeContext) {
        tmp4 = cResult[2];
        tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (tmp4 !== Symbol.for("react.early_return_sentinel")) {
        tmp5 = tmp4;
      }
      return tmp5;
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items1, items, 0)] = themeContext.key;
    const forResult = Symbol.for("react.early_return_sentinel");
    const tmp7 = createCacheKey();
    let value = map.get(tmp7);
    let tmp9;
    if (null == value) {
      let applyResult;
      if (closure_2) {
        const items2 = [];
        HermesBuiltin.arraySpread(items2, items, 0);
        applyResult = HermesBuiltin.apply(getButtonColorTokens, items2, undefined);
      } else {
        applyResult = getButtonColorTokens;
      }
      const tmp10Result = parseThemedStyles(applyResult, themeContext);
      const result = map.set(tmp7, tmp10Result);
      tmp9 = tmp10Result;
      value = forResult;
    }
    cResult[0] = items;
    cResult[1] = themeContext;
    cResult[2] = value;
    cResult[3] = tmp9;
    tmp5 = tmp9;
    tmp4 = value;
  }) : (() => {
    items = [...arguments];
    const obj = native;
    const themeContext = obj.useThemeContext();
    const items1 = [];
    items1[HermesBuiltin.arraySpread(items1, items, 0)] = themeContext.key;
    const tmp3 = createCacheKey();
    const value = map.get(tmp3);
    if (null != value) {
      return value;
    } else {
      let applyResult;
      if (closure_2) {
        const items2 = [];
        HermesBuiltin.arraySpread(items2, items, 0);
        applyResult = HermesBuiltin.apply(getButtonColorTokens, items2, undefined);
      } else {
        applyResult = getButtonColorTokens;
      }
      const tmp5Result = parseThemedStyles(applyResult, themeContext);
      const result = map.set(tmp3, tmp5Result);
      return tmp5Result;
    }
  });
};
export { processColorOrThrow };
export const createNativeStyleProperties = function createNativeStyleProperties(arg0) {
  let closure_0 = arg0;
  map = new Map();
  return function(theme) {
    let json;
    const substr = [...arguments].slice();
    const saturation = AccessibilityStore.saturation;
    const obj = MobileThemesUtils;
    let customBackgroundGradient = obj.getCustomBackgroundGradient();
    if (customBackgroundGradient == null) {
      customBackgroundGradient = ClientThemesBackgroundStore.gradientPreset;
    }
    if (customBackgroundGradient == null) {
      customBackgroundGradient = null;
    }
    let num = 0;
    if (null != customBackgroundGradient) {
      let MOBILE_DARK_GRADIENT_THEME_ENABLED;
      const setThemeFlag = native.setThemeFlag;
      native;
      if ("light" === customBackgroundGradient.theme) {
        MOBILE_DARK_GRADIENT_THEME_ENABLED = native.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
      } else {
        MOBILE_DARK_GRADIENT_THEME_ENABLED = native.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED;
      }
      num = setThemeFlag(0, MOBILE_DARK_GRADIENT_THEME_ENABLED);
    }
    const obj2 = { flags: num, saturation, theme, enabledExperiments: ["mobile-visual-refresh"], gradient: customBackgroundGradient };
    const merged = Object.assign(native.FALLBACK_THEME_CONTEXT_VALUE);
    const obj3 = { key: json };
    json = JSON.stringify(obj2);
    const merged1 = Object.assign(obj2);
    const tmp12 = createCacheKey(...substr, obj3.key);
    const value = map.get(tmp12);
    if (null != value) {
      return value;
    } else {
      let applyResult = closure_0;
      if (typeof closure_0 === "function") {
        items = [];
        HermesBuiltin.arraySpread(items, substr, 0);
        applyResult = HermesBuiltin.apply(closure_0, items, undefined);
      }
      const tmp20Result = parseThemedStyles(applyResult, obj3);
      for (const key10061 in tmp20Result) {
        let tmp28 = tmp20Result[key10061];
        let tmp30 = processColor(tmp28);
        if (null == tmp30) {
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let str2 = "\"";
          let str3 = "Unable to parse color: \"";
          let self = this;
          let self2 = this;
          let error = new Error("Unable to parse color: \"" + tmp28 + "\"");
          throw error;
        } else {
          tmp20Result[key10061] = tmp30;
          continue;
        }
      }
      const result = map.set(tmp12, tmp20Result);
      return tmp20Result;
    }
  };
};
export const createAnimatedThemedStyles = function createAnimatedThemedStyles(BACKGROUND_BASE_LOW) {
  let arr = items;
  if (items === undefined) {
    arr = items;
  }
  let stops;
  items = [];
  let obj = {};
  for (const key10007 in BACKGROUND_BASE_LOW) {
    let tmp4 = BACKGROUND_BASE_LOW[key10007];
    let internal = items(obj[8]).internal;
    if (internal.isSemanticColor(tmp4)) {
      let items1 = [key10007, tmp4];
      let arr2 = items.push(items1);
      continue;
    } else {
      obj[key10007] = tmp4;
      continue;
    }
    continue;
  }
  stops = arr.map((item, index) => index);
  new Map();
  let obj2 = arr(obj[4]);
  return obj2.isReactCompilerEnabled() ? ((themeIndex) => {
    let closure_3;
    let num2;
    let num4;
    let obj3;
    obj = arr(obj[6]);
    const themeContext = obj.useThemeContext();
    const value = obj3.get(themeContext.key);
    obj3 = value;
    let tmp3 = value;
    if (null == value) {
      let enabledExperiments = themeContext.enabledExperiments;
      if (enabledExperiments == null) {
        enabledExperiments = [];
      }
      let obj2 = { enabledExperiments, saturation: num2, contrast: num4 };
      num2 = 1;
      if (null == themeContext.primaryColor) {
        let num3 = themeContext.saturation;
        if (num3 == null) {
          num3 = 1;
        }
        num2 = num3;
      }
      num4 = 1;
      if (null == themeContext.primaryColor) {
        let num5 = themeContext.contrast;
        if (num5 == null) {
          num5 = 1;
        }
        num4 = num5;
      }
      obj3 = {};
      const merged = Object.assign(obj2);
      function _loop(arg0) {
        let closure_0;
        themeIndex = arg0;
        obj3[closure_3] = themeIndex.map((item) => {
          const internal = nativeDefault.internal;
          return internal.resolveSemanticColor(item, closure_0, obj2);
        });
      }
      let tmp9 = obj3[Symbol.iterator]();
      while (tmp9 !== undefined) {
        let tmp14 = stops(tmp11, 2);
        stops = tmp14[0];
        let _loopResult = _loop(tmp14[1]);
        continue;
      }
      const result = obj3.set(themeContext.key, obj3);
      tmp3 = obj3;
    }
    obj3 = tmp3;
    const fn = function b() {
      obj = {};
      for (const key10005 in obj3) {
        let tmp9 = obj3[key10005];
        let _Array = Array;
        if (Array.isArray(tmp9)) {
          let tmp3 = timing;
          let withTiming = tmp3.withTiming;
          obj2 = ReanimatedRexport;
          let interpolateColorResult = obj2.interpolateColor(themeIndex.get(), stops, tmp9);
          obj[key10005] = withTiming(interpolateColorResult, timingPresets.timingStandard);
          continue;
        } else {
          obj[key10005] = tmp9;
          continue;
        }
        continue;
      }
      return obj;
    };
    const obj4 = arr(obj[10]);
    fn.__closure = { resolvedStyles: tmp3, withTiming: arr(obj[11]).withTiming, interpolateColor: arr(obj[10]).interpolateColor, themeIndex, stops, timingStandard: arr(obj[12]).timingStandard };
    fn.__workletHash = 5740447368886;
    fn.__initData = __initData;
    ({ resolvedStyles: tmp3, withTiming: arr(obj[11]).withTiming, interpolateColor: arr(obj[10]).interpolateColor, themeIndex, stops, timingStandard: arr(obj[12]).timingStandard });
    return obj4.useAnimatedStyle(fn);
  }) : (function useStyleProperties(themeIndex) {
    let closure_3;
    let num2;
    let num4;
    let obj3;
    obj = arr(obj[6]);
    const themeContext = obj.useThemeContext();
    const value = obj3.get(themeContext.key);
    obj3 = value;
    let tmp3 = value;
    if (null == value) {
      let enabledExperiments = themeContext.enabledExperiments;
      if (enabledExperiments == null) {
        enabledExperiments = [];
      }
      let obj2 = { enabledExperiments, saturation: num2, contrast: num4 };
      num2 = 1;
      if (null == themeContext.primaryColor) {
        let num3 = themeContext.saturation;
        if (num3 == null) {
          num3 = 1;
        }
        num2 = num3;
      }
      num4 = 1;
      if (null == themeContext.primaryColor) {
        let num5 = themeContext.contrast;
        if (num5 == null) {
          num5 = 1;
        }
        num4 = num5;
      }
      obj3 = {};
      const merged = Object.assign(obj2);
      function _loop2(arg0) {
        let closure_0;
        themeIndex = arg0;
        obj3[closure_3] = themeIndex.map((item) => {
          const internal = nativeDefault.internal;
          return internal.resolveSemanticColor(item, closure_0, obj2);
        });
      }
      let tmp9 = obj3[Symbol.iterator]();
      while (tmp9 !== undefined) {
        let tmp14 = stops(tmp11, 2);
        stops = tmp14[0];
        let _loop2Result = _loop2(tmp14[1]);
        continue;
      }
      const result = obj3.set(themeContext.key, obj3);
      tmp3 = obj3;
    }
    obj3 = tmp3;
    const fn = function b() {
      obj = {};
      for (const key10005 in obj3) {
        let tmp9 = obj3[key10005];
        let _Array = Array;
        if (Array.isArray(tmp9)) {
          let tmp3 = timing;
          let withTiming = tmp3.withTiming;
          obj2 = ReanimatedRexport;
          let interpolateColorResult = obj2.interpolateColor(themeIndex.get(), stops, tmp9);
          obj[key10005] = withTiming(interpolateColorResult, timingPresets.timingStandard);
          continue;
        } else {
          obj[key10005] = tmp9;
          continue;
        }
        continue;
      }
      return obj;
    };
    const obj4 = arr(obj[10]);
    fn.__closure = { resolvedStyles: tmp3, withTiming: arr(obj[11]).withTiming, interpolateColor: arr(obj[10]).interpolateColor, themeIndex, stops, timingStandard: arr(obj[12]).timingStandard };
    fn.__workletHash = 12212997668917;
    fn.__initData = __initData2;
    ({ resolvedStyles: tmp3, withTiming: arr(obj[11]).withTiming, interpolateColor: arr(obj[10]).interpolateColor, themeIndex, stops, timingStandard: arr(obj[12]).timingStandard });
    return obj4.useAnimatedStyle(fn);
  });
};