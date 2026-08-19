// _runtime/06394_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import useEnsureGestureHandlerRootView from "06395_useEnsureGestureHandlerRootView.js";
import _isNativeReflectConstruct from "06397__isNativeReflectConstruct.js";
import _isNativeReflectConstruct2 from "06398__isNativeReflectConstruct.js";
import GestureDetector from "06400_GestureDetector.js";
import NativeDetector from "06432_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = useEnsureGestureHandlerRootView;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _isNativeReflectConstruct.ComposedGesture)) {
    if (!(gesture.gesture instanceof _isNativeReflectConstruct2.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(GestureDetector.GestureDetector, {});
};