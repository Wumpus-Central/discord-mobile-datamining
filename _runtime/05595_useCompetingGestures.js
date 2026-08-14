// _runtime/05595_useCompetingGestures.js
import { ComposedGestureName } from "05547_ComposedGestureName.js";
import { useComposedGesture } from "05596_useComposedGesture.js";
const require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};