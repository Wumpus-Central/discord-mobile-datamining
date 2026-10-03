// === Module 6233: ? ===

// Module 6233
import ComposedGestureName from "ComposedGestureName" /* 6199 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6208 */;
import _mod6223 from "module_6223" /* 6223 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6223.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};