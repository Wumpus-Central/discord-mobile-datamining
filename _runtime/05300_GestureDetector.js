// _runtime/05300_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5301 from "metro/05301__.js";
import _mod5303 from "metro/05303__.js";
import _mod5304 from "metro/05304__.js";
import _mod5306 from "metro/05306__.js";
import NativeDetector from "05338_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5301.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5303.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5304.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5306.GestureDetector, {});
  const obj3 = {};
};
