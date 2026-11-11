// === Module 5652: ? ===

// Module 5652
import ComposedGestureName from "ComposedGestureName" /* 5597 */;
import _mod5651 from "module_5651" /* 5651 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5651.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}