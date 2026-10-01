// === Module 6352: ? ===

// Module 6352
import ComposedGestureName from "ComposedGestureName" /* 6318 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6327 */;
import _mod6342 from "module_6342" /* 6342 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6342.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};