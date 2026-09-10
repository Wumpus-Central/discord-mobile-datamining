// === Module 6814: ? ===

// Module 6814
import ComposedGestureName from "ComposedGestureName" /* 6764 */;
import _mod6813 from "module_6813" /* 6813 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6813.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};