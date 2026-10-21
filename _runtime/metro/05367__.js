// === Module 5367: ? ===

// Module 5367
import ComposedGestureName from "ComposedGestureName" /* 5338 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5347 */;
import _mod5362 from "module_5362" /* 5362 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5362.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};