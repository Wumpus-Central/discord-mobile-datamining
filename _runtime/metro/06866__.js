// _runtime/metro/06866__.js
import ComposedGestureName from "../06815_ComposedGestureName.js";
import _mod6864 from "06864__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6864.useComposedGesture.apply(items1);
};
