// === Module 6576: GestureDetector ===

// Module 6576 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6577 from "module_6577" /* 6577 */;
import _mod6579 from "module_6579" /* 6579 */;
import _mod6580 from "module_6580" /* 6580 */;
import _mod6582 from "module_6582" /* 6582 */;
import NativeDetector from "NativeDetector" /* 6614 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6577.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6579.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6580.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6582.GestureDetector, {});
  const obj3 = {};
};