// _runtime/metro/06941__.js
import ComposedGestureName from "../06907_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06916_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6931 from "06931__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6931.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
