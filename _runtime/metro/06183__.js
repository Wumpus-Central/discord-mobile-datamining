// _runtime/metro/06183__.js
import ComposedGestureName from "../06132_ComposedGestureName.js";
import _mod6181 from "06181__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6181.useComposedGesture.apply(items1);
};
