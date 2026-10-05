// === Module 30: ? ===

// Module 30
import _mod31 from "module_31" /* 31 */;
import _modDef38 from "module_38" /* 38 */;

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
  tmp7(tmp8, "TurboModuleRegistry.getEnforcing(...): '" + RNGestureHandlerModule + "' could not be found. Verify that a module by this name is registered in the native binary.");
  return tmpResult;
};