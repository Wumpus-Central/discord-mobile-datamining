// === Module 9028: utils/FunctionUtils ===

// Module 9028 (utils/FunctionUtils)
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/FunctionUtils.tsx");
class PromiseDeduper {
  constructor() {
    obj = Object.create(new.target.prototype);
    tmp2 = _r;
    map = new Map();
    if (_r in obj) {
      str = "Cannot initialize private field twice.";
      throw new TypeError("Cannot initialize private field twice.");
    } else {
      tmp4 = map;
      obj[map] = tmp2;
      return obj;
    }
  }
}
const prototype = PromiseDeduper.prototype;
prototype["one"] = function one(play, fn, arg2) {
  const self = this;
  closure_1 = play;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  let cleanupPromise;
  value = self[self].get(play);
  if (!flag) {
    if (null != value) {
      return value;
    }
  }
  cleanupPromise = fn().finally(() => {
    if (obj.get(closure_1) === cleanupPromise) {
      self.#r.delete(closure_1);
    }
    obj = self.#r;
  });
  const result = self[self].set(play, cleanupPromise);
  return cleanupPromise;
};
prototype["many"] = function many(items, fn) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  let promise;
  let self = this;
  items = [...new Set(items)];
  const items1 = [];
  let map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let obj3 = this[promise];
    value = obj3.get(nextResult);
    if (!flag) {
      if (null != value) {
        let result = map.set(tmp3, value);
      }
      continue;
    }
    let arr = items1.push(tmp3);
  }
  if (items1.length <= 0) {
    Promise.all(items.map((() => {
      closure_0 = map(function*(arg0) {
        const items = [closure_0, ];
        yield items.get(closure_0);
        items[1] = value;
        return items;
      });
      return function(arg0) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
    })())).then((result) => {
      map = new Map();
      while (tmp !== undefined) {
        let tmp4 = self(tmp2, 2);
        result = map.set(tmp4[0], tmp4[1]);
        continue;
      }
      return map;
    });
    const allPromises = Promise.all(items.map((() => {
      closure_0 = map(function*(arg0) {
        const items = [closure_0, ];
        yield items.get(closure_0);
        items[1] = value;
        return items;
      });
      return function(arg0) {
        const self = this;
        const apply = closure_0.apply;
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
      promise = fn(items1);
      function _loop(arg0) {
        _self = arg0;
        const cleanupPromise = promise.then((has) => {
          if (has.has(closure_0)) {
            return has.get(closure_0);
          } else {
            const _Error = Error;
            const _String = String;
            const _HermesInternal = HermesInternal;
            const error = new Error("Promise deduper result missing key: " + String(closure_0));
            throw error;
          }
        }).finally(() => {
          if (obj.get(closure_0) === cleanupPromise) {
            self.#r.delete(closure_0);
          }
          obj = self.#r;
        });
        const result = _self[promise].set(arg0, cleanupPromise);
        const result1 = cleanupPromise.set(arg0, cleanupPromise);
      }
      items1[Symbol.iterator]();
    } catch (tmp13) {
      promise = Promise.reject(tmp13);
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
  closure_0 = arg0;
  let items = null;
  closure_2 = null;
  return () => {
    items = [...arguments];
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
      closure_2 = HermesBuiltin.apply(items1, undefined);
    }
    return closure_2;
  };
}
export function promiseThrottle(arg0) {
  closure_0 = arg0;
  closure_2 = -1;
  closure_3 = null;
  return () => {
    let tmp = null == closure_3;
    if (!tmp) {
      const _Date = Date;
      tmp = Date.now() >= closure_2;
    }
    if (tmp) {
      const _Date2 = Date;
      closure_2 = Date.now() + num;
      closure_3 = closure_0();
    }
    return closure_3;
  };
}
export { PromiseDeduper };
export const clearObject = function clearObject(obj) {
  for (const key10003 in arg0) {
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