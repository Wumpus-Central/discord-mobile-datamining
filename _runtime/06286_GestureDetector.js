// _runtime/06286_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6287 from "metro/06287__.js";
import _mod6289 from "metro/06289__.js";
import _mod6290 from "metro/06290__.js";
import _mod6292 from "metro/06292__.js";
import NativeDetector from "06324_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6287.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6289.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6290.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6292.GestureDetector, {});
  const obj3 = {};
};
