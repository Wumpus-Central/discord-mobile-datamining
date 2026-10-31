// === Module 5412: ? ===

// Module 5412
import ComposedGestureName from "ComposedGestureName" /* 5362 */;
import _mod5411 from "module_5411" /* 5411 */;

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5411.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}