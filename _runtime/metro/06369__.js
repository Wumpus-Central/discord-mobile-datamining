// _runtime/metro/06369__.js
import ComposedGestureName from "../06318_ComposedGestureName.js";
import _mod6367 from "06367__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6367.useComposedGesture.apply(items1);
};
