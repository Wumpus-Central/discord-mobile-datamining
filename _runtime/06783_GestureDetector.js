// _runtime/06783_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6784 from "metro/06784__.js";
import _mod6786 from "metro/06786__.js";
import _mod6787 from "metro/06787__.js";
import _mod6789 from "metro/06789__.js";
import NativeDetector from "06821_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6784.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6786.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6787.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6789.GestureDetector, {});
  const obj3 = {};
};
