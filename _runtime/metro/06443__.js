// _runtime/metro/06443__.js
import ComposedGestureName from "../06392_ComposedGestureName.js";
import _mod6441 from "06441__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6441.useComposedGesture.apply(items1);
};
