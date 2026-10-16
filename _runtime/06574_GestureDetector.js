// === Module 6574: GestureDetector ===

// Module 6574 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6575 from "module_6575" /* 6575 */;
import _mod6577 from "module_6577" /* 6577 */;
import _mod6578 from "module_6578" /* 6578 */;
import _mod6580 from "module_6580" /* 6580 */;
import NativeDetector from "NativeDetector" /* 6612 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6575.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6577.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6578.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6580.GestureDetector, {});
  const obj3 = {};
};