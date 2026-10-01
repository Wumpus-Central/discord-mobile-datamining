// _runtime/metro/06353__.js
import ComposedGestureName from "../06318_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06327_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6342 from "06342__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6342.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
