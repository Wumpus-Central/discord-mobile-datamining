// === Module 7723: _asyncOptionalChainDelete2 ===

// Module 7723 (_asyncOptionalChainDelete2)
import closure_2 from "asyncGeneratorStep" /* 5 */;

function _asyncOptionalChainDelete2() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      closure_1 = tmp2;
      const obj2 = callback(closure_1_1[1]);
      callback = yield obj2._asyncOptionalChain(callback);
      let tmp9 = null == callback;
      if (!tmp9) {
        tmp9 = callback;
      }
      return tmp9;
    })();
  });
  closure_3 = tmp;
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