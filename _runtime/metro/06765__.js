// _runtime/metro/06765__.js
import ComposedGestureName from "../06714_ComposedGestureName.js";
import _mod6763 from "06763__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6763.useComposedGesture.apply(items1);
};
