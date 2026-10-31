// _runtime/metro/05412__.js
import ComposedGestureName from "../05362_ComposedGestureName.js";
import _mod5411 from "05411__.js";

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5411.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
