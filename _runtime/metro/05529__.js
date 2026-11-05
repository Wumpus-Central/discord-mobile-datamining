// === Module 5529: ? ===

// Module 5529
import ComposedGestureName from "ComposedGestureName" /* 5492 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5501 */;
import _mod5518 from "module_5518" /* 5518 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5518.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}