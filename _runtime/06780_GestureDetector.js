// _runtime/06780_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6781 from "metro/06781__.js";
import _mod6783 from "metro/06783__.js";
import _mod6784 from "metro/06784__.js";
import _mod6786 from "metro/06786__.js";
import NativeDetector from "06818_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6781.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6783.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6784.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6786.GestureDetector, {});
  const obj3 = {};
};
