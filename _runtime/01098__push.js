// _runtime/01098__push.js
import closure_2 from "00005_asyncGeneratorStep.js";

function _push(arg0, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  return arg0((getAllKeys) => {
    const allKeys = getAllKeys.getAllKeys();
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const fn = () => lib(lib.result);
      closure_0.onsuccess = fn;
      closure_0.oncomplete = fn;
      const fn2 = () => callback(lib.error);
      closure_0.onerror = fn2;
      closure_0.onabort = fn2;
    }).then((arg0) => {
      if (arg0.length < closure_1_1) {
        const _Math = Math;
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = 0;
        const _Math2 = Math;
        transaction.put(closure_0, HermesBuiltin.apply(items, Math) + 1);
        transaction = transaction.transaction;
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          const fn = () => lib(lib.result);
          closure_0.onsuccess = fn;
          closure_0.oncomplete = fn;
          const fn2 = () => callback(lib.error);
          closure_0.onerror = fn2;
          closure_0.onabort = fn2;
        });
        return promise;
      }
    });
  });
}
function _unshift(arg0, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  return arg0((getAllKeys) => {
    const allKeys = getAllKeys.getAllKeys();
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const fn = () => lib(lib.result);
      closure_0.onsuccess = fn;
      closure_0.oncomplete = fn;
      const fn2 = () => callback(lib.error);
      closure_0.onerror = fn2;
      closure_0.onabort = fn2;
    }).then((arg0) => {
      if (arg0.length < closure_1_1) {
        const _Math = Math;
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = 0;
        const _Math2 = Math;
        transaction.put(closure_0, HermesBuiltin.apply(items, Math) - 1);
        transaction = transaction.transaction;
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          const fn = () => lib(lib.result);
          closure_0.onsuccess = fn;
          closure_0.oncomplete = fn;
          const fn2 = () => callback(lib.error);
          closure_0.onerror = fn2;
          closure_0.onabort = fn2;
        });
        return promise;
      }
    });
  });
}
function _shift(arg0) {
  return arg0((getAllKeys) => {
    const allKeys = getAllKeys.getAllKeys();
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const fn = () => lib(lib.result);
      closure_0.onsuccess = fn;
      closure_0.oncomplete = fn;
      const fn2 = () => callback(lib.error);
      closure_0.onerror = fn2;
      closure_0.onabort = fn2;
    }).then((arg0) => {
      const first = arg0[0];
      closure_0 = first;
      if (null != first) {
        closure_0 = closure_0.get(first);
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          const fn = () => lib(lib.result);
          closure_0.onsuccess = fn;
          closure_0.oncomplete = fn;
          const fn2 = () => callback(lib.error);
          closure_0.onerror = fn2;
          closure_0.onabort = fn2;
        });
        return promise.then((arg0) => {
          let transaction = arg0;
          set.delete(transaction);
          transaction = set.transaction;
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
  closure_0 = arg0;
  function getStore() {
    if (null == f69827) {
      let str = dbName.dbName;
      if (!str) {
        str = "sentry-offline";
      }
      dbName = dbName.storeName || "queue";
      const openResult = globalThis.indexedDB.open(str);
      f69827 = openResult;
      openResult.onupgradeneeded = () => {
        const result = f69827.result;
        return result.createObjectStore(closure_0);
      };
      dbName = openResult;
      const promise = new Promise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        const fn = () => lib(lib.result);
        closure_0.onsuccess = fn;
        closure_0.oncomplete = fn;
        const fn2 = () => callback(lib.error);
        closure_0.onerror = fn2;
        closure_0.onabort = fn2;
      });
      f69827 = (arg0) => {
        closure_0 = arg0;
        return promise.then((transaction) => callback(transaction.transaction(callback, "readwrite").objectStore(callback)));
      };
      const tmp7 = dbName;
    }
    return f69827;
  }
  let obj = { push: null, unshift: null, shift: null };
  closure_4 = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function*(arg0) {
      closure_2 = tmp3;
      c3 = 1;
      let obj3 = lib(closure_1_1[1]);
      yield obj3.serializeEnvelope(lib);
      if (1 === tmp7) {
        c3 = 0;
        let v0 = 3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          v0 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          lib = arg1;
          let num4 = lib.maxQueueSize;
          if (!num4) {
            num4 = 30;
          }
          c4 = 3;
          v0 = 1;
          obj3 = { value: null, done: false };
          obj3[0] = c3(v0(), lib, num4);
          return obj3;
        }
      } else if (arg0 === 1) {
        v0 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    })();
  });
  obj[0] = function push(arg0) {
    const self = this;
    const apply = closure_4.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_3 = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function*(arg0) {
      closure_2 = tmp3;
      c3 = 1;
      let obj3 = lib(closure_1_1[1]);
      yield obj3.serializeEnvelope(lib);
      if (1 === tmp7) {
        c3 = 0;
        let v0 = 3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          v0 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          lib = arg1;
          let num4 = lib.maxQueueSize;
          if (!num4) {
            num4 = 30;
          }
          c4 = 3;
          v0 = 1;
          obj3 = { value: null, done: false };
          obj3[0] = c4(v0(), lib, num4);
          return obj3;
        }
      } else if (arg0 === 1) {
        v0 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    })();
  });
  obj[1] = function unshift(props) {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  callback = callback(function*() {
    closure_1 = tmp3;
    c2 = 1;
    yield closure_1_5(closure_1_5());
    if (1 === tmp7) {
      c2 = 0;
      c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 === 2) {
      c2 = 0;
      c4 = 3;
      const obj2 = { value: null, done: true };
      obj2[0] = arg1;
      return obj2;
    } else {
      closure_0 = arg1;
      if (!closure_0) {
        c2 = 0;
      }
    }
    const obj = closure_1_0(closure_1_1[1]);
    c2 = 0;
    return obj.parseEnvelope(closure_0);
  });
  obj[2] = function shift(arg0) {
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
    const result = f69827.result;
    return result.createObjectStore(closure_0);
  };
  closure_0 = openResult;
  const promise = new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const fn = () => lib(lib.result);
    closure_0.onsuccess = fn;
    closure_0.oncomplete = fn;
    const fn2 = () => callback(lib.error);
    closure_0.onerror = fn2;
    closure_0.onabort = fn2;
  });
  return (arg0) => {
    closure_0 = arg0;
    return promise.then((transaction) => callback(transaction.transaction(callback, "readwrite").objectStore(callback)));
  };
};
export const makeBrowserOfflineTransport = function makeBrowserOfflineTransport() {
  let makeFetchTransport = arg0;
  if (arg0 === undefined) {
    makeFetchTransport = require("01032_makeFetchTransport.js").makeFetchTransport;
  }
  _require = require("00817_registerSpanErrorInstrumentation.js").makeOfflineTransport(makeFetchTransport);
  return (arg0) => {
    let obj = {};
    const merged = Object.assign(arg0);
    obj.createStore = closure_1_6;
    const tmp2 = callback(obj);
    callback = tmp2;
    const WINDOW = callback(closure_1_1[2]).WINDOW;
    callback = undefined;
    callback = closure_1_2(function*(arg0) {
      if (c0 === 2) {
        c0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = c0.flush();
              return obj1;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp6) {
          c0 = tmp;
          throw tmp6;
        }
      }
    });
    const listener = WINDOW.addEventListener("online", function(arg0) {
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