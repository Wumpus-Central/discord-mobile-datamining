// === Module 6183: ? ===

// Module 6183
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import _mod6181 from "module_6181" /* 6181 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6181.useComposedGesture.apply(items1);
};