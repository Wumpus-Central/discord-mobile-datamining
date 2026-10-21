// === Module 5389: ? ===

// Module 5389
import ComposedGestureName from "ComposedGestureName" /* 5338 */;
import _mod5387 from "module_5387" /* 5387 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5387.useComposedGesture.apply(items1);
};