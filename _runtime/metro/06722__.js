// _runtime/metro/06722__.js
import ComposedGestureName from "../06671_ComposedGestureName.js";
import _mod6720 from "06720__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6720.useComposedGesture.apply(items1);
};
