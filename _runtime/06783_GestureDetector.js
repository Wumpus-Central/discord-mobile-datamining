// === Module 6783: GestureDetector ===

// Module 6783 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6784 from "module_6784" /* 6784 */;
import _mod6786 from "module_6786" /* 6786 */;
import _mod6787 from "module_6787" /* 6787 */;
import _mod6789 from "module_6789" /* 6789 */;
import NativeDetector from "NativeDetector" /* 6821 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6784.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6786.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6787.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6789.GestureDetector, {});
  const obj3 = {};
};