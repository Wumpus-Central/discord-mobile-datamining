// _runtime/05604_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5605 from "metro/05605__.js";
import _mod5607 from "metro/05607__.js";
import _mod5608 from "metro/05608__.js";
import _mod5611 from "metro/05611__.js";
import NativeDetector from "05646_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5605.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5607.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5608.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5611.GestureDetector, {});
  const obj3 = {};
}
