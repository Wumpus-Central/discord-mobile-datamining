// === Module 5290: ? ===

// Module 5290
import ComposedGestureName from "ComposedGestureName" /* 5235 */;
import _mod5289 from "module_5289" /* 5289 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5289.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}