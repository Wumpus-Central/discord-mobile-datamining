// === Module 6645: ? ===

// Module 6645
import ComposedGestureName from "ComposedGestureName" /* 6616 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6625 */;
import _mod6640 from "module_6640" /* 6640 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6640.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};