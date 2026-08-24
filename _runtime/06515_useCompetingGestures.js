// _runtime/06515_useCompetingGestures.js
import ComposedGestureName from "06467_ComposedGestureName.js";
import useComposedGesture from "06516_useComposedGesture.js";

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};