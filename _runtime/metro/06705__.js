// === Module 6705: ? ===

// Module 6705
import ComposedGestureName from "ComposedGestureName" /* 6671 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6680 */;
import _mod6695 from "module_6695" /* 6695 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6695.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};