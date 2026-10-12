// === Module 6428: ? ===

// Module 6428
import ComposedGestureName from "ComposedGestureName" /* 6394 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6403 */;
import _mod6418 from "module_6418" /* 6418 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6418.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};