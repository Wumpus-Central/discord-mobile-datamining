// === Module 6332: ? ===

// Module 6332
import ComposedGestureName from "ComposedGestureName" /* 6298 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6307 */;
import _mod6322 from "module_6322" /* 6322 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6322.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};