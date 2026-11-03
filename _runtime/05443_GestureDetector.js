// _runtime/05443_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5444 from "metro/05444__.js";
import _mod5446 from "metro/05446__.js";
import _mod5447 from "metro/05447__.js";
import _mod5449 from "metro/05449__.js";
import NativeDetector from "05481_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5444.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5446.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5447.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5449.GestureDetector, {});
  const obj3 = {};
}
