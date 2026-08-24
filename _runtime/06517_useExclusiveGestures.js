// === Module 6517: useExclusiveGestures ===

// Module 6517 (useExclusiveGestures)
import ComposedGestureName from "ComposedGestureName" /* 6467 */;
import useComposedGesture from "useComposedGesture" /* 6516 */;

require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};