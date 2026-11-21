// === Module 5272: ? ===

// Module 5272
import ComposedGestureName from "ComposedGestureName" /* 5235 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5244 */;
import _mod5261 from "module_5261" /* 5261 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5261.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}