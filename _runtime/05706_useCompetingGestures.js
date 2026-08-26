// === Module 5706: useCompetingGestures ===

// Module 5706 (useCompetingGestures)
import ComposedGestureName from "ComposedGestureName" /* 5658 */;
import useComposedGesture from "useComposedGesture" /* 5707 */;

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};