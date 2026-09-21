// === Module 7007: ? ===

// Module 7007
import ComposedGestureName from "ComposedGestureName" /* 6956 */;
import _mod7005 from "module_7005" /* 7005 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7005.useComposedGesture.apply(items1);
};