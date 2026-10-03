// _runtime/06157_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6158 from "metro/06158__.js";
import _mod6160 from "metro/06160__.js";
import _mod6161 from "metro/06161__.js";
import _mod6163 from "metro/06163__.js";
import NativeDetector from "06195_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6158.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6160.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6161.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6163.GestureDetector, {});
  const obj3 = {};
};
