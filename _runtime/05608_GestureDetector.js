// === Module 5608: GestureDetector ===

// Module 5608 (GestureDetector)
import jsxProd from "jsxProd" /* 21 */;
import _mod5609 from "module_5609" /* 5609 */;
import _mod5611 from "module_5611" /* 5611 */;
import _mod5612 from "module_5612" /* 5612 */;
import _mod5615 from "module_5615" /* 5615 */;
import NativeDetector from "NativeDetector" /* 5650 */;

const jsx = jsxProd.jsx;

export function GestureDetector(gesture) {
  _mod5609.useEnsureGestureHandlerRootView();
  if (!(gesture.gesture instanceof _mod5611.ComposedGesture)) {
    if (!(gesture.gesture instanceof _mod5612.BaseGesture)) {
      const obj2 = {};
      const merged = Object.assign(gesture);
      let tmp8 = jsx(NativeDetector.NativeDetector, {});
    }
    return tmp8;
  }
  const merged1 = Object.assign(gesture);
  tmp8 = jsx(_mod5615.GestureDetector, {});
  const obj3 = {};
}