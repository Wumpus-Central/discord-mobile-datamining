// === Module 5407: ? ===

// Module 5407
import ComposedGestureName from "ComposedGestureName" /* 5356 */;
import _mod5405 from "module_5405" /* 5405 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5405.useComposedGesture.apply(items1);
};