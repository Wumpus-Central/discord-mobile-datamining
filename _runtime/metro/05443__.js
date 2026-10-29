// _runtime/metro/05443__.js
import ComposedGestureName from "../05393_ComposedGestureName.js";
import _mod5442 from "05442__.js";

require = arg1;
const dependencyMap = arg6;

export function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod5442.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
