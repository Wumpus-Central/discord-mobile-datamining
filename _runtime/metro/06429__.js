// === Module 6429: ? ===

// Module 6429
import ComposedGestureName from "ComposedGestureName" /* 6394 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6403 */;
import _mod6418 from "module_6418" /* 6418 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6418.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};