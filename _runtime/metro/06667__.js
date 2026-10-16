// _runtime/metro/06667__.js
import ComposedGestureName from "../06616_ComposedGestureName.js";
import _mod6665 from "06665__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6665.useComposedGesture.apply(items1);
};
