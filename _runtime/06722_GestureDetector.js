// _runtime/06722_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6723 from "metro/06723__.js";
import _mod6725 from "metro/06725__.js";
import _mod6726 from "metro/06726__.js";
import _mod6728 from "metro/06728__.js";
import NativeDetector from "06760_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6723;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6725.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6726.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6728.GestureDetector, {});
};
