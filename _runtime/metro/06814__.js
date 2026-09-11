// _runtime/metro/06814__.js
import ComposedGestureName from "../06785_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06794_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6809 from "06809__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6809.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
