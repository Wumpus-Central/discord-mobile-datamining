// === Module 5443: ? ===

// Module 5443
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import _mod5442 from "module_5442" /* 5442 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5442.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}