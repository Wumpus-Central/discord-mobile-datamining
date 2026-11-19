// === Module 5170: ? ===

// Module 5170
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import _mod5168 from "module_5168" /* 5168 */;

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5168.useComposedGesture.apply(items1);
}