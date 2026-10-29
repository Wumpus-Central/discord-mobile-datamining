// _runtime/05351_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5352 from "metro/05352__.js";
import _mod5354 from "metro/05354__.js";
import _mod5355 from "metro/05355__.js";
import _mod5357 from "metro/05357__.js";
import NativeDetector from "05389_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5352.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5354.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5355.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5357.GestureDetector, {});
  const obj3 = {};
}
