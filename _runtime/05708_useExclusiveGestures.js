// === Module 5708: useExclusiveGestures ===

// Module 5708 (useExclusiveGestures)
import ComposedGestureName from "ComposedGestureName" /* 5658 */;
import useComposedGesture from "useComposedGesture" /* 5707 */;

require = arg1;
const dependencyMap = arg6;
arg5.useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};