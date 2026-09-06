// _runtime/01746_r.js
import _mod1647 from "metro/01647__.js";
import _mod1679 from "metro/01679__.js";
import JEST_WORKER_ID from "01747_JEST_WORKER_ID.js";
import ValueProcessorTarget from "01748_ValueProcessorTarget.js";

require = fn;
const dependencyMap = arg6;
const isRecord = function r(obj) {
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
isRecord.__closure = {};
isRecord.__workletHash = 12151866759552;
isRecord.__initData = {
  code: "function pnpm_colorsTs1(value){return typeof value==='object'&&value!==null&&!Array.isArray(value);}",
};
class PlatformColor {
  constructor() {
    items = [...arguments];
    if (closure_0(closure_1[0]).IS_IOS) {
      obj = { semantic: null };
      obj.semantic = items;
    } else {
      obj = { resource_paths: null };
      obj.resource_paths = items;
    }
    return obj;
  }
}
let ERROR_MESSAGES = { IS_IOS: fn(1747).IS_IOS };
PlatformColor.__closure = ERROR_MESSAGES;
PlatformColor.__workletHash = 12890406291275;
PlatformColor.__initData = {
  code: "function PlatformColor_Pnpm_colorsTs2(...names){const{IS_IOS}=this.__closure;return IS_IOS?{semantic:names}:{resource_paths:names};}",
};
function isPlatformColorObject(semantic) {
  if (typeof fn === "function") {
    let tmp2 = typeof semantic === "object";
    if (typeof semantic === "object") {
      tmp2 = null !== semantic;
    }
    if (tmp2) {
      const _Array = Array;
      tmp2 = !Array.isArray(semantic);
    }
    if (tmp2) {
      const _Array2 = Array;
      let isArray = Array.isArray(semantic.semantic);
      if (!isArray) {
        const _Array3 = Array;
        isArray = Array.isArray(semantic.resource_paths);
      }
      tmp2 = isArray;
    }
    return tmp2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
isPlatformColorObject.__closure = { isRecord };
isPlatformColorObject.__workletHash = 9660595997722;
isPlatformColorObject.__initData = {
  code: "function isPlatformColorObject_Pnpm_colorsTs3(value){const{isRecord}=this.__closure;return isRecord(value)&&(Array.isArray(value.semantic)||Array.isArray(value.resource_paths));}",
};
class DynamicColorIOS {
  constructor(arg0) {
    obj = {
      dynamic: {
        light: arg0.light,
        dark: arg0.dark,
        highContrastLight: arg0.highContrastLight,
        highContrastDark: arg0.highContrastDark,
      },
    };
    return obj;
  }
}
DynamicColorIOS.__closure = {};
DynamicColorIOS.__workletHash = 593421129931;
DynamicColorIOS.__initData = {
  code: "function DynamicColorIOS_Pnpm_colorsTs4(tuple){return{dynamic:{light:tuple.light,dark:tuple.dark,highContrastLight:tuple.highContrastLight,highContrastDark:tuple.highContrastDark}};}",
};
function isDynamicColorObjectIOS(dynamic) {
  if (typeof fn === "function") {
    let tmp3 = typeof dynamic === "object";
    if (typeof dynamic === "object") {
      tmp3 = null !== dynamic;
    }
    if (tmp3) {
      const _Array = Array;
      tmp3 = !Array.isArray(dynamic);
    }
    if (tmp3) {
      dynamic = dynamic.dynamic;
      if (typeof tmp === "function") {
        let tmp5 = typeof dynamic === "object";
        if (typeof dynamic === "object") {
          tmp5 = null !== dynamic;
        }
        if (tmp5) {
          const _Array2 = Array;
          tmp5 = !Array.isArray(dynamic);
        }
        tmp3 = tmp5;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    if (tmp3) {
      tmp3 = "light" in dynamic.dynamic;
    }
    if (tmp3) {
      tmp3 = "dark" in dynamic.dynamic;
    }
    return tmp3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
isDynamicColorObjectIOS.__closure = { isRecord };
isDynamicColorObjectIOS.__workletHash = 1181760541767;
isDynamicColorObjectIOS.__initData = {
  code: "function isDynamicColorObjectIOS_Pnpm_colorsTs5(value){const{isRecord}=this.__closure;return isRecord(value)&&isRecord(value.dynamic)&&'light'in value.dynamic&&'dark'in value.dynamic;}",
};
ERROR_MESSAGES = { invalidColor: null, invalidProcessedColor: null, dynamicNotAvailableOnPlatform: null };
const fn2 = function t(arg0) {
  return "Invalid color value: " + JSON.stringify(arg0);
};
fn2.__closure = {};
fn2.__workletHash = 16453254098770;
fn2.__initData = { code: 'function pnpm_colorsTs6(color){return"Invalid color value: "+JSON.stringify(color);}' };
ERROR_MESSAGES.invalidColor = fn2;
const fn3 = function n(arg0) {
  return "Invalid processed color value: " + JSON.stringify(arg0);
};
fn3.__closure = {};
fn3.__workletHash = 8662920964153;
fn3.__initData = {
  code: 'function pnpm_colorsTs7(color){return"Invalid processed color value: "+JSON.stringify(color);}',
};
ERROR_MESSAGES.invalidProcessedColor = fn3;
const fn4 = function o() {
  return "DynamicColorIOS is not available on this platform.";
};
fn4.__closure = {};
fn4.__workletHash = 13235944247491;
fn4.__initData = { code: "function pnpm_colorsTs8(){return'DynamicColorIOS is not available on this platform.';}" };
ERROR_MESSAGES.dynamicNotAvailableOnPlatform = fn4;
function processColorNumber(semantic) {
  const result = _mod1679.processColorInitially(semantic);
  let tmp3 = result;
  if (tmp2) {
    tmp3 = result | 0;
  }
  return tmp3;
}
ERROR_MESSAGES = { processColorInitially: fn(1679).processColorInitially, IS_ANDROID: fn(1747).IS_ANDROID };
processColorNumber.__closure = ERROR_MESSAGES;
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
function processDynamicColorObjectIOS(semantic) {
  const dynamic = {};
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (undefined !== semantic.dynamic[nextResult]) {
      let tmp6 = processColorNumber(semantic.dynamic[tmp3]);
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
processDynamicColorObjectIOS.__closure = { DynamicColorIOSProperties: items, processColorNumber };
processDynamicColorObjectIOS.__workletHash = 12385759836493;
processDynamicColorObjectIOS.__initData = {
  code: "function processDynamicColorObjectIOS_Pnpm_colorsTs11(value){const{DynamicColorIOSProperties,processColorNumber}=this.__closure;const result={};for(const property of DynamicColorIOSProperties){if(value.dynamic[property]===undefined){continue;}const processed=processColorNumber(value.dynamic[property]);if(processed===null){return null;}result[property]=processed;}return{dynamic:result};}",
};
function unprocessDynamicColorObjectIOS(arr) {
  const dynamic = {};
  for (const item10008 of items) {
    if (undefined !== arg0.dynamic[item10008]) {
      dynamic[item10008] = unprocessColorNumber(arg0.dynamic[item10008]);
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
function processColor(semantic, target) {
  if (typeof processColorNumber === "function") {
    obj = _mod1679;
    const result = obj.processColorInitially(semantic);
    let tmp6 = result;
    if (tmp5) {
      tmp6 = result | 0;
    }
    if (tmp6) {
      return tmp6;
    } else if (0 === tmp6) {
      target = undefined;
      if (target != null) {
        target = target.target;
      }
      let tmp29 = target !== ValueProcessorTarget.ValueProcessorTarget.CSS;
      if (!tmp29) {
        tmp29 = "transparent" !== semantic;
      }
      if (tmp29) {
        tmp29 = tmp6;
      }
      return tmp29;
    } else if (typeof isPlatformColorObject === "function") {
      if (typeof fn === "function") {
        let tmp8 = typeof semantic === "object";
        if (typeof semantic === "object") {
          tmp8 = null !== semantic;
        }
        if (tmp8) {
          const _Array = Array;
          tmp8 = !Array.isArray(semantic);
        }
        if (tmp8) {
          const _Array2 = Array;
          let isArray = Array.isArray(semantic.semantic);
          if (!isArray) {
            const _Array3 = Array;
            isArray = Array.isArray(semantic.resource_paths);
          }
          tmp8 = isArray;
        }
        if (tmp8) {
          return semantic;
        } else {
          let tmp13 = tmp6;
          if (isDynamicColorObjectIOS(semantic)) {
            if (JEST_WORKER_ID.IS_IOS) {
              tmp13 = processDynamicColorObjectIOS(semantic);
            } else {
              const reanimatedError = new _mod1647.ReanimatedError(obj.dynamicNotAvailableOnPlatform());
              throw reanimatedError;
            }
          }
          if (null === tmp13) {
            const reanimatedError1 = new _mod1647.ReanimatedError(obj.invalidColor(semantic));
            throw reanimatedError1;
          } else {
            return tmp13;
          }
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    tmp5 = JEST_WORKER_ID.IS_ANDROID && typeof result === "number";
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
processColor.__closure = {
  processColorNumber,
  ValueProcessorTarget: fn(1748).ValueProcessorTarget,
  isPlatformColorObject,
  isDynamicColorObjectIOS,
  IS_IOS: fn(1747).IS_IOS,
  ERROR_MESSAGES,
  processDynamicColorObjectIOS,
};
processColor.__workletHash = 3532980737440;
processColor.__initData = {
  code: "function processColor_Pnpm_colorsTs13(value,context){const{processColorNumber,ValueProcessorTarget,isPlatformColorObject,isDynamicColorObjectIOS,IS_IOS,ERROR_MESSAGES,processDynamicColorObjectIOS}=this.__closure;let result=processColorNumber(value);if(result){return result;}if(result===0){if((context===null||context===void 0?void 0:context.target)===ValueProcessorTarget.CSS&&value==='transparent'){return false;}return result;}if(isPlatformColorObject(value)){return value;}if(isDynamicColorObjectIOS(value)){if(!IS_IOS){throw new ReanimatedError(ERROR_MESSAGES.dynamicNotAvailableOnPlatform());}result=processDynamicColorObjectIOS(value);}if(result===null){throw new ReanimatedError(ERROR_MESSAGES.invalidColor(value));}return result;}",
};
function unprocessColor(arr) {
  if (typeof arr === "number") {
    if (typeof unprocessColorNumber === "function") {
      const _HermesInternal = HermesInternal;
      return (
        (((((("rgba(" + arr) << 8) >>> (24 + "," + arr)) << 16) >>> (24 + "," + arr)) << 24) >>>
        (24 + "," + (arr >>> 24) / 255 + ")")
      );
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (typeof isPlatformColorObject === "function") {
    if (typeof fn === "function") {
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
        if (JEST_WORKER_ID.IS_IOS) {
          return unprocessDynamicColorObjectIOS(arr);
        } else {
          const reanimatedError = new _mod1647.ReanimatedError(obj.dynamicNotAvailableOnPlatform());
          throw reanimatedError;
        }
      } else {
        const reanimatedError1 = new _mod1647.ReanimatedError(obj.invalidProcessedColor(arr));
        throw reanimatedError1;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const obj1 = {
  processColorNumber,
  ValueProcessorTarget: fn(1748).ValueProcessorTarget,
  isPlatformColorObject,
  isDynamicColorObjectIOS,
  IS_IOS: fn(1747).IS_IOS,
  ERROR_MESSAGES,
  processDynamicColorObjectIOS,
};
unprocessColor.__closure = {
  unprocessColorNumber,
  isPlatformColorObject,
  isDynamicColorObjectIOS,
  IS_IOS: fn(1747).IS_IOS,
  ERROR_MESSAGES,
  unprocessDynamicColorObjectIOS,
};
unprocessColor.__workletHash = 11221362619601;
unprocessColor.__initData = {
  code: "function unprocessColor_Pnpm_colorsTs14(value){const{unprocessColorNumber,isPlatformColorObject,isDynamicColorObjectIOS,IS_IOS,ERROR_MESSAGES,unprocessDynamicColorObjectIOS}=this.__closure;if(typeof value==='number'){return unprocessColorNumber(value);}if(isPlatformColorObject(value)){return value;}if(isDynamicColorObjectIOS(value)){if(!IS_IOS){throw new ReanimatedError(ERROR_MESSAGES.dynamicNotAvailableOnPlatform());}return unprocessDynamicColorObjectIOS(value);}throw new ReanimatedError(ERROR_MESSAGES.invalidProcessedColor(value));}",
};
function processColorsInProps(obj) {
  for (const key10005 in arg0) {
    let ColorProperties = _mod1679.ColorProperties;
    if (!ColorProperties.includes(key10005)) {
      continue;
    } else {
      let arr = arg0[key10005];
      let _Array = Array;
      if (Array.isArray(arr)) {
        let mapped = arr.map((item) => processColor(item));
      } else {
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
  IS_IOS: fn(1747).IS_IOS,
  ERROR_MESSAGES,
  unprocessDynamicColorObjectIOS,
};
processColorsInProps.__closure = { ColorProperties: fn(1679).ColorProperties, processColor };
processColorsInProps.__workletHash = 10982881159897;
processColorsInProps.__initData = {
  code: "function processColorsInProps_Pnpm_colorsTs15(props){const{ColorProperties,processColor}=this.__closure;for(const key in props){if(!ColorProperties.includes(key)){continue;}const value=props[key];props[key]=Array.isArray(value)?value.map(function(c){return processColor(c);}):processColor(value);}}",
};
function unprocessColorsInProps(styleProps) {
  for (const key10005 in arg0) {
    let ColorProperties = _mod1679.ColorProperties;
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
const obj3 = { ColorProperties: fn(1679).ColorProperties, processColor };
unprocessColorsInProps.__closure = { ColorProperties: fn(1679).ColorProperties, unprocessColor };
unprocessColorsInProps.__workletHash = 1282697128442;
unprocessColorsInProps.__initData = {
  code: "function unprocessColorsInProps_Pnpm_colorsTs16(props){const{ColorProperties,unprocessColor}=this.__closure;for(const key in props){if(!ColorProperties.includes(key)){continue;}const value=props[key];props[key]=Array.isArray(value)?value.map(function(c){return unprocessColor(c);}):unprocessColor(value);}}",
};

export { PlatformColor };
export { DynamicColorIOS };
export { ERROR_MESSAGES };
export { processColorNumber };
export { processColor };
export { unprocessColor };
export { processColorsInProps };
export { unprocessColorsInProps };
