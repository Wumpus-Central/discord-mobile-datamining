// _runtime/06865_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6866 from "metro/06866__.js";
import _mod6868 from "metro/06868__.js";
import _mod6869 from "metro/06869__.js";
import _mod6871 from "metro/06871__.js";
import NativeDetector from "06903_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6866.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6868.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6869.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6871.GestureDetector, {});
  const obj3 = {};
};
