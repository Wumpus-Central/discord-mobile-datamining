// _runtime/05436_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5437 from "metro/05437__.js";
import _mod5439 from "metro/05439__.js";
import _mod5440 from "metro/05440__.js";
import _mod5443 from "metro/05443__.js";
import NativeDetector from "05478_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5437.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5439.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5440.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5443.GestureDetector, {});
  const obj3 = {};
}
