// === Module 6916: GestureDetector ===

// Module 6916 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6917 from "module_6917" /* 6917 */;
import _mod6919 from "module_6919" /* 6919 */;
import _mod6920 from "module_6920" /* 6920 */;
import _mod6922 from "module_6922" /* 6922 */;
import NativeDetector from "NativeDetector" /* 6954 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6917.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6919.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6920.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6922.GestureDetector, {});
  const obj3 = {};
};