// === Module 5522: ? ===

// Module 5522
import ComposedGestureName from "ComposedGestureName" /* 5484 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5493 */;
import _mod5510 from "module_5510" /* 5510 */;

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