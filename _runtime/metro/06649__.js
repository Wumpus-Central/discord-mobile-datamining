// === Module 6649: ? ===

// Module 6649
import ComposedGestureName from "ComposedGestureName" /* 6614 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6623 */;
import _mod6638 from "module_6638" /* 6638 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6638.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};