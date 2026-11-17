// _runtime/metro/05691__.js
import ComposedGestureName from "../05654_ComposedGestureName.js";
import resolveInternalConfigProps from "../05663_resolveInternalConfigProps.js";
import _mod5680 from "05680__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5680.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
