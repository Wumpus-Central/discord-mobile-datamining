// === Module 6350: GestureDetector ===

// Module 6350 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6351 from "module_6351" /* 6351 */;
import _mod6353 from "module_6353" /* 6353 */;
import _mod6354 from "module_6354" /* 6354 */;
import _mod6356 from "module_6356" /* 6356 */;
import NativeDetector from "NativeDetector" /* 6388 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6351.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6353.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6354.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6356.GestureDetector, {});
  const obj3 = {};
};