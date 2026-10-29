// _runtime/metro/05444__.js
import ComposedGestureName from "../05393_ComposedGestureName.js";
import _mod5442 from "05442__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5442.useComposedGesture.apply(items1);
}
