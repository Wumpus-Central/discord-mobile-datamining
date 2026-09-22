// === Module 6987: ? ===

// Module 6987
import ComposedGestureName from "ComposedGestureName" /* 6958 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6967 */;
import _mod6982 from "module_6982" /* 6982 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6982.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};