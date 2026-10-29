// === Module 5444: ? ===

// Module 5444
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import _mod5442 from "module_5442" /* 5442 */;

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5442.useComposedGesture.apply(items1);
}