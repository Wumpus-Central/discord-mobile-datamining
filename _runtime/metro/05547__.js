// === Module 5547: ? ===

// Module 5547
import ComposedGestureName from "ComposedGestureName" /* 5492 */;
import _mod5546 from "module_5546" /* 5546 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5546.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}