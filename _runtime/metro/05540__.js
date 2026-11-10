// _runtime/metro/05540__.js
import ComposedGestureName from "../05484_ComposedGestureName.js";
import _mod5538 from "05538__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5538.useComposedGesture.apply(items1);
}
