// _runtime/metro/05692__.js
import ComposedGestureName from "../05660_ComposedGestureName.js";
import resolveInternalConfigProps from "../05669_resolveInternalConfigProps.js";
import _mod5686 from "05686__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5686.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
