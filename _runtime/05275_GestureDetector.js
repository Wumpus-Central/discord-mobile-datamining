// _runtime/05275_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5276 from "metro/05276__.js";
import _mod5278 from "metro/05278__.js";
import _mod5279 from "metro/05279__.js";
import _mod5281 from "metro/05281__.js";
import NativeDetector from "05313_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod5276.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5278.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5279.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5281.GestureDetector, {});
  const obj3 = {};
};
