// _runtime/05711_useCompetingGestures.js
import ComposedGestureName from "05663_ComposedGestureName.js";
import useComposedGesture from "05712_useComposedGesture.js";

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};