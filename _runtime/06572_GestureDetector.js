// _runtime/06572_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6573 from "metro/06573__.js";
import _mod6575 from "metro/06575__.js";
import _mod6576 from "metro/06576__.js";
import _mod6578 from "metro/06578__.js";
import NativeDetector from "06610_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6573.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6575.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6576.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6578.GestureDetector, {});
  const obj3 = {};
};
