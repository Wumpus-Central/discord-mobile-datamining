// === Module 6780: GestureDetector ===

// Module 6780 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6781 from "module_6781" /* 6781 */;
import _mod6783 from "module_6783" /* 6783 */;
import _mod6784 from "module_6784" /* 6784 */;
import _mod6786 from "module_6786" /* 6786 */;
import NativeDetector from "NativeDetector" /* 6818 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6781.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6783.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6784.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6786.GestureDetector, {});
  const obj3 = {};
};