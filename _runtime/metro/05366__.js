// _runtime/metro/05366__.js
import ComposedGestureName from "../05334_ComposedGestureName.js";
import resolveInternalConfigProps from "../05343_resolveInternalConfigProps.js";
import _mod5360 from "05360__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5360.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
