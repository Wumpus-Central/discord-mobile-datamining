// === Module 5390: ? ===

// Module 5390
import ComposedGestureName from "ComposedGestureName" /* 5356 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5365 */;
import _mod5380 from "module_5380" /* 5380 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5380.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};