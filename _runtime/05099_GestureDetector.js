// _runtime/05099_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5100 from "metro/05100__.js";
import _mod5102 from "metro/05102__.js";
import _mod5103 from "metro/05103__.js";
import _mod5106 from "metro/05106__.js";
import NativeDetector from "05141_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5100.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5102.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5103.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5106.GestureDetector, {});
  const obj3 = {};
}
