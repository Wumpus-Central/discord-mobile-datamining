// === Module 6256: ? ===

// Module 6256
import ComposedGestureName from "ComposedGestureName" /* 6206 */;
import _mod6255 from "module_6255" /* 6255 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6255.useComposedGesture;
  _mod6255;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};