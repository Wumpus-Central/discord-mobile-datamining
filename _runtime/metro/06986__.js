// _runtime/metro/06986__.js
import ComposedGestureName from "../06951_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06960_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6975 from "06975__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6975.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
