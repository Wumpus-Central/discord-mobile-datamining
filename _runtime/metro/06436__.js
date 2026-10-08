// _runtime/metro/06436__.js
import ComposedGestureName from "../06385_ComposedGestureName.js";
import _mod6434 from "06434__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6434.useComposedGesture.apply(items1);
};
