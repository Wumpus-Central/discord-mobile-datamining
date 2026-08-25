// === Module 5643: useSimultaneousGestures ===

// Module 5643 (useSimultaneousGestures)
import ComposedGestureName from "ComposedGestureName" /* 5592 */;
import useComposedGesture from "useComposedGesture" /* 5641 */;

require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};