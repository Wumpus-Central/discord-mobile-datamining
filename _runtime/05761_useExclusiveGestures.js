// _runtime/05761_useExclusiveGestures.js
import ComposedGestureName from "05711_ComposedGestureName.js";
import useComposedGesture from "05760_useComposedGesture.js";

require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};