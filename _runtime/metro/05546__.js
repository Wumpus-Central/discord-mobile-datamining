// _runtime/metro/05546__.js
import ComposedGestureName from "../05490_ComposedGestureName.js";
import _mod5544 from "05544__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5544.useComposedGesture.apply(items1);
}
