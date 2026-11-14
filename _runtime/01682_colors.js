// === Module 1682: colors ===

// Module 1682 (colors)
import FONT_WEIGHT_MAPPINGS from "FONT_WEIGHT_MAPPINGS" /* 1669 */;
import _mod1677 from "module_1677" /* 1677 */;
import Colors from "Colors" /* 1683 */;
import ValueProcessorTarget from "ValueProcessorTarget" /* 1684 */;
import processStyleValue from "processStyleValue" /* 1686 */;

const require = globalThis.__r;

function unprocessColorNumber(arg0) {
  return "rgba(" + arg0 << 8 >>> 24 + "," + arg0 << 16 >>> 24 + "," + arg0 << 24 >>> 24 + "," + (arg0 >>> 24) / 255 + ")";
}
function unprocessColor(color) {
  if (typeof color === "number") {
    const _HermesInternal3 = HermesInternal;
    return "rgba(" + color << 8 >>> 24 + "," + color << 16 >>> 24 + "," + color << 24 >>> 24 + "," + (color >>> 24) / 255 + ")";
  } else if (typeof isPlatformColorObject === "function") {
    let tmp2 = closure_130_0(color);
    if (tmp2) {
      const _Array = Array;
      let isArray = Array.isArray(color.semantic);
      if (!isArray) {
        const _Array2 = Array;
        isArray = Array.isArray(color.resource_paths);
      }
      tmp2 = isArray;
    }
    if (tmp2) {
      return color;
    } else if (typeof isDynamicColorObjectIOS === "function") {
      let tmp7 = closure_131_0(color) && closure_131_0(color.dynamic);
      if (tmp7) {
        tmp7 = "light" in color.dynamic;
      }
      if (tmp7) {
        tmp7 = "dark" in color.dynamic;
      }
      if (tmp7) {
        if (FONT_WEIGHT_MAPPINGS.IS_IOS) {
          return (function unprocessDynamicColorObjectIOS(color) {
            const dynamic = {};
            const iter = dependencyMap[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp3 = nextResult;
              if (undefined !== color.dynamic[nextResult]) {
                dynamic[tmp3] = unprocessColorNumber(color.dynamic[tmp3]);
              }
              continue;
            }
            return { dynamic };
          })(color);
        } else {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const error = new Error("[Reanimated] " + obj.dynamicNotAvailableOnPlatform());
          throw error;
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error1 = new Error("[Reanimated] " + obj.invalidProcessedColor(color));
        throw error1;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let items = [{ code: "(function PlatformColor_Pnpm_colorsTs1(...names){let[IS_IOS]=this.__closure;return IS_IOS?{semantic:names}:{resource_paths:names};})" }, FONT_WEIGHT_MAPPINGS.IS_IOS];
let closure_129_0;
[tmp2, tmp3] = items;
class PlatformColor {
  constructor() {
    items = [...arguments];
    if (closure_0) {
      obj1 = { semantic: null };
      obj1.semantic = items;
      obj = obj1;
    } else {
      obj = { resource_paths: null };
      obj.resource_paths = items;
    }
    return obj;
  }
}
const items1 = [tmp3];
PlatformColor.__closure = items1;
PlatformColor.__workletHash = 10379678763889;
PlatformColor.__initData = tmp2;
const items2 = [{ code: "(function isPlatformColorObject_Pnpm_colorsTs2(value){let[isRecord]=this.__closure;return isRecord(value)&&(Array.isArray(value.semantic)||Array.isArray(value.resource_paths));})" }, _mod1677.isRecord];
let closure_130_0;
[tmp4, tmp5] = items2;
function isPlatformColorObject(semantic) {
  let tmp = require(semantic);
  if (tmp) {
    const _Array = Array;
    let isArray = Array.isArray(semantic.semantic);
    if (!isArray) {
      const _Array2 = Array;
      isArray = Array.isArray(semantic.resource_paths);
    }
    tmp = isArray;
  }
  return tmp;
}
const items3 = [tmp5];
isPlatformColorObject.__closure = items3;
isPlatformColorObject.__workletHash = 5343726766594;
isPlatformColorObject.__initData = tmp4;
const items4 = [{ code: "(function DynamicColorIOS_Pnpm_colorsTs3(tuple){return{dynamic:{light:tuple.light,dark:tuple.dark,highContrastLight:tuple.highContrastLight,highContrastDark:tuple.highContrastDark}};})" }];
[tmp6] = items4;
class DynamicColorIOS {
  constructor(arg0) {
    obj = { dynamic: { light: global.light, dark: global.dark, highContrastLight: global.highContrastLight, highContrastDark: global.highContrastDark } };
    return obj;
  }
}
DynamicColorIOS.__workletHash = 12574859383117;
DynamicColorIOS.__initData = tmp6;
const items5 = [{ code: "(function isDynamicColorObjectIOS_Pnpm_colorsTs4(value){let[isRecord]=this.__closure;return isRecord(value)&&isRecord(value.dynamic)&&'light'in value.dynamic&&'dark'in value.dynamic;})" }, _mod1677.isRecord];
let closure_131_0;
[tmp7, tmp8] = items5;
function isDynamicColorObjectIOS(dynamic) {
  let tmp2 = require(dynamic) && require(dynamic.dynamic);
  if (tmp2) {
    tmp2 = "light" in dynamic.dynamic;
  }
  if (tmp2) {
    tmp2 = "dark" in dynamic.dynamic;
  }
  return tmp2;
}
const items6 = [tmp8];
isDynamicColorObjectIOS.__closure = items6;
isDynamicColorObjectIOS.__workletHash = 13530379233407;
isDynamicColorObjectIOS.__initData = tmp7;
const items7 = [{ code: "(function invalidColor_Pnpm_colorsTs5(color){return\"Invalid color value: \"+JSON.stringify(color);})" }];
[tmp9] = items7;
const ERROR_MESSAGES = { invalidColor: null, invalidProcessedColor: null, dynamicNotAvailableOnPlatform: null };
function invalidColor(arg0) {
  return "Invalid color value: " + JSON.stringify(arg0);
}
invalidColor.__workletHash = 10171982994499;
invalidColor.__initData = tmp9;
ERROR_MESSAGES.invalidColor = invalidColor;
const items8 = [{ code: "(function invalidProcessedColor_Pnpm_colorsTs6(color){return\"Invalid processed color value: \"+JSON.stringify(color);})" }];
[tmp10] = items8;
function invalidProcessedColor(color) {
  return "Invalid processed color value: " + JSON.stringify(color);
}
invalidProcessedColor.__workletHash = 10285187193184;
invalidProcessedColor.__initData = tmp10;
ERROR_MESSAGES.invalidProcessedColor = invalidProcessedColor;
const items9 = [{ code: "(function dynamicNotAvailableOnPlatform_Pnpm_colorsTs7(){return'DynamicColorIOS is not available on this platform.';})" }];
[tmp11] = items9;
function dynamicNotAvailableOnPlatform() {
  return "DynamicColorIOS is not available on this platform.";
}
dynamicNotAvailableOnPlatform.__workletHash = 2024579873557;
dynamicNotAvailableOnPlatform.__initData = tmp11;
ERROR_MESSAGES.dynamicNotAvailableOnPlatform = dynamicNotAvailableOnPlatform;
const items10 = [{ code: "(function processColorNumber_Pnpm_colorsTs8(value){let[processColorInitially,IS_ANDROID]=this.__closure;let normalizedColor=processColorInitially(value);if(IS_ANDROID&&typeof normalizedColor=='number'){normalizedColor=normalizedColor|0x0;}return normalizedColor;})" }, Colors.processColorInitially, FONT_WEIGHT_MAPPINGS.IS_ANDROID];
let closure_132_0;
let closure_132_1;
[tmp12, tmp13, tmp14] = items10;
function processColorNumber(color) {
  const tmp = require(color);
  let tmp2 = dependencyMap;
  if (dependencyMap) {
    tmp2 = typeof tmp === "number";
  }
  let tmp3 = tmp;
  if (tmp2) {
    tmp3 = tmp | 0;
  }
  return tmp3;
}
const items11 = [tmp13, tmp14];
processColorNumber.__closure = items11;
processColorNumber.__workletHash = 7493092146691;
processColorNumber.__initData = tmp12;
const items12 = ["light", "dark", "highContrastLight", "highContrastDark"];
const items13 = [{ code: "(function processDynamicColorObjectIOS_Pnpm_colorsTs9(value){let[DynamicColorIOSProperties,processColorNumber]=this.__closure;const result={};for(const property of DynamicColorIOSProperties){if(value.dynamic[property]===undefined){continue;}const processed=processColorNumber(value.dynamic[property]);if(processed===null){return null;}result[property]=processed;}return{dynamic:result};})" }, items12, processColorNumber];
let closure_133_0;
let closure_133_1;
[tmp15, tmp16, tmp17] = items13;
function processDynamicColorObjectIOS(arg0) {
  const dynamic = {};
  const iter = require[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (undefined !== arg0.dynamic[nextResult]) {
      let tmp6 = dependencyMap(arg0.dynamic[tmp3]);
      if (null === tmp6) {
        iter.return();
        return null;
      } else {
        dynamic[tmp3] = tmp7;
      }
    }
    continue;
  }
  return { dynamic };
}
const items14 = [tmp16, tmp17];
processDynamicColorObjectIOS.__closure = items14;
processDynamicColorObjectIOS.__workletHash = 15541210186829;
processDynamicColorObjectIOS.__initData = tmp15;
const items15 = [{ code: "(function processColor_Pnpm_colorsTs10(value,context){let[processColorNumber,ValueProcessorTarget,isPlatformColorObject,isDynamicColorObjectIOS,IS_IOS,ERROR_MESSAGES,processDynamicColorObjectIOS]=this.__closure;let result=processColorNumber(value);if(result){return result;}if(result===0){if((context===null||context===void 0?void 0:context.target)===ValueProcessorTarget.CSS&&value==='transparent'){return false;}return result;}if(isPlatformColorObject(value)){return value;}if(isDynamicColorObjectIOS(value)){if(!IS_IOS){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.dynamicNotAvailableOnPlatform());}result=processDynamicColorObjectIOS(value);}if(result===null){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidColor(value));}return result;})" }, processColorNumber, ValueProcessorTarget.ValueProcessorTarget, isPlatformColorObject, isDynamicColorObjectIOS, FONT_WEIGHT_MAPPINGS.IS_IOS, ERROR_MESSAGES, processDynamicColorObjectIOS];
let closure_134_0;
let closure_134_1;
let closure_134_2;
let closure_134_3;
let closure_134_4;
let closure_134_5;
let closure_134_6;
[tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items15;
function processColor(semantic, target) {
  const tmp = require(semantic);
  if (tmp) {
    return tmp;
  } else if (0 === tmp) {
    target = undefined;
    if (target != null) {
      target = target.target;
    }
    let tmp23 = target !== dependencyMap.CSS;
    if (!tmp23) {
      tmp23 = "transparent" !== semantic;
    }
    if (tmp23) {
      tmp23 = tmp;
    }
    return tmp23;
  } else if (isPlatformColorObject(semantic)) {
    return semantic;
  } else {
    let tmp3 = tmp;
    if (isDynamicColorObjectIOS(semantic)) {
      if (obj) {
        tmp3 = items12(semantic);
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("[Reanimated] " + unprocessColorNumber.dynamicNotAvailableOnPlatform());
        throw error;
      }
    }
    if (null === tmp3) {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error1 = new Error("[Reanimated] " + unprocessColorNumber.invalidColor(semantic));
      throw error1;
    } else {
      return tmp3;
    }
  }
}
const items16 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
processColor.__closure = items16;
processColor.__workletHash = 7789291776954;
processColor.__initData = tmp18;
const items17 = [{ code: "(function pnpm_colorsTs11(value){let[processColor]=this.__closure;return Array.isArray(value)?value.map(function(color){return processColor(color);}):processColor(value);})" }, processColor];
let closure_135_0;
[tmp26, tmp27] = items17;
function pnpm_colorsTs11(arr) {
  if (Array.isArray(arr)) {
    let mapped = arr.map((item) => require(item));
  } else {
    mapped = require(arr);
  }
  return mapped;
}
const items18 = [tmp27];
pnpm_colorsTs11.__closure = items18;
pnpm_colorsTs11.__workletHash = 13416349437474;
pnpm_colorsTs11.__initData = tmp26;
const items19 = [{ code: "(function processColorsInProps_Pnpm_colorsTs12(props){let[ColorProperties,processStylePropInPlace,processColorOrColors]=this.__closure;for(const key in props){if(!ColorProperties.includes(key))continue;processStylePropInPlace(props,key,processColorOrColors);}})" }, Colors.ColorProperties, processStyleValue.processStylePropInPlace, pnpm_colorsTs11];
let closure_136_0;
let closure_136_1;
let closure_136_2;
[tmp28, tmp29, tmp30, tmp31] = items19;
function processColorsInProps(obj) {
  for (const key10004 in arg0) {
    if (!require.includes(key10004)) {
      continue;
    } else {
      let tmp3 = dependencyMap(arg0, key10004, isPlatformColorObject);
      continue;
    }
    continue;
  }
}
const items20 = [tmp29, tmp30, tmp31];
processColorsInProps.__closure = items20;
processColorsInProps.__workletHash = 5686813343018;
processColorsInProps.__initData = tmp28;

export { PlatformColor };
export { DynamicColorIOS };
export { ERROR_MESSAGES };
export { processColorNumber };
export { processColor };
export { unprocessColor };
export { processColorsInProps };
export function unprocessColorsInProps(boxShadow) {
  for (const key10005 in arg0) {
    let ColorProperties = Colors.ColorProperties;
    if (!ColorProperties.includes(key10005)) {
      continue;
    } else {
      let arr = arg0[key10005];
      let _Array = Array;
      if (Array.isArray(arr)) {
        let mapped = arr.map((item) => unprocessColor(item));
      } else {
        mapped = unprocessColor(arr);
      }
      arg0[key10005] = mapped;
      continue;
    }
    continue;
  }
}