// _runtime/metro/06250__.js
import ComposedGestureName from "../06199_ComposedGestureName.js";
import _mod6248 from "06248__.js";

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6248.useComposedGesture;
  _mod6248;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
