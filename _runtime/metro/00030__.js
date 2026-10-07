// _runtime/metro/00030__.js
import genModule from "../00031_genModule.js";
import _modDef38 from "00038__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
__turboModuleProxy = __turboModuleProxy.__turboModuleProxy;

export const get = function get(AccessibilityInfo) {
  if (null == __turboModuleProxy) {
    const tmp5 = genModule.default[AccessibilityInfo];
    let tmp6 = null;
    if (null != tmp5) {
      tmp6 = tmp5;
    }
    let tmpResult = tmp6;
  } else {
    tmpResult = tmp(AccessibilityInfo);
  }
  return tmpResult;
};
export const getEnforcing = function getEnforcing(RNGestureHandlerModule) {
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
  _modDef38(
    null != tmpResult,
    "TurboModuleRegistry.getEnforcing(...): '" +
      RNGestureHandlerModule +
      "' could not be found. Verify that a module by this name is registered in the native binary.",
  );
  return tmpResult;
};
