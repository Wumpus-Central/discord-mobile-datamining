// _runtime/06164_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6165 from "metro/06165__.js";
import _mod6167 from "metro/06167__.js";
import _mod6168 from "metro/06168__.js";
import _mod6170 from "metro/06170__.js";
import NativeDetector from "06202_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6165.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6167.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6168.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6170.GestureDetector, {});
  const obj3 = {};
};
