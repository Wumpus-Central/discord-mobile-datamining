// === Module 5405: ? ===

// Module 5405
import ComposedGestureName from "ComposedGestureName" /* 5354 */;
import _mod5403 from "module_5403" /* 5403 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5403.useComposedGesture.apply(items1);
};