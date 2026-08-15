// _runtime/06487_useSimultaneousGestures.js
import { ComposedGestureName } from "06436_ComposedGestureName.js";
import { useComposedGesture } from "06485_useComposedGesture.js";
const require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};