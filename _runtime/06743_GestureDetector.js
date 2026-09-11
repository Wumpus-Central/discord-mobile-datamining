// _runtime/06743_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6744 from "metro/06744__.js";
import _mod6746 from "metro/06746__.js";
import _mod6747 from "metro/06747__.js";
import _mod6749 from "metro/06749__.js";
import NativeDetector from "06781_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6744;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6746.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6747.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6749.GestureDetector, {});
};
