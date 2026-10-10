// _runtime/metro/06444__.js
import ComposedGestureName from "../06393_ComposedGestureName.js";
import _mod6442 from "06442__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6442.useComposedGesture.apply(items1);
};
