// _runtime/metro/05389__.js
import ComposedGestureName from "../05338_ComposedGestureName.js";
import _mod5387 from "05387__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5387.useComposedGesture.apply(items1);
};
