// _runtime/metro/00030__.js
import _mod31 from "00031__.js";
import _modDef38 from "00038__.js";

const __turboModuleProxy = global.__turboModuleProxy;

export const get = function get(AccessibilityInfo) {
  let tmpResult;
  if (null == __turboModuleProxy) {
    const tmp5 = _mod31.default[AccessibilityInfo];
    let tmp6 = null;
    if (null != tmp5) {
      tmp6 = tmp5;
    }
    tmpResult = tmp6;
  } else {
    tmpResult = tmp(AccessibilityInfo);
  }
  return tmpResult;
};
export const getEnforcing = function getEnforcing(RNGestureHandlerModule) {
  let tmpResult;
  if (null == __turboModuleProxy) {
    const tmp5 = _mod31.default[RNGestureHandlerModule];
    let tmp6 = null;
    if (null != tmp5) {
      tmp6 = tmp5;
    }
    tmpResult = tmp6;
  } else {
    tmpResult = tmp(RNGestureHandlerModule);
  }
  const tmp7 = _modDef38;
  const tmp8 = null != tmpResult;
  tmp7(
    tmp8,
    "TurboModuleRegistry.getEnforcing(...): '" +
      RNGestureHandlerModule +
      "' could not be found. Verify that a module by this name is registered in the native binary.",
  );
  return tmpResult;
};
