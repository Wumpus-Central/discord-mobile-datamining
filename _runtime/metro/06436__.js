// === Module 6436: ? ===

// Module 6436
import ComposedGestureName from "ComposedGestureName" /* 6385 */;
import _mod6434 from "module_6434" /* 6434 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6434.useComposedGesture.apply(items1);
};