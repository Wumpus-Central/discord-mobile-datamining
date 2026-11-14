// === Module 5715: ? ===

// Module 5715
import ComposedGestureName from "ComposedGestureName" /* 5660 */;
import _mod5714 from "module_5714" /* 5714 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5714.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}