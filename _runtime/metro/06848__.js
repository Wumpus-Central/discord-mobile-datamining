// === Module 6848: ? ===

// Module 6848
import ComposedGestureName from "ComposedGestureName" /* 6819 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6828 */;
import _mod6843 from "module_6843" /* 6843 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6843.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};