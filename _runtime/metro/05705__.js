// === Module 5705: ? ===

// Module 5705
import ComposedGestureName from "ComposedGestureName" /* 5650 */;
import _mod5704 from "module_5704" /* 5704 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5704.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}