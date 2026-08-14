// _runtime/05598_useSimultaneousGestures.js
import { ComposedGestureName } from "05547_ComposedGestureName.js";
import { useComposedGesture } from "05596_useComposedGesture.js";
const require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};