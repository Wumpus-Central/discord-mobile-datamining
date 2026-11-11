// _runtime/metro/05653__.js
import ComposedGestureName from "../05597_ComposedGestureName.js";
import _mod5651 from "05651__.js";

require = arg1;
const dependencyMap = arg6;

export function useSimultaneousGestures() {
  items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod5651.useComposedGesture.apply(items1);
}
