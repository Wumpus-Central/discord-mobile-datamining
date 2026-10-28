// === Module 5427: ? ===

// Module 5427
import ComposedGestureName from "ComposedGestureName" /* 5392 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5401 */;
import _mod5416 from "module_5416" /* 5416 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5416.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};