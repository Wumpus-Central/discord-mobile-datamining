// === Module 6629: GestureDetector ===

// Module 6629 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6630 from "module_6630" /* 6630 */;
import _mod6632 from "module_6632" /* 6632 */;
import _mod6633 from "module_6633" /* 6633 */;
import _mod6635 from "module_6635" /* 6635 */;
import NativeDetector from "NativeDetector" /* 6667 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6630.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6632.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6633.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6635.GestureDetector, {});
  const obj3 = {};
};