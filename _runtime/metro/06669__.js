// _runtime/metro/06669__.js
import ComposedGestureName from "../06618_ComposedGestureName.js";
import _mod6667 from "06667__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6667.useComposedGesture.apply(items1);
};
