// === Module 5388: ? ===

// Module 5388
import ComposedGestureName from "ComposedGestureName" /* 5354 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5363 */;
import _mod5378 from "module_5378" /* 5378 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5378.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};