// === Module 1694: isReducedMotionEnabledInSystem ===

// Module 1694 (isReducedMotionEnabledInSystem)
import isJest from "isJest" /* 1656 */;
import addCompilerSafeGetAndSet from "addCompilerSafeGetAndSet" /* 1690 */;

if (isJest.isWeb()) {
  const _module1 = isJest;
  let matches = _module1.isWindowAvailable();
  if (matches) {
    let _window = window;
    matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  let prop = matches;
} else {
  prop = global._REANIMATED_IS_REDUCED_MOTION;
}
const obj = { jsValue: prop, uiValue: null, setEnabled: null };
function isReducedMotionEnabledInSystem() {
  if (obj.isWeb()) {
    let matches = isJest.isWindowAvailable();
    if (matches) {
      const _window = window;
      matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    let prop = matches;
    const tmpResult = isJest;
  } else {
    prop = global._REANIMATED_IS_REDUCED_MOTION;
  }
  return prop;
}
obj[1] = addCompilerSafeGetAndSet.makeMutable(prop);
obj[2] = function setEnabled(jsValue) {
  obj.jsValue = jsValue;
  obj.uiValue.value = jsValue;
};

export { isReducedMotionEnabledInSystem };
export const ReducedMotionManager = obj;