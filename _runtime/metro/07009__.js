// === Module 7009: ? ===

// Module 7009
import ComposedGestureName from "ComposedGestureName" /* 6958 */;
import _mod7007 from "module_7007" /* 7007 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7007.useComposedGesture.apply(items1);
};