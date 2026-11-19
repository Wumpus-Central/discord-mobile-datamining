// _runtime/05068_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5069 from "metro/05069__.js";
import _mod5071 from "metro/05071__.js";
import _mod5072 from "metro/05072__.js";
import _mod5075 from "metro/05075__.js";
import NativeDetector from "05110_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5069.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5071.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5072.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5075.GestureDetector, {});
  const obj3 = {};
}
