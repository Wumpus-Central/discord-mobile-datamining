// === Module 5391: ? ===

// Module 5391
import ComposedGestureName from "ComposedGestureName" /* 5356 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5365 */;
import _mod5380 from "module_5380" /* 5380 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5380.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};