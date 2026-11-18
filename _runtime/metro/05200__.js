// === Module 5200: ? ===

// Module 5200
import ComposedGestureName from "ComposedGestureName" /* 5145 */;
import _mod5199 from "module_5199" /* 5199 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5199.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}