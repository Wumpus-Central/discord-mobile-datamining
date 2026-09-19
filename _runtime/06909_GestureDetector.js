// _runtime/06909_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6910 from "metro/06910__.js";
import _mod6912 from "metro/06912__.js";
import _mod6913 from "metro/06913__.js";
import _mod6915 from "metro/06915__.js";
import NativeDetector from "06947_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6910.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6912.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6913.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6915.GestureDetector, {});
  const obj3 = {};
};
