// _runtime/metro/05172__.js
import ComposedGestureName from "../05116_ComposedGestureName.js";
import _mod5170 from "05170__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5170.useComposedGesture.apply(items1);
}
