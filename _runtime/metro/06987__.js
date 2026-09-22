// _runtime/metro/06987__.js
import ComposedGestureName from "../06958_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06967_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6982 from "06982__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6982.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
