// === Module 5443: ? ===

// Module 5443
import ComposedGestureName from "ComposedGestureName" /* 5392 */;
import _mod5441 from "module_5441" /* 5441 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5441.useComposedGesture.apply(items1);
};