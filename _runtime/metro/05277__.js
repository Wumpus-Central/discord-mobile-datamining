// _runtime/metro/05277__.js
import ComposedGestureName from "../05239_ComposedGestureName.js";
import resolveInternalConfigProps from "../05248_resolveInternalConfigProps.js";
import _mod5265 from "05265__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5265.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
