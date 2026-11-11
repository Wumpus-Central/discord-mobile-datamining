// _runtime/metro/05634__.js
import ComposedGestureName from "../05597_ComposedGestureName.js";
import resolveInternalConfigProps from "../05606_resolveInternalConfigProps.js";
import _mod5623 from "05623__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5623.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
