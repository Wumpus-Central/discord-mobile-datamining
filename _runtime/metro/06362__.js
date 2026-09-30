// === Module 6362: ? ===

// Module 6362
import ComposedGestureName from "ComposedGestureName" /* 6328 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6337 */;
import _mod6352 from "module_6352" /* 6352 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6352.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};