// === Module 6256: GestureDetector ===

// Module 6256 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6257 from "module_6257" /* 6257 */;
import _mod6259 from "module_6259" /* 6259 */;
import _mod6260 from "module_6260" /* 6260 */;
import _mod6262 from "module_6262" /* 6262 */;
import NativeDetector from "NativeDetector" /* 6294 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6257.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6259.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6260.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6262.GestureDetector, {});
  const obj3 = {};
};