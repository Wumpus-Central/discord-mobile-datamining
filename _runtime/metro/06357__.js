// _runtime/metro/06357__.js
import ComposedGestureName from "../06328_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06337_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6352 from "06352__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6352.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
