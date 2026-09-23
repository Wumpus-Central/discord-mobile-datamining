// === Module 7093: ? ===

// Module 7093
import ComposedGestureName from "ComposedGestureName" /* 7042 */;
import _mod7091 from "module_7091" /* 7091 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7091.useComposedGesture.apply(items1);
};