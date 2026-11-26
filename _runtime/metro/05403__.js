// === Module 5403: ? ===

// Module 5403
import ComposedGestureName from "ComposedGestureName" /* 5365 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5374 */;
import _mod5391 from "module_5391" /* 5391 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5391.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}