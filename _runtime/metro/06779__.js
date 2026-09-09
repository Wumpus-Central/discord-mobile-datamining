// === Module 6779: ? ===

// Module 6779
import ComposedGestureName from "ComposedGestureName" /* 6728 */;
import _mod6777 from "module_6777" /* 6777 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6777.useComposedGesture.apply(items1);
};