// _runtime/metro/05443__.js
import ComposedGestureName from "../05392_ComposedGestureName.js";
import _mod5441 from "05441__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5441.useComposedGesture.apply(items1);
};
