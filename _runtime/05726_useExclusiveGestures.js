// === Module 5726: useExclusiveGestures ===

// Module 5726 (useExclusiveGestures)
import ComposedGestureName from "ComposedGestureName" /* 5676 */;
import useComposedGesture from "useComposedGesture" /* 5725 */;

require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};