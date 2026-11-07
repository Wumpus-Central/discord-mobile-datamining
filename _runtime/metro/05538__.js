// _runtime/metro/05538__.js
import ComposedGestureName from "../05482_ComposedGestureName.js";
import _mod5536 from "05536__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5536.useComposedGesture.apply(items1);
}
