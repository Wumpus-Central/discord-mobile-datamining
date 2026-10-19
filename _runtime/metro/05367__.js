// === Module 5367: ? ===

// Module 5367
import ComposedGestureName from "ComposedGestureName" /* 5317 */;
import _mod5366 from "module_5366" /* 5366 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5366.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};