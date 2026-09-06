// === Module 6765: useSimultaneousGestures ===

// Module 6765 (useSimultaneousGestures)
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import useComposedGesture from "useComposedGesture" /* 6763 */;

require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};