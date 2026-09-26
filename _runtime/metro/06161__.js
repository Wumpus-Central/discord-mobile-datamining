// === Module 6161: ? ===

// Module 6161
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6141 */;
import _mod6156 from "module_6156" /* 6156 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6156.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};