// _runtime/04339__initialize.js
import "asyncGeneratorStep";

const NitroModules = fn(4293).NitroModules;
let closure_1 = NitroModules.createHybridObject("RiveRuntime");
let asyncGeneratorStep = function _initialize() {
  const self = this;
  const tmp = asyncGeneratorStep(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c2 = 1;
            c3 = 1;
            const obj1 = { value: tmp4.initialize(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else if (tmp4.isInitialized) {
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          const initError = tmp4.initError;
          c0 = initError;
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
  asyncGeneratorStep = tmp;
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
    const apply = asyncGeneratorStep.apply;
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
    obj.error = initError;
    return obj;
  },
};
