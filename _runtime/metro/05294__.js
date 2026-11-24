// === Module 5294: ? ===

// Module 5294
import ComposedGestureName from "ComposedGestureName" /* 5239 */;
import _mod5293 from "module_5293" /* 5293 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5293.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}