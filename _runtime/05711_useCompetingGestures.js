// === Module 5711: useCompetingGestures ===

// Module 5711 (useCompetingGestures)
import ComposedGestureName from "ComposedGestureName" /* 5663 */;
import useComposedGesture from "useComposedGesture" /* 5712 */;

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};