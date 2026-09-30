// === Module 6286: GestureDetector ===

// Module 6286 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6287 from "module_6287" /* 6287 */;
import _mod6289 from "module_6289" /* 6289 */;
import _mod6290 from "module_6290" /* 6290 */;
import _mod6292 from "module_6292" /* 6292 */;
import NativeDetector from "NativeDetector" /* 6324 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6287.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6289.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6290.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6292.GestureDetector, {});
  const obj3 = {};
};