// _runtime/metro/06876__.js
import ComposedGestureName from "../06825_ComposedGestureName.js";
import _mod6874 from "06874__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6874.useComposedGesture.apply(items1);
};
