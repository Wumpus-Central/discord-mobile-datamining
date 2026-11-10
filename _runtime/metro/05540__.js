// === Module 5540: ? ===

// Module 5540
import ComposedGestureName from "ComposedGestureName" /* 5484 */;
import _mod5538 from "module_5538" /* 5538 */;

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5538.useComposedGesture.apply(items1);
}