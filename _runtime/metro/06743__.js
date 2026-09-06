// _runtime/metro/06743__.js
import ComposedGestureName from "../06714_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06723_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6738 from "06738__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6738.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
