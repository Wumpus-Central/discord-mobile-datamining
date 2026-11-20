// _runtime/metro/05154__.js
import ComposedGestureName from "../05116_ComposedGestureName.js";
import resolveInternalConfigProps from "../05125_resolveInternalConfigProps.js";
import _mod5142 from "05142__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5142.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
