// _runtime/06276_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6277 from "metro/06277__.js";
import _mod6279 from "metro/06279__.js";
import _mod6280 from "metro/06280__.js";
import _mod6282 from "metro/06282__.js";
import NativeDetector from "06314_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6277.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6279.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6280.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6282.GestureDetector, {});
  const obj3 = {};
};
