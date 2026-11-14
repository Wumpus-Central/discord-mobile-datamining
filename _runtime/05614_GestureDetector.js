// _runtime/05614_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5615 from "metro/05615__.js";
import _mod5617 from "metro/05617__.js";
import _mod5618 from "metro/05618__.js";
import _mod5621 from "metro/05621__.js";
import NativeDetector from "05656_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5615.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5617.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5618.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5621.GestureDetector, {});
  const obj3 = {};
}
