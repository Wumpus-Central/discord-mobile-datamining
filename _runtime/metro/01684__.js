// === Module 1684: ? ===

// Module 1684
import module_1646 from "module_1646" /* 1646 */;
import module_1680_mod from "module_1680" /* 1680 */;

let module_1680;
let prop;
if (module_1646.isWeb()) {
  const _module1 = module_1646;
  let matches = _module1.isWindowAvailable();
  if (matches) {
    let _window = window;
    matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  prop = matches;
} else {
  prop = global._REANIMATED_IS_REDUCED_MOTION;
}
const ReducedMotionManager = {
  jsValue: prop,
  uiValue: module_1680.makeMutable(prop),
  setEnabled(jsValue) {
    obj.jsValue = jsValue;
    obj.uiValue.value = jsValue;
  }
};
function isReducedMotionEnabledInSystem() {
  let prop;
  const obj = module_1646;
  if (obj.isWeb()) {
    const tmpResult = module_1646;
    let matches = tmpResult.isWindowAvailable();
    if (matches) {
      const _window = window;
      matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    prop = matches;
  } else {
    prop = global._REANIMATED_IS_REDUCED_MOTION;
  }
  return prop;
}
module_1680 = module_1680_mod;

export { isReducedMotionEnabledInSystem };
export { ReducedMotionManager };