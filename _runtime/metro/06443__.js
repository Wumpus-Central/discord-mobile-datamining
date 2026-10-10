// === Module 6443: ? ===

// Module 6443
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import _mod6442 from "module_6442" /* 6442 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6442.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};