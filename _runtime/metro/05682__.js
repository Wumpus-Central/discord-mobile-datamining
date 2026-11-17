// === Module 5682: ? ===

// Module 5682
import ComposedGestureName from "ComposedGestureName" /* 5650 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5659 */;
import _mod5676 from "module_5676" /* 5676 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5676.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}