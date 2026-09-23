// _runtime/metro/07093__.js
import ComposedGestureName from "../07042_ComposedGestureName.js";
import _mod7091 from "07091__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7091.useComposedGesture.apply(items1);
};
