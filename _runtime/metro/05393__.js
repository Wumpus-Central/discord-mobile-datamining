// === Module 5393: ? ===

// Module 5393
import ComposedGestureName from "ComposedGestureName" /* 5342 */;
import _mod5391 from "module_5391" /* 5391 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5391.useComposedGesture.apply(items1);
};