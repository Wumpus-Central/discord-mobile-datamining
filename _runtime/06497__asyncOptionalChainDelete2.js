// === Module 6497: _asyncOptionalChainDelete2 ===

// Module 6497 (_asyncOptionalChainDelete2)
import asyncGeneratorStep from "asyncGeneratorStep";

function _asyncOptionalChainDelete2() {
  const self = this;
  const tmp = asyncGeneratorStep((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
              let closure_1 = tmp2;
              let callback;
              let obj2 = callback(outer1_1[1]);
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2._asyncOptionalChain(callback);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            callback = arg1;
            let tmp9 = null == callback;
            if (!tmp9) {
              tmp9 = callback;
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = tmp9;
            return obj;
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  const _asyncOptionalChainDelete2 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

export const _asyncOptionalChainDelete = function _asyncOptionalChainDelete(arg0) {
  const self = this;
  const apply = _asyncOptionalChainDelete2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};