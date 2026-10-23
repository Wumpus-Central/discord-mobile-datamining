// _runtime/metro/05405__.js
import ComposedGestureName from "../05354_ComposedGestureName.js";
import _mod5403 from "05403__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5403.useComposedGesture.apply(items1);
};
