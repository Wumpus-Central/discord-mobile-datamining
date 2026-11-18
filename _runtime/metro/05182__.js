// === Module 5182: ? ===

// Module 5182
import ComposedGestureName from "ComposedGestureName" /* 5145 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5154 */;
import _mod5171 from "module_5171" /* 5171 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5171.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}