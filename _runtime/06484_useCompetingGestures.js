// _runtime/06484_useCompetingGestures.js
import ComposedGestureName from "ComposedGestureName" /* 6436 */;
import useComposedGesture from "useComposedGesture" /* 6485 */;

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};