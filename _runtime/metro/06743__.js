// === Module 6743: ? ===

// Module 6743
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6723 */;
import _mod6738 from "module_6738" /* 6738 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6738.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};