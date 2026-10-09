// === Module 6426: ? ===

// Module 6426
import ComposedGestureName from "ComposedGestureName" /* 6392 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6401 */;
import _mod6416 from "module_6416" /* 6416 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6416.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};