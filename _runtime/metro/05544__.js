// _runtime/metro/05544__.js
import ComposedGestureName from "../05512_ComposedGestureName.js";
import resolveInternalConfigProps from "../05521_resolveInternalConfigProps.js";
import _mod5538 from "05538__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5538.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
