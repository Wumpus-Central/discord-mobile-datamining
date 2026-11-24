// _runtime/05193_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5194 from "metro/05194__.js";
import _mod5196 from "metro/05196__.js";
import _mod5197 from "metro/05197__.js";
import _mod5200 from "metro/05200__.js";
import NativeDetector from "05235_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5194.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5196.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5197.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5200.GestureDetector, {});
  const obj3 = {};
}
