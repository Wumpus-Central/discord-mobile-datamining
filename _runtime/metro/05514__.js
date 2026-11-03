// === Module 5514: ? ===

// Module 5514
import ComposedGestureName from "ComposedGestureName" /* 5485 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5494 */;
import _mod5509 from "module_5509" /* 5509 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5509.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}