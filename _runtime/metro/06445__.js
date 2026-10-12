// === Module 6445: ? ===

// Module 6445
import ComposedGestureName from "ComposedGestureName" /* 6394 */;
import _mod6443 from "module_6443" /* 6443 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6443.useComposedGesture.apply(items1);
};