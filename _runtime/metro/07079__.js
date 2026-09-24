// _runtime/metro/07079__.js
import ComposedGestureName from "../07044_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../07053_DEFAULT_PROPS_TRANSFORMER.js";
import _mod7068 from "07068__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod7068.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
