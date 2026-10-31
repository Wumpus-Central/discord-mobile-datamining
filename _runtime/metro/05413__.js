// === Module 5413: ? ===

// Module 5413
import ComposedGestureName from "ComposedGestureName" /* 5362 */;
import _mod5411 from "module_5411" /* 5411 */;

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5411.useComposedGesture.apply(items1);
}