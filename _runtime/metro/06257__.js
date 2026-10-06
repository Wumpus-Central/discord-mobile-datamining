// === Module 6257: ? ===

// Module 6257
import ComposedGestureName from "ComposedGestureName" /* 6206 */;
import _mod6255 from "module_6255" /* 6255 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6255.useComposedGesture;
  _mod6255;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};