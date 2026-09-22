// _runtime/06916_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6917 from "metro/06917__.js";
import _mod6919 from "metro/06919__.js";
import _mod6920 from "metro/06920__.js";
import _mod6922 from "metro/06922__.js";
import NativeDetector from "06954_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6917.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6919.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6920.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6922.GestureDetector, {});
  const obj3 = {};
};
