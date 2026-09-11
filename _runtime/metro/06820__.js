// === Module 6820: ? ===

// Module 6820
import ComposedGestureName from "ComposedGestureName" /* 6785 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6794 */;
import _mod6809 from "module_6809" /* 6809 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6809.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};