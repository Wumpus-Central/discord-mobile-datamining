// === Module 4950: ZustandStore ===

// Module 4950 (ZustandStore)
import c from "c" /* 576 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function defaultStatesAreEqual(arg0, arg1) {
  return arg0 === arg1;
}
const result = size.fileFinishedImporting("lib/ZustandStore.tsx");

export const createZustandStore = function createZustandStore(arg0) {
  _require = arg0;
  let obj = require("module_1267");
  let tmp = _require;
  dependencyMap = obj.createWithEqualityFn(require("module_4951").subscribeWithSelector((arg0, arg1, arg2) => {
    closure_0 = arg0;
    return closure_0((arg0) => {
      closure_0 = arg0;
      return closure_0(closure_1_1[2]).batchUpdates(() => closure_0(closure_0));
    }, arg1, arg2);
  }));
  const obj2 = require("module_4951");
  let tmp3 = require("ReactCompilerGating").isReactCompilerEnabled() ? (function useState(arg0, arg1) {
    let tmp = arg1;
    if (undefined === arg1) {
      tmp = defaultStatesAreEqual;
    }
    return closure_1(arg0, tmp);
  }) : (function useState(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = defaultStatesAreEqual;
    }
    return closure_1(arg0, tmp);
  });
  closure_2 = tmp3;
  const obj3 = require("ReactCompilerGating");
  function setState(arg0) {
    closure_0 = arg0;
    closure_0(closure_1[2]).batchUpdates(() => state.setState(closure_0));
  }
  const store = {
    useState: tmp3,
    getState(fn) {
      state = closure_1.getState();
      let tmp2 = state;
      if (null != fn) {
        tmp2 = fn(state);
      }
      return tmp2;
    },
    useField: tmp(558).isReactCompilerEnabled() ? (function useField(arg0, arg1) {
      closure_0 = arg0;
      let tmp = arg1;
      const cResult = c.c(2);
      if (undefined === arg1) {
        tmp = defaultStatesAreEqual;
      }
      if (cResult[0] !== arg0) {
        const fn = function s(arg0) {
          return arg0[closure_0];
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      return closure_2(tmp3, tmp);
    }) : (function useField(arg0) {
      closure_0 = arg0;
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = defaultStatesAreEqual;
      }
      return closure_2((arg0) => arg0[closure_0], tmp);
    }),
    getField(keyboard) {
      return closure_1.getState()[keyboard];
    },
    subscribe(arg0, arg1, arg2) {
      return closure_1.subscribe(arg0, arg1, arg2);
    },
    setState,
    resetState() {
      if (typeof setState === "function") {
        const initialState = state.getInitialState();
        initialState(state[2]).batchUpdates(() => state.setState(closure_0));
        const obj = initialState(state[2]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  };
  return store;
};