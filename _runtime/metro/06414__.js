// _runtime/metro/06414__.js
import ComposedGestureName from "../06385_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06394_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6409 from "06409__.js";

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
