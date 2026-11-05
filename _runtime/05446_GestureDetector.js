// _runtime/05446_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5447 from "metro/05447__.js";
import _mod5449 from "metro/05449__.js";
import _mod5450 from "metro/05450__.js";
import _mod5453 from "metro/05453__.js";
import NativeDetector from "05488_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5447.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5449.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5450.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5453.GestureDetector, {});
  const obj3 = {};
}
