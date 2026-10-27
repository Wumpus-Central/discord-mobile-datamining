// === Module 5407: ? ===

// Module 5407
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import _mod5406 from "module_5406" /* 5406 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5406.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};