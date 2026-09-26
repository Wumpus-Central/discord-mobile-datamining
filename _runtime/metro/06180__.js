// _runtime/metro/06180__.js
import ComposedGestureName from "../06132_ComposedGestureName.js";
import _mod6181 from "06181__.js";

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod6181.useComposedGesture.apply(items1);
};
