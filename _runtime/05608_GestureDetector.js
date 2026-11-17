// _runtime/05608_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5609 from "metro/05609__.js";
import _mod5611 from "metro/05611__.js";
import _mod5612 from "metro/05612__.js";
import _mod5615 from "metro/05615__.js";
import NativeDetector from "05650_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5609.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5611.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5612.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5615.GestureDetector, {});
  const obj3 = {};
}
