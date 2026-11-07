// === Module 5514: ? ===

// Module 5514
import ComposedGestureName from "ComposedGestureName" /* 5482 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5491 */;
import _mod5508 from "module_5508" /* 5508 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5508.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}