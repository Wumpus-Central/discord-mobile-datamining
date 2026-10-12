// _runtime/metro/06445__.js
import ComposedGestureName from "../06394_ComposedGestureName.js";
import _mod6443 from "06443__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6443.useComposedGesture.apply(items1);
};
