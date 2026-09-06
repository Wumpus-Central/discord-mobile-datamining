// _runtime/06672_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6673 from "metro/06673__.js";
import _mod6675 from "metro/06675__.js";
import _mod6676 from "metro/06676__.js";
import _mod6678 from "metro/06678__.js";
import NativeDetector from "06710_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6673;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6675.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6676.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6678.GestureDetector, {});
};
