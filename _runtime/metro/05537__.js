// === Module 5537: ? ===

// Module 5537
import ComposedGestureName from "ComposedGestureName" /* 5482 */;
import _mod5536 from "module_5536" /* 5536 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5536.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}