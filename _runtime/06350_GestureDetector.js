// _runtime/06350_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6351 from "metro/06351__.js";
import _mod6353 from "metro/06353__.js";
import _mod6354 from "metro/06354__.js";
import _mod6356 from "metro/06356__.js";
import NativeDetector from "06388_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6351.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6353.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6354.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6356.GestureDetector, {});
  const obj3 = {};
};
