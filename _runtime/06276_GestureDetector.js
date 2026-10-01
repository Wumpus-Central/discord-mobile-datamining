// === Module 6276: GestureDetector ===

// Module 6276 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6277 from "module_6277" /* 6277 */;
import _mod6279 from "module_6279" /* 6279 */;
import _mod6280 from "module_6280" /* 6280 */;
import _mod6282 from "module_6282" /* 6282 */;
import NativeDetector from "NativeDetector" /* 6314 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6277.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6279.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6280.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6282.GestureDetector, {});
  const obj3 = {};
};