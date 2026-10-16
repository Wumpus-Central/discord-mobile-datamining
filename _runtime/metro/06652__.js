// === Module 6652: ? ===

// Module 6652
import ComposedGestureName from "ComposedGestureName" /* 6618 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6627 */;
import _mod6642 from "module_6642" /* 6642 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6642.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};