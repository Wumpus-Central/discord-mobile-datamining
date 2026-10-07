// === Module 6164: GestureDetector ===

// Module 6164 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6165 from "module_6165" /* 6165 */;
import _mod6167 from "module_6167" /* 6167 */;
import _mod6168 from "module_6168" /* 6168 */;
import _mod6170 from "module_6170" /* 6170 */;
import NativeDetector from "NativeDetector" /* 6202 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6165.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6167.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6168.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6170.GestureDetector, {});
  const obj3 = {};
};