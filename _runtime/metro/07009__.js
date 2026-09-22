// _runtime/metro/07009__.js
import ComposedGestureName from "../06958_ComposedGestureName.js";
import _mod7007 from "07007__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7007.useComposedGesture.apply(items1);
};
