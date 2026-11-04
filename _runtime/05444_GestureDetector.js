// _runtime/05444_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5445 from "metro/05445__.js";
import _mod5447 from "metro/05447__.js";
import _mod5448 from "metro/05448__.js";
import _mod5451 from "metro/05451__.js";
import NativeDetector from "05486_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5445.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5447.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5448.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5451.GestureDetector, {});
  const obj3 = {};
}
