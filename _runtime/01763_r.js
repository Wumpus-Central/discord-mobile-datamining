// _runtime/01763_r.js
import call from "01696_call.js";
import JEST_WORKER_ID from "01764_JEST_WORKER_ID.js";

require = arg1;
const dependencyMap = arg6;
const fn = function r(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  return tmp;
};
fn.__closure = {};
fn.__workletHash = 12151866759552;
fn.__initData = {
  code: "function pnpm_colorsTs1(value){return typeof value==='object'&&value!==null&&!Array.isArray(value);}",
};
class PlatformColor {
  constructor() {
    items = [...arguments];
    if (require("JEST_WORKER_ID").IS_IOS) {
      obj = { semantic: null };
      obj[0] = items;
    } else {
      obj = { resource_paths: null };
      obj[0] = items;
    }
    return obj;
  }
}
let obj = { IS_IOS: require("JEST_WORKER_ID").IS_IOS };
PlatformColor.__closure = obj;
PlatformColor.__workletHash = 12890406291275;
PlatformColor.__initData = {
  code: "function PlatformColor_Pnpm_colorsTs2(...names){const{IS_IOS}=this.__closure;return IS_IOS?{semantic:names}:{resource_paths:names};}",
};
function isPlatformColorObject(obj) {
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  if (tmp) {
    const _Array2 = Array;
    let isArray = Array.isArray(obj.semantic);
    if (!isArray) {
      const _Array3 = Array;
      isArray = Array.isArray(obj.resource_paths);
    }
    tmp = isArray;
  }
  return tmp;
}
isPlatformColorObject.__closure = { isRecord: fn };
isPlatformColorObject.__workletHash = 9660595997722;
isPlatformColorObject.__initData = {
  code: "function isPlatformColorObject_Pnpm_colorsTs3(value){const{isRecord}=this.__closure;return isRecord(value)&&(Array.isArray(value.semantic)||Array.isArray(value.resource_paths));}",
};
class DynamicColorIOS {
  constructor(arg0) {
    dynamic = {
      light: arg0.light,
      dark: arg0.dark,
      highContrastLight: arg0.highContrastLight,
      highContrastDark: arg0.highContrastDark,
    };
    return { dynamic };
  }
}
DynamicColorIOS.__closure = {};
DynamicColorIOS.__workletHash = 593421129931;
DynamicColorIOS.__initData = {
  code: "function DynamicColorIOS_Pnpm_colorsTs4(tuple){return{dynamic:{light:tuple.light,dark:tuple.dark,highContrastLight:tuple.highContrastLight,highContrastDark:tuple.highContrastDark}};}",
};
function isDynamicColorObjectIOS(arr) {
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp2 = typeof arr === "object";
  if (typeof arr === "object") {
    tmp2 = null !== arr;
  }
  if (tmp2) {
    const _Array = Array;
    tmp2 = !Array.isArray(arr);
  }
  if (tmp2) {
    const dynamic = arr.dynamic;
    if (typeof fn !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let tmp4 = typeof dynamic === "object";
    if (typeof dynamic === "object") {
      tmp4 = null !== dynamic;
    }
    if (tmp4) {
      const _Array2 = Array;
      tmp4 = !Array.isArray(dynamic);
    }
    tmp2 = tmp4;
  }
  if (tmp2) {
    tmp2 = "light" in arr.dynamic;
  }
  if (tmp2) {
    tmp2 = "dark" in arr.dynamic;
  }
  return tmp2;
}
isDynamicColorObjectIOS.__closure = { isRecord: fn };
isDynamicColorObjectIOS.__workletHash = 1181760541767;
isDynamicColorObjectIOS.__initData = {
  code: "function isDynamicColorObjectIOS_Pnpm_colorsTs5(value){const{isRecord}=this.__closure;return isRecord(value)&&isRecord(value.dynamic)&&'light'in value.dynamic&&'dark'in value.dynamic;}",
};
obj = { invalidColor: fn2, invalidProcessedColor: fn3, dynamicNotAvailableOnPlatform: fn4 };
fn2 = function t(arg0) {
  return "Invalid color value: " + JSON.stringify(arg0);
};
fn2.__closure = {};
fn2.__workletHash = 16453254098770;
fn2.__initData = { code: 'function pnpm_colorsTs6(color){return"Invalid color value: "+JSON.stringify(color);}' };
fn3 = function n(arg0) {
  return "Invalid processed color value: " + JSON.stringify(arg0);
};
fn3.__closure = {};
fn3.__workletHash = 8662920964153;
fn3.__initData = {
  code: 'function pnpm_colorsTs7(color){return"Invalid processed color value: "+JSON.stringify(color);}',
};
fn4 = function o() {
  return "DynamicColorIOS is not available on this platform.";
};
fn4.__closure = {};
fn4.__workletHash = 13235944247491;
fn4.__initData = { code: "function pnpm_colorsTs8(){return'DynamicColorIOS is not available on this platform.';}" };
function processColorNumber(arr) {
  const result = call.processColorInitially(arr);
  obj = call;
  let tmp3 = result;
  if (tmp2) {
    tmp3 = result | 0;
  }
  return tmp3;
}
obj = {
  processColorInitially: require("call").processColorInitially,
  IS_ANDROID: require("JEST_WORKER_ID").IS_ANDROID,
};
processColorNumber.__closure = obj;
processColorNumber.__workletHash = 11813019963227;
processColorNumber.__initData = {
  code: "function processColorNumber_Pnpm_colorsTs9(value){const{processColorInitially,IS_ANDROID}=this.__closure;let normalizedColor=processColorInitially(value);if(IS_ANDROID&&typeof normalizedColor=='number'){normalizedColor=normalizedColor|0x0;}return normalizedColor;}",
};
function unprocessColorNumber(arg0) {
  return (
    (((((("rgba(" + arg0) << 8) >>> (24 + "," + arg0)) << 16) >>> (24 + "," + arg0)) << 24) >>>
    (24 + "," + (arg0 >>> 24) / 255 + ")")
  );
}
unprocessColorNumber.__closure = {};
unprocessColorNumber.__workletHash = 5518391320995;
unprocessColorNumber.__initData = {
  code: 'function unprocessColorNumber_Pnpm_colorsTs10(value){const a=(value>>>24)/255;const r=value<<8>>>24;const g=value<<16>>>24;const b=value<<24>>>24;return"rgba("+r+","+g+","+b+","+a+")";}',
};
let items = ["light", "dark", "highContrastLight", "highContrastDark"];
function processDynamicColorObjectIOS(arr) {
  const dynamic = {};
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (undefined !== arr.dynamic[nextResult]) {
      let tmp4 = processColorNumber;
      let tmp5 = nextResult;
      let tmp6 = processColorNumber(arr.dynamic[tmp3]);
      if (null === tmp6) {
        let tmp10 = iter;
        iter.return();
        return null;
      } else {
        let tmp8 = nextResult;
        let tmp9 = tmp6;
        dynamic[tmp3] = tmp7;
      }
    }
    continue;
  }
  return { dynamic };
}
processDynamicColorObjectIOS.__closure = { DynamicColorIOSProperties: items, processColorNumber };
processDynamicColorObjectIOS.__workletHash = 12385759836493;
processDynamicColorObjectIOS.__initData = {
  code: "function processDynamicColorObjectIOS_Pnpm_colorsTs11(value){const{DynamicColorIOSProperties,processColorNumber}=this.__closure;const result={};for(const property of DynamicColorIOSProperties){if(value.dynamic[property]===undefined){continue;}const processed=processColorNumber(value.dynamic[property]);if(processed===null){return null;}result[property]=processed;}return{dynamic:result};}",
};
function unprocessDynamicColorObjectIOS(arr) {
  const dynamic = {};
  for (const item10008 of items) {
    let tmp = item10008;
    if (undefined !== arg0.dynamic[item10008]) {
      let tmp2 = item10008;
      let tmp3 = unprocessColorNumber;
      dynamic[tmp] = unprocessColorNumber(arg0.dynamic[tmp]);
    }
    continue;
  }
  return { dynamic };
}
unprocessDynamicColorObjectIOS.__closure = { DynamicColorIOSProperties: items, unprocessColorNumber };
unprocessDynamicColorObjectIOS.__workletHash = 3217615757982;
unprocessDynamicColorObjectIOS.__initData = {
  code: "function unprocessDynamicColorObjectIOS_Pnpm_colorsTs12(value){const{DynamicColorIOSProperties,unprocessColorNumber}=this.__closure;const result={};for(const property of DynamicColorIOSProperties){if(value.dynamic[property]!==undefined){result[property]=unprocessColorNumber(value.dynamic[property]);}}return{dynamic:result};}",
};
function processColor(arr, target) {
  if (typeof processColorNumber !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = call;
  const result = obj.processColorInitially(arr);
  let tmp5 = result;
  if (tmp4) {
    tmp5 = result | 0;
  }
  if (tmp5) {
    return tmp5;
  } else if (0 === tmp5) {
    target = undefined;
    if (target != null) {
      target = target.target;
    }
    let tmp28 = target !== tmp(1765).ValueProcessorTarget.CSS;
    if (!tmp28) {
      tmp28 = "transparent" !== arr;
    }
    if (tmp28) {
      tmp28 = tmp5;
    }
    return tmp28;
  } else {
    if (typeof isPlatformColorObject !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof fn !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let tmp7 = typeof arr === "object";
    if (typeof arr === "object") {
      tmp7 = null !== arr;
    }
    if (tmp7) {
      const _Array = Array;
      tmp7 = !Array.isArray(arr);
    }
    if (tmp7) {
      const _Array2 = Array;
      let isArray = Array.isArray(arr.semantic);
      if (!isArray) {
        const _Array3 = Array;
        isArray = Array.isArray(arr.resource_paths);
      }
      tmp7 = isArray;
    }
    if (tmp7) {
      return arr;
    } else {
      let tmp12 = tmp5;
      if (isDynamicColorObjectIOS(arr)) {
        if (tmp(1764).IS_IOS) {
          tmp12 = processDynamicColorObjectIOS(arr);
        } else {
          const reanimatedError = new tmp(1664).ReanimatedError(obj.dynamicNotAvailableOnPlatform());
          throw reanimatedError;
        }
      }
      if (null === tmp12) {
        const reanimatedError1 = new tmp(1664).ReanimatedError(obj.invalidColor(arr));
        throw reanimatedError1;
      } else {
        return tmp12;
      }
    }
  }
  tmp4 = JEST_WORKER_ID.IS_ANDROID && typeof result === "number";
}
processColor.__closure = {
  processColorNumber,
  ValueProcessorTarget: require("metro/01765__.js").ValueProcessorTarget,
  isPlatformColorObject,
  isDynamicColorObjectIOS,
  IS_IOS: require("JEST_WORKER_ID").IS_IOS,
  ERROR_MESSAGES: obj,
  processDynamicColorObjectIOS,
};
processColor.__workletHash = 3532980737440;
processColor.__initData = {
  code: "function processColor_Pnpm_colorsTs13(value,context){const{processColorNumber,ValueProcessorTarget,isPlatformColorObject,isDynamicColorObjectIOS,IS_IOS,ERROR_MESSAGES,processDynamicColorObjectIOS}=this.__closure;let result=processColorNumber(value);if(result){return result;}if(result===0){if((context===null||context===void 0?void 0:context.target)===ValueProcessorTarget.CSS&&value==='transparent'){return false;}return result;}if(isPlatformColorObject(value)){return value;}if(isDynamicColorObjectIOS(value)){if(!IS_IOS){throw new ReanimatedError(ERROR_MESSAGES.dynamicNotAvailableOnPlatform());}result=processDynamicColorObjectIOS(value);}if(result===null){throw new ReanimatedError(ERROR_MESSAGES.invalidColor(value));}return result;}",
};
function unprocessColor(arr) {
  if (typeof arr === "number") {
    if (typeof unprocessColorNumber !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _HermesInternal = HermesInternal;
    return (
      (((((("rgba(" + arr) << 8) >>> (24 + "," + arr)) << 16) >>> (24 + "," + arr)) << 24) >>>
      (24 + "," + (arr >>> 24) / 255 + ")")
    );
  } else {
    if (typeof isPlatformColorObject !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof fn !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let tmp2 = typeof arr === "object";
    if (typeof arr === "object") {
      tmp2 = null !== arr;
    }
    if (tmp2) {
      const _Array = Array;
      tmp2 = !Array.isArray(arr);
    }
    if (tmp2) {
      const _Array2 = Array;
      let isArray = Array.isArray(arr.semantic);
      if (!isArray) {
        const _Array3 = Array;
        isArray = Array.isArray(arr.resource_paths);
      }
      tmp2 = isArray;
    }
    if (tmp2) {
      return arr;
    } else if (isDynamicColorObjectIOS(arr)) {
      if (tmp7(1764).IS_IOS) {
        return unprocessDynamicColorObjectIOS(arr);
      } else {
        const reanimatedError = new tmp7(1664).ReanimatedError(obj.dynamicNotAvailableOnPlatform());
        throw reanimatedError;
      }
    } else {
      const reanimatedError1 = new tmp7(1664).ReanimatedError(obj.invalidProcessedColor(arr));
      throw reanimatedError1;
    }
  }
}
const obj1 = {
  processColorNumber,
  ValueProcessorTarget: require("metro/01765__.js").ValueProcessorTarget,
  isPlatformColorObject,
  isDynamicColorObjectIOS,
  IS_IOS: require("JEST_WORKER_ID").IS_IOS,
  ERROR_MESSAGES: obj,
  processDynamicColorObjectIOS,
};
unprocessColor.__closure = {
  unprocessColorNumber,
  isPlatformColorObject,
  isDynamicColorObjectIOS,
  IS_IOS: require("JEST_WORKER_ID").IS_IOS,
  ERROR_MESSAGES: obj,
  unprocessDynamicColorObjectIOS,
};
unprocessColor.__workletHash = 11221362619601;
unprocessColor.__initData = {
  code: "function unprocessColor_Pnpm_colorsTs14(value){const{unprocessColorNumber,isPlatformColorObject,isDynamicColorObjectIOS,IS_IOS,ERROR_MESSAGES,unprocessDynamicColorObjectIOS}=this.__closure;if(typeof value==='number'){return unprocessColorNumber(value);}if(isPlatformColorObject(value)){return value;}if(isDynamicColorObjectIOS(value)){if(!IS_IOS){throw new ReanimatedError(ERROR_MESSAGES.dynamicNotAvailableOnPlatform());}return unprocessDynamicColorObjectIOS(value);}throw new ReanimatedError(ERROR_MESSAGES.invalidProcessedColor(value));}",
};
function processColorsInProps(obj) {
  for (const key10005 in arg0) {
    let tmp3 = key10005;
    let tmp4 = require;
    let tmp5 = dependencyMap;
    let ColorProperties = call.ColorProperties;
    if (!ColorProperties.includes(key10005)) {
      continue;
    } else {
      let arr = arg0[key10005];
      let _Array = Array;
      if (Array.isArray(arr)) {
        let mapped = arr.map((arg0) => callback(arg0));
      } else {
        let tmp = processColor;
        mapped = processColor(arr);
      }
      arg0[key10005] = mapped;
      continue;
    }
    continue;
  }
}
const obj2 = {
  unprocessColorNumber,
  isPlatformColorObject,
  isDynamicColorObjectIOS,
  IS_IOS: require("JEST_WORKER_ID").IS_IOS,
  ERROR_MESSAGES: obj,
  unprocessDynamicColorObjectIOS,
};
processColorsInProps.__closure = { ColorProperties: require("call").ColorProperties, processColor };
processColorsInProps.__workletHash = 10982881159897;
processColorsInProps.__initData = {
  code: "function processColorsInProps_Pnpm_colorsTs15(props){const{ColorProperties,processColor}=this.__closure;for(const key in props){if(!ColorProperties.includes(key)){continue;}const value=props[key];props[key]=Array.isArray(value)?value.map(function(c){return processColor(c);}):processColor(value);}}",
};
function unprocessColorsInProps(styleProps) {
  for (const key10005 in arg0) {
    let tmp3 = key10005;
    let tmp4 = require;
    let tmp5 = dependencyMap;
    let ColorProperties = call.ColorProperties;
    if (!ColorProperties.includes(key10005)) {
      continue;
    } else {
      let arr = arg0[key10005];
      let _Array = Array;
      if (Array.isArray(arr)) {
        let mapped = arr.map((arg0) => callback(arg0));
      } else {
        let tmp = unprocessColor;
        mapped = unprocessColor(arr);
      }
      arg0[key10005] = mapped;
      continue;
    }
    continue;
  }
}
const obj3 = { ColorProperties: require("call").ColorProperties, processColor };
unprocessColorsInProps.__closure = { ColorProperties: require("call").ColorProperties, unprocessColor };
unprocessColorsInProps.__workletHash = 1282697128442;
unprocessColorsInProps.__initData = {
  code: "function unprocessColorsInProps_Pnpm_colorsTs16(props){const{ColorProperties,unprocessColor}=this.__closure;for(const key in props){if(!ColorProperties.includes(key)){continue;}const value=props[key];props[key]=Array.isArray(value)?value.map(function(c){return unprocessColor(c);}):unprocessColor(value);}}",
};
arg5.PlatformColor = PlatformColor;
arg5.DynamicColorIOS = DynamicColorIOS;
arg5.ERROR_MESSAGES = obj;
arg5.processColorNumber = processColorNumber;
arg5.processColor = processColor;
arg5.unprocessColor = unprocessColor;
arg5.processColorsInProps = processColorsInProps;
arg5.unprocessColorsInProps = unprocessColorsInProps;
