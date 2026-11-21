// _runtime/05189_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5190 from "metro/05190__.js";
import _mod5192 from "metro/05192__.js";
import _mod5193 from "metro/05193__.js";
import _mod5196 from "metro/05196__.js";
import NativeDetector from "05231_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5190.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5192.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5193.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5196.GestureDetector, {});
  const obj3 = {};
}
