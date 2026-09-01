// === Module 5759: useCompetingGestures ===

// Module 5759 (useCompetingGestures)
import ComposedGestureName from "ComposedGestureName" /* 5711 */;
import useComposedGesture from "useComposedGesture" /* 5760 */;

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};