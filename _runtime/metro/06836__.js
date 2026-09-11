// _runtime/metro/06836__.js
import ComposedGestureName from "../06785_ComposedGestureName.js";
import _mod6834 from "06834__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6834.useComposedGesture.apply(items1);
};
