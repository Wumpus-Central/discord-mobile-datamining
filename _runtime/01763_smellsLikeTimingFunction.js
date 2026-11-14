// _runtime/01763_smellsLikeTimingFunction.js
import _mod1668 from "metro/01668__.js";
import _mod1764 from "metro/01764__.js";

require = arg1;
const dependencyMap = arg6;
function isPredefinedTimingFunction(ease) {
  const VALID_PREDEFINED_TIMING_FUNCTIONS = _mod1764.VALID_PREDEFINED_TIMING_FUNCTIONS;
  return VALID_PREDEFINED_TIMING_FUNCTIONS.includes(ease);
}
function isAnimationProp(keys) {
  if ("animationName" !== keys) {
    if ("animationDuration" !== keys) {
      if ("animationTimingFunction" !== keys) {
        if ("animationDelay" !== keys) {
          if ("animationIterationCount" !== keys) {
            if ("animationDirection" !== keys) {
              if ("animationFillMode" !== keys) {
                if ("animationPlayState" !== keys) {
                  return false;
                }
              }
            }
          }
        }
      }
    }
  }
  return true;
}
function isTransitionProp(keys) {
  if ("transitionProperty" !== keys) {
    if ("transitionDuration" !== keys) {
      if ("transitionTimingFunction" !== keys) {
        if ("transitionDelay" !== keys) {
          if ("transitionBehavior" !== keys) {
            if ("transition" !== keys) {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
}
const items = ["onCSSAnimationStart", "onCSSAnimationEnd", "onCSSAnimationIteration", "onCSSAnimationCancel"];
const items1 = ["onCSSTransitionRun", "onCSSTransitionStart", "onCSSTransitionEnd", "onCSSTransitionCancel"];
const items2 = [...items1];
const set = new Set(items2);

export { isPredefinedTimingFunction };
export (arg0) => {
  if (typeof isPredefinedTimingFunction === "function") {
    const VALID_PREDEFINED_TIMING_FUNCTIONS = _mod1764.VALID_PREDEFINED_TIMING_FUNCTIONS;
    let hasItem = VALID_PREDEFINED_TIMING_FUNCTIONS.includes(arg0);
    if (!hasItem) {
      const VALID_PARAMETRIZED_TIMING_FUNCTIONS = _mod1764.VALID_PARAMETRIZED_TIMING_FUNCTIONS;
      hasItem = VALID_PARAMETRIZED_TIMING_FUNCTIONS.includes(arg0.split("(")[0].trim());
      const str2 = arg0.split("(")[0];
    }
    return hasItem;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export { isAnimationProp };
export { isTransitionProp };
export const ANIMATION_CALLBACK_PROPS = items;
export const TRANSITION_CALLBACK_PROPS = items1;
export (result1) => {
  if ("jump-start" !== result1) {
    if ("start" !== result1) {
      if ("jump-end" !== result1) {
        if ("end" !== result1) {
          if ("jump-none" !== result1) {
            if ("jump-both" !== result1) {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
}
export (keys) => {
  if (typeof isTransitionProp === "function") {
    let flag = true;
    if ("transitionProperty" !== keys) {
      flag = true;
      if ("transitionDuration" !== keys) {
        flag = true;
        if ("transitionTimingFunction" !== keys) {
          flag = true;
          if ("transitionDelay" !== keys) {
            flag = true;
            if ("transitionBehavior" !== keys) {
              flag = true;
              if ("transition" !== keys) {
                flag = false;
              }
            }
          }
        }
      }
    }
    if (!flag) {
      if (typeof isAnimationProp === "function") {
        let flag2 = true;
        if ("animationName" !== keys) {
          flag2 = true;
          if ("animationDuration" !== keys) {
            flag2 = true;
            if ("animationTimingFunction" !== keys) {
              flag2 = true;
              if ("animationDelay" !== keys) {
                flag2 = true;
                if ("animationIterationCount" !== keys) {
                  flag2 = true;
                  if ("animationDirection" !== keys) {
                    flag2 = true;
                    if ("animationFillMode" !== keys) {
                      flag2 = true;
                      if ("animationPlayState" !== keys) {
                        flag2 = false;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        flag = flag2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return flag;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export (key10005) => set.has(key10005)
export (str) => {
  let tmp = typeof str === "string";
  if (typeof str === "string") {
    let isMatch = /^-?(\d+)?(\.\d+)?(ms|s)$/.test(str);
    if (!isMatch) {
      isMatch = "0" === str;
    }
    tmp = isMatch;
    const obj = /^-?(\d+)?(\.\d+)?(ms|s)$/;
  }
  return tmp;
}
export (arg0) => {
  let isNumberResult = _mod1668.isNumber(arg0);
  if (!isNumberResult) {
    isNumberResult = _mod1668.isPercentage(arg0);
    const tmpResult = _mod1668;
  }
  return isNumberResult;
}
export (mapped, arg1) => {
  let isArray = Array.isArray(mapped);
  if (isArray) {
    isArray = mapped.length === arg1;
  }
  return isArray;
}
export (item) => {
  let tmp = typeof item === "object";
  if (typeof item === "object") {
    const _Object = Object;
    tmp = Object.keys(item).length > 0;
  }
  return tmp;
}
export (item) => {
  let tmp = typeof item === "object";
  if (typeof item === "object") {
    tmp = "cssRules" in item;
  }
  if (tmp) {
    tmp = "cssText" in item;
  }
  return tmp;
}
export (obj) => {
  if (obj) {
    if (typeof obj === "object") {
      const _Array = Array;
      if (!Array.isArray(obj)) {
        const _Object = Object;
        const keys = Object.keys(obj);
        let everyResult = 0 !== keys.length;
        if (everyResult) {
          everyResult = keys.every((item) => {
            let startsWithResult = "default" === item;
            if (!startsWithResult) {
              startsWithResult = item.startsWith(":");
            }
            return startsWithResult;
          });
        }
        return everyResult;
      }
    }
  }
  return false;
}