// _runtime/06343_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6344 from "metro/06344__.js";
import _mod6346 from "metro/06346__.js";
import _mod6347 from "metro/06347__.js";
import _mod6349 from "metro/06349__.js";
import NativeDetector from "06381_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6344.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6346.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6347.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6349.GestureDetector, {});
  const obj3 = {};
};
