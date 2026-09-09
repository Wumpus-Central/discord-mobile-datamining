// === Module 6686: GestureDetector ===

// Module 6686 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod6687 from "module_6687" /* 6687 */;
import _mod6689 from "module_6689" /* 6689 */;
import _mod6690 from "module_6690" /* 6690 */;
import _mod6692 from "module_6692" /* 6692 */;
import NativeDetector from "NativeDetector" /* 6724 */;

const jsx = jsxProd.jsx;

export const GestureDetector = function GestureDetector(gesture) {
  let obj = _mod6687;
  obj.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod6689.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod6690.BaseGesture)) {
      obj = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  obj = {};
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod6692.GestureDetector, {});
};