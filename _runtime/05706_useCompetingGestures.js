// _runtime/05706_useCompetingGestures.js
import ComposedGestureName from "05658_ComposedGestureName.js";
import useComposedGesture from "05707_useComposedGesture.js";

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};