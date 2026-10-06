// _runtime/metro/06254__.js
import ComposedGestureName from "../06206_ComposedGestureName.js";
import _mod6255 from "06255__.js";

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6255.useComposedGesture;
  _mod6255;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
