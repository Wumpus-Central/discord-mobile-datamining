// _runtime/metro/05397__.js
import ComposedGestureName from "../05365_ComposedGestureName.js";
import resolveInternalConfigProps from "../05374_resolveInternalConfigProps.js";
import _mod5391 from "05391__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5391.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
