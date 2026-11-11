// === Module 5629: ? ===

// Module 5629
import ComposedGestureName from "ComposedGestureName" /* 5597 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5606 */;
import _mod5623 from "module_5623" /* 5623 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5623.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}