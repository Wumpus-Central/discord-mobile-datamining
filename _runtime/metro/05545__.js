// === Module 5545: ? ===

// Module 5545
import ComposedGestureName from "ComposedGestureName" /* 5490 */;
import _mod5544 from "module_5544" /* 5544 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5544.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}