// === Module 5420: ? ===

// Module 5420
import ComposedGestureName from "ComposedGestureName" /* 5365 */;
import _mod5419 from "module_5419" /* 5419 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5419.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}