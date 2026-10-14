// _runtime/metro/06449__.js
import ComposedGestureName from "../06398_ComposedGestureName.js";
import _mod6447 from "06447__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6447.useComposedGesture.apply(items1);
};
