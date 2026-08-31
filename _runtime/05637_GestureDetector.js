// _runtime/05637_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import useEnsureGestureHandlerRootView from "05638_useEnsureGestureHandlerRootView.js";
import _isNativeReflectConstruct from "05640__isNativeReflectConstruct.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = useEnsureGestureHandlerRootView;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _isNativeReflectConstruct.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(5641).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(5675).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(5643).GestureDetector, {});
};