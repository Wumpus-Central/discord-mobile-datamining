// === Module 6235: ? ===

// Module 6235
import ComposedGestureName from "ComposedGestureName" /* 6206 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6215 */;
import _mod6230 from "module_6230" /* 6230 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6230.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};