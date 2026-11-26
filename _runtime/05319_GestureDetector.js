// _runtime/05319_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5320 from "metro/05320__.js";
import _mod5322 from "metro/05322__.js";
import _mod5323 from "metro/05323__.js";
import _mod5326 from "metro/05326__.js";
import NativeDetector from "05361_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5320.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5322.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5323.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5326.GestureDetector, {});
  const obj3 = {};
}
