// _runtime/05534_useCompetingGestures.js
import { ComposedGestureName } from "05486_ComposedGestureName.js";
import { useComposedGesture } from "05535_useComposedGesture.js";
const require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};