// _runtime/metro/05682__.js
import ComposedGestureName from "../05650_ComposedGestureName.js";
import resolveInternalConfigProps from "../05659_resolveInternalConfigProps.js";
import _mod5676 from "05676__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5676.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
