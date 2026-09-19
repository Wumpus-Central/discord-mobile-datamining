// === Module 6986: ? ===

// Module 6986
import ComposedGestureName from "ComposedGestureName" /* 6951 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6960 */;
import _mod6975 from "module_6975" /* 6975 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6975.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};