// _runtime/05551_GestureDetector.js
import jsxProd from "react/00021_jsxProd.js";
import _mod5552 from "metro/05552__.js";
import _mod5554 from "metro/05554__.js";
import _mod5555 from "metro/05555__.js";
import _mod5558 from "metro/05558__.js";
import NativeDetector from "05593_NativeDetector.js";

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5552.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5554.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5555.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5558.GestureDetector, {});
  const obj3 = {};
}
