// _runtime/metro/05368__.js
import ComposedGestureName from "../05317_ComposedGestureName.js";
import _mod5366 from "05366__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5366.useComposedGesture.apply(items1);
};
