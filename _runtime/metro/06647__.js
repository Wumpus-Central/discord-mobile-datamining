// === Module 6647: ? ===

// Module 6647
import ComposedGestureName from "ComposedGestureName" /* 6618 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6627 */;
import _mod6642 from "module_6642" /* 6642 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6642.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};