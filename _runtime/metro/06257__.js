// _runtime/metro/06257__.js
import ComposedGestureName from "../06206_ComposedGestureName.js";
import _mod6255 from "06255__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6255.useComposedGesture.apply(items1);
};
