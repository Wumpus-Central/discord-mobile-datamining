// === Module 6254: ? ===

// Module 6254
import ComposedGestureName from "ComposedGestureName" /* 6206 */;
import _mod6255 from "module_6255" /* 6255 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6255.useComposedGesture;
  _mod6255;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};