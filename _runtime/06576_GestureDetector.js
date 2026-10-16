// _runtime/06576_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6577 from "metro/06577__.js";
import _mod6579 from "metro/06579__.js";
import _mod6580 from "metro/06580__.js";
import _mod6582 from "metro/06582__.js";
import NativeDetector from "06614_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6577.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6579.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6580.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6582.GestureDetector, {});
  const obj3 = {};
};
