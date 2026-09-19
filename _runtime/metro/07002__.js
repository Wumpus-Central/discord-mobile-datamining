// _runtime/metro/07002__.js
import ComposedGestureName from "../06951_ComposedGestureName.js";
import _mod7000 from "07000__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7000.useComposedGesture.apply(items1);
};
