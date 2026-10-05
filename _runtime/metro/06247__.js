// === Module 6247: ? ===

// Module 6247
import ComposedGestureName from "ComposedGestureName" /* 6199 */;
import _mod6248 from "module_6248" /* 6248 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6248.useComposedGesture;
  _mod6248;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};