// === Module 5377: ? ===

// Module 5377
import ComposedGestureName from "ComposedGestureName" /* 5342 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5351 */;
import _mod5366 from "module_5366" /* 5366 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5366.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};