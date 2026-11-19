// _runtime/metro/05170__.js
import ComposedGestureName from "../05114_ComposedGestureName.js";
import _mod5168 from "05168__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5168.useComposedGesture.apply(items1);
}
