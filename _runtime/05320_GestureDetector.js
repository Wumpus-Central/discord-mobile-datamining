// _runtime/05320_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5321 from "metro/05321__.js";
import _mod5323 from "metro/05323__.js";
import _mod5324 from "metro/05324__.js";
import _mod5326 from "metro/05326__.js";
import NativeDetector from "05358_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5321.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5323.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5324.BaseGesture)) {
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
