// === Module 5539: ? ===

// Module 5539
import ComposedGestureName from "ComposedGestureName" /* 5484 */;
import _mod5538 from "module_5538" /* 5538 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5538.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}