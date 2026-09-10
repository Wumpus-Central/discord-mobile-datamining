// _runtime/metro/06815__.js
import ComposedGestureName from "../06764_ComposedGestureName.js";
import _mod6813 from "06813__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6813.useComposedGesture.apply(items1);
};
