// === Module 6860: ? ===

// Module 6860
import ComposedGestureName from "ComposedGestureName" /* 6825 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6834 */;
import _mod6849 from "module_6849" /* 6849 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6849.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};