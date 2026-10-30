// === Module 5392: ? ===

// Module 5392
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5366 */;
import _mod5381 from "module_5381" /* 5381 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5381.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}