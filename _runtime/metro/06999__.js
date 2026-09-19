// _runtime/metro/06999__.js
import ComposedGestureName from "../06951_ComposedGestureName.js";
import _mod7000 from "07000__.js";

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod7000.useComposedGesture.apply(items1);
};
