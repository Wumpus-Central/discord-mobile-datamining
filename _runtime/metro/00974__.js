// _runtime/metro/00974__.js
import _mod904 from "00904__.js";
import _asyncToGenerator_mod from "00005__asyncToGenerator.js";

const require = globalThis.__r;
let _require, c0, c1, c4, c5, closure_2, dependencyMap, f82828, getAllKeys;

function _push(fn, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  return fn((getAllKeys) => {
    getAllKeys = getAllKeys.getAllKeys();
    let promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const fn = () => closure_0(transaction.result);
      closure_0.onsuccess = fn;
      closure_0.oncomplete = fn;
      const fn2 = () => closure_1(transaction.error);
      closure_0.onerror = fn2;
      closure_0.onabort = fn2;
    });
    return promise.then(function (result) {
      if (result.length < closure_1) {
        const _Math = Math;
        const items = [];
        items[HermesBuiltin.arraySpread(items, result, 0)] = 0;
        const _Math2 = Math;
        getAllKeys.put(getAllKeys, HermesBuiltin.apply(max, items, Math) + 1);
        const transaction = getAllKeys.transaction;
        const self = this;
        const self2 = this;
        const promise = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
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
  let closure_0 = arg1;
  let closure_1 = arg2;
  return fn((getAllKeys) => {
    getAllKeys = getAllKeys.getAllKeys();
    let promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const fn = () => closure_0(transaction.result);
      closure_0.onsuccess = fn;
      closure_0.oncomplete = fn;
      const fn2 = () => closure_1(transaction.error);
      closure_0.onerror = fn2;
      closure_0.onabort = fn2;
    });
    return promise.then(function (result) {
      if (result.length < closure_1) {
        const _Math = Math;
        const items = [];
        items[HermesBuiltin.arraySpread(items, result, 0)] = 0;
        const _Math2 = Math;
        getAllKeys.put(getAllKeys, HermesBuiltin.apply(min, items, Math) - 1);
        const transaction = getAllKeys.transaction;
        const self = this;
        const self2 = this;
        const promise = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
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
    let promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const fn = () => closure_0(transaction.result);
      closure_0.onsuccess = fn;
      closure_0.oncomplete = fn;
      const fn2 = () => closure_1(transaction.error);
      closure_0.onerror = fn2;
      closure_0.onabort = fn2;
    });
    return promise.then(function (result) {
      let first = result[0];
      if (null != first) {
        first = first.get(first);
        const self = this;
        const self2 = this;
        let promise = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
          const fn = () => closure_0(transaction.result);
          closure_0.onsuccess = fn;
          closure_0.oncomplete = fn;
          const fn2 = () => closure_1(transaction.error);
          closure_0.onerror = fn2;
          closure_0.onabort = fn2;
        });
        return promise.then((result) => {
          first = result;
          first.delete(first);
          const transaction = first.transaction;
          const promise = new Promise((arg0, arg1) => {
            let closure_0 = arg0;
            let closure_1 = arg1;
            const fn = () => closure_0(transaction.result);
            closure_0.onsuccess = fn;
            closure_0.oncomplete = fn;
            const fn2 = () => closure_1(transaction.error);
            closure_0.onerror = fn2;
            closure_0.onabort = fn2;
          });
          return promise.then(() => closure_0);
        });
      }
    });
  });
}
function createIndexedDbStore(arg0) {
  let dbName = arg0;
  function getStore() {
    if (null == f82828) {
      let str = dbName.dbName;
      const tmp5 = dbName;
      if (!str) {
        str = "sentry-offline";
      }
      dbName = tmp5.storeName || "queue";
      const openResult = globalThis.indexedDB.open(str);
      openResult.onupgradeneeded = () => {
        const result = openResult.result;
        return result.createObjectStore(closure_0);
      };
      const self = this;
      const self2 = this;
      const promise = new Promise((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        const fn = () => closure_0(transaction.result);
        closure_0.onsuccess = fn;
        closure_0.oncomplete = fn;
        const fn2 = () => closure_1(transaction.error);
        closure_0.onerror = fn2;
        closure_0.onabort = fn2;
      });
      f82828 = (arg0) => {
        closure_0 = arg0;
        return promise.then((transaction) => {
          const transactionResult = transaction.transaction(closure_0, "readwrite");
          return closure_0(transactionResult.objectStore(closure_0));
        });
      };
    }
    return f82828;
  }
  let obj = {
    push(arg0) {
      return closure_4(...arguments);
    },
    unshift(_default) {
      return closure_3(...arguments);
    },
    shift() {
      return closure_2(...arguments);
    },
  };
  let closure_4 = _asyncToGenerator(async (arg0) => {
    let closure_0;
    let obj4;
    dbName = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            let closure_1 = tmp4;
            dbName = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj4.serializeEnvelope(dbName), done: false };
            obj4 = dbName(closure_1[1]);
            return obj5;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              dbName = value;
              let num4 = closure_130_0.maxQueueSize;
              const tmp10 = dbName;
              const tmp7 = c3;
              const tmp9 = closure_130_5();
              if (!num4) {
                num4 = 30;
              }
              c4 = 3;
              c5 = 1;
              const obj7 = { value: tmp7(tmp9, tmp10, num4), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp15) {
        if (0 === c3) {
          c5 = 3;
          throw tmp15;
        } else {
          c4 = 1;
        }
      }
    }
  });
  let closure_3 = _asyncToGenerator(async (arg0) => {
    let closure_0;
    let obj4;
    dbName = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            let closure_1 = tmp4;
            dbName = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj4.serializeEnvelope(dbName), done: false };
            obj4 = dbName(closure_1[1]);
            return obj5;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              dbName = value;
              let num4 = closure_130_0.maxQueueSize;
              const tmp10 = dbName;
              const tmp7 = c4;
              const tmp9 = closure_130_5();
              if (!num4) {
                num4 = 30;
              }
              c4 = 3;
              c5 = 1;
              const obj7 = { value: tmp7(tmp9, tmp10, num4), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp15) {
        if (0 === c3) {
          c5 = 3;
          throw tmp15;
        } else {
          c4 = 1;
        }
      }
    }
  });
  _asyncToGenerator = _asyncToGenerator(async () => {
    let closure_0;
    let obj;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c2;
      try {
        let closure_1;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp;
            dbName = undefined;
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj4 = { value: getStore(getStore()), done: false };
            return obj4;
          }
        } else {
          if (1 === c3) {
            c2 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            dbName = value;
            const tmp6 = dbName;
            if (tmp6) {
              c2 = 0;
              c4 = 3;
              const obj6 = { value: obj.parseEnvelope(dbName), done: true };
              obj = dbName(closure_1[1]);
              return obj6;
            } else {
              c2 = 0;
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        if (0 === c2) {
          c4 = 3;
          throw tmp13;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj;
}
let _asyncToGenerator = _asyncToGenerator_mod;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createStore = function createStore(arg0, arg1) {
  let closure_0 = arg1;
  const openResult = globalThis.indexedDB.open(arg0);
  dependencyMap = openResult;
  openResult.onupgradeneeded = () => {
    const result = openResult.result;
    return result.createObjectStore(closure_0);
  };
  const promise = new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const fn = () => closure_0(transaction.result);
    closure_0.onsuccess = fn;
    closure_0.oncomplete = fn;
    const fn2 = () => closure_1(transaction.error);
    closure_0.onerror = fn2;
    closure_0.onabort = fn2;
  });
  return (arg0) => {
    closure_0 = arg0;
    return promise.then((transaction) => {
      const transactionResult = transaction.transaction(closure_0, "readwrite");
      return closure_0(transactionResult.objectStore(closure_0));
    });
  };
};
export const makeBrowserOfflineTransport = function makeBrowserOfflineTransport() {
  let makeFetchTransport = arg0;
  if (arg0 === undefined) {
    makeFetchTransport = require("00908__.js").makeFetchTransport;
  }
  let obj = require("00693__.js");
  _require = obj.makeOfflineTransport(makeFetchTransport);
  return (arg0) => {
    let obj = { createStore: createIndexedDbStore };
    const merged = Object.assign(arg0);
    const tmp2 = closure_0(obj);
    const WINDOW = _mod904.WINDOW;
    const addEventListener = WINDOW.addEventListener;
    closure_0 = _asyncToGenerator(async (arg0) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = 1;
              c0 = 1;
              const obj4 = { value: c0.flush(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c0 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp5) {
          c0 = 3;
          throw tmp5;
        }
      }
    });
    const listener = addEventListener("online", function (arg0) {
      return closure_0(...arguments);
    });
    return tmp2;
  };
};
export const push = _push;
export const shift = _shift;
export const unshift = _unshift;
