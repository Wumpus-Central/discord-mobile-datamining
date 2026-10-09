// === Module 6443: ? ===

// Module 6443
import ComposedGestureName from "ComposedGestureName" /* 6392 */;
import _mod6441 from "module_6441" /* 6441 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6441.useComposedGesture.apply(items1);
};