// _runtime/06484_useCompetingGestures.js
import { ComposedGestureName } from "06436_ComposedGestureName.js";
import { useComposedGesture } from "06485_useComposedGesture.js";
const require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};