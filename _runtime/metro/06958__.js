// === Module 6958: ? ===

// Module 6958
import ComposedGestureName from "ComposedGestureName" /* 6907 */;
import _mod6956 from "module_6956" /* 6956 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6956.useComposedGesture.apply(items1);
};