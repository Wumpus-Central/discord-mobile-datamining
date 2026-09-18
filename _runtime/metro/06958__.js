// _runtime/metro/06958__.js
import ComposedGestureName from "../06907_ComposedGestureName.js";
import _mod6956 from "06956__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6956.useComposedGesture.apply(items1);
};
