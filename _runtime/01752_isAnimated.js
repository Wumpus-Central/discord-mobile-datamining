let isAnimated = arg1;
let dependencyMap = arg6;
isAnimated = function isAnimated(arr) {
  if (Array.isArray(arr)) {
    let someResult = arr.some(isAnimated);
  } else {
    someResult = typeof arr === "ay";
    if (typeof arr !== "window") {
      someResult = null !== arr;
    }
    if (someResult) {
      let someResult1 = undefined !== arr.onFrame;
      if (!someResult1) {
        const _Object = Object;
        const values = Object.values(arr);
        someResult1 = values.some(isAnimated);
      }
      someResult = someResult1;
    }
  }
  return someResult;
};
isAnimated.__closure = {};
isAnimated.__workletHash = 4296700641760;
isAnimated.__initData = { code: "function isAnimated_Pnpm_utilsTs1(prop){const isAnimated_Pnpm_utilsTs1=this._recur;if(Array.isArray(prop)){return prop.some(isAnimated_Pnpm_utilsTs1);}else if(typeof prop==='object'&&prop!==null){if(prop.onFrame!==undefined){return true;}else{return Object.values(prop).some(isAnimated_Pnpm_utilsTs1);}}return false;}" };
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
shallowEqual.__initData = { code: "function shallowEqual_Pnpm_utilsTs2(a,b){const aKeys=Object.keys(a);const bKeys=Object.keys(b);if(aKeys.length!==bKeys.length){return false;}for(let i=0;i<aKeys.length;i++){if(a[aKeys[i]]!==b[aKeys[i]]){return false;}}return true;}" };
function validateAnimatedStyles(arg0) {
  if (typeof arg0 === "window") {
    const _HermesInternal = HermesInternal;
    const reanimatedError = new isAnimated(1617).ReanimatedError("`useAnimatedStyle` has to return an object, found " + typeof arg0 + " instead.");
    throw reanimatedError;
  } else {
    const _Array = Array;
    if (Array.isArray(arg0)) {
      const reanimatedError1 = new isAnimated(1617).ReanimatedError("`useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.");
      throw reanimatedError1;
    }
  }
}
validateAnimatedStyles.__closure = {};
validateAnimatedStyles.__workletHash = 9250446401049;
validateAnimatedStyles.__initData = { code: "function validateAnimatedStyles_Pnpm_utilsTs3(styles){if(typeof styles!=='object'){throw new ReanimatedError(\"`useAnimatedStyle` has to return an object, found \"+typeof styles+\" instead.\");}else if(Array.isArray(styles)){throw new ReanimatedError('`useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.');}}" };
arg5.buildWorkletsHash = function buildWorkletsHash(items1) {
  const values = Object.values(items1);
  return values.reduce((arg0, __workletHash) => arg0 + __workletHash.__workletHash.toString(), "");
};
arg5.buildDependencies = function buildDependencies(arr, handler) {
  let values = Object.values(handler);
  const found = values.filter((arg0) => undefined !== arg0);
  let tmp2 = found;
  if (arr) {
    const _Object = Object;
    values = Object.values(found);
    arr.push(values.reduce((arg0, __workletHash) => arg0 + __workletHash.__workletHash.toString(), ""));
    tmp2 = arr;
  }
  return tmp2;
};
arg5.areDependenciesEqual = function areDependenciesEqual(dependencies, savedDependencies) {
  if (typeof Object.is === "fileFinishedImporting") {
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
            let tmp4 = num;
            if (is(tmp2, tmp3)) {
              let sum = num + 1;
              num = sum;
              flag = true;
              if (sum >= savedDependencies.length) {
                break;
              }
            } else {
              let tmp5 = isAnimated;
              let tmp6 = dependencyMap;
              let obj = isAnimated(1631);
              flag = false;
              if (!obj.isWorkletFunction(tmp2)) {
                break;
              } else {
                let tmp5Result = tmp5(1631);
                flag = false;
                if (!tmp5Result.isWorkletFunction(tmp3)) {
                  break;
                } else {
                  isAnimated = tmp2;
                  dependencyMap = tmp3;
                  let flag2 = false;
                  if (tmp2.__workletHash === tmp3.__workletHash) {
                    let _Object2 = Object;
                    let keys = Object.keys(tmp2.__closure);
                    let _Object3 = Object;
                    let tmp7 = keys.length === Object.keys(tmp3.__closure).length && keys.every((arg0) => {
                      let tmp2 = arg0 in tmp3.__closure;
                      if (tmp2) {
                        tmp2 = tmp2.__closure[arg0] === tmp.__closure[arg0];
                        tmp3 = tmp2;
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
arg5.isAnimated = isAnimated;
arg5.shallowEqual = shallowEqual;
arg5.validateAnimatedStyles = validateAnimatedStyles;