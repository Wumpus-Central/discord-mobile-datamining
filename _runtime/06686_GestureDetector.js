// _runtime/06686_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6687 from "metro/06687__.js";
import _mod6689 from "metro/06689__.js";
import _mod6690 from "metro/06690__.js";
import _mod6692 from "metro/06692__.js";
import NativeDetector from "06724_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6687;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6689.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6690.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6692.GestureDetector, {});
};
