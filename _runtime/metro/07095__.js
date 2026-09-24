// _runtime/metro/07095__.js
import ComposedGestureName from "../07044_ComposedGestureName.js";
import _mod7093 from "07093__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7093.useComposedGesture.apply(items1);
};
