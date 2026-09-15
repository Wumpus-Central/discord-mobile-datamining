// _runtime/metro/06870__.js
import ComposedGestureName from "../06819_ComposedGestureName.js";
import _mod6868 from "06868__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6868.useComposedGesture.apply(items1);
};
