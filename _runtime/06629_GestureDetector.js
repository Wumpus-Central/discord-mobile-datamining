// _runtime/06629_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6630 from "metro/06630__.js";
import _mod6632 from "metro/06632__.js";
import _mod6633 from "metro/06633__.js";
import _mod6635 from "metro/06635__.js";
import NativeDetector from "06667_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6630.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6632.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6633.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6635.GestureDetector, {});
  const obj3 = {};
};
