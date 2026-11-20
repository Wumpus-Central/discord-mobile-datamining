// === Module 5153: ? ===

// Module 5153
import ComposedGestureName from "ComposedGestureName" /* 5116 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5125 */;
import _mod5142 from "module_5142" /* 5142 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5142.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}