// _runtime/06914_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6915 from "metro/06915__.js";
import _mod6917 from "metro/06917__.js";
import _mod6918 from "metro/06918__.js";
import _mod6920 from "metro/06920__.js";
import NativeDetector from "06952_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6915.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6917.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6918.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6920.GestureDetector, {});
  const obj3 = {};
};
