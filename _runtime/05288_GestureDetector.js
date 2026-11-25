// _runtime/05288_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5289 from "metro/05289__.js";
import _mod5291 from "metro/05291__.js";
import _mod5292 from "metro/05292__.js";
import _mod5295 from "metro/05295__.js";
import NativeDetector from "05330_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5289.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5291.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5292.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5295.GestureDetector, {});
  const obj3 = {};
}
