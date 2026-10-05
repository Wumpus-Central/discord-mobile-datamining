// === Module 6249: ? ===

// Module 6249
import ComposedGestureName from "ComposedGestureName" /* 6199 */;
import _mod6248 from "module_6248" /* 6248 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6248.useComposedGesture;
  _mod6248;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};