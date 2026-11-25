// === Module 5389: ? ===

// Module 5389
import ComposedGestureName from "ComposedGestureName" /* 5334 */;
import _mod5388 from "module_5388" /* 5388 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5388.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}