// === Module 6572: GestureDetector ===

// Module 6572 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6573 from "module_6573" /* 6573 */;
import _mod6575 from "module_6575" /* 6575 */;
import _mod6576 from "module_6576" /* 6576 */;
import _mod6578 from "module_6578" /* 6578 */;
import NativeDetector from "NativeDetector" /* 6610 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  _mod6573.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6575.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6576.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6578.GestureDetector, {});
  const obj3 = {};
};