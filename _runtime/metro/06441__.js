// _runtime/metro/06441__.js
import ComposedGestureName from "../06393_ComposedGestureName.js";
import _mod6442 from "06442__.js";

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod6442.useComposedGesture.apply(items1);
};
