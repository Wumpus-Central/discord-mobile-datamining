// _runtime/05466_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5467 from "metro/05467__.js";
import _mod5469 from "metro/05469__.js";
import _mod5470 from "metro/05470__.js";
import _mod5473 from "metro/05473__.js";
import NativeDetector from "05508_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5467.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5469.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5470.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5473.GestureDetector, {});
  const obj3 = {};
}
