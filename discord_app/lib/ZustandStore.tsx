// === Module 4755: ZustandStore ===

// Module 4755 (ZustandStore)
import react from "react" /* 576 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap;

function defaultStatesAreEqual(arg0, arg1) {
  return arg0 === arg1;
}
const result = size.fileFinishedImporting("lib/ZustandStore.tsx");

export const createZustandStore = function createZustandStore(arg0) {
  let closure_1;
  _require = arg0;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let tmp3 = require("module_1254");
  const createWithEqualityFn = tmp3.createWithEqualityFn;
  let obj = require("combine");
  dependencyMap = createWithEqualityFn(obj.subscribeWithSelector((arg0, arg1, arg2) => {
    closure_0 = arg0;
    return closure_0((arg0) => {
      closure_0 = arg0;
      const obj = closure_0(closure_1_1[2]);
      return obj.batchUpdates(() => closure_0(closure_0));
    }, arg1, arg2);
  }));
  const obj2 = require("ReactCompilerGating");
  const tmp4 = obj2.isReactCompilerEnabled() ? ((arg0, arg1) => {
    let tmp = arg1;
    if (undefined === arg1) {
      tmp = defaultStatesAreEqual;
    }
    return closure_1(arg0, tmp);
  }) : ((arg0) => {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = defaultStatesAreEqual;
    }
    return closure_1(arg0, tmp);
  });
  let closure_2 = tmp4;
  function setState(arg0) {
    closure_0 = arg0;
    const obj = closure_0(closure_1[2]);
    obj.batchUpdates(() => state.setState(closure_0));
  }
  const tmpResult = tmp(558);
  const store = {
    useState: tmp4,
    getState(fn) {
      const state = closure_1.getState();
      let tmp2 = state;
      if (null != fn) {
        tmp2 = fn(state);
      }
      return tmp2;
    },
    useField: tmpResult.isReactCompilerEnabled() ? ((arg0, arg1) => {
      let tmp3;
      closure_0 = arg0;
      let tmp = arg1;
      const obj = react;
      const cResult = obj.c(2);
      if (undefined === arg1) {
        tmp = defaultStatesAreEqual;
      }
      if (cResult[0] !== arg0) {
        const fn = function s(arg0) {
          return arg0[closure_0];
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      return closure_2(tmp3, tmp);
    }) : ((arg0) => {
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
        const obj = initialState(state[2]);
        obj.batchUpdates(() => state.setState(closure_0));
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  };
  return store;
};