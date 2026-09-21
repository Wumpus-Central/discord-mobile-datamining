// _runtime/metro/07007__.js
import ComposedGestureName from "../06956_ComposedGestureName.js";
import _mod7005 from "07005__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7005.useComposedGesture.apply(items1);
};
