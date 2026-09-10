// === Module 6799: ? ===

// Module 6799
import ComposedGestureName from "ComposedGestureName" /* 6764 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6773 */;
import _mod6788 from "module_6788" /* 6788 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6788.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};