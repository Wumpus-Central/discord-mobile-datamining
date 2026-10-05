// _runtime/metro/06247__.js
import ComposedGestureName from "../06199_ComposedGestureName.js";
import _mod6248 from "06248__.js";

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6248.useComposedGesture;
  _mod6248;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
