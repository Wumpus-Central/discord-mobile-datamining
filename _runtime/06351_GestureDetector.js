// _runtime/06351_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6352 from "metro/06352__.js";
import _mod6354 from "metro/06354__.js";
import _mod6355 from "metro/06355__.js";
import _mod6357 from "metro/06357__.js";
import NativeDetector from "06389_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6352.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6354.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6355.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6357.GestureDetector, {});
  const obj3 = {};
};
