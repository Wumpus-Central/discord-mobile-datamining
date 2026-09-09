// === Module 6762: ? ===

// Module 6762
import ComposedGestureName from "ComposedGestureName" /* 6728 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6737 */;
import _mod6752 from "module_6752" /* 6752 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6752.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};