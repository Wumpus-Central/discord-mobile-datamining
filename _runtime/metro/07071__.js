// _runtime/metro/07071__.js
import ComposedGestureName from "../07042_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../07051_DEFAULT_PROPS_TRANSFORMER.js";
import _mod7066 from "07066__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod7066.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
