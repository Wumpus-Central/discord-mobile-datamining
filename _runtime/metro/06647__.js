// _runtime/metro/06647__.js
import ComposedGestureName from "../06618_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06627_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6642 from "06642__.js";

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
