// === Module 7006: ? ===

// Module 7006
import ComposedGestureName from "ComposedGestureName" /* 6956 */;
import _mod7005 from "module_7005" /* 7005 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod7005.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};