// _runtime/00963__push.js
import ignoreNextOnError from "00893_ignoreNextOnError.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

function _push(fn, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  return fn((getAllKeys) => {
    const allKeys = getAllKeys.getAllKeys();
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const fn = () => closure_0(transaction.result);
      closure_0.onsuccess = fn;
      closure_0.oncomplete = fn;
      const fn2 = () => closure_1(transaction.error);
      closure_0.onerror = fn2;
      closure_0.onabort = fn2;
    }).then((result) => {
      if (result.length < closure_1) {
        const _Math = Math;
        const items = [];
        items[HermesBuiltin.arraySpread(result, 0)] = 0;
        const _Math2 = Math;
        closure_0.put(closure_0, HermesBuiltin.apply(items, Math) + 1);
        const transaction = closure_0.transaction;
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          const fn = () => closure_0(transaction.result);
          closure_0.onsuccess = fn;
          closure_0.oncomplete = fn;
          const fn2 = () => closure_1(transaction.error);
          closure_0.onerror = fn2;
          closure_0.onabort = fn2;
        });
        return promise;
      }
    });
  });
}
function _unshift(fn, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  return fn((getAllKeys) => {
    const allKeys = getAllKeys.getAllKeys();
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const fn = () => closure_0(transaction.result);
      closure_0.onsuccess = fn;
      closure_0.oncomplete = fn;
      const fn2 = () => closure_1(transaction.error);
      closure_0.onerror = fn2;
      closure_0.onabort = fn2;
    }).then((result) => {
      if (result.length < closure_1) {
        const _Math = Math;
        const items = [];
        items[HermesBuiltin.arraySpread(result, 0)] = 0;
        const _Math2 = Math;
        closure_0.put(closure_0, HermesBuiltin.apply(items, Math) - 1);
        const transaction = closure_0.transaction;
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          const fn = () => closure_0(transaction.result);
          closure_0.onsuccess = fn;
          closure_0.oncomplete = fn;
          const fn2 = () => closure_1(transaction.error);
          closure_0.onerror = fn2;
          closure_0.onabort = fn2;
        });
        return promise;
      }
    });
  });
}
function _shift(fn) {
  return fn((getAllKeys) => {
    const allKeys = getAllKeys.getAllKeys();
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const fn = () => closure_0(transaction.result);
      closure_0.onsuccess = fn;
      closure_0.oncomplete = fn;
      const fn2 = () => closure_1(transaction.error);
      closure_0.onerror = fn2;
      closure_0.onabort = fn2;
    }).then((result) => {
      const first = result[0];
      let set = first;
      if (null != first) {
        set = set.get(first);
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          const fn = () => closure_0(transaction.result);
          closure_0.onsuccess = fn;
          closure_0.oncomplete = fn;
          const fn2 = () => closure_1(transaction.error);
          closure_0.onerror = fn2;
          closure_0.onabort = fn2;
        });
        return promise.then((result) => {
          set.delete(set);
          const transaction = set.transaction;
          return new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            const fn = () => { ... };
            closure_0.onsuccess = fn;
            closure_0.oncomplete = fn;
            const fn2 = () => { ... };
            closure_0.onerror = fn2;
            closure_0.onabort = fn2;
          }).then(() => transaction);
        });
      }
    });
  });
}
function createIndexedDbStore(arg0) {
  let dbName = arg0;
  function getStore() {
    if (null == f71787) {
      let str = dbName.dbName;
      if (!str) {
        str = "sentry-offline";
      }
      dbName = dbName.storeName || "queue";
      const openResult = globalThis.indexedDB.open(str);
      openResult.onupgradeneeded = () => {
        const result = openResult.result;
        return result.createObjectStore(openResult);
      };
      dbName = openResult;
      const promise = new Promise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        const fn = () => closure_0(transaction.result);
        closure_0.onsuccess = fn;
        closure_0.oncomplete = fn;
        const fn2 = () => closure_1(transaction.error);
        closure_0.onerror = fn2;
        closure_0.onabort = fn2;
      });
      f71787 = (arg0) => {
        closure_0 = arg0;
        return promise.then((transaction) => closure_0(transaction.transaction(openResult, "readwrite").objectStore(openResult)));
      };
    }
    return f71787;
  }
  const obj = { push: null, unshift: null, shift: null };
  closure_4 = asyncGeneratorStep(async (arg0, value) => {
    closure_2 = tmp3;
    c3 = 1;
    let obj3 = dbName(dependencyMap[1]);
    await obj3.serializeEnvelope(closure_0);
    if (1 === tmp7) {
      c3 = 0;
      c5 = 3;
    } else if (2 === tmp7) {
      if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        return { value, done: true };
      } else {
        closure_129_0 = value;
        let num4 = closure_130_0.maxQueueSize;
        if (!num4) {
          num4 = 30;
        }
        c4 = 3;
        c5 = 1;
        obj3 = { value: c3(closure_130_5(), closure_129_0, num4), done: false };
        return obj3;
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    c3 = 0;
    return value;
  });
  obj.push = function push(arg0) {
    const self = this;
    const apply = closure_4.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_3 = asyncGeneratorStep(async (arg0, value) => {
    closure_2 = tmp3;
    let obj3 = dbName(dependencyMap[1]);
    await obj3.serializeEnvelope(closure_0);
    if (1 === tmp7) {
      c3 = 0;
      c5 = 3;
    } else if (2 === tmp7) {
      if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        return { value, done: true };
      } else {
        closure_129_0 = value;
        let num4 = closure_130_0.maxQueueSize;
        if (!num4) {
          num4 = 30;
        }
        c4 = 3;
        c5 = 1;
        obj3 = { value: c4(closure_130_5(), closure_129_0, num4), done: false };
        return obj3;
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return value;
  });
  obj.unshift = function unshift(_default) {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  asyncGeneratorStep = asyncGeneratorStep(async (arg0, value) => {
    await closure_1_5(getStore());
    if (1 === tmp7) {
      c2 = 0;
      c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c2 = 0;
      c4 = 3;
      return { value, done: true };
    } else {
      closure_128_0 = value;
      if (!closure_128_0) {
        c2 = 0;
      }
    }
    return dbName(tmp3[1]).parseEnvelope(closure_128_0);
  });
  obj.shift = function shift() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return obj;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createStore = function createStore(arg0, arg1) {
  closure_0 = arg1;
  const openResult = globalThis.indexedDB.open(arg0);
  dependencyMap = openResult;
  openResult.onupgradeneeded = () => {
    const result = openResult.result;
    return result.createObjectStore(openResult);
  };
  closure_129_0 = openResult;
  const promise = new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const fn = () => closure_0(transaction.result);
    closure_0.onsuccess = fn;
    closure_0.oncomplete = fn;
    const fn2 = () => closure_1(transaction.error);
    closure_0.onerror = fn2;
    closure_0.onabort = fn2;
  });
  return (arg0) => {
    closure_0 = arg0;
    return promise.then((transaction) => closure_0(transaction.transaction(openResult, "readwrite").objectStore(openResult)));
  };
};
export const makeBrowserOfflineTransport = function makeBrowserOfflineTransport() {
  let makeFetchTransport = arg0;
  if (arg0 === undefined) {
    makeFetchTransport = require("metro/00897__.js").makeFetchTransport;
  }
  _require = require("metro/00682__.js").makeOfflineTransport(makeFetchTransport);
  return (arg0) => {
    let obj = {};
    const merged = Object.assign(arg0);
    obj.createStore = createIndexedDbStore;
    const tmp2 = closure_0(obj);
    const WINDOW = ignoreNextOnError.WINDOW;
    closure_0 = asyncGeneratorStep(async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c1 = 1;
              c0 = 1;
              const obj1 = { value: c0.flush(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp6) {
          c0 = tmp;
          throw tmp6;
        }
      }
    });
    const listener = WINDOW.addEventListener("online", function(event) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
    return tmp2;
  };
};
export const push = _push;
export const shift = _shift;
export const unshift = _unshift;