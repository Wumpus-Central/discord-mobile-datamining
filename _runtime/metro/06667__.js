// === Module 6667: ? ===

// Module 6667
import ComposedGestureName from "ComposedGestureName" /* 6616 */;
import _mod6665 from "module_6665" /* 6665 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6665.useComposedGesture.apply(items1);
};