// === Module 5408: ? ===

// Module 5408
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import _mod5406 from "module_5406" /* 5406 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5406.useComposedGesture.apply(items1);
};