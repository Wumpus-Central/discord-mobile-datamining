// === Module 5169: ? ===

// Module 5169
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import _mod5168 from "module_5168" /* 5168 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5168.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}