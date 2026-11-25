// _runtime/metro/05390__.js
import ComposedGestureName from "../05334_ComposedGestureName.js";
import _mod5388 from "05388__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5388.useComposedGesture.apply(items1);
}
