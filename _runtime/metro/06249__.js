// === Module 6249: ? ===

// Module 6249
import ComposedGestureName from "ComposedGestureName" /* 6199 */;
import _mod6248 from "module_6248" /* 6248 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6248.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};