// _runtime/metro/05267__.js
import ComposedGestureName from "../05235_ComposedGestureName.js";
import resolveInternalConfigProps from "../05244_resolveInternalConfigProps.js";
import _mod5261 from "05261__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5261.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
