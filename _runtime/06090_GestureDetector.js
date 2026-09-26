// _runtime/06090_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod6091 from "metro/06091__.js";
import _mod6093 from "metro/06093__.js";
import _mod6094 from "metro/06094__.js";
import _mod6096 from "metro/06096__.js";
import NativeDetector from "06128_NativeDetector.js";

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6091.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6093.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6094.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6096.GestureDetector, {});
  const obj3 = {};
};
