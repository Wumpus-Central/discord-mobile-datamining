// === Module 6836: ? ===

// Module 6836
import ComposedGestureName from "ComposedGestureName" /* 6785 */;
import _mod6834 from "module_6834" /* 6834 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6834.useComposedGesture.apply(items1);
};