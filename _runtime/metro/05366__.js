// === Module 5366: ? ===

// Module 5366
import ComposedGestureName from "ComposedGestureName" /* 5334 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5343 */;
import _mod5360 from "module_5360" /* 5360 */;

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