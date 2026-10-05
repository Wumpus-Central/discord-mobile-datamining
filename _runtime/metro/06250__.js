// === Module 6250: ? ===

// Module 6250
import ComposedGestureName from "ComposedGestureName" /* 6199 */;
import _mod6248 from "module_6248" /* 6248 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6248.useComposedGesture;
  _mod6248;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};