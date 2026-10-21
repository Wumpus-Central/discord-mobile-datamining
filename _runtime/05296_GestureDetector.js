// _runtime/05296_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5297 from "metro/05297__.js";
import _mod5299 from "metro/05299__.js";
import _mod5300 from "metro/05300__.js";
import _mod5302 from "metro/05302__.js";
import NativeDetector from "05334_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5297.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5299.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5300.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5302.GestureDetector, {});
  const obj3 = {};
};
