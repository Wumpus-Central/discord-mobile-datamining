// _runtime/06773_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6774 from "metro/06774__.js";
import _mod6776 from "metro/06776__.js";
import _mod6777 from "metro/06777__.js";
import _mod6779 from "metro/06779__.js";
import NativeDetector from "06811_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6774;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6776.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6777.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6779.GestureDetector, {});
};
