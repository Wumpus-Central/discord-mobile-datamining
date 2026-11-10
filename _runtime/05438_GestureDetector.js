// _runtime/05438_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5439 from "metro/05439__.js";
import _mod5441 from "metro/05441__.js";
import _mod5442 from "metro/05442__.js";
import _mod5445 from "metro/05445__.js";
import NativeDetector from "05480_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5439.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5441.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5442.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5445.GestureDetector, {});
  const obj3 = {};
}
