// _runtime/metro/05522__.js
import ComposedGestureName from "../05490_ComposedGestureName.js";
import resolveInternalConfigProps from "../05499_resolveInternalConfigProps.js";
import _mod5516 from "05516__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5516.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
