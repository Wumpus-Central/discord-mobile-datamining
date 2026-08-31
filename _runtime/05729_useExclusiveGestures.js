// === Module 5729: useExclusiveGestures ===

// Module 5729 (useExclusiveGestures)
import ComposedGestureName from "ComposedGestureName" /* 5679 */;
import useComposedGesture from "useComposedGesture" /* 5728 */;

require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};