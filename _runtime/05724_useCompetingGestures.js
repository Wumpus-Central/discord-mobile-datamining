// _runtime/05724_useCompetingGestures.js
import ComposedGestureName from "05676_ComposedGestureName.js";
import useComposedGesture from "05725_useComposedGesture.js";

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};