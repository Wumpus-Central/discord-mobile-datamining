// === Module 6518: useSimultaneousGestures ===

// Module 6518 (useSimultaneousGestures)
import ComposedGestureName from "ComposedGestureName" /* 6467 */;
import useComposedGesture from "useComposedGesture" /* 6516 */;

require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};