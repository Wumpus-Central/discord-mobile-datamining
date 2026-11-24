// === Module 5276: ? ===

// Module 5276
import ComposedGestureName from "ComposedGestureName" /* 5239 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5248 */;
import _mod5265 from "module_5265" /* 5265 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5265.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}