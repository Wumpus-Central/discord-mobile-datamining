// _runtime/metro/05514__.js
import ComposedGestureName from "../05482_ComposedGestureName.js";
import resolveInternalConfigProps from "../05491_resolveInternalConfigProps.js";
import _mod5508 from "05508__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5508.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
