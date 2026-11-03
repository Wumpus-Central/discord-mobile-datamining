// === Module 1844: ? ===

// Module 1844
import mutablesNative from "mutablesNative" /* 1831 */;

require = arg1;
const dependencyMap = arg6;

export function createReducedMotionManager(_REANIMATED_IS_REDUCED_MOTION) {
  const obj = {
    jsValue: _REANIMATED_IS_REDUCED_MOTION,
    uiValue: mutablesNative.makeMutable(_REANIMATED_IS_REDUCED_MOTION),
    setEnabled(jsValue) {
      obj.jsValue = jsValue;
      obj.uiValue.value = jsValue;
    }
  };
  return obj;
}