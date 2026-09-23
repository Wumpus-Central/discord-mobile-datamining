// _runtime/07000_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod7001 from "metro/07001__.js";
import _mod7003 from "metro/07003__.js";
import _mod7004 from "metro/07004__.js";
import _mod7006 from "metro/07006__.js";
import NativeDetector from "07038_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod7001.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod7003.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod7004.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod7006.GestureDetector, {});
  const obj3 = {};
};
