// === Module 6722: ? ===

// Module 6722
import ComposedGestureName from "ComposedGestureName" /* 6671 */;
import _mod6720 from "module_6720" /* 6720 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6720.useComposedGesture.apply(items1);
};