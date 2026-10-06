// === Module 8731: utils/FunctionUtils ===

// Module 8731 (utils/FunctionUtils)
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let map, set;

let result = size.fileFinishedImporting("../discord_common/js/shared/utils/FunctionUtils.tsx");
class PromiseDeduper {
  #r;
  constructor() {
    const obj = Object.create(new.target.prototype);
    map = new Map();
    if (_r in obj) {
      throw new TypeError("Cannot initialize private field twice.");
    } else {
      obj[map] = _r;
      return obj;
    }
  }
  one(play, fn, arg2) {
    const self = this;
    let closure_1 = play;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    let flag = obj.force;
    if (flag === undefined) {
      flag = false;
    }
    let cleanupPromise;
    let obj2 = self[self];
    const value = obj2.get(play);
    const tmp = self;
    if (!flag) {
      if (null != value) {
        return value;
      }
    }
    const promise = fn();
    cleanupPromise = promise.finally(() => {
      const obj = self.#r;
      if (obj.get(play) === cleanupPromise) {
        const obj2 = self.#r;
        obj2.delete(play);
      }
    });
    const obj3 = self[tmp];
    const result = obj3.set(play, cleanupPromise);
    return cleanupPromise;
  }
  many(items, fn) {
    function _loop(item10055) {
      let closure_0 = item10055;
      const nextPromise = promise.then(function(has) {
        if (has.has(item10055)) {
          return has.get(item10055);
        } else {
          const _Error = Error;
          const _String = String;
          const _HermesInternal = HermesInternal;
          self = this;
          const self2 = this;
          const error = new Error("Promise deduper result missing key: " + String(item10055));
          throw error;
        }
      });
      const cleanupPromise = nextPromise.finally(() => {
        const obj = self.#r;
        if (obj.get(item10055) === cleanupPromise) {
          const obj2 = self.#r;
          obj2.delete(item10055);
        }
      });
      let obj = closure_0[promise];
      const result = obj.set(item10055, cleanupPromise);
      const result1 = cleanupPromise.set(item10055, cleanupPromise);
    }
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
    set = new Set(items);
    items = [...set];
    const items1 = [];
    map = new Map();
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = promise;
      let obj3 = this[promise];
      let value = obj3.get(nextResult);
      if (!flag) {
        if (null != value) {
          let result = map.set(tmp3, value);
        }
        continue;
      }
      let arr = items1.push(tmp3);
    }
    if (items1.length > 0) {
      try {
        promise = fn(items1);
      } catch (tmp13) {
        promise = Promise.reject(tmp13);
      }
      for (const item10055 of items1) {
        let tmp16 = _loop(item10055);
        continue;
      }
    }
    const allPromises = Promise.all(items.map((() => {
      let closure_0 = map(function*(arg0) {
        let c2;
        let c3;
        closure_0 = arg0;
        const items = [closure_0, ];
        yield items.get(closure_0);
        items[1] = value;
        return items;
      });
      return function(arg0) {
        return closure_0(...arguments);
      };
    })()));
    return allPromises.then((result) => {
      map = new Map();
      const tmp = result[Symbol.iterator]();
      while (tmp !== undefined) {
        let tmp4 = self(tmp2, 2);
        result = map.set(tmp4[0], tmp4[1]);
        continue;
      }
      return map;
    });
  }
}
const prototype = PromiseDeduper.prototype;

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
  let closure_0 = arg0;
  let items = null;
  let closure_2 = null;
  return () => {
    items = [...arguments];
    let flag = true;
    if (items !== items) {
      flag = false;
      if (null != items) {
        flag = false;
        if (null != items) {
          flag = false;
          if (items.length === items.length) {
            let num2 = 0;
            flag = true;
            if (0 < items.length) {
              flag = false;
              while (items[num2] === items[num2]) {
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
      HermesBuiltin.arraySpread(items1, items, 0);
      closure_2 = HermesBuiltin.apply(closure_0, items1, undefined);
    }
    return closure_2;
  };
}
export function promiseThrottle(arg0) {
  let closure_0 = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 5000;
  }
  let closure_2 = -1;
  let closure_3 = null;
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
  for (const key10003 in obj) {
    if (!obj.hasOwnProperty(key10003)) {
      continue;
    } else {
      delete tmp[key10003];
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