// _runtime/metro/05183__.js
import ComposedGestureName from "../05145_ComposedGestureName.js";
import resolveInternalConfigProps from "../05154_resolveInternalConfigProps.js";
import _mod5171 from "05171__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5171.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
