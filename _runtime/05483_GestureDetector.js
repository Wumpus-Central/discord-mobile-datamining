// _runtime/05483_GestureDetector.js
import { jsx } from "jsxProd";
import { useEnsureGestureHandlerRootView } from "05484_useEnsureGestureHandlerRootView.js";
import { _isNativeReflectConstruct } from "05486__isNativeReflectConstruct.js";


export const GestureDetector = function GestureDetector(gesture) {
  let obj = useEnsureGestureHandlerRootView;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _isNativeReflectConstruct.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(5487).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(5521).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(5489).GestureDetector, {});
};