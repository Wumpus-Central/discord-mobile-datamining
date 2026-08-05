// discord_common/js/shared/utils/FunctionUtils.tsx
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "asyncGeneratorStep";

let result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/FunctionUtils.tsx");
function promiseThrottle(arg0) {
  let _slicedToArray = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 5000;
  }
  let c2 = -1;
  let c3 = null;
  return () => {
    let tmp = null == closure_3;
    if (!tmp) {
      const _Date = Date;
      tmp = Date.now() >= closure_2;
    }
    if (tmp) {
      const _Date2 = Date;
      closure_2 = Date.now() + num;
      closure_3 = callback();
    }
    return closure_3;
  };
}
// CreatePrivateName (0x9e)
class PromiseDeduper {
  constructor() {
    obj = Object.create(new.target.prototype);
    // PrivateIsIn (0x32)
    if (tmp) {
      str = "Cannot initialize private field twice.";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
      return;
    } else {
      tmp4 = tmp3;
      // AddOwnPrivateBySym (0x64)
      return obj;
    }
  }
}
const prototype = PromiseDeduper.prototype;
prototype["one"] = function one(play, fn, arg2, arg3) {
  let self = this;
  self = this;
  let asyncGeneratorStep = play;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  let cleanupPromise;
  // GetOwnPrivateBySym (0x65)
  const value = obj.get(play);
  if (!flag) {
    if (null != value) {
      return value;
    }
  }
  cleanupPromise = fn().finally(() => {
    // GetOwnPrivateBySym (0x65)
    if (obj.get(asyncGeneratorStep) === cleanupPromise) {
      // GetOwnPrivateBySym (0x65)
      self.delete(asyncGeneratorStep);
    }
  });
  // GetOwnPrivateBySym (0x65)
  const result = self.set(play, cleanupPromise);
  return cleanupPromise;
};
prototype["many"] = function many(items) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  let map;
  let closure_2;
  let self = this;
  items = [...new Set(items)];
  const items1 = [];
  map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = closure_2;
    // GetOwnPrivateBySym (0x65)
    let tmp3 = nextResult;
    let value = push.get(nextResult);
    if (!flag) {
      let tmp6 = value;
      if (null != value) {
        push = nextResult;
        let tmp7 = value;
        let result = map.set(nextResult, value);
      }
      continue;
    }
    push = items1.push;
    let tmp9 = nextResult;
    let arr = push(tmp3);
  }
  if (items1.length <= 0) {
    Promise.all(items.map((() => {
      let _slicedToArray = map((arg0) => {
        let _slicedToArray = arg0;
        let c2 = 0;
        let c3 = 0;
        return (function*(arg0) {
          const items = [_slicedToArray, ];
          items[1] = yield outer1_1.get(_slicedToArray);
          return items;
        })();
      });
      return function(arg0) {
        const self = this;
        const apply = _slicedToArray.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
    })())).then((arg0) => {
      const map = new Map();
      while (tmp !== undefined) {
        let tmp3 = self;
        let tmp4 = self(tmp2, 2);
        let result = map.set(tmp4[0], tmp4[1]);
        continue;
      }
      return map;
    });
    const allPromises = Promise.all(items.map((() => {
      let _slicedToArray = map((arg0) => {
        let _slicedToArray = arg0;
        let c2 = 0;
        let c3 = 0;
        return (function*(arg0) {
          const items = [_slicedToArray, ];
          items[1] = yield outer1_1.get(_slicedToArray);
          return items;
        })();
      });
      return function(arg0) {
        const self = this;
        const apply = _slicedToArray.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
    })()));
  } else {
    try {
      closure_2 = arg1(items1);
      function _loop(arg0) {
        const _self = arg0;
        const cleanupPromise = promise.then((has) => {
          if (has.has(_slicedToArray)) {
            return has.get(tmp);
          } else {
            const _Error = Error;
            const _String = String;
            const _HermesInternal = HermesInternal;
            const error = new Error("Promise deduper result missing key: " + String(tmp));
            throw error;
          }
        }).finally(() => {
          // GetOwnPrivateBySym (0x65)
          if (obj.get(_slicedToArray) === cleanupPromise) {
            // GetOwnPrivateBySym (0x65)
            _slicedToArray.delete(_slicedToArray);
          }
        });
        // GetOwnPrivateBySym (0x65)
        const result = _self.set(arg0, cleanupPromise);
        const result1 = cleanupPromise.set(arg0, cleanupPromise);
      }
      items1[Symbol.iterator]();
    } catch (tmp12) {
      closure_2 = Promise.reject(tmp12);
    }
  }
};

export const areArraysShallowlyEqual = function areArraysShallowlyEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else {
    if (null != arg0) {
      if (null != arg1) {
        if (arg0.length === arg1.length) {
          let num = 0;
          if (0 < arg0.length) {
            while (arg0[num] === arg1[num]) {
              num = num + 1;
            }
            return false;
          }
          return true;
        }
      }
    }
    return false;
  }
};
export function cachedFunction(arg0) {
  let _slicedToArray = arg0;
  let c1 = null;
  let c2 = null;
  return () => {
    const items = [...arguments];
    let flag = true;
    if (items !== items) {
      flag = false;
      if (null != arr2) {
        flag = false;
        if (null != items) {
          flag = false;
          if (arr2.length === items.length) {
            let num2 = 0;
            flag = true;
            if (0 < arr2.length) {
              flag = false;
              while (arr2[num2] === items[num2]) {
                let sum = num2 + 1;
                num2 = sum;
                flag = true;
                if (sum >= length) {
                  break;
                }
              }
            }
          }
        }
      }
    }
    if (!flag) {
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      let closure_2 = HermesBuiltin.apply(items1, undefined);
    }
    return closure_2;
  };
}
export { promiseThrottle };
export { PromiseDeduper };
export const clearObject = function clearObject(obj) {
  for (const key10003 in arg0) {
    let tmp3 = key10003;
    if (!arg0.hasOwnProperty(key10003)) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
};
export const isPlainObjectEmpty = function isPlainObjectEmpty(arg0) {
  const keys = Object.keys();
  if (keys !== undefined) {
    if (keys[tmp] !== undefined) {
      return false;
    }
  }
  return true;
};