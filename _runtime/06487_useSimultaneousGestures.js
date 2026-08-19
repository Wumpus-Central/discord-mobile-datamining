// === Module 6487: useSimultaneousGestures ===

// Module 6487 (useSimultaneousGestures)
import ComposedGestureName from "ComposedGestureName" /* 6436 */;
import useComposedGesture from "useComposedGesture" /* 6485 */;

require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};