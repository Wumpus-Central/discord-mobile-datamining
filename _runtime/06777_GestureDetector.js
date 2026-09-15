// _runtime/06777_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6778 from "metro/06778__.js";
import _mod6780 from "metro/06780__.js";
import _mod6781 from "metro/06781__.js";
import _mod6783 from "metro/06783__.js";
import NativeDetector from "06815_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6778.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6780.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6781.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6783.GestureDetector, {});
  const obj3 = {};
};
