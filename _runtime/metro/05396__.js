// _runtime/metro/05396__.js
import ComposedGestureName from "../05362_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05371_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5386 from "05386__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5386.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
