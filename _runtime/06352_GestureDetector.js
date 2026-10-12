// _runtime/06352_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6353 from "metro/06353__.js";
import _mod6355 from "metro/06355__.js";
import _mod6356 from "metro/06356__.js";
import _mod6358 from "metro/06358__.js";
import NativeDetector from "06390_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6353.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6355.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6356.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6358.GestureDetector, {});
  const obj3 = {};
};
