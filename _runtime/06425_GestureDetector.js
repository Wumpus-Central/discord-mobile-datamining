// === Module 6425: GestureDetector ===

// Module 6425 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import useEnsureGestureHandlerRootView from "useEnsureGestureHandlerRootView" /* 6426 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 6428 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = useEnsureGestureHandlerRootView;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _isNativeReflectConstruct.ComposedGesture)) {
    if (!(gesture.gesture instanceof tmp(6429).BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(tmp(6463).NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(tmp(6431).GestureDetector, {});
};