// _runtime/05315_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5316 from "metro/05316__.js";
import _mod5318 from "metro/05318__.js";
import _mod5319 from "metro/05319__.js";
import _mod5321 from "metro/05321__.js";
import NativeDetector from "05353_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5316.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5318.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5319.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5321.GestureDetector, {});
  const obj3 = {};
}
