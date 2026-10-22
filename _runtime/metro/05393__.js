// _runtime/metro/05393__.js
import ComposedGestureName from "../05342_ComposedGestureName.js";
import _mod5391 from "05391__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5391.useComposedGesture.apply(items1);
};
