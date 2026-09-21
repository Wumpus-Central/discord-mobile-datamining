// === Module 6914: GestureDetector ===

// Module 6914 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6915 from "module_6915" /* 6915 */;
import _mod6917 from "module_6917" /* 6917 */;
import _mod6918 from "module_6918" /* 6918 */;
import _mod6920 from "module_6920" /* 6920 */;
import NativeDetector from "NativeDetector" /* 6952 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6915.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6917.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6918.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6920.GestureDetector, {});
  const obj3 = {};
};