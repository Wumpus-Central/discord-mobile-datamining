// === Module 4659: _asyncToGenerator ===

// Module 4659 (_asyncToGenerator)
import _mod4615 from "module_4615" /* 4615 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c2, c3;

const NitroModules = _mod4615.NitroModules;
let closure_1 = NitroModules.createHybridObject("RiveRuntime");
let obj = {
  initialize() {
    return obj(...arguments);
  },
  getStatus() {
    let initError;
    const obj = { isInitialized: closure_1.isInitialized, error: initError };
    initError = closure_1.initError;
    return obj;
  }
};
obj = function _initialize() {
  obj = _asyncToGenerator(async function() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c2 = 1;
            c3 = 1;
            const obj4 = { value: tmp3.initialize(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else if (tmp3.isInitialized) {
          c3 = 3;
          return { value: "IconComponent", done: null };
        } else {
          const initError = tmp3.initError;
          let c0 = initError;
          const _Error = Error;
          if (initError == null) {
            c0 = "Unknown error";
          }
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const _Error1 = new _Error("Rive initialization failed: " + c0);
          throw _Error1;
        }
      } catch (tmp12) {
        c3 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};

export const RiveRuntime = obj;