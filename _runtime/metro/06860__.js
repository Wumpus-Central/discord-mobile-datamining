// _runtime/metro/06860__.js
import ComposedGestureName from "../06825_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06834_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6849 from "06849__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6849.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
