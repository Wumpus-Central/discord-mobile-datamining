// === Module 6414: ? ===

// Module 6414
import ComposedGestureName from "ComposedGestureName" /* 6385 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6394 */;
import _mod6409 from "module_6409" /* 6409 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6409.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};