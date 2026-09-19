// === Module 6909: GestureDetector ===

// Module 6909 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6910 from "module_6910" /* 6910 */;
import _mod6912 from "module_6912" /* 6912 */;
import _mod6913 from "module_6913" /* 6913 */;
import _mod6915 from "module_6915" /* 6915 */;
import NativeDetector from "NativeDetector" /* 6947 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6910.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6912.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6913.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6915.GestureDetector, {});
  const obj3 = {};
};