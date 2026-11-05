// === Module 5548: ? ===

// Module 5548
import ComposedGestureName from "ComposedGestureName" /* 5492 */;
import _mod5546 from "module_5546" /* 5546 */;

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5546.useComposedGesture.apply(items1);
}