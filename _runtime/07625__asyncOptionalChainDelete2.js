// _runtime/07625__asyncOptionalChainDelete2.js
import asyncGeneratorStep from "asyncGeneratorStep";

function _asyncOptionalChainDelete2() {
  const self = this;
  const tmp = asyncGeneratorStep((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      let closure_1 = tmp2;
      const obj2 = callback(outer1_1[1]);
      callback = yield obj2._asyncOptionalChain(callback);
      let tmp9 = null == callback;
      if (!tmp9) {
        tmp9 = callback;
      }
      return tmp9;
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