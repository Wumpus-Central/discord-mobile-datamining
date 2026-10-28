// _runtime/05350_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5351 from "metro/05351__.js";
import _mod5353 from "metro/05353__.js";
import _mod5354 from "metro/05354__.js";
import _mod5356 from "metro/05356__.js";
import NativeDetector from "05388_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5351.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5353.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5354.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5356.GestureDetector, {});
  const obj3 = {};
};
