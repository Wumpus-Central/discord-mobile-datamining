// === Module 6085: GestureDetector ===

// Module 6085 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6086 from "module_6086" /* 6086 */;
import _mod6088 from "module_6088" /* 6088 */;
import _mod6089 from "module_6089" /* 6089 */;
import _mod6091 from "module_6091" /* 6091 */;
import NativeDetector from "NativeDetector" /* 6123 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6086.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6088.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6089.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6091.GestureDetector, {});
  const obj3 = {};
};