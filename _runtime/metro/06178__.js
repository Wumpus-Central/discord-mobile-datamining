// _runtime/metro/06178__.js
import ComposedGestureName from "../06127_ComposedGestureName.js";
import _mod6176 from "06176__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6176.useComposedGesture.apply(items1);
};
