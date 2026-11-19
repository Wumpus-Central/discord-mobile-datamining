// _runtime/metro/05151__.js
import ComposedGestureName from "../05114_ComposedGestureName.js";
import resolveInternalConfigProps from "../05123_resolveInternalConfigProps.js";
import _mod5140 from "05140__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5140.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
