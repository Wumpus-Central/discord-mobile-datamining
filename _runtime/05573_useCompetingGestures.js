// _runtime/05573_useCompetingGestures.js
import { ComposedGestureName } from "05525_ComposedGestureName.js";
import { useComposedGesture } from "05574_useComposedGesture.js";
const require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};