// === Module 5368: ? ===

// Module 5368
import ComposedGestureName from "ComposedGestureName" /* 5317 */;
import _mod5366 from "module_5366" /* 5366 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5366.useComposedGesture.apply(items1);
};