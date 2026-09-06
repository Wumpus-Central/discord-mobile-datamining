// _runtime/06765_useSimultaneousGestures.js
import ComposedGestureName from "06714_ComposedGestureName.js";
import useComposedGesture from "06763_useComposedGesture.js";

require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
