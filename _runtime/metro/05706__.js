// _runtime/metro/05706__.js
import ComposedGestureName from "../05650_ComposedGestureName.js";
import _mod5704 from "05704__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5704.useComposedGesture.apply(items1);
}
