// _runtime/metro/05522__.js
import ComposedGestureName from "../05484_ComposedGestureName.js";
import resolveInternalConfigProps from "../05493_resolveInternalConfigProps.js";
import _mod5510 from "05510__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5510.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
