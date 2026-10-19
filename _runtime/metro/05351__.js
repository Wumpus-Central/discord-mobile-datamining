// === Module 5351: ? ===

// Module 5351
import ComposedGestureName from "ComposedGestureName" /* 5317 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5326 */;
import _mod5341 from "module_5341" /* 5341 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5341.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};