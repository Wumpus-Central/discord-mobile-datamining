// === Module 6762: useCompetingGestures ===

// Module 6762 (useCompetingGestures)
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import useComposedGesture from "useComposedGesture" /* 6763 */;

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};