// === Module 6427: ? ===

// Module 6427
import ComposedGestureName from "ComposedGestureName" /* 6398 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6407 */;
import _mod6422 from "module_6422" /* 6422 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6422.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};