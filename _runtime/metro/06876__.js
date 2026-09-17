// === Module 6876: ? ===

// Module 6876
import ComposedGestureName from "ComposedGestureName" /* 6825 */;
import _mod6874 from "module_6874" /* 6874 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6874.useComposedGesture.apply(items1);
};