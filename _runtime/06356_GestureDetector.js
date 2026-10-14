// === Module 6356: GestureDetector ===

// Module 6356 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6357 from "module_6357" /* 6357 */;
import _mod6359 from "module_6359" /* 6359 */;
import _mod6360 from "module_6360" /* 6360 */;
import _mod6362 from "module_6362" /* 6362 */;
import NativeDetector from "NativeDetector" /* 6394 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6357.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6359.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6360.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6362.GestureDetector, {});
  const obj3 = {};
};