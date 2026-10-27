// === Module 1696: ? ===

// Module 1696
import module_1658 from "module_1658" /* 1658 */;
import module_1692 from "module_1692" /* 1692 */;

if (module_1658.isWeb()) {
  const _module1 = module_1658;
  let matches = _module1.isWindowAvailable();
  if (matches) {
    let _window = window;
    matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  let prop = matches;
} else {
  prop = global._REANIMATED_IS_REDUCED_MOTION;
}
const ReducedMotionManager = { jsValue: prop, uiValue: null, setEnabled: null };
function isReducedMotionEnabledInSystem() {
  if (obj.isWeb()) {
    let matches = module_1658.isWindowAvailable();
    if (matches) {
      const _window = window;
      matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    let prop = matches;
    const tmpResult = module_1658;
  } else {
    prop = global._REANIMATED_IS_REDUCED_MOTION;
  }
  return prop;
}
ReducedMotionManager.uiValue = module_1692.makeMutable(prop);
ReducedMotionManager.setEnabled = function setEnabled(jsValue) {
  obj.jsValue = jsValue;
  obj.uiValue.value = jsValue;
};

export { isReducedMotionEnabledInSystem };
export { ReducedMotionManager };