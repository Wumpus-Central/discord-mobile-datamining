// === Module 6444: ? ===

// Module 6444
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import _mod6442 from "module_6442" /* 6442 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6442.useComposedGesture.apply(items1);
};