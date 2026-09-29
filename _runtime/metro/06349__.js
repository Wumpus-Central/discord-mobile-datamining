// _runtime/metro/06349__.js
import ComposedGestureName from "../06298_ComposedGestureName.js";
import _mod6347 from "06347__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6347.useComposedGesture.apply(items1);
};
