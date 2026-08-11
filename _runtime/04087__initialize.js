// _runtime/04087__initialize.js
import _initialize from "asyncGeneratorStep";
import { NitroModules } from "module_4039";

let closure_1 = NitroModules.createHybridObject("RiveRuntime");
_initialize = function _initialize() {
  const self = this;
  const tmp = _initialize(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp4;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_1.initialize();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else if (outer1_1.isInitialized) {
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          const initError = outer1_1.initError;
          let c0 = initError;
          if (initError == null) {
            c0 = "Unknown error";
          }
          const _HermesInternal = HermesInternal;
          const error = new Error("Rive initialization failed: " + c0);
          throw error;
        }
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  });
  _initialize = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};

export const RiveRuntime = {
  initialize() {
    const self = this;
    const apply = _initialize.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  getStatus() {
    const obj = { isInitialized: closure_1.isInitialized, error: null };
    const initError = closure_1.initError;
    obj[1] = initError;
    return obj;
  }
};