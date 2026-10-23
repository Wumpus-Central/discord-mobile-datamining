// _runtime/05312_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5313 from "metro/05313__.js";
import _mod5315 from "metro/05315__.js";
import _mod5316 from "metro/05316__.js";
import _mod5318 from "metro/05318__.js";
import NativeDetector from "05350_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5313.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5315.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5316.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5318.GestureDetector, {});
  const obj3 = {};
};
