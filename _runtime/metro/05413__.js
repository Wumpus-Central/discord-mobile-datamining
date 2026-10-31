// _runtime/metro/05413__.js
import ComposedGestureName from "../05362_ComposedGestureName.js";
import _mod5411 from "05411__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5411.useComposedGesture.apply(items1);
}
