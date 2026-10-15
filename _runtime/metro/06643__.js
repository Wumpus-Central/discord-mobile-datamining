// _runtime/metro/06643__.js
import ComposedGestureName from "../06614_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06623_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6638 from "06638__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6638.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
