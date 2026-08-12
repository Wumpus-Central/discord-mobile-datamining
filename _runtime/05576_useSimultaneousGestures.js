// _runtime/05576_useSimultaneousGestures.js
import { ComposedGestureName } from "05525_ComposedGestureName.js";
import { useComposedGesture } from "05574_useComposedGesture.js";
const require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};