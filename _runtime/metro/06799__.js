// _runtime/metro/06799__.js
import ComposedGestureName from "../06764_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06773_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6788 from "06788__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6788.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
