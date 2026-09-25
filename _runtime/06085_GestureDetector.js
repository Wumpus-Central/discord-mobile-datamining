// _runtime/06085_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6086 from "metro/06086__.js";
import _mod6088 from "metro/06088__.js";
import _mod6089 from "metro/06089__.js";
import _mod6091 from "metro/06091__.js";
import NativeDetector from "06123_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6086.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6088.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6089.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6091.GestureDetector, {});
  const obj3 = {};
};
