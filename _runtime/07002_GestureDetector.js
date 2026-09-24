// _runtime/07002_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod7003 from "metro/07003__.js";
import _mod7005 from "metro/07005__.js";
import _mod7006 from "metro/07006__.js";
import _mod7008 from "metro/07008__.js";
import NativeDetector from "07040_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod7003.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod7005.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod7006.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod7008.GestureDetector, {});
  const obj3 = {};
};
