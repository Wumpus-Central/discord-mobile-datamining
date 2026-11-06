// === Module 5567: ? ===

// Module 5567
import ComposedGestureName from "ComposedGestureName" /* 5512 */;
import _mod5566 from "module_5566" /* 5566 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5566.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}