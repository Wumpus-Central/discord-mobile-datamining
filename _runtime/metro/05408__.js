// _runtime/metro/05408__.js
import ComposedGestureName from "../05357_ComposedGestureName.js";
import _mod5406 from "05406__.js";

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5406.useComposedGesture.apply(items1);
};
