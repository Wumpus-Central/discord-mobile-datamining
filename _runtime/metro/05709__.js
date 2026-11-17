// === Module 5709: ? ===

// Module 5709
import ComposedGestureName from "ComposedGestureName" /* 5654 */;
import _mod5708 from "module_5708" /* 5708 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5708.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}