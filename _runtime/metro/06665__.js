// _runtime/metro/06665__.js
import ComposedGestureName from "../06614_ComposedGestureName.js";
import _mod6663 from "06663__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6663.useComposedGesture.apply(items1);
};
