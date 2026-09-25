// _runtime/metro/06175__.js
import ComposedGestureName from "../06127_ComposedGestureName.js";
import _mod6176 from "06176__.js";

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod6176.useComposedGesture.apply(items1);
};
