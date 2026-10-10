// === Module 6422: ? ===

// Module 6422
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6402 */;
import _mod6417 from "module_6417" /* 6417 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6417.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};