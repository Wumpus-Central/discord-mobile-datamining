// === Module 5171: ? ===

// Module 5171
import ComposedGestureName from "ComposedGestureName" /* 5116 */;
import _mod5170 from "module_5170" /* 5170 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5170.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}