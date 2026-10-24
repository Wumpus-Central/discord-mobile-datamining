// _runtime/05314_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5315 from "metro/05315__.js";
import _mod5317 from "metro/05317__.js";
import _mod5318 from "metro/05318__.js";
import _mod5320 from "metro/05320__.js";
import NativeDetector from "05352_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5315.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5317.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5318.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5320.GestureDetector, {});
  const obj3 = {};
};
