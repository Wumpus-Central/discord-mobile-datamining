// _runtime/metro/05520__.js
import ComposedGestureName from "../05485_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05494_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5509 from "05509__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5509.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
