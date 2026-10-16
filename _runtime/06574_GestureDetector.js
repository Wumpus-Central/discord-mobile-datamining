// _runtime/06574_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6575 from "metro/06575__.js";
import _mod6577 from "metro/06577__.js";
import _mod6578 from "metro/06578__.js";
import _mod6580 from "metro/06580__.js";
import NativeDetector from "06612_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6575.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6577.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6578.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6580.GestureDetector, {});
  const obj3 = {};
};
