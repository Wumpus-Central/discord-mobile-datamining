// _runtime/06256_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6257 from "metro/06257__.js";
import _mod6259 from "metro/06259__.js";
import _mod6260 from "metro/06260__.js";
import _mod6262 from "metro/06262__.js";
import NativeDetector from "06294_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6257.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6259.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6260.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6262.GestureDetector, {});
  const obj3 = {};
};
