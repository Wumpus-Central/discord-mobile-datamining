// === Module 6665: ? ===

// Module 6665
import ComposedGestureName from "ComposedGestureName" /* 6614 */;
import _mod6663 from "module_6663" /* 6663 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6663.useComposedGesture.apply(items1);
};