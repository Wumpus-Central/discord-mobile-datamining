// === Module 6851: ? ===

// Module 6851
import ComposedGestureName from "ComposedGestureName" /* 6822 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6831 */;
import _mod6846 from "module_6846" /* 6846 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6846.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};