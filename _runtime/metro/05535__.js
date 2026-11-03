// === Module 5535: ? ===

// Module 5535
import ComposedGestureName from "ComposedGestureName" /* 5485 */;
import _mod5534 from "module_5534" /* 5534 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5534.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}