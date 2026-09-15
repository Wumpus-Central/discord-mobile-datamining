// === Module 6777: GestureDetector ===

// Module 6777 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6778 from "module_6778" /* 6778 */;
import _mod6780 from "module_6780" /* 6780 */;
import _mod6781 from "module_6781" /* 6781 */;
import _mod6783 from "module_6783" /* 6783 */;
import NativeDetector from "NativeDetector" /* 6815 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6778.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6780.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6781.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6783.GestureDetector, {});
  const obj3 = {};
};