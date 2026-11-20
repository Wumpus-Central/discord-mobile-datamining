// _runtime/05070_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5071 from "metro/05071__.js";
import _mod5073 from "metro/05073__.js";
import _mod5074 from "metro/05074__.js";
import _mod5077 from "metro/05077__.js";
import NativeDetector from "05112_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5071.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5073.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5074.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5077.GestureDetector, {});
  const obj3 = {};
}
