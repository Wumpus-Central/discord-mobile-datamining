// === Module 6449: ? ===

// Module 6449
import ComposedGestureName from "ComposedGestureName" /* 6398 */;
import _mod6447 from "module_6447" /* 6447 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6447.useComposedGesture.apply(items1);
};