// === Module 6182: ? ===

// Module 6182
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import _mod6181 from "module_6181" /* 6181 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6181.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};