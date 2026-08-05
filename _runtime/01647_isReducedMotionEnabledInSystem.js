// _runtime/01647_isReducedMotionEnabledInSystem.js
import isJest from "isJest";
import addCompilerSafeGetAndSet from "addCompilerSafeGetAndSet";
import { isJest } from "01609_isJest.js";

if (isJest.isWeb()) {
  const _module1 = require("isJest");
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
    let matches = isJest /* isJest */.isWindowAvailable();
    if (matches) {
      const _window = window;
      matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    let prop = matches;
    const tmpResult = isJest /* isJest */;
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