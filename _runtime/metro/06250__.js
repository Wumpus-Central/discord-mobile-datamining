// === Module 6250: ? ===

// Module 6250
import ComposedGestureName from "ComposedGestureName" /* 6199 */;
import _mod6248 from "module_6248" /* 6248 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6248.useComposedGesture.apply(items1);
};