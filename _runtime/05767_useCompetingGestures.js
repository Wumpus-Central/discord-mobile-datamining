// _runtime/05767_useCompetingGestures.js
import ComposedGestureName from "05719_ComposedGestureName.js";
import useComposedGesture from "05768_useComposedGesture.js";

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
