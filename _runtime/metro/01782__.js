// _runtime/metro/01782__.js
import _mod1647 from "01647__.js";
import _mod1661 from "01661__.js";

require = arg1;
const dependencyMap = arg6;
function isAnimated(onFrame) {
  if (Array.isArray(onFrame)) {
    let someResult = onFrame.some(require);
  } else {
    someResult = typeof onFrame === "object";
    if (typeof onFrame === "object") {
      someResult = null !== onFrame;
    }
    if (someResult) {
      let someResult1 = undefined !== onFrame.onFrame;
      if (!someResult1) {
        const _Object = Object;
        const values = Object.values(onFrame);
        someResult1 = values.some(require);
      }
      someResult = someResult1;
    }
  }
  return someResult;
}
let closure_129_0 = isAnimated;
isAnimated.__closure = {};
isAnimated.__workletHash = 4296700641760;
isAnimated.__initData = {
  code: "function isAnimated_Pnpm_utilsTs1(prop){const isAnimated_Pnpm_utilsTs1=this._recur;if(Array.isArray(prop)){return prop.some(isAnimated_Pnpm_utilsTs1);}else if(typeof prop==='object'&&prop!==null){if(prop.onFrame!==undefined){return true;}else{return Object.values(prop).some(isAnimated_Pnpm_utilsTs1);}}return false;}",
};
function shallowEqual(arg0, arg1) {
  const keys = Object.keys(arg0);
  if (keys.length !== Object.keys(arg1).length) {
    return false;
  } else {
    let num = 0;
    if (0 < keys.length) {
      while (arg0[keys[num]] === arg1[keys[num]]) {
        num = num + 1;
      }
      return false;
    }
    return true;
  }
}
shallowEqual.__closure = {};
shallowEqual.__workletHash = 6945711106539;
shallowEqual.__initData = {
  code: "function shallowEqual_Pnpm_utilsTs2(a,b){const aKeys=Object.keys(a);const bKeys=Object.keys(b);if(aKeys.length!==bKeys.length){return false;}for(let i=0;i<aKeys.length;i++){if(a[aKeys[i]]!==b[aKeys[i]]){return false;}}return true;}",
};
function validateAnimatedStyles(obj) {
  if (typeof obj !== "object") {
    const _HermesInternal = HermesInternal;
    const reanimatedError = new _mod1647.ReanimatedError(
      "`useAnimatedStyle` has to return an object, found " + typeof obj + " instead.",
    );
    throw reanimatedError;
  } else {
    const _Array = Array;
    if (Array.isArray(obj)) {
      const reanimatedError1 = new _mod1647.ReanimatedError(
        "`useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.",
      );
      throw reanimatedError1;
    }
  }
}
validateAnimatedStyles.__closure = {};
validateAnimatedStyles.__workletHash = 9250446401049;
validateAnimatedStyles.__initData = {
  code: "function validateAnimatedStyles_Pnpm_utilsTs3(styles){if(typeof styles!=='object'){throw new ReanimatedError(\"`useAnimatedStyle` has to return an object, found \"+typeof styles+\" instead.\");}else if(Array.isArray(styles)){throw new ReanimatedError('`useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.');}}",
};

export const buildWorkletsHash = function buildWorkletsHash(items1) {
  const values = Object.values(items1);
  return values.reduce((acc, __workletHash) => acc + __workletHash.__workletHash.toString(), "");
};
export const buildDependencies = function buildDependencies(arr, memoizedGestureCallbacks) {
  let values = Object.values(memoizedGestureCallbacks);
  const found = values.filter((item) => undefined !== item);
  let tmp2 = found;
  if (arr) {
    const _Object = Object;
    values = Object.values(found);
    arr.push(values.reduce((acc, __workletHash) => acc + __workletHash.__workletHash.toString(), ""));
    tmp2 = arr;
  }
  return tmp2;
};
export const areDependenciesEqual = function areDependenciesEqual(dependencies, savedDependencies) {
  if (typeof Object.is === "function") {
    const _Object = Object;
  } else {
    is = function is(arg0, arg1) {
      let tmp = arg0 === arg1;
      if (tmp) {
        let tmp2 = 0 !== arg0;
        if (!tmp2) {
          tmp2 = 1 / arg0 === 1 / arg1;
        }
        tmp = tmp2;
      }
      if (!tmp) {
        const _Number = Number;
        let isNaNResult = Number.isNaN(arg0);
        if (isNaNResult) {
          const _Number2 = Number;
          isNaNResult = Number.isNaN(arg1);
        }
        tmp = isNaNResult;
      }
      return tmp;
    };
  }
  let flag = false;
  if (dependencies) {
    flag = false;
    if (savedDependencies) {
      flag = false;
      if (savedDependencies.length === dependencies.length) {
        let num = 0;
        flag = true;
        if (0 < savedDependencies.length) {
          while (true) {
            let tmp2 = dependencies[num];
            let tmp3 = savedDependencies[num];
            if (is(tmp2, tmp3)) {
              let sum = num + 1;
              num = sum;
              flag = true;
              if (sum >= savedDependencies.length) {
                break;
              }
            } else {
              let tmp5 = require;
              let obj = _mod1661;
              flag = false;
              if (!obj.isWorkletFunction(tmp2)) {
                break;
              } else {
                let tmp5Result = tmp5(1661);
                flag = false;
                if (!tmp5Result.isWorkletFunction(tmp3)) {
                  break;
                } else {
                  let __closure = tmp2;
                  let __closure2 = tmp3;
                  let flag2 = false;
                  if (tmp2.__workletHash === tmp3.__workletHash) {
                    let _Object2 = Object;
                    let keys = Object.keys(tmp2.__closure);
                    let _Object3 = Object;
                    let tmp7 =
                      keys.length === Object.keys(tmp3.__closure).length &&
                      keys.every((item) => {
                        let tmp2 = item in __closure2.__closure;
                        if (tmp2) {
                          tmp2 = __closure.__closure[item] === tmp.__closure[item];
                        }
                        return tmp2;
                      });
                    flag2 = tmp7;
                  }
                  flag = false;
                  if (!flag2) {
                    break;
                  }
                }
              }
            }
            break;
          }
        }
      }
    }
  }
  return flag;
};
export { isAnimated };
export { shallowEqual };
export { validateAnimatedStyles };
