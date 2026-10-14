// _runtime/06356_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6357 from "metro/06357__.js";
import _mod6359 from "metro/06359__.js";
import _mod6360 from "metro/06360__.js";
import _mod6362 from "metro/06362__.js";
import NativeDetector from "06394_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6357.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6359.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6360.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6362.GestureDetector, {});
  const obj3 = {};
};
