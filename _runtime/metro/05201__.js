// _runtime/metro/05201__.js
import ComposedGestureName from "../05145_ComposedGestureName.js";
import _mod5199 from "05199__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5199.useComposedGesture.apply(items1);
}
