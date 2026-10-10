// === Module 6351: GestureDetector ===

// Module 6351 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6352 from "module_6352" /* 6352 */;
import _mod6354 from "module_6354" /* 6354 */;
import _mod6355 from "module_6355" /* 6355 */;
import _mod6357 from "module_6357" /* 6357 */;
import NativeDetector from "NativeDetector" /* 6389 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6352.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6354.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6355.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6357.GestureDetector, {});
  const obj3 = {};
};