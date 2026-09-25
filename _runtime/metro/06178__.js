// === Module 6178: ? ===

// Module 6178
import ComposedGestureName from "ComposedGestureName" /* 6127 */;
import _mod6176 from "module_6176" /* 6176 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6176.useComposedGesture.apply(items1);
};