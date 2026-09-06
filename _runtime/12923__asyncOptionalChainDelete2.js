// _runtime/12923__asyncOptionalChainDelete2.js
import _asyncOptionalChain2 from "12922__asyncOptionalChain2.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

let closure_3 = async function _asyncOptionalChainDelete2() {
  closure_1 = tmp2;
  closure_129_0 = await _asyncOptionalChain2._asyncOptionalChain(closure_0);
  let tmp9 = null == closure_129_0;
  if (!tmp9) {
    tmp9 = closure_129_0;
  }
  return tmp9;
};

export const _asyncOptionalChainDelete = function _asyncOptionalChainDelete(arg0) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
