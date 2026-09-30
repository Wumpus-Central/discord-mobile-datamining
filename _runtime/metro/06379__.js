// _runtime/metro/06379__.js
import ComposedGestureName from "../06328_ComposedGestureName.js";
import _mod6377 from "06377__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6377.useComposedGesture.apply(items1);
};
