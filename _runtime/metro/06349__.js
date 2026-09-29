// === Module 6349: ? ===

// Module 6349
import ComposedGestureName from "ComposedGestureName" /* 6298 */;
import _mod6347 from "module_6347" /* 6347 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6347.useComposedGesture.apply(items1);
};