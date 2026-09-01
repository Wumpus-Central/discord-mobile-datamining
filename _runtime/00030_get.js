// _runtime/00030_get.js
import genModule from "00031_genModule.js";

require = arg1;
const module = arg2;
const dependencyMap = arg6;
__turboModuleProxy = __turboModuleProxy.__turboModuleProxy;
arg5.get = function get(arg0) {
  if (null == __turboModuleProxy) {
    const tmp5 = genModule.default[arg0];
    let tmp6 = null;
    if (null != tmp5) {
      tmp6 = tmp5;
    }
    let tmpResult = tmp6;
  } else {
    tmpResult = tmp(arg0);
  }
  return tmpResult;
};
arg5.getEnforcing = function getEnforcing(RNGestureHandlerModule) {
  if (null == __turboModuleProxy) {
    const tmp5 = genModule.default[RNGestureHandlerModule];
    let tmp6 = null;
    if (null != tmp5) {
      tmp6 = tmp5;
    }
    let tmpResult = tmp6;
  } else {
    tmpResult = tmp(RNGestureHandlerModule);
  }
  module(38)(
    null != tmpResult,
    "TurboModuleRegistry.getEnforcing(...): '" +
      RNGestureHandlerModule +
      "' could not be found. Verify that a module by this name is registered in the native binary.",
  );
  return tmpResult;
};
